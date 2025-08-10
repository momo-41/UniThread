"use client";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            fontSize={22}
            fontWeight={"bold"}
            sx={{ color: "#4A7ACE", letterSpacing: 0.5 }}
          >
            UniThread
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
