# デプロイ手順

## 前提
- Node.js と npm がインストールされていること
- ビルドは `npm run build` で `dist` が生成される

## ローカルでの手動デプロイ (gh-pages ブランチを使う)
```powershell
npm run build
git add -A
git commit -m "pre-deploy build" || echo "no changes"
# deploy to gh-pages branch
git checkout --orphan gh-pages
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy"
git push -f origin gh-pages
git checkout -
git branch -D gh-pages
```

## gh-pages パッケージを使う（簡易）
```powershell
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

***

さらに自動化したい場合は GitHub Actions または `gh` CLI を利用する方法を検討してください。
