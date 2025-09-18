import { Stack } from "@mui/material";
import ThreadCard from "./ThreadCard";

type ThreadCardListProps = {
  items: {
    id: string;
    title: string;
    createdAt: string;
    author: { handle: string | null; displayName: string };
  }[];
  selectedId: string | null;
  basePath: string;
};

const ThreadCardList = ({ items, selectedId, basePath }: ThreadCardListProps) => {
  return (
           <Stack direction="column" spacing={2}>
      {items.map((t) => {
        const isActive = t.id === selectedId;
        return (
            <ThreadCard
            key={t.id} 
              threadId={t.id}  
              title={t.title}
              authorName={t.author.handle ?? t.author.displayName}
              createdAt={t.createdAt}
              active={isActive} 
              basePath={basePath}            />
        );
      })}
    </Stack>
  );
};
export default ThreadCardList;
