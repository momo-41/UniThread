"use client";
import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

export type ArticleCardProps = {
  authorName: string;
  title: string;
  articleId: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  authorName,
  title,
  articleId,
}) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardActionArea component={Link} href={`/article/${articleId}`}>
        <Avatar>
          <PersonIcon />
        </Avatar>
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
