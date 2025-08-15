// app/article/1/page.tsx
"use client";
import Article from "../../component/Article";

export default function ArticleDetailPage() {
  return (
    <Article
      date="2025/8/11"
      title="細胞生化学を落とさないために"
      text={`2年前期で受講して3単位...（導入文）`}
    />
  );
}
