import PostButton from "@/app/component/PostButton";
import React from "react";
type Params = {
  facultySlug: string;
  departmentSlug: string;
  courseId: string;
};
export default async function CoursePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { facultySlug, departmentSlug, courseId } = await params;

  return (
    <div>
      <PostButton
        text="投稿する"
        href={`/thread/${facultySlug}/${departmentSlug}/${courseId}/post`}
      />
    </div>
  );
}
