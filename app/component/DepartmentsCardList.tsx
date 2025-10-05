import { FacultyDepartmentData } from "@/data/faculty-department-data";
import { DepartmentsCardListProps } from "@/types/faculty-department-type";
import { Typography, Grid } from "@mui/material";
import FacultyDepartmentCard from "./FacultyDepartmentCard";

const DepartmentsCardList: React.FC<DepartmentsCardListProps> = ({
  facultySlug,
}) => {
  const faculty = FacultyDepartmentData.find(
    (f) => f.facultySlug === facultySlug
  );
  if (!faculty) return null;

  return (
    <>
      <Typography
        fontWeight={550}
        fontSize={{ xs: 18, md: 20 }}
        color="#383838"
        ml={{ xs: 2, md: 3 }}
        mt={3}
      >
        {faculty.facultyName} の学科一覧
      </Typography>
      <Grid container spacing={2} m={2}>
        {faculty.departments.map((dept) => (
          <Grid
            size={{ md: 2.4, xs: 20 }}
            key={dept.departmentSlug}
            display={"flex"}
            justifyContent={"center"}
          >
            <FacultyDepartmentCard
              name={dept.departmentName}
              facultySlug={faculty.facultySlug}
              departmentSlug={dept.departmentSlug}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default DepartmentsCardList;
