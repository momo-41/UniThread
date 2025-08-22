"use client";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  const { user } = useUser();
  const username =
    user?.username ??
    user?.primaryEmailAddress?.emailAddress?.split("@")[0] ??
    "user";

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
            sx={{ color: "#157689", letterSpacing: 0.5 }}
            ml={1}
          >
            UniThread
          </Typography>
          <Box mr={2}>
            <SignedIn>
              <Box display={"flex"} alignItems={"center"}>
                <Typography fontWeight={600} color="#157689" mr={1.5}>
                  {username}
                </Typography>
                <UserButton />
              </Box>
            </SignedIn>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
