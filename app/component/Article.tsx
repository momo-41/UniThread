// app/component/Article.tsx
"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";

export type ArticleProps = { date?: string; title: string; text: string };

const Article: React.FC<ArticleProps> = ({ date, title, text }) => (
  <Box sx={{ p: 2 }}>
    {date && (
      <Typography variant="caption" color="text.secondary">
        {date}
      </Typography>
    )}
    <Typography variant="h5" fontWeight={700} sx={{ mt: 0.5, mb: 1 }}>
      {title}
    </Typography>
    <Typography sx={{ whiteSpace: "pre-line" }}>{text}</Typography>
  </Box>
);

export default Article;
