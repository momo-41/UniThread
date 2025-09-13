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
async function getAllThreads(
  courseId: string,
  cookieHeader: string
): Promise<ThreadListItem[]> {
  const res = await fetch(
    `${process.env.APP_URL!}/api/threads?courseId=${courseId}`,
    { cache: "no-store", headers: { cookie: cookieHeader } }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function CoursePage(props: {
  params: Params;
  searchParams: { t?: string };
}) {
  const {  params, searchParams } = await Promise.resolve(props);
  const { facultySlug, departmentSlug, courseId } = params;

  const cookieHeader = (await headers()).get("cookie") ?? "";
  // ← cookie を渡して二重取得を回避
  const threads = await getAllThreads(courseId, cookieHeader);
  const fromUrl = searchParams?.t ?? null;
  // 選択スレッド表示
  const selected = threads.find((t) => t.id === fromUrl) ?? threads[0] ?? null;
  let initialItems: { id: string; userName: string; threadMessage: string }[] =
    [];

  if (selected) {
    const res = await fetch(
      `${process.env.APP_URL!}/api/threads/${selected.id}/messages`,
      { cache: "no-store", headers: { cookie: cookieHeader } }
    );
    if (res.ok) {
      const data = await res.json();
      initialItems = (data.messages ?? []).map((m: any) => ({
        id: m.id,
        userName: m.author?.handle ?? m.author?.displayName ?? "名無し",
        threadMessage: m.body,
      }));
    }
  }

   const basePath = `/thread/${facultySlug}/${departmentSlug}/${courseId}`;

  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        講義名講義名のスレッド
        <PostButton
          text="投稿する"
          href={`${basePath}/post`}
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
