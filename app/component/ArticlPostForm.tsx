"use client";

import { useForm } from "react-hook-form";
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

const FormSchema = z.object({
  title: z.string().min(1, "タイトルは必須です。"),
  content: z.string().min(1, "本文は必須です。"),
});

type FormValues = z.infer<typeof FormSchema>;

const ArticlePostForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const createArticle = async (values: FormValues) => {
    const res = await fetch("/api/article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      reset();
      router.push("/article");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        記事の投稿
      </Typography>
      <Box component="form" onSubmit={handleSubmit(createArticle)}>
        <Stack spacing={2}>
          <TextField
            label="title"
            fullWidth
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            label="content"
            fullWidth
            multiline
            minRows={5}
            {...register("content")}
            error={!!errors.content}
            helperText={errors.content?.message}
          />
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            投稿
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default ArticlePostForm;
