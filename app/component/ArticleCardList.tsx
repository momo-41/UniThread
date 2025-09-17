import { Box } from "@mui/material";
import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid";
import PostButton from "./PostButton";

type ArticleItem = {
  id: string;
  title: string;
  author: { handle: string | null; displayName: string };
};

const ArticleCardList = ({ items }: { items: ArticleItem[] }) => (
  <>
    <Box display={"flex"} justifyContent={"flex-end"} mr={5} my={3}>
      <PostButton text={"投稿する"} href={"/article/post"} />
    </Box>
    <Grid container spacing={4} sx={{ mx: { xs: 2, sm: 8 } }}>
      {items.map(({ id, title, author }) => (
        <Grid
          size={{ xs: 12, sm: 6 }}
          key={id}
          display={"flex"}
          justifyContent={"center"}
        >
          <ArticleCard
            authorName={author.handle ?? author.displayName}
            title={title}
            articleId={id}
          />
        </Grid>
      ))}
    </Grid>
  </>
);

export default ArticleCardList;
