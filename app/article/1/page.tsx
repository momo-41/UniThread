// app/article/1/page.tsx
"use client";
import Article from "../../component/Article";

export default function ArticleDetailPage() {
  return (
    <Article
      title="細胞生化学を落とさないために"
      body={`2年前期で受講して3単位...（導入文）\n\n1. 全て出席しよう！そして寝ない！\n出席点が...`}
      backHref="/article"
      backLabel="検索に戻る"
    />
  );
}
