"use client";
import { useState, type FC } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type ThreadMessagePostProps = {
  threadId: string;
  onPosted?: (item: {
    id: string;
    userName: string;
    threadMessage: string;
  }) => void;
};

const ThreadMessagePostField: FC<ThreadMessagePostProps> = ({
  threadId,
  onPosted,
}) => {
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

      const ct = res.headers.get("content-type") ?? "";
      const data = ct.includes("application/json")
        ? await res.json()
        : { message: await res.text() };

      if (!res.ok) {
        throw new Error((data as any)?.message ?? "投稿に失敗しました。");
      }

      const m = (data as any).message as {
        id: string;
        body: string;
        author: { handle: string | null; displayName: string };
      };

      onPosted?.({
        id: m.id,
        userName: m.author.handle ?? m.author.displayName,
        threadMessage: m.body,
      });
      setValue("");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div>
      <TextField
        size="small"
        placeholder="スレッドで投稿する"
        multiline
        sx={{ width: "100%" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="送信"
                  edge="end"
                  onClick={handleSubmit}
                  disabled={loading || !value.trim() || !threadId}
                  sx={{ pr: 1, color: "#1E8093" }}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </div>
  );
};

export default ThreadMessagePostField;
