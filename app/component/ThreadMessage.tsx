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
        height: 100,
        width: "100%",
        flex: "0 0 auto", // Cardの大きさを可変的にしないために必須
        borderRadius: 0,
      }}
    >
      <Box display={"flex"}>
        <Avatar sx={{ width: 36, height: 36, m: 2 }}>
          <PersonIcon sx={{ fontSize: 20 }} />
        </Avatar>
        <Typography mt={2} fontWeight={650} fontSize={16}>
          {userName}
        </Typography>
      </Box>
      <Typography ml={9} mt={-3} fontWeight={400} fontSize={18}>
        {threadMessage}
      </Typography>
    </Card>
  );
};

export default ThreadMessage;
