import ArticlePostForm from "@/app/component/ArticlPostForm";
import { Button } from "@mui/material";
import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const PostPage = () => {
  return (
    <div>
      <Button href="/article">
        <ArrowBackIosNewRoundedIcon fontSize="small" />
        検索に戻る
      </Button>
      <ArticlePostForm />
    </div>
  );
};

export default PostPage;
