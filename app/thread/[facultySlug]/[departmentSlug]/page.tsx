import { FacultyDepartmentsData } from "@/data/faculty-department-data";
import { Typography } from "@mui/material";
import { notFound } from "next/navigation";

type TProps = {
  params: Promise<{ facultySlug: string; departmentSlug: string }>;
};

export default async function DepartmentPage({ params }: TProps) {
  const { facultySlug, departmentSlug } = await params;

  const faculty = FacultyDepartmentsData.find(
    (f) => f.facultySlug === facultySlug
  );
  if (!faculty) return notFound();

  const department = faculty.departments.find(
    (d) => d.departmentSlug === departmentSlug
  );
  if (!department) return notFound();

  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {faculty.facultyName}/{department.departmentName}の授業
      </Typography>
    </>
  );
}
