"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Container, Paper, Typography, Divider, Button } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export type ArticleProps = {
  title: string;
  body: string;
};

const Article: React.FC<ArticleProps> = ({ title, body }) => {
  const router = useRouter();

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Button
        variant="text"
        startIcon={<ArrowBackIosNewRoundedIcon fontSize="small" />}
        sx={{ mb: 1, textTransform: "none" }}
        onClick={() => router.push("/article")}
      >
        検索に戻る
      </Button>

      <Paper variant="outlined" sx={{ borderRadius: 2, p: { xs: 2, sm: 3 } }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {body}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Article;
