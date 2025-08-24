import Link from "next/link";
import { Card, Typography } from "@mui/material";
import { FacultyDepartmentCardProps } from "@/types/faculty-department-types";

const FacultyDepartmentCard: React.FC<FacultyDepartmentCardProps> = ({
  facultyName,
  facultySlug,
  departmentSlug,
}) => {
  const href = departmentSlug
    ? `/thread/${facultySlug}/${departmentSlug}`
    : `/thread/${facultySlug}`;

  return (
    <Link key={href} href={href} style={{ textDecoration: "none" }}>
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
          ml={2}
          mt={2}
        >
          {facultyName}
        </Typography>
      </Card>
    </Link>
  );
};

export default FacultyDepartmentCard;
