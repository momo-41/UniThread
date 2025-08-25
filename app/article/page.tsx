import React from "react";
import ArticleCardList from "../component/ArticleCardList";
import { headers } from "next/headers";
import PostButton from "../component/PostButton";

async function getAllArticleposts() {
  const response = await fetch(`${process.env.APP_URL!}/api/article`, {
    cache: "no-store",
    headers: { cookie: (await headers()).get("cookie") ?? "" },
  });
  const allArticlePosts = await response.json();
  return allArticlePosts;
}

const ArticlePage = async () => {
  const allArticlePosts = await getAllArticleposts();

  return (
    <div>
      <PostButton text={"投稿する"} href={"/article/post"} />
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
