import React from "react";
import FacultyCardList from "./FacultyCardList";
import { DepartmentsCardListProps } from "@/types/faculty-department-types";
import FacultyDepartmentCard from "./FacultyDepartmentCard";
import { FacultyDepartmentsData } from "@/data/faculty-department-data";
import { Grid, Typography } from "@mui/material";

const DepartmentsCardList: React.FC<DepartmentsCardListProps> = ({
  facultySlug,
}) => {
  const faculty = FacultyDepartmentsData.find(
    (f) => f.facultySlug === facultySlug
  );
  if (!faculty) {
    // facultyがない場合を考慮する。そうしないとfacultyにエラーが出る。
    return <div>学部が見つかりません: {facultySlug}</div>;
  }

  return (
    <>
      <FacultyCardList /> {/* 学部のカードリストを表示 */}
      <Typography
        fontWeight={550}
        fontSize={20}
        color="#383838"
        ml={3}
        mt={3}
        mb={3}
      >
        受けている講義の学科・専攻
      </Typography>
      <Grid container spacing={2} mx={13.5}>
        {faculty.departments.map((data) => (
          <Grid
            key={data.departmentSlug}
            size={2.4}
            display={"flex"}
            justifyContent={"center"}
            mb={2}
          >
            <FacultyDepartmentCard
              facultySlug={faculty.facultySlug}
              departmentSlug={data.departmentSlug}
              facultyName={data.departmentName} // カード表示名に学科名を使う
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DepartmentsCardList;
