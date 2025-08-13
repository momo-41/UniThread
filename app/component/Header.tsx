"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          bgcolor: "#FFFFFF",
          borderBottom: 1,
          borderColor: "#CDCECE",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            fontSize={{ xs: 20, sm: 22 }}
            fontFamily={"sans-serif"}
            fontWeight={600}
            sx={{ color: "#1B976C", letterSpacing: 0.5 }}
            ml={1}
          >
            UniThread
          </Typography>
          <Box mr={2}>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
