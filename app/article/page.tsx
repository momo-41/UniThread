import React from "react";
import PostButton from "../component/PostButton";
import ArticleCardList from "../component/ArticleCardList";

const ArticlePage = () => {
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
