"use client";

import * as React from "react";
import NextLink from "next/link";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

export type ArticleCardProps = {
  authorName: string;
  title: string;
  articleId: string | number; // ← これだけでOK
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  authorName,
  title,
  articleId,
}) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardActionArea
        component={NextLink}
        href={`/article/${articleId}`} // ← 常に /article/:id へ
      >
        <CardContent>
          <Stack spacing={0.5}>
            <Typography variant="body2" color="text.secondary">
              {authorName}
            </Typography>
            <Typography variant="subtitle1" fontWeight={700}>
              {title}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
