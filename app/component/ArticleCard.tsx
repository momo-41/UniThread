// components/SimpleArticleCard.tsx
"use client";

import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";

type SimpleArticleCardProps = {
  authorName: string;
  title: string;
  onClick?: () => void;
};

export default function SimpleArticleCard({
  authorName,
  title,
  onClick,
}: SimpleArticleCardProps) {
  const initials = authorName.slice(0, 2);

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Stack direction="row" spacing={1.5} alignItems="center" mb={1}>
            <Avatar>{initials}</Avatar>
            <Typography variant="body2" color="text.secondary">
              {authorName}
            </Typography>
          </Stack>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
