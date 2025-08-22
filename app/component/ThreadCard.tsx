import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

export default function BasicCard() {
  return (
    <Card
      sx={{
        width: 300,
        height: 100,
        borderRadius: 3,
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: 8,
          height: "100%",
          backgroundColor: "#D1E6E8",
          borderRadius: "8px 0 0 8px",
        }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          中間の範囲について
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 24, height: 24 }}>
              <PersonIcon sx={{ fontSize: 18 }} />
            </Avatar>
            <Typography variant="body2" sx={{ ml: 1, color: "text.secondary" }}>
              momo
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            2025/8/11
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
