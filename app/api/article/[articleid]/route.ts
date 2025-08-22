import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ articleid: string }> }
) {
  const { articleid } = await ctx.params;

  const data = await prisma.article.findUnique({
    where: { id: articleid },
    select: {
      id: true,
      title: true,
      content: true,
      author: { select: { handle: true, displayName: true } },
    },
  });

  if (!data) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  return NextResponse.json(data);
}
