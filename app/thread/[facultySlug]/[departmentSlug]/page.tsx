import { notFound } from "next/navigation";
import { FacultyDepartmentData } from "@/data/faculty-department-data";
import CourseCardList from "@/app/component/CourseCardList";
import { getCourseData as fetchCourseData } from "@/lib/server/get-course-data";
import CourseSearchButton from "@/app/component/CourseSearchButton";

type TProps = {
  params: Promise<{ facultySlug: string; departmentSlug: string }>;
};

async function getCourseData(facultySlug: string, departmentSlug: string) {
  return fetchCourseData(facultySlug, departmentSlug);
}

export default async function CoursesPage({ params }: TProps) {
  const { facultySlug, departmentSlug } = await params;

  // スラッグ(英語名)から日本語名へ変換している
  const faculty = FacultyDepartmentData.find(
    (f) => f.facultySlug === facultySlug
  );
  if (!faculty) return notFound();

  const department = faculty.departments.find(
    (d) => d.departmentSlug === departmentSlug
  );
  if (!department) return notFound();

  const courses = await getCourseData(facultySlug, departmentSlug);

  return (
    <>
      <CourseSearchButton text={"全学年"} />
      <CourseSearchButton text={"1年生"} />
      <CourseSearchButton text={"2年生"} />
      <CourseSearchButton text={"3年生"} />
      <CourseSearchButton text={"4年生"} />
      <CourseCardList
        departmentName={department.departmentName}
        courses={courses}
        facultySlug={facultySlug}
        departmentSlug={departmentSlug}
      />
    </>
  );
}
