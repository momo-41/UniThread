import { headers } from "next/headers";
import ArticleDetail from "../../component/ArticleDetail";
async function getArticleDetailData(id: string) {
  const response = await fetch(`${process.env.APP_URL!}/api/article/${id}`, {
    cache: "no-store",
    headers: { cookie: (await headers()).get("cookie") ?? "" },
  });
  const ArticleDetailData = await response.json();
  return ArticleDetailData;
}
export default function ArticleDetailPage() {
  return (
    <ArticleDetail
      title="[1年生] 初めての期末テストで絶対に確認しておくこと"
      content={`記事投稿の本文を書く記事投稿の本文を書く記事投稿の本文を書く\n 記事投稿の本文を書く記事投稿の本文を書く記事投稿の本文を書く\n 記事投稿の本文を書く記事投稿の本文を書く記事投稿の本文を書く`}
    />
  );
}
