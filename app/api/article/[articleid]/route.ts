import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { bbsid: string } }
) {
  const ArticleDetailData = await prisma.article.findUnique({
    where: { id: params.bbsid },
    select: {
      id: true,
      title: true,
      author: { select: { handle: true, displayName: true } },
    },
  });
  return NextResponse.json(ArticleDetailData);
}
