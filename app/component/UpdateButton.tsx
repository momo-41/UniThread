import React from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const UpdateButton = () => {
  return (
    <Box display="flex" justifyContent="flex-end" mr={1}>
      <Button
        variant="outlined"
        size="small"
        sx={{
          px: 3,
          color: "#32A7B4",
          border: "3px solid #32A7B4",
        }}
      >
        <Typography fontSize={16} fontWeight={600}>
          更新
        </Typography>
      </Button>
    </Box>
  );
};

export default UpdateButton;
