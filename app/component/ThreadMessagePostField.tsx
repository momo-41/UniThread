"use client";
import { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type ThreadMessageProps = {
  threadId: string;
  onPosted?: (item: {
    id: string;
    userName: string;
    threadMessage: string;
  }) => void;
};

export default function ThreadMessagePostField({
  threadId,
  onPosted,
}: ThreadMessageProps) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!value.trim() || loading) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/threads/${threadId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: value.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message ?? "投稿に失敗しました。");

      const m = data.message as {
        id: string;
        body: string;
        author: { handle: string | null; displayName: string };
      };

      const newItem = {
        id: m.id,
        userName: m.author.handle ?? m.author.displayName,
        threadMessage: m.body,
      };

      onPosted?.(newItem);
      setValue("");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    // Ctrl+Enter で送信（Macは metaKey）
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <Box display="flex" gap={1} alignItems="flex-end">
      <TextField
        variant="outlined"
        placeholder="スレッドで投稿する"
        multiline
        minRows={2}
        sx={{ width: "100%" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <IconButton
        aria-label="送信"
        onClick={handleSubmit}
        disabled={loading || !value.trim()}
        sx={{ color: "#1E8093" }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
}
