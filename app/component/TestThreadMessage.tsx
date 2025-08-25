import { Avatar, Box, Card, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

const TestThreadMessage = () => {
  return (
    <Card
      sx={{
        height: 120,
        flex: "0 0 auto",
        width: "100%",
        borderRadius: 0,
      }}
    >
      <Box display={"flex"}>
        <Avatar sx={{ width: 24, height: 24 }}>
          <PersonIcon sx={{ fontSize: 20 }} />
        </Avatar>
        <Typography>momo</Typography>
      </Box>
      <Typography>
        スレッドのメッセージスレッドのメッセージスレッドのメッセージ
      </Typography>
    </Card>
  );
};

export default TestThreadMessage;
