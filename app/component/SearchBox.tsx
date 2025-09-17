import { Box, TextField as MuiTextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          mt: 2,
          width: { xs: "300px", md: "400px" },
        },
      }}
      autoComplete="off"
      display={"flex"}
      justifyContent={"center"}
    >
      <MuiTextField
        size="small"
        id="outlined-basic"
        placeholder="講義名・投稿内容・タグで検索"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBox;
