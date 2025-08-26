import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid";

type ArticleItem = {
  id: string;
  title: string;
  author: { handle: string | null; displayName: string };
};

const ArticleCardList = ({ items }: { items: ArticleItem[] }) => (
  <Grid container spacing={4} mx={8}>
    {items.map(({ id, title, author }) => (
      <Grid size={6} key={id} display={"flex"} justifyContent={"center"}>
        <ArticleCard
          authorName={author.handle ?? author.displayName}
          title={title}
          articleId={id}
        />
      </Grid>
    ))}
  </Grid>
);

export default ArticleCardList;
