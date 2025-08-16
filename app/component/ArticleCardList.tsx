import React from "react";
import ArticleCard, { ArticleCardProps } from "./ArticleCard";
import { Stack } from "@mui/material";

const ArticleCardList: React.FC<ArticleCardProps> = (props) => {
  return (
    <Stack display="flex" direction="column">
      <ArticleCard {...props} />
      <ArticleCard {...props} />
      <ArticleCard {...props} />
      <ArticleCard {...props} />
      <ArticleCard {...props} />
      <ArticleCard {...props} />
    </Stack>
  );
};

export default ArticleCardList;
