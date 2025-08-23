import { Button } from "@mui/material";

const ThreadCreateButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        color: "#FFFFFF",
        backgroundColor: "#32A7B4",
        fontSize: 14,
        borderRadius: 1,
      }}
    >
      + スレッドを作成
    </Button>
  );
};

export default ThreadCreateButton;
