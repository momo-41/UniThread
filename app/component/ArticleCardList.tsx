import React from "react";
import ArticleCard from "./ArticleCard";
import { Stack } from "@mui/material";

type ArticleItem = {
  id: string;
  title: string;
  author: { handle: string | null; displayName: string };
};

const ArticleCardList = ({ items }: { items: ArticleItem[] }) => (
  <Stack direction="column" spacing={2}>
    {items.map(({ id, title, author }) => (
      <ArticleCard
        key={id}
        authorName={author.handle ?? author.displayName}
        title={title}
        articleId={id}
      />
    ))}
  </Stack>
);

export default ArticleCardList;
