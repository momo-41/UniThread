import React from "react";
import PostButton from "../component/PostButton";
import ArticleCardList from "../component/ArticleCardList";
import { headers } from "next/headers";

const ArticlePage = async () => {
  async function getAllArticleposts() {
    const response = await fetch(`${process.env.APP_URL!}/api/article`, {
      cache: "no-store",
      headers: { cookie: (await headers()).get("cookie") ?? "" },
    });
    const allArticlePosts = await response.json();
    return allArticlePosts;
  }

  const allArticlePosts = await getAllArticleposts();

  return (
    <div>
      <PostButton />
      {allArticlePosts.length === 0 ? (
        <div style={{ padding: 8, color: "#666" }}>
          記事が投稿されていません
        </div>
      ) : (
        allArticlePosts.map(({ id, title, author }: any) => (
          <ArticleCardList
            key={id}
            authorName={author.displayName}
            title={title}
            articleId={id}
          />
        ))
      )}
    </div>
  );
};

export default ArticlePage;
