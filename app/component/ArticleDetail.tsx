"use client";

import * as React from "react";
import { Container, Paper, Typography, Divider, Button } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export type ArticleDetailProps = {
  title: string;
  content: string;
  authorName: string;
};

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  title,
  content,
  authorName,
}) => {
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Button href="/article">
        <ArrowBackIosNewRoundedIcon fontSize="small" />
        検索に戻る
      </Button>

      <Paper variant="outlined" sx={{ borderRadius: 2, p: { xs: 2, sm: 3 } }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
          {title}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
          {authorName}
        </Typography>

        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ArticleDetail;
