import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  params: { params: Promise<{ articleId: string }> }
) {
  const { articleId } = await params.params;

  const data = await prisma.article.findUnique({
    where: { id: articleId },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      author: { select: { handle: true, displayName: true } },
    },
  });

  if (!data) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  return NextResponse.json(data);
}
//ディレクトリ名変更のため一旦コメントアウト
