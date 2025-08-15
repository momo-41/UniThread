// components/PostButton.tsx
"use client";

import * as React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function PostButton() {
  const router = useRouter();

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: 2,
        textTransform: "none",
        mb: 2,
      }}
      onClick={() => router.push("/post")}
    >
      投稿する
    </Button>
  );
}
