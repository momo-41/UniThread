import ThreadMessageView from "@/app/component/ThreadMessageView";
import { Box } from "@mui/material";
import React from "react";
import PostButton from "@/app/component/PostButton";

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
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        講義名講義名のスレッド
        <PostButton
          text="投稿する"
          href={`/thread/${facultySlug}/${departmentSlug}/${courseId}/post`}
        />
      </Box>
      <Box my={2} mr={8}>
        <ThreadMessageView items={[]} />
      </Box>
    </Box>
  );
}
