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

const FormSchema = z.object({
  authorId: z.string().uuid(),
  title: z.string(),
  content: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ArticlePostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const onSubmit = async (data: FormValues) => {
    await fetch("/api/article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        記事の投稿
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label="authorId (UUID)"
            fullWidth
            {...register("authorId")}
            error={!!errors.authorId}
            helperText={errors.authorId?.message}
          />
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
}
