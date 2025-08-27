import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const UpdateButton = () => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Button
        variant="outlined"
        size="small"
        sx={{
          borderWidth: 3,
          mt: 0,
          mb: -5,
          pr: 3,
          pl: 3,
          color: "#32A7B4",
          fontSize: 16,
          fontWeight: 600,
          borderColor: "#32A7B4",
        }}
      >
        更新
      </Button>
    </Box>
  );
};

export default UpdateButton;
