import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { prisma } from "@/lib/prismaClient";

export const runtime = "nodejs";

const Body = z.object({
  title: z.string(),
  content: z.string(),
  courseId: z.string().uuid().optional().nullable(),
});

export async function GET(_req: Request) {
  const allArticlePosts = await prisma.article.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      author: { select: { displayName: true } },
    },
  });
  return NextResponse.json(allArticlePosts);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, content, courseId } = Body.parse(await req.json());

  const profile = await prisma.profile.findUnique({
    where: { clerkUserId: userId },
  });
  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 400 });
  }

  const article = await prisma.article.create({
    data: {
      title,
      content,
      courseId: courseId ?? null,
      authorId: profile.id,
    },
  });

  return NextResponse.json(article, { status: 201 });
}
