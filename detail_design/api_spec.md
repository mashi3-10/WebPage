# API 仕様

このプロジェクトは静的なフロントエンドで API を直接持たない想定です。
もしバックエンドを追加する場合のテンプレート:

## 認証
- Type: Bearer token (JWT)

## 例: /api/messages
- Method: GET
- Request:
  - Headers: Authorization: Bearer <token>
- Response (200):
```json
[
  { "id": 1, "text": "Hello" }
]
```

## エラーハンドリング
- 400: Bad Request
- 401: Unauthorized
- 500: Internal Server Error

## テスト観点
- 正常系、異常系、認証エラー、スキーマ検証
