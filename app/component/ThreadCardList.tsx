import { Stack } from "@mui/material";
import ThreadCard from "./ThreadCard";
import Link from "next/link";

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
        const href = `${basePath}?t=${t.id}`;
        const isActive = t.id === selectedId;
        return (
          <Link key={t.id} href={href} replace scroll={false} style={{ textDecoration: "none" }}>
            <ThreadCard
              title={t.title}
              authorName={t.author.handle ?? t.author.displayName}
              createdAt={t.createdAt}
              active={isActive}
            />
          </Link>
        );
      })}
    </Stack>
  );
};
export default ThreadCardList;
