import Link from "next/link";
import { Card, Typography } from "@mui/material";
import { FacultyDepartmentCardProps } from "@/types/faculties-type";

const FacultyDepartmentCard: React.FC<FacultyDepartmentCardProps> = ({
  facultyName,
  facultySlug,
}) => {
  return (
    <>
      <Link
        key={facultySlug}
        href={`/thread/${facultySlug}`}
        style={{ textDecoration: "none" }}
      >
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
    </>
  );
};

export default FacultyDepartmentCard;
