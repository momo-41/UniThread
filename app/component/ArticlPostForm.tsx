"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  authorId: z.string().uuid(),
  title: z.string(),
  content: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ArticlePostForm() {
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormValues) => {
    await fetch("/api/article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>authorId</label>
        <input type="text" {...register("authorId")} />
      </div>
      <div>
        <label>title</label>
        <input type="text" {...register("title")} />
      </div>
      <div>
        <label>content</label>
        <textarea {...register("content")} />
      </div>
      <button type="submit">投稿</button>
    </form>
  );
}
