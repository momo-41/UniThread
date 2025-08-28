"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState, type FC } from "react";
import ThreadMessagePostField from "./ThreadMessagePostField";
import ThreadMessageList from "./ThreadMessageList";
import UpdateButton from "./UpdateButton";

type ThreadMessageItem = {
  id: string;
  userName: string;
  threadMessage: string;
};

type RawMessage = {
  id: string;
  content: string;
  author: { handle: string | null; displayName: string };
};

type ThreadMessageViewProps = {
  threadId: string;
  title?: string;
  initialItems?: ThreadMessageItem[];
};

const ThreadMessageView: FC<ThreadMessageViewProps> = ({
  threadId,
  title = "スレッドのタイトル！",
  initialItems = [],
}) => {
  const [items, setItems] = useState<ThreadMessageItem[]>(initialItems);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // 初期ロード（SSRから渡されていない時だけGET）
  useEffect(() => {
    if (initialItems.length > 0) return;
    let aborted = false;
    (async () => {
      const res = await fetch(`/api/threads/${threadId}/messages`, {
        cache: "no-store",
      });
      if (!res.ok) return;
      const data = (await res.json()) as { messages: RawMessage[] };
      if (!aborted) {
        setItems(
          (data.messages ?? []).map((m) => ({
            id: m.id,
            userName: m.author.handle ?? m.author.displayName,
            threadMessage: m.content,
          }))
        );
      }
    })();
    return () => {
      aborted = true;
    };
  }, [threadId, initialItems]);

  // マウント時 & 追加時に最下部へ
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, [items]);

  return (
    <Box
      height={"80vh"}
      width={"60vw"}
      display={"flex"}
      flexDirection={"column"}
      border={1}
      borderRadius={1}
      borderColor={"#CCCCCC"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={1}
        borderColor={"#CCCCCC"}
        p={1.5}
      >
        <Typography fontSize={22} fontWeight={600} color="#3C3C3C">
          {title}
        </Typography>
        <UpdateButton />
      </Box>
      <Box
        ref={scrollerRef}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        sx={{ overflowY: "auto", overflowX: "hidden" }}
      >
        <ThreadMessageList items={items} />
      </Box>

      <Box p={2} borderTop={1} borderColor={"#CCCCCC"}>
        <ThreadMessagePostField
          threadId={threadId}
          onPosted={(newItem) => setItems((prev) => [...prev, newItem])}
        />
      </Box>
    </Box>
  );
};

export default ThreadMessageView;
