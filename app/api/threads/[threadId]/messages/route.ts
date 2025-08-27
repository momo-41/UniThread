import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prismaClient";

export const runtime = "nodejs";

const PathParams = z.object({
  threadId: z.string().uuid("threadId はUUID形式で指定してください。"),
});

const PostBody = z.object({
  body: z
    .string()
    .min(1, "本文は必須です。")
    .max(2000, "本文は2000文字以内で入力してください。"),
});

export async function GET(
  _req: Request,
  //reqを使ってないことを_で明示している
  { params }: { params: { threadId: string } }
) {
  try {
    const { threadId } = PathParams.parse(params);
    const messages = await prisma.threadMessage.findMany({
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

    return NextResponse.json({ messages });
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

export async function POST(
  req: Request,
  { params }: { params: { threadId: string } }
) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { threadId } = PathParams.parse(params);
    const { body } = PostBody.parse(await req.json());

    const me = await prisma.profile.findUnique({
      where: { clerkUserId },
      select: { id: true },
    });
    if (!me) {
      return NextResponse.json(
        { message: "プロフィールが見つかりません。" },
        { status: 404 }
      );
    }

    try {
      const updated = await prisma.thread.update({
        where: { id: threadId },
        data: {
          messages: { create: { authorId: me.id, body } },
        },
        select: {
          id: true,
          updatedAt: true,
          messages: {
            orderBy: [{ createdAt: "desc" }, { id: "desc" }],
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
    } catch (e: unknown) {
      if (
        typeof e === "object" &&
        e !== null &&
        "code" in e &&
        (e as any).code === "P2025"
      ) {
        return NextResponse.json(
          { message: "スレッドが見つかりません。" },
          { status: 404 }
        );
      }
      throw e;
    }
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
