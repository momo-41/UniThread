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

const CourseSearchButtonGroup: React.FC = () => {
  return (
    <div>
      <CourseSearchButton text="全学年" />
      <CourseSearchButton text="1年生" />
      <CourseSearchButton text="2年生" />
      <CourseSearchButton text="3年生" />
      <CourseSearchButton text="4年生" />
    </div>
  );
};
export default CourseSearchButtonGroup;
