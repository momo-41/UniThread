import { IconButton, InputAdornment, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ThreadMessagePostField = () => {
  return (
    <div>
      <TextField
        size="small"
        placeholder="スレッドで投稿する"
        multiline
        sx={{ width: "100%" }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="送信"
                  edge="end"
                  sx={{ pr: 1, color: "#1E8093" }}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </div>
  );
};

export default ThreadMessagePostField;
