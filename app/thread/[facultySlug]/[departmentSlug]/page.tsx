import { FacultyDepartmentsData } from "@/data/faculty-department-data";
import { Typography } from "@mui/material";
import { notFound } from "next/navigation";

type TProps = {
  params: { facultySlug: string; departmentSlug: string };
};

const departmentPage = ({ params }: TProps) => {
  const { facultySlug, departmentSlug } = params;

  const faculty = FacultyDepartmentsData.find(
    (f) => f.facultySlug === facultySlug
  );
  if (!faculty) return notFound();

  const department = faculty.departments.find(
    (d) => d.departmentSlug === departmentSlug
  );
  if (!department) return notFound();
  // console.log("[departmentSlug]", params.departmentSlug);

  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {faculty.facultyName}/{department.departmentName}の授業
      </Typography>
    </>
  );
};

export default departmentPage;
