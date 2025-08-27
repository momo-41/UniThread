import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prismaClient";

export const runtime = "nodejs";

const Body = z.object({
  body: z
    .string()
    .min(1, "本文は必須です。")
    .max(2000, "本文は2000文字以内で入力してください。"),
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ threadId: string }> }
) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const { threadId } = await params;
    if (!threadId || !/^[0-9a-fA-F-]{36}$/.test(threadId)) {
      return NextResponse.json(
        { message: "threadId はUUID形式で指定してください。" },
        { status: 400 }
      );
    }

    const json = await req.json();
    const { body } = Body.parse(json);

    const me = await prisma.profile.findUnique({
      where: { clerkUserId },
      select: { id: true },
    });
    if (!me)
      return NextResponse.json(
        { message: "プロフィールが見つかりません。" },
        { status: 404 }
      );

    const thread = await prisma.thread.findUnique({
      where: { id: threadId },
      select: { id: true },
    });
    if (!thread)
      return NextResponse.json(
        { message: "スレッドが見つかりません。" },
        { status: 404 }
      );

    const updated = await prisma.thread.update({
      where: { id: threadId },
      data: {
        updatedAt: new Date(),
        messages: { create: { authorId: me.id, body } },
      },
      select: {
        id: true,
        updatedAt: true,
        messages: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: {
            id: true,
            body: true,
            createdAt: true,
            editedAt: true,
            author: { select: { handle: true, displayName: true } },
          },
        },
      },
    });

    const created = updated.messages[0];
    return NextResponse.json(
      {
        threadId: updated.id,
        threadUpdatedAt: updated.updatedAt,
        message: created,
      },
      { status: 201 }
    );
  } catch (e) {
    if (e instanceof ZodError) {
      return NextResponse.json(
        { message: "入力が不正です。", issues: e.issues },
        { status: 400 }
      );
    }
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ threadId: string }> }
) {
  try {
    const { threadId } = await params;
    if (!threadId || !/^[0-9a-fA-F-]{36}$/.test(threadId)) {
      return NextResponse.json(
        { message: "threadId はUUID形式で指定してください。" },
        { status: 400 }
      );
    }

    const records = await prisma.threadMessage.findMany({
      where: { threadId },
      orderBy: [{ createdAt: "asc" }, { id: "asc" }],
      select: {
        id: true,
        body: true,
        createdAt: true,
        editedAt: true,
        author: { select: { handle: true, displayName: true } },
      },
    });

    return NextResponse.json({
      messages: records.map((m) => ({
        id: m.id,
        content: m.body,
        createdAt: m.createdAt,
        editedAt: m.editedAt,
        author: m.author,
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
