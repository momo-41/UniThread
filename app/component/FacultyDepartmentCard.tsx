import Link from "next/link";
import { Card, Typography } from "@mui/material";
import { FacultyDepartmentCardProps } from "@/types/faculty-department-type";

const FacultyDepartmentCard: React.FC<FacultyDepartmentCardProps> = ({
  name,
  facultySlug,
  departmentSlug,
}) => {
  const href = departmentSlug
    ? `/thread/${facultySlug}/${departmentSlug}`
    : `/thread/${facultySlug}`;
  return (
    <Link key={facultySlug} href={href} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          width: 220,
          height: 180,
          transition: "0.3s",
          "&:hover": {
            background: "#DCF5F7",
          },
        }}
      >
        <Typography
          fontSize={19}
          fontWeight={"bold"}
          color="#383838"
          ml={1.5}
          mt={2}
        >
          {name}
        </Typography>
      </Card>
    </Link>
  );
};

export default FacultyDepartmentCard;
