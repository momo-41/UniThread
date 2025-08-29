import { Stack } from "@mui/material";
import ThreadMessage from "./ThreadMessage";

export type ThreadMessageItem = {
  id: string;
  userName: string;
  threadMessage: string;
};

const ThreadMessageList = ({ items }: { items: ThreadMessageItem[] }) => {
  return (
    <div>
      {items.map(({ id, userName, threadMessage }) => (
        <ThreadMessage
          key={id}
          userName={userName}
          threadMessage={threadMessage}
        />
      ))}
    </div>
  );
};

export default ThreadMessageList;
