import { Avatar, Box, Card, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

type ThreadMessageProps = {
  userName: string;
  threadMessage: string;
};

const ThreadMessage: React.FC<ThreadMessageProps> = ({
  userName,
  threadMessage,
}) => {
  return (
    <Card
      sx={{
        height: "auto",
        width: "100%",
        flex: "0 0 auto", // Cardの大きさを可変的にしないために必須
        padding: 2,
        borderRadius: 0,
      }}
    >
      <Box display={"flex"} >
        <Avatar sx={{ width: 24, height: 24 }}>
          <PersonIcon sx={{ fontSize: 20 }} />
        </Avatar>
        <Typography fontSize={13} ml={1} fontWeight={"bold"}>
          {userName}
        </Typography>
      </Box>
      <Typography fontSize={14}>{threadMessage}</Typography>
      <Box display={"flex"} alignItems={"center"}>
        <Avatar sx={{ width: 24, height: 24}}>
          <PersonIcon sx={{ fontSize: 20 }} />
        </Avatar>
        <Typography fontWeight={"bold"} fontSize={13} ml={1}>
          {userName}
        </Typography>
      </Box>
      <Typography fontSize={14}>
        {threadMessage}
      </Typography>
    </Card>
  );
};

export default ThreadMessage;
