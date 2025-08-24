import React from "react";
import FacultyDepartmentCard from "./FacultyDepartmentCard";
import { Box, Typography } from "@mui/material";
import { FacultyDepartmentsData } from "@/data/faculty-department-data";

const FacultyCardList = () => {
  return (
    <>
      <Typography fontWeight={550} fontSize={20} color="#383838" ml={3} mt={3}>
        受けている講義の学部
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        {FacultyDepartmentsData.map((data) => (
          <Box key={data.facultySlug} m={2}>
            <FacultyDepartmentCard
              facultyName={data.facultyName}
              facultySlug={data.facultySlug}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FacultyCardList;
