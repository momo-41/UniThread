import PostButton from "@/app/component/PostButton";
import ThreadCardList from "@/app/component/ThreadCardList";
import { headers } from "next/headers";
import React from "react";
import ThreadMessageView from "@/app/component/ThreadMessageView";
import { Box, Typography } from "@mui/material";

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

export default async function CoursePage(props: { params: Params }) {
  const { params } = await Promise.resolve(props);
  const { facultySlug, departmentSlug, courseId } = params;

  const cookieHeader = (await headers()).get("cookie") ?? "";
  // ← cookie を渡して二重取得を回避
  const threads = await getAllThreads(courseId, cookieHeader);
  // スレッドメッセージを表示する対象スレッド（とりあえず先頭）
  const selected = threads[0] ?? null;
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

  return (
    <Box display="flex" justifyContent="space-between" mt={2} ml={5}>
      <Box>
        <Typography fontSize={20} fontWeight={500} color={"#444444"}>
          講義名講義名のスレッド
        </Typography>
        <Box mt={2}>
          <PostButton
            text="+ スレッドを作成"
            href={`/thread/${facultySlug}/${departmentSlug}/${courseId}/post`}
          />
        </Box>
        {threads.length === 0 ? (
          <div style={{ padding: 8, color: "#444444" }}>
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
