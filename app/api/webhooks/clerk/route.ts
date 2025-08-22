export const runtime = "nodejs";

import { Webhook } from "svix";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { PrismaClient } from "@/lib/generated/prisma";
const prisma = new PrismaClient();

function pickDisplayName(data: any) {
  const name = [data.first_name, data.last_name].filter(Boolean).join(" ");
  const email = data.email_addresses?.[0]?.email_address;
  return name || data.username || email || "User";
}

export async function POST(req: Request) {
  const payload = await req.text();

  // Webhookシークレット確認
  const secret = process.env.CLERK_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("Config error: missing CLERK_WEBHOOK_SECRET", {
      status: 500,
    });
  }

  // Svixヘッダ確認
  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");
  if (!svixId || !svixTimestamp || !svixSignature) {
    const missing = [
      !svixId ? "svix-id" : null,
      !svixTimestamp ? "svix-timestamp" : null,
      !svixSignature ? "svix-signature" : null,
    ]
      .filter(Boolean)
      .join(", ");
    return new Response(`Missing svix headers: ${missing}`, { status: 400 });
  }

  // 署名検証
  const wh = new Webhook(secret);
  let parsed: WebhookEvent;
  try {
    parsed = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err: any) {
    return new Response(
      `Invalid signature: ${err?.message ?? "verify failed"}`, //失敗理由をngrokに表示する
      { status: 400 }
    );
  }

  if (parsed.type !== "user.created" && parsed.type !== "user.updated") {
    return new Response(`ignored event: ${parsed.type}`, { status: 200 });
  }

  const user = parsed.data as any;
  const clerkId = user?.id as string | undefined;
  if (!clerkId)
    return new Response("No user id in event.data", { status: 400 });

  const displayName = pickDisplayName(user);
  const avatarUrl = user.image_url ?? null;
  const handle =
    typeof user.username === "string" && user.username.trim()
      ? user.username.trim().toLowerCase()
      : undefined;

  try {
    await prisma.profile.upsert({
      where: { clerkUserId: clerkId },
      create: {
        clerkUserId: clerkId,
        displayName,
        avatarUrl,
        ...(handle ? { handle } : {}),
      },
      update: {
        displayName,
        avatarUrl,
        ...(handle ? { handle } : {}),
      },
    });
  } catch (err: any) {
    return new Response(
      `DB error (profile.upsert): ${err?.code ?? ""} ${
        err?.message ?? "unknown"
      }`,
      { status: 500 }
    );
  }

  return new Response("ok", { status: 200 });
}
