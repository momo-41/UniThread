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
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });
  const titleVal = watch("title") ?? "";
  const remain = 30 - titleVal.length;
  const courseLabel = course.courseName ?? course.id;
  async function onSubmit(values: FormValues) {
    const res = await fetch("/api/threads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: values.title, courseId }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.id) {
      alert(data?.message ?? `Failed: ${res.status}`);
      return;
    }
    reset();
    const listDest = `/thread/${facultySlug}/${departmentSlug}/${courseId}`;
    router.replace(listDest);
    router.refresh();
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      p={3}
      maxWidth={720}
      mx="auto"
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        スレッド作成
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        コース: {courseLabel}
      </Typography>
      <TextField
        label="タイトル（30文字まで）"
        placeholder="例）第1回講義の課題について"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message ?? `残り ${remain} 文字`}
        inputProps={{ maxLength: 30 }}
        fullWidth
        required
        autoFocus
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-notchedOutline": {
            transition: "border-color 100ms",
          },
          "&:hover .MuiOutlinedInput-notchedOutline, & .Mui-focused .MuiOutlinedInput-notchedOutline":
            { borderColor: "primary.main" },
        }}
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
