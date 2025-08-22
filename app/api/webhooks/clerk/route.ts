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

  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let parsed: WebhookEvent;
  try {
    parsed = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (parsed.type !== "user.created" && parsed.type !== "user.updated") {
    return new Response("ok", { status: 200 });
  }

  const user = parsed.data as any; // 実体はClerkのUser
  const clerkId = user.id as string | undefined;
  if (!clerkId) return new Response("No user id", { status: 400 });

  const displayName = pickDisplayName(user);
  const avatarUrl = user.image_url ?? null;

  const handle =
    typeof user.username === "string" && user.username.trim()
      ? user.username.trim().toLowerCase()
      : undefined;

  await prisma.profile.upsert({
    where: { clerkUserId: clerkId },
    create: {
      clerkUserId: clerkId,
      displayName,
      avatarUrl,
      ...(handle ? { handle } : {}), // ← 追加
    },
    update: {
      displayName,
      avatarUrl,
      // 「Clerkでusernameを変更したらDBも更新したい」場合は↓を有効化
      ...(handle ? { handle } : {}), // ← 追加（運用方針で外してもOK）
    },
  });

  //   await prisma.profile.upsert({
  //     where: { clerkUserId: clerkId }, // ← ここで string 確定
  //     create: { clerkUserId: clerkId, displayName, avatarUrl },
  //     update: { displayName, avatarUrl },
  //   });

  return new Response("ok", { status: 200 });
}
