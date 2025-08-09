// [[...]] のファイル名はlocalhost:3000/sign-in/ 以降の「全ての」パスをキャッチできるNext.jsの仕様

import { SignIn } from "@clerk/nextjs";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box
      height={"100vh"} // alignItemsのcenterを効かせるため
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SignIn fallbackRedirectUrl={"/"} />
    </Box>
  );
}
