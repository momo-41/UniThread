## プロダクトについて
- プロダクト名：UniThread
- 概要：成蹊の大学生が自分が受けている講義に対してスレッドを立てて、ユーザーが自由に投稿･閲覧できる情報共有webアプリです。
- 背景：情報共有によって誰もが適切な学びと単位が取れる環境にしたいと考えたため開発に至りました。友人の有無・持病・就活などに影響されずに適切な情報を得て、もったいない落単を防ぎたいという思いを持っています。
- 機能：ログイン機能, スレッド作成機能, スレッド内の投稿機能, 記事投稿機能(スレッドとは別の投稿機能)
- 技術：Next.js, TypeScript, Supabase, prisma, Clerk, MUI, Vercel(or Render)

## レビューをいただきたい点
- UI/UXの改善点
- URL設計に関して
  - スラッグで分けるかクエリパラメータで分けるかなど、プロダクトによってどう使い分けるべきか
- DB設計が適切かどうか(データモデル設計をする上でのポイント等)
  - prisma/schema.prisma
   <img width="771" height="663" alt="スクリーンショット 2025-08-21 0 41 37" src="https://github.com/user-attachments/assets/0ba1ee64-8c75-464e-8ed5-cca9f3e81d39" />
- (技術以外)ただ楽に単位を取るためのアプリではなく、学びを深められる・交流が広がる・視野が広がる、などの影響を与えていきたいと考えています。現状の機能だと課題を教えてもらえるアプリと化してしまいそうで(仕方ないのですが)、学びの意欲向上に貢献できる動線や機能をつけられたらと漠然と考えています。もしアイデア等ありましたらご教授いただければ幸いです。
  - (記事投稿機能は学びのアウトプットで活用するという動線を作る、等)

## 今後の展望
- 成蹊大学の学生のみならず、全ての大学生が自分の大学にアクセスしてスレッドを立てて情報共有ができるアプリにしたいです。
- 今後実装したい機能
  - web socketを利用したリアルタイム通信
  - 検索機能
  - お気に入りの講義登録
  - ユーザーのメッセージに評価できる機能
  - 通報機能
  - 大学のメールアドレス認証
  - アンケート機能
  - 平均点計算機能

## デプロイリンク
(デプロイが完了次第、記載する予定です)

## Figmaリンク
https://www.figma.com/design/ZtEOnwVR1v3anFyUw4GBIV/%E5%A4%8F%E5%90%88%E5%AE%BF?node-id=0-1&t=7X94LF1f5WTK5TCo-1




---
---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
