"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ThreadMessagePostField from "./ThreadMessagePostField";
import ThreadMessageList from "./ThreadMessageList";

type ThreadMessageItem = {
  id: string;
  userName: string;
  threadMessage: string;
};

type Props = {
  threadId: string;
  title?: string;
  initialItems?: ThreadMessageItem[];
};

const ThreadMessageView = ({
  threadId,
  title = "スレッドのタイトル！",
  initialItems = [],
}: Props) => {
  const [items, setItems] = useState<ThreadMessageItem[]>(initialItems);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // 初回 & items 変化時に最下部へ
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, [items]);

  return (
    <Box
      height="80vh"
      width="60vw"
      display="flex"
      flexDirection="column"
      border={1}
      borderRadius={1}
      borderColor="#CCCCCC"
    >
      <Typography
        p={2}
        fontSize={22}
        fontWeight={600}
        color="#3C3C3C"
        borderBottom={1}
        borderColor="#CCCCCC"
      >
        {title}
      </Typography>

      <Box
        ref={scrollerRef}
        flex={1}
        display="flex"
        flexDirection="column"
        gap={1}
        px={2}
        py={1}
        sx={{ overflowY: "auto", overflowX: "hidden" }}
      >
        <ThreadMessageList items={items} />
      </Box>

      <Box p={2} borderTop={1} borderColor="#CCCCCC">
        <ThreadMessagePostField
          threadId={threadId}
          onPosted={(newItem) => setItems((prev) => [...prev, newItem])}
        />
      </Box>
    </Box>
  );
};

export default ThreadMessageView;
