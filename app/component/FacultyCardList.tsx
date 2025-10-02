import React from "react";
import FacultyDepartmentCard from "./FacultyDepartmentCard";
import { Grid, Typography } from "@mui/material";
import { FacultyDepartmentData } from "@/data/faculty-department-data";

const FacultyCardList = () => {
  return (
    <>
      <Typography
        fontWeight={550}
        fontSize={{ xs: 18, md: 20 }}
        color="#383838"
        ml={{ xs: 2, md: 3 }}
        mt={1}
      >
        受けている講義の学部
      </Typography>
      <Grid container spacing={2} m={2}>
        {FacultyDepartmentData.map((data) => (
          <Grid
            size={2.4}
            display={"flex"}
            justifyContent={"center"}
            key={data.facultySlug}
          >
            <FacultyDepartmentCard
              name={data.facultyName}
              facultySlug={data.facultySlug}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FacultyCardList;
