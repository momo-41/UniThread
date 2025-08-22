"use client";
import * as React from "react";
import {
  Container,
  Paper,
  Typography,
  Divider,
  Button,
  Box,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export type ArticleDetailProps = {
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
};

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  title,
  content,
  authorName,
  createdAt,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Button href="/article" sx={{ mb: 2 }}>
        <ArrowBackIosNewRoundedIcon fontSize="small" />
        検索に戻る
      </Button>
      <Paper variant="outlined" sx={{ borderRadius: 2, p: { xs: 2, sm: 3 } }}>
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color="text.secondary">
            {formattedDate}
          </Typography>
        </Box>
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
