import React from "react";
import FacultyDepartmentCard from "./FacultyDepartmentCard";
import { FacultiesData } from "@/data/faculties";
import { Box, Typography } from "@mui/material";

const FacultyCardList = () => {
  return (
    <>
      <Typography fontWeight={550} fontSize={20} color="#383838" m={3}>
        受けている講義の学部
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        {FacultiesData.map((data) => (
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
