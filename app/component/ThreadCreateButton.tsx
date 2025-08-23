import { Button } from "@mui/material";

const ThreadCreateButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#32A7B4",
        color: "#FFFFFF",
        borderRadius: 1,
        fontSize: 14,
        "&:hover": {
          backgroundColor: "#32A7B4",
        },
      }}
    >
      + スレッドを作成
    </Button>
  );
};

export default ThreadCreateButton;
