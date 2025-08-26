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
        height: 120,
        width: "100%",
        flex: "0 0 auto", // Cardの大きさを可変的にしないために必須
        borderRadius: 0,
      }}
    >
      <Box display={"flex"}>
        <Avatar sx={{ width: 24, height: 24 }}>
          <PersonIcon sx={{ fontSize: 20 }} />
        </Avatar>
        <Typography>{userName}</Typography>
      </Box>
      <Typography>{threadMessage}</Typography>
    </Card>
  );
};

export default ThreadMessage;
