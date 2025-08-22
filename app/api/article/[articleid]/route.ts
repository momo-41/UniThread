import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { articleid: string } }
) {
  const ArticleDetailData = await prisma.article.findUnique({
    where: { id: params.articleid },
    select: {
      id: true,
      title: true,
      content: true,
      author: { select: { handle: true, displayName: true } },
    },
  });

  if (!ArticleDetailData) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  return NextResponse.json(ArticleDetailData);
}
