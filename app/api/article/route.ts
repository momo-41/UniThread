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
