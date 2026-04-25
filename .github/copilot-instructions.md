# Economicon Pages — Copilot Instructions

## Project Overview

Economiconの紹介・ドキュメントサイト。[Astro](https://docs.astro.build) + [Starlight](https://starlight.astro.build/) で構築。

**Economicon** は計量経済学の分析をGUIで行えるWindows向けデスクトップアプリ（MITライセンス）。

## Site Goals（優先順）

1. **まず見てもらう** — 検索・SNS流入を増やし、多くの人にサイトを発見してもらう（SEO・SNSシェアを最優先）
2. **アプリを使ってもらう** — 訪問者がEconomiconをダウンロード・使用するよう誘導する
3. **必要な情報を届ける** — インストール手順・使い方・計量経済学の解説をユーザが最短距離で見つけられるようにする

技術的な情報（MITライセンス詳細等）は掲載するが、上記3点より優先度は低い。

## Target Audience

- **メイン**: 計量経済学の完全初心者、または基礎知識はあるが実際に分析したことがない学習者
- **メイン**: 大学で計量経済学を教えていてツールを探している講師
- **サブ**: R・Stata等を使っているがGUIツールを探している実務者

専門用語には必ず平易な解説を付ける。「回帰分析とは？」から始められるような丁寧な説明を心がける。

## Content & Design Principles

- **シンプルさ優先**: 余計な情報を詰め込まず、ユーザが迷わないUIと文章構成
- **最短距離**: 目的のページ・情報に2クリック以内でたどり着けるナビゲーション
- **SEO**: 各ページに適切な `title`・`description` を設定、見出し構造（h1→h2→h3）を遵守する
- **SNSシェア**: 各ページが単独でシェアされても意味が伝わるよう `description` を充実させる
- **動画埋め込み**: YouTubeの解説動画を `<iframe>` またはMDXコンポーネントで埋め込む

## Planned Content Sections

- インストール・使い方ガイド (`guides/`)
- 計量経済学の手法解説 — OLS、固定効果、DID、RDD、2SLS/GMM など (`guides/` または `reference/`)
- Economiconの機能紹介・他ツールとの比較 (`reference/`)
- チュートリアル・実践例 (`guides/`)
- FAQ

## Architecture

- `astro.config.mjs` — サイトタイトル、i18nロケール、サイドバー、favicon、ソーシャルリンク
- `src/content.config.ts` — コンテンツコレクションスキーマ（StarlightのdocsLoader + docsSchema）
- `src/style/costom.css` — テーマオーバーライド（Starlight CSSカスタムプロパティ `--sl-color-*` を使用）
- `public/` — 静的アセット（favicon、アイコン）
- `src/assets/` — Astroの画像パイプラインで最適化される画像

## Content Structure

コンテンツはすべて `src/content/docs/` 以下に配置。ファイルパスがそのままURLになる：

- **日本語（ルートロケール）**: `src/content/docs/*.mdx` およびサブディレクトリ
- **英語**: `src/content/docs/en/*.mdx`

**日英同期必須** — 日本語でページを追加したら、必ず英語版も追加する。

## Key Conventions

- インタラクティブなページには `.mdx`、プレーンなコンテンツには `.md` を使う
- Starlightコンポーネントのインポート: `import { Card, CardGrid, Steps } from '@astrojs/starlight/components'`
- フロントマター必須項目: `title`、`description`（SEOのため）
- ホームページのみ `template: splash` を使用

## Build Commands

```bash
pnpm dev       # 開発サーバー起動（localhost:4321）
pnpm build     # 本番ビルド（./dist/）
pnpm preview   # 本番ビルドをプレビュー
```

## Pitfalls

- CSSファイルは `src/style/costom.css`（typo: `custom.css` ではない）— **リネーム禁止**（ビルドが壊れる）
- TypeScriptは `astro/tsconfigs/strict` — 厳格な型チェックに従う
- `astro.config.mjs` のGitHubソーシャルリンクの `href` が空 — デプロイ前に記入が必要
