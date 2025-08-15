// app/component/ArticleCard.tsx
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
  href?: string; // ★ 追加：リンクで遷移したいとき
  onClick?: () => void; // hrefが無いとき用のクリックハンドラ
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  authorName,
  title,
  href,
  onClick,
}) => {
  const Action = (
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
  );

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      {href ? (
        // ✅ Linkとして遷移（Nextのクライアント遷移）
        <CardActionArea component={NextLink} href={href}>
          {Action}
        </CardActionArea>
      ) : (
        // ✅ onClickで遷移したい場合はこちら
        <CardActionArea onClick={onClick}>{Action}</CardActionArea>
      )}
    </Card>
  );
};

export default ArticleCard;
