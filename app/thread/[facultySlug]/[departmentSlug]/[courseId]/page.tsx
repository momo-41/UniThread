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
    { cache: "no-store", headers: { cookie: cookieHeader } }
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
  //selectedはスレッドメッセージを取得しているスレッド自体を指す
  const selected = threads[0] ?? null;

  let initialItems: { id: string; userName: string; threadMessage: string }[] =
    [];
  if (selected) {
    const cookieHeader = (await headers()).get("cookie") ?? "";
    const res = await fetch(
      `${process.env.APP_URL!}/api/threads/${selected.id}/messages?limit=50`,
      { cache: "no-store", headers: { cookie: cookieHeader } }
    );
    if (res.ok) {
      const data = await res.json();
      initialItems = (data.messages ?? []).map((m: any) => ({
        id: m.id,
        userName: m.author.handle ?? m.author.displayName,
        threadMessage: m.body,
      }));
    }
  }

  return (
    <Box display="flex" justifyContent="space-between">
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

      {selected && (
        <Box my={2} mr={8}>
          <ThreadMessageView
            threadId={selected.id}
            title={selected.title}
            initialItems={initialItems}
          />
        </Box>
      )}
    </Box>
  );
}
