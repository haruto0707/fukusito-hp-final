# FukusITo 静的サイト デプロイメントガイド

## 📁 静的サイトファイル

この `static-build` フォルダには、完全に静的なFukusIToウェブサイトが含まれています。

### ファイル構成
```
static-build/
├── index.html              # トップページ
├── contact.html            # お問い合わせページ
├── privacy.html            # プライバシーポリシー
├── terms.html             # 利用規約
├── product-helpconnect.html # 製品詳細ページ
├── favicon.ico            # サイトアイコン
├── static/                # 静的ファイル
│   ├── style.css          # スタイルシート
│   ├── app.js            # JavaScript
│   └── *.png             # 画像ファイル
├── .htaccess             # Apache設定ファイル
└── nginx.conf.sample     # Nginx設定サンプル
```

## 🚀 デプロイ方法

### 1. 一般的なWebサーバー
以下の内容をWebサーバーのドキュメントルートにアップロードしてください：
- すべてのHTMLファイル
- `static/` フォルダとその中身
- `favicon.ico`
- `.htaccess` (Apacheの場合)

### 2. GitHub Pages
1. GitHubリポジトリを作成
2. この `static-build` フォルダの内容をリポジトリにプッシュ
3. GitHub Pages設定でデプロイ

### 3. Netlify
1. Netlifyにサインアップ
2. この `static-build` フォルダをドラッグ&ドロップでデプロイ

### 4. Vercel
1. Vercelにサインアップ
2. この `static-build` フォルダをデプロイ

### 5. Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# public directoryとして static-build を選択
firebase deploy
```

## ⚙️ サーバー設定

### Apache (.htaccess)
ファイルに含まれている `.htaccess` が自動的に適用されます。

### Nginx
`nginx.conf.sample` の内容をNginxの設定ファイルに追加してください。

## 📧 お問い合わせ機能

お問い合わせフォームは `mailto:contact@fukusito.net` でデフォルトメールクライアントを開く仕組みになっています。サーバー側の処理は不要です。

## 🔗 重要な注意事項

- このサイトは完全に静的で、サーバー側の処理を必要としません
- すべてのリンクは相対パスで設定されています
- CDNからフォントとアイコンを読み込んでいるため、インターネット接続が必要です

## ✅ デプロイ後の確認

デプロイ後は以下を確認してください：
1. トップページが正常に表示される
2. 全てのページ間のナビゲーションが動作する
3. CSSとJavaScriptが正常に読み込まれる
4. お問い合わせリンクでメールクライアントが開く
5. レスポンシブデザインが動作する

---

**FukusITo** - フクシトで、未来を照らす。