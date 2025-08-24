"use client";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import rehypeSanitize from "rehype-sanitize";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const FormSchema = z.object({
  title: z.string().min(1, "タイトルは必須です。"),
  content: z.string().min(1, "本文は必須です。"),
});
type FormValues = z.infer<typeof FormSchema>;

export type ArticlePostFormProps = {
  onContentChange?: (value: string) => void;
};

const ArticlePostForm = ({ onContentChange }: ArticlePostFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { title: "", content: "" },
  });

  const CreateArticle = async (values: FormValues) => {
    const toastId = toast.loading("送信しています…");
    try {
      const res = await fetch("/api/article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => res.statusText);
        throw new Error(txt);
      }
      reset();
      toast.success("投稿に成功しました", { id: toastId });
      router.push("/article");
    } catch (error) {
      toast.error("投稿に失敗しました", { id: toastId });
      console.error("投稿エラー:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Toaster position="top-center" />
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        記事の投稿
      </Typography>

      <Box component="form" onSubmit={handleSubmit(CreateArticle)}>
        <Stack spacing={2}>
          <TextField
            label="タイトル"
            fullWidth
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <Typography variant="subtitle1" fontWeight={600}>
            本文（Markdown対応）
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            下の入力欄に記事内容を記入してください。タイトル・見出し・箇条書きなど
            Markdown 記法が使えます。右に投稿時のプレビューが表示されます。
          </Typography>
          <div data-color-mode="light">
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <MDEditor
                  value={field.value}
                  onChange={(v) => {
                    const next = v ?? "";
                    field.onChange(next);
                    onContentChange?.(next);
                  }}
                  preview="live"
                  height={400}
                  previewOptions={{ rehypePlugins: [rehypeSanitize] }}
                  textareaProps={{
                    placeholder:
                      "マークダウン例\n（上のツールバーからも使用できます!）\n# タイトル\n##  見出し\n- 箇条書き\n- **強調**",
                  }}
                />
              )}
            />
            {errors.content && (
              <Typography variant="caption" color="error">
                {errors.content.message}
              </Typography>
            )}
          </div>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            投稿
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default ArticlePostForm;
