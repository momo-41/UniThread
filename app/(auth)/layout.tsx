// 認証画面にヘッダーを追加するためのlayout.tsxファイル

export default function RootAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Headerコンポーネントを作ったらここに入れる */}
      {/* <Header /> */}
      {children}
    </div>
  );
}
