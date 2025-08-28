import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

type CourseCardProps = {
  courseName: string;
  facultySlug: string;
  departmentSlug: string;
  courseId: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  courseName,
  facultySlug,
  departmentSlug,
  courseId,
}) => {
  return (
    <Link
      href={`/thread/${facultySlug}/${departmentSlug}/${courseId}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          width: 300,
          height: 90,
          transition: "0.3s",
          "&:hover": { background: "#DCF5F7" },
        }}
      >
        <CardContent>
          <Typography color="#444444" fontSize={18} fontWeight={600}>
            {courseName}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;
