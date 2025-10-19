# src フォルダー構成

このフォルダーは React ベースの Web アプリケーション向けに推奨される構成です。

ディレクトリ一覧（目的）:

- components/ - 汎用 UI コンポーネント（Header, Button など）
- pages/ - ルーティングで使うページコンポーネント
- hooks/ - カスタム React フック
- services/ - 外部サービスやビジネスロジック（認証、通知など）
- api/ - API クライアントやエンドポイント定義
- contexts/ - React Context プロバイダ
- utils/ - 純粋関数ユーティリティ
- styles/ - グローバル CSS / 変数 / テーマ
- tests/ - 単体テスト（ユニット / 統合）

使い方メモ:
- 小さく保ち、各ディレクトリに README を置いておくと良いです。
- 必要に応じて barrel export（components/index.js など）を追加してください。
