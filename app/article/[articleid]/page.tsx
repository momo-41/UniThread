import ArticleDetail from "@/app/component/ArticleDetail";
import { headers } from "next/headers";

async function getArticleDetailData(id: string) {
  const response = await fetch(`${process.env.APP_URL!}/api/article/${id}`, {
    cache: "no-store",
    headers: { cookie: (await headers()).get("cookie") ?? "" },
  });
  const articleDetailData = await response.json();
  return articleDetailData;
}

type TProps = { params: { articleId: string } };

export default async function ArticleDetailPage(props: TProps) {
  const { articleId } = props.params;
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
