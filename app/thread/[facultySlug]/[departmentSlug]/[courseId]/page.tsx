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
type ThreadMessageItem = {
  id: string;
  userName: string;
  threadMessage: string;
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

  const data = (await res.json()) as ThreadListItem[];
  return data;
}

async function getThreadMessages(
  threadId: string,
  cookieHeader: string
): Promise<ThreadMessageItem[]> {
  const res = await fetch(
    `${process.env.APP_URL!}/api/threads/${threadId}/messages`,
    { cache: "no-store", headers: { cookie: cookieHeader } }
  );

  if (!res.ok) return [];

  const data = await res.json();

  return (data.messages ?? []).map((m: any) => ({
    id: m.id,
    userName: m.author?.handle ?? m.author?.displayName ?? "名無し",
    threadMessage: m.body,
  }));
}

export default async function CoursePage(props: {
  params: Params;
  searchParams: { t?: string };
}) {
  const { params, searchParams } = props;
  const { facultySlug, departmentSlug, courseId } = params;
const h = await headers();
const cookieHeader = h.get("cookie") ?? "";
const fromUrl = searchParams?.t ?? null;
const threadsPromise = getAllThreads(courseId, cookieHeader);
const initialFromUrlMessagesPromise = fromUrl
  ? getThreadMessages(fromUrl, cookieHeader)
  : Promise.resolve<ThreadMessageItem[]>([]);

const threads = await threadsPromise;

const selected =
  threads.find((t) => t.id === fromUrl) ?? threads[0] ?? null;

let initialItems: ThreadMessageItem[] = [];

if (selected) {
  if (fromUrl && fromUrl === selected.id) {
    initialItems = await initialFromUrlMessagesPromise;
  } else {
    initialItems = await getThreadMessages(selected.id, cookieHeader);
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
         <ThreadCardList
            items={threads}
            selectedId={selected?.id ?? null}
            basePath={basePath}
          />
        )}
      </Box>
      {selected && (
        <Box my={2} mr={8}>
          <ThreadMessageView
          key={selected.id}    
            threadId={selected.id}
            title={selected.title}
            initialItems={initialItems}
          />
        </Box>
      )}
    </Box>
  );
}
