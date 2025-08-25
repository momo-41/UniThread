"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";

const FormSchema = z.object({
  title: z
    .string()
    .min(1, "タイトルは必須です。")
    .max(30, "タイトルは30文字以内で入力してください。"),
});
type FormValues = z.infer<typeof FormSchema>;
type Props = {
  facultySlug: string;
  departmentSlug: string;
  courseId: string;
  course: { id: string; courseName?: string };
};

export default function ThreadPostForm({
  facultySlug,
  departmentSlug,
  courseId,
  course,
}: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  async function onSubmit(values: FormValues) {
    const res = await fetch("/api/thread", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: values.title, courseId }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.message ?? `Failed: ${res.status}`);
    router.push(
      `/thread/${facultySlug}/${departmentSlug}/${courseId}/${data.id}`
    );
  }

  return (
    <Box
      p={3}
      maxWidth={720}
      mx="auto"
      component="form"
      onSubmit={handleSubmit(async (v) => {
        try {
          await onSubmit(v);
        } catch (e: any) {
          alert(e.message ?? "作成に失敗しました");
        }
      })}
      noValidate
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        スレッド作成
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        コース: {course?.courseName ?? course?.id}
      </Typography>
      <TextField
        label="タイトル（30文字まで）"
        placeholder="例）第1回講義の課題について"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
        inputProps={{ maxLength: 30 }}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Stack direction="row" gap={1}>
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {isSubmitting ? "作成中…" : "スレッドを作成"}
        </Button>
        <Button
          type="button"
          variant="text"
          onClick={() => router.back()}
          disabled={isSubmitting}
        >
          戻る
        </Button>
      </Stack>
    </Box>
  );
}
