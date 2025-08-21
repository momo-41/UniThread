import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

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
  const { authorId, title, content, courseId } = await req.json();

  const article = await prisma.article.create({
    data: {
      authorId,
      title,
      content,
      courseId: courseId ?? null,
    },
  });

  return NextResponse.json(article, { status: 201 });
}
