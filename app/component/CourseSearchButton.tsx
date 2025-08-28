import { Button } from "@mui/material";
type CourseSearchButtonProps = {
  text: string;
};

const CourseSearchButton: React.FC<CourseSearchButtonProps> = ({ text }) => {
  return (
    <Button variant="outlined" sx={{ color: "#32A7B4" }}>
      {text}
    </Button>
  );
};

export default CourseSearchButton;
