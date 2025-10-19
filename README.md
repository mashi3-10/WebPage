# Project名: mashi3の備忘録

## ページ概要
### Home（/）
- 簡潔な自己紹介、最新更新・注目プロジェクトへのリンク、SNSアイコン
### 人物紹介（/about）
- 経歴、スキルセット、プロフィール画像、ダウンロード可能な履歴書（任意）
### 成果物（/projects）
- プロジェクト一覧（カード表示）、各プロジェクトの詳細ページ（/projects/:id）
- GitHubリンク、技術スタック、デモリンク、スクリーンショット、タグ/フィルタ
### 仲間紹介（/team）
- 協力者のプロフィール、役割、連絡先（リンク）
### 更新ログ（/changelog）
- リリースや更新履歴（日付・要約・関連PR/Issueリンク）


# WebPage (Vite + React)

Minimal Vite + React starter configured for GitHub Pages deployment.

## Local development

```powershell
# install dependencies
npm install

# start dev server
npm run dev
```

Open http://localhost:5173 in your browser.

## Using nvm (Windows)

If you want to manage Node versions per-project with `nvm-windows`:

```powershell
# install & use version specified in .nvmrc (if present)
nvm install (Get-Content .nvmrc).Trim()
nvm use (Get-Content .nvmrc).Trim()

# then install deps and run dev server
npm install
npm run dev
```

## Build

```powershell
npm run build
```

This creates the `dist` folder ready for publishing.

## GitHub Pages deployment

This repository contains a GitHub Actions workflow at `.github/workflows/gh-pages.yml` that builds and deploys the `dist` folder to GitHub Pages whenever you push to the `main` branch.

How to publish:

1. Commit and push to `main`.
2. Actions will run automatically and deploy to Pages.

Notes:
- The workflow uses the default `GITHUB_TOKEN`, so no extra secrets are required for a standard Pages deployment.
- Ensure your repository Pages settings point to `gh-pages` (or the configured branch) as the publishing source if required.

---

If you'd like, I can also:
- Add a `.nvmrc` with the project's Node version.
- Update `package.json` with a `homepage` field if you use a custom path.
- Add CI checks (lint/test) before deploy.

## コンテンツ編集（データ配置）

- サイトのデータは `public/data/` 配下の JSON ファイルで管理します（例: `projects.json`, `team.json`, `changelog.json`）。
- 画像や履歴書は `public/assets/` に配置してください（例: `public/assets/resume.pdf`）。
- JSON ファイルはブラウザから fetch されるため、編集後の再ビルドは不要です（GH Pages 上でも同様）。

