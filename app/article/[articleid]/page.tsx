import { headers } from "next/headers";
import ArticleDetail from "../../component/ArticleDetail";

async function getArticleDetailData(id: string) {
  const response = await fetch(`${process.env.APP_URL!}/api/article/${id}`, {
    cache: "no-store",
    headers: { cookie: (await headers()).get("cookie") ?? "" },
  });
  const articleDetailData = await response.json();
  return articleDetailData;
}

type Props = { params: { articleid: string } };

export default async function ArticleDetailPage(props: Props) {
  const { articleid } = props.params;
  const articleDetail = await getArticleDetailData(articleid);

  return (
    <ArticleDetail
      title={articleDetail.title}
      content={articleDetail.content}
    />
  );
}
