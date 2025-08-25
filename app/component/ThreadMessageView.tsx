import { Box, Typography } from "@mui/material";
import React from "react";
import TestThreadMessage from "./TestThreadMessage";

const ThreadMessageView = () => {
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
      <Typography
        p={2}
        fontSize={22}
        fontWeight={600}
        color="#3C3C3C"
        borderBottom={1}
        borderColor={"#CCCCCC"}
      >
        スレッドのタイトル！
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        sx={{ overflowY: "auto", overflowX: "hidden" }}
      >
        <TestThreadMessage />
        <TestThreadMessage />
        <TestThreadMessage />
        <TestThreadMessage />
        <TestThreadMessage />
        <TestThreadMessage />
        <TestThreadMessage />
        <TestThreadMessage />
        <TestThreadMessage />
        <TestThreadMessage />
      </Box>
    </Box>
  );
};

export default ThreadMessageView;
