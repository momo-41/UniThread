import ThreadMessageView from "@/app/component/ThreadMessageView";
import { Box } from "@mui/material";
import React from "react";

const CoursePage = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box>講義名講義名のスレッド</Box>
      <Box my={2} mr={8}>
        <ThreadMessageView />
      </Box>
    </Box>
  );
};

export default CoursePage;
