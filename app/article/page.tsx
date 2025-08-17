import React from "react";
import PostButton from "../component/PostButton";
import ArticleCardList from "../component/ArticleCardList";

const ArticlePage = async () => {
  const response = await fetch("http://localhost:3000/api/article", {
    cache: "no-store",
  });
  const AllArticlePosts = await response.json();
  console.log(AllArticlePosts);
  return (
    <div>
      <PostButton />
      <ArticleCardList
        authorName="みんみん"
        title="[1年生] 初めての期末テストで絶対に確認しておくこと"
        articleId={"1"}
      />
    </div>
  );
};

export default ArticlePage;
