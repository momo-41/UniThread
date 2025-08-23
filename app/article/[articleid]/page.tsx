import ArticleDetail from "@/app/component/ArticleDetail";
import { cookies } from "next/headers";

async function getArticleDetailData(id: string) {
  const cookieHeader = cookies().toString();
  const response = await fetch(`${process.env.APP_URL!}/api/article/${id}`, {
    cache: "no-store",
    headers: { cookie: cookieHeader },
  });
  const articleDetailData = await response.json();
  return articleDetailData;
}

type TProps = { params: { articleId: string } };

export default async function ArticleDetailPage({ params }: TProps) {
  const { articleId } = params;
  const articleDetail = await getArticleDetailData(articleId);

  return (
    <ArticleDetail
      title={articleDetail.title}
      content={articleDetail.content}
      authorName={
        articleDetail.author.handle ?? articleDetail.author.displayName
      }
      createdAt={articleDetail.createdAt}
    />
  );
}
