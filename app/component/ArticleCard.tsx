// app/component/ArticleCard.tsx
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

type Props = {
  authorName: string;
  title: string;
  onClick?: () => void;
};

const ArticleCard: React.FC<Props> = ({ authorName, title, onClick }) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Stack direction="row" spacing={1.5} alignItems="center" mb={1}>
            <Avatar />
            <Typography variant="body2" color="text.secondary">
              {authorName}
            </Typography>
          </Stack>
          <Typography variant="subtitle1" fontWeight={700}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
