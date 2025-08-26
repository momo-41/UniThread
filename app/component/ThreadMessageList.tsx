import ThreadMessage from "./ThreadMessage";

type ThreadMessageItem = {
  id: string;
  userName: string;
  threadMessage: string;
};

const ThreadMessageList = ({ items }: { items: ThreadMessageItem[] }) => {
  return (
    // 以下のコメントアウトを外せばmapのコードができる。下手がきの<ThreadMessage />は全部消す
    <div>
      {/* {items.map(({ id, userName, threadMessage }) => (
        <ThreadMessage
          key={id}
          userName={userName}
          threadMessage={threadMessage}
        />
      ))} */}
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
    </div>
  );
};

export default ThreadMessageList;
