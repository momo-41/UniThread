import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

<Box
  component="span"
  sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
></Box>;

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
        <Typography
          gutterBottom
          sx={{ color: "#383838", fontSize: 18, fontWeight: "500" }}
        >
          講義名講義名
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
