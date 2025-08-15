// components/PostButton.tsx
"use client";

import * as React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function PostButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/post");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        mt: 2,
        mr: 2,
        borderRadius: 2,
        textTransform: "none",
      }}
      onClick={handleClick}
    >
      投稿する
    </Button>
  );
}
