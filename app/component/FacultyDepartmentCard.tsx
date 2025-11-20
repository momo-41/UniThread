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
          width: {md:220,xs:180},
          height: {md:180,xs:75},
          transition: "0.3s",
          "&:hover": {
            background: "#DCF5F7",
          },
        }}
      >
        <Typography
          fontSize={{ md: 19, xs: 16 }}
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
