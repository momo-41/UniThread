import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { articleId: string } }
) {
  const { articleId } = params;

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
