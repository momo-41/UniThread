import PostButton from "@/app/component/PostButton";
import ThreadCardList from "@/app/component/ThreadCardList";
import { headers } from "next/headers";
import React from "react";
import ThreadMessageView from "@/app/component/ThreadMessageView";
import { Box } from "@mui/material";

type Params = {
  facultySlug: string;
  departmentSlug: string;
  courseId: string;
};

type ThreadListItem = {
  id: string;
  title: string;
  createdAt: string;
  author: { handle: string | null; displayName: string };
};

async function getAllThreads(courseId: string): Promise<ThreadListItem[]> {
  const cookieHeader = (await headers()).get("cookie") ?? "";
  const res = await fetch(
    `${process.env.APP_URL!}/api/threads?courseId=${courseId}`,
    {
      cache: "no-store",
      headers: { cookie: cookieHeader },
    }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function CoursePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { facultySlug, departmentSlug, courseId } = await params;
  const threads = await getAllThreads(courseId);
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box>
        講義名講義名のスレッド
        <PostButton
          text="投稿する"
          href={`/thread/${facultySlug}/${departmentSlug}/${courseId}/post`}
        />
        {threads.length === 0 ? (
          <div style={{ padding: 8, color: "#666" }}>
            スレッドはまだありません
          </div>
        ) : (
          <ThreadCardList items={threads} />
        )}
      </Box>
      <Box my={2} mr={8}>
        <ThreadMessageView
          threadId={"008935e1-aeaf-4e5c-b706-5c47b5cd9448"}
          title={"サンプルスレッドタイトル"}
          initialItems={[]}
        />
      </Box>
    </Box>
  );
}
