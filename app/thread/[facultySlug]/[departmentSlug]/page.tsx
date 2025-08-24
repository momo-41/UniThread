import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { FacultyDepartmentData } from "@/data/faculty-department-data";
import CourseCardList from "@/app/component/CourseCardList";

type TProps = {
  params: Promise<{ facultySlug: string; departmentSlug: string }>;
};

async function getCourseData(facultySlug: string, departmentSlug: string) {
  const url =
    `${process.env.APP_URL!}/api/courses?` +
    `facultySlug=${encodeURIComponent(facultySlug)}` +
    `&departmentSlug=${encodeURIComponent(departmentSlug)}`;

  const cookieHeader = (await cookies()).toString();

  const response = await fetch(url, {
    cache: "no-store",
    headers: { cookie: cookieHeader },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => ""); //エラーが起きた時に正確にエラーメッセージを取得するために追加
    throw new Error(`Failed to fetch courses: ${response.status} ${text}`); // API側のエラーメッセージをログに残すために追加
  }

  return response.json();
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
    <CourseCardList
      departmentName={department.departmentName}
      courses={courses}
      facultySlug={facultySlug}
      departmentSlug={departmentSlug}
    />
  );
}
