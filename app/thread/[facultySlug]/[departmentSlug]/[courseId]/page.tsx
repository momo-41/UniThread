import PostButton from "@/app/component/PostButton";
import React from "react";

type TProps = {
  params: {
    facultySlug: string;
    departmentSlug: string;
    courseId: string;
  };
};

export default function CoursePage({ params }: TProps) {
  const { facultySlug, departmentSlug, courseId } = params;

  return (
    <div>
      <PostButton
        text="投稿する"
        href={`/thread/${facultySlug}/${departmentSlug}/${courseId}/post`}
      />
    </div>
  );
}
