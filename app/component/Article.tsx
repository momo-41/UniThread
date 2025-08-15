// app/components/Article.tsx
"use client";

import * as React from "react";
import NextLink from "next/link";
import {
  Container,
  Paper,
  Typography,
  Divider,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export type ArticleProps = {
  title: string;
  body: string; // 本文（\n で改行OK）
  backHref?: string; // 例: "/articles"
  backLabel?: string; // 例: "検索に戻る"
};

const Article: React.FC<ArticleProps> = ({
  title,
  body,
  backHref = "/articles",
  backLabel = "検索に戻る",
}) => {
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      {/* 戻るリンク（左上にシンプル表示） */}
      {backHref && (
        <MuiLink
          component={NextLink}
          href={backHref}
          underline="hover"
          color="inherit"
          sx={{
            fontSize: 14,
            display: "inline-flex",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Stack direction="row" spacing={0.5} alignItems="center">
            <ArrowBackIosNewRoundedIcon fontSize="small" />
            <span>{backLabel}</span>
          </Stack>
        </MuiLink>
      )}

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
