import ArticleCardList from "../component/ArticleCardList";
import { headers } from "next/headers";

async function getAllArticleposts(cookieHeader: string) {
  const response = await fetch(`${process.env.APP_URL!}/api/article`, {
    cache: "no-store",
    headers: { cookie: cookieHeader },
  });
  const allArticlePosts = await response.json();
  return allArticlePosts;
}

const ArticlePage = async () => {
  const h = await headers();
  const cookieHeader = h.get("cookie") ?? "";
  const allArticlePosts = await getAllArticleposts(cookieHeader);

  return (
    <div>
      {allArticlePosts.length === 0 ? (
        <div style={{ padding: 8, color: "#666" }}>
          記事が投稿されていません
        </div>
      ) : (
        <ArticleCardList items={allArticlePosts} />
      )}
    </div>
  );
};

export default ArticlePage;
