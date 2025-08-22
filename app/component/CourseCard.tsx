import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CourseCard = () => {
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

export default CourseCard;
