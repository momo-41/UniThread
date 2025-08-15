// app/component/ArticleCard.tsx
"use client";

import * as React from "react";
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
  onClick?: () => void;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  authorName,
  title,
  onClick,
}) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardActionArea onClick={onClick}>
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
