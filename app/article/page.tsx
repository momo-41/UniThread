import React from "react";
import ArticleCard from "../component/ArticleCard";
import PostButton from "../component/PostButton";

const ArticlePage = () => {
  return (
    <div>
      <PostButton />
      <ArticleCard
        title={"【1年生】初めての期末テストで絶対に確認しておくこと"}
        authorName={"みんみん"}
      />
    </div>
  );
};

export default ArticlePage;
