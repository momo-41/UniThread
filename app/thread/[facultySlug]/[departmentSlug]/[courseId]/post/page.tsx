import { notFound } from "next/navigation";
import { prisma } from "@/lib/prismaClient";
import ThreadPostForm from "@/app/component/ThreadPostForm";

export default async function Page({
  params,
}: {
  params: Promise<{
    facultySlug: string;
    departmentSlug: string;
    courseId: string;
  }>;
}) {
  const { facultySlug, departmentSlug, courseId } = await params;
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: { id: true, courseName: true },
  });
  if (!course) notFound();
  return (
    <ThreadPostForm
      facultySlug={facultySlug}
      departmentSlug={departmentSlug}
      courseId={course.id}
      course={{ id: course.id, courseName: course.courseName }}
    />
  );
}
