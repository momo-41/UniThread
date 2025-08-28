"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import ThreadMessagePostField from "./ThreadMessagePostField";
import ThreadMessageList from "./ThreadMessageList";
import UpdateButton from "./UpdateButton";

export type ThreadMessageItem = {
  id: string;
  userName: string;
  threadMessage: string;
};

const ThreadMessageView = ({ items }: { items: ThreadMessageItem[] }) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // 初回のマウント時に一番下へスクロール
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, []);

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
          スレッドのタイトル！
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
        <ThreadMessagePostField />
      </Box>
    </Box>
  );
};

export default ThreadMessageView;
