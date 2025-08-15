import React from "react";
import ArticleCard from "../component/ArticleCard";
import PostButton from "../component/PostButton";

const ArticlePage = () => {
  return (
    <div>
      <PostButton />
      <ArticleCard
        authorName="みんみん"
        title="[1年生] 初めての期末テストで絶対に確認しておくこと"
        articleId={"1"}
      />
    </div>
  );
};

export default ArticlePage;
