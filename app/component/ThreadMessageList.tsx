import { Stack } from "@mui/material";
import ThreadMessage from "./ThreadMessage";

type ThreadMessageItem = {
  id: string;
  userName: string;
  threadMessage: string;
};

const ThreadMessageList = ({ items }: { items: ThreadMessageItem[] }) => {
  return (
    // 以下のコメントアウトを外せばmapのコードができる。下手がきの<ThreadMessage />は全部消す
    <Stack mx={1.5}>
      {/* {items.map(({ id, userName, threadMessage }) => (
        <ThreadMessage
          key={id}
          userName={userName}
          threadMessage={threadMessage}
        />
      ))} */}
      <ThreadMessage
        userName={"momomomo"}
        threadMessage={
          "スレッドのメッセージスレッドのメッセスレッドのメッセージスレッドのメッセージスレッドのメッセージージスレッドのメッセージ"
        }
      />
      <ThreadMessage
        userName={"momo"}
        threadMessage={
          "スレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージ"
        }
      />
      <ThreadMessage
        userName={"momomomomomo"}
        threadMessage={
          "スレッドのメッセージスレッドのメッセージスレッドのメッセージ"
        }
      />
      <ThreadMessage
        userName={"momo"}
        threadMessage={
          "スレッドのメッセージスレッドのメッセージスレッドのメッセージ"
        }
      />

      <ThreadMessage
        userName={"momo"}
        threadMessage={
          "スレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージスレッドのメッセージ"
        }
      />
      <ThreadMessage
        userName={"momo"}
        threadMessage={
          "スレッドのメッセージスレッドのメッセージスレッドのメッセージ"
        }
      />
      <ThreadMessage
        userName={"momo"}
        threadMessage={
          "スレッドのメッセージスレッドのメッセージスレッドのメッセージ"
        }
      />
      <ThreadMessage
        userName={"momo"}
        threadMessage={
          "スレッドのメッセージスレッドのメッセージスレッドのメッセージ"
        }
      />
    </Stack>
  );
};

export default ThreadMessageList;
