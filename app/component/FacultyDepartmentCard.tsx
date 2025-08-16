import Link from "next/link";
import { Card, Typography } from "@mui/material";

const FacultyDepartmentCard = () => {
  return (
    <Link href={"/thread/literature"} style={{ textDecoration: "none" }}>
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
          文学部
        </Typography>
      </Card>
    </Link>
  );
};

export default FacultyDepartmentCard;
