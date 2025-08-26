import { Stack } from "@mui/material";
import ThreadCard from "./ThreadCard";

type ThreadListItem = {
  id: string;
  title: string;
  createdAt: string;
  author: { handle: string | null; displayName: string };
};

const ThreadCardList: React.FC<{ items: ThreadListItem[] }> = ({ items }) => (
  <Stack direction="column" gap={2}>
    {items.map(({ id, title, createdAt, author }) => (
      <ThreadCard
        key={id}
        title={title}
        createdAt={createdAt}
        authorName={author.handle ?? author.displayName}
      />
    ))}
  </Stack>
);

export default ThreadCardList;
