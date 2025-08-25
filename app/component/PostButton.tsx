import { Button } from "@mui/material";

type PostButtonProps = {
  text: string;
  href: string;
};

const PostButton: React.FC<PostButtonProps> = ({ text, href }) => {
  return (
    <Button
      variant="contained"
      href={href}
      sx={{
        color: "#FFFFFF",
        backgroundColor: "#32A7B4",
        fontSize: 14,
        borderRadius: 1,
      }}
    >
      {text}
    </Button>
  );
};

export default PostButton;
