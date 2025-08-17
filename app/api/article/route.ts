import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const AllArticlePosts = await prisma.article.findMany();
  // データが増えてきたら10件だけまず取得して、次へを押すともう10件取得のようにする方がいいらしい。findmany()は仮に全件取得している。
  return NextResponse.json(AllArticlePosts);
}
