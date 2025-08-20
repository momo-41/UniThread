import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const threadPage = () => {
  return (
    <Card
      sx={{
        width: 300,
        height: 90,
        transition: "0.3s",
        "&:hover": {
          background: "#DCF5F7",
        },
      }}
    >
      <CardContent>
        <Typography color={"#383838"} fontSize={18} fontWeight={500}>
          講義名講義名
        </Typography>
      </CardContent>
    </Card>
  );
};

export default threadPage;
