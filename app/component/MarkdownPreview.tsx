"use client";
import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

export const Preview = ({ content }: { content: string }) => {
  return (
    <div data-color-mode="light">
      <MarkdownPreview
        source={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
      />
    </div>
  );
};
