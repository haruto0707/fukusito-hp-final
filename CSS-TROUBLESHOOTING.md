# 🎨 CSSが反映されない問題 - 解決ガイド

## ✅ 修正済み（最新版）

**最新ファイル**: `fukusito-website-static-fixed.tar.gz`

### 🔧 修正内容
- **CSSパス修正**: `/static/style.css` → `./static/style.css` (相対パス)
- **JSパス修正**: `/static/app.js` → `./static/app.js` (相対パス)
- **.htaccess改良**: より汎用的なサーバー対応

---

## 🚨 CSS問題の確認方法

### 1. ブラウザの開発者ツールで確認

**Chrome/Firefox:**
1. ウェブサイトを開く
2. `F12` キー押下
3. 「Console」タブを確認
4. 赤いエラーメッセージを探す

**よくあるエラー:**
```
❌ Failed to load resource: style.css (404 Not Found)
❌ GET http://your-domain.com/static/style.css 404
```

### 2. ファイル構造の確認

**正しいファイル構造:**
```
public_html/
├── index.html
├── privacy.html
├── terms.html
├── commercial.html
├── contact.html
├── product-helpconnect.html
├── .htaccess
├── nginx.conf.sample
└── static/
    ├── style.css      ← 重要
    ├── app.js         ← 重要
    └── logo.png
```

### 3. HTMLファイル内パスの確認

**修正前（問題あり）:**
```html
<link href="/static/style.css" rel="stylesheet"/>
<script src="/static/app.js"></script>
```

**修正後（正常）:**
```html
<link href="./static/style.css" rel="stylesheet"/>
<script src="./static/app.js"></script>
```

---

## 🛠️ トラブルシューティング

### 問題1: CSSファイルが404エラー

**原因**: `static/` フォルダがアップロードされていない
**解決策**:
```bash
# FTPで以下を確認
1. static/ フォルダが存在するか
2. static/style.css ファイルが存在するか
3. ファイルサイズが46KB程度あるか
```

### 問題2: デザインが一部だけ適用される

**原因**: CDNからのフォント・アイコンが読み込まれていない
**確認項目**:
- インターネット接続
- ファイアウォール設定
- CDNブロック設定

### 問題3: モバイルでデザインが崩れる

**原因**: CSSファイルの読み込み失敗
**解決策**: PC版で正常に動作するか確認後、キャッシュクリア

### 問題4: .htaccessエラー

**症状**: 500 Internal Server Error
**原因**: サーバーが.htaccessをサポートしていない

**解決策1（.htaccess削除）:**
```bash
# .htaccessファイルを削除またはリネーム
mv .htaccess .htaccess.bak
```

**解決策2（簡易.htaccess）:**
```apache
# 最低限の設定
DirectoryIndex index.html
Options -Indexes

# MIME設定
AddType text/css .css
AddType application/javascript .js
```

---

## 🔍 詳細診断手順

### ステップ1: 基本確認

1. **ファイルのアップロード確認**
   ```
   ✅ index.html (17KB程度)
   ✅ static/style.css (46KB程度)  
   ✅ static/app.js (9KB程度)
   ```

2. **直接アクセステスト**
   ```
   http://your-domain.com/static/style.css
   → CSSファイルの内容が表示されるか？
   ```

### ステップ2: パーミッション確認

```bash
# 正しいファイル権限
chmod 644 *.html
chmod 644 static/*
chmod 755 static/
```

### ステップ3: サーバー設定確認

**Apache:**
- `.htaccess` サポート確認
- `mod_rewrite` モジュール確認

**Nginx:**
- 静的ファイル配信設定確認
- MIME type設定確認

---

## 🎯 緊急対処法（確実に動作）

### 方法1: インライン化

CSSを直接HTMLに埋め込み（一時的）:

```html
<head>
<style>
/* style.cssの内容をここに貼り付け */
</style>
</head>
```

### 方法2: CDN使用

```html
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
```

### 方法3: 別ディレクトリでテスト

```
/test/
├── index.html
└── static/
    └── style.css
```

---

## 📞 サポート連絡先

### 1. ファイルアップロードの問題
- **ホスティングプロバイダー**のサポートに連絡
- 「静的HTMLファイルの配置方法」について質問

### 2. サーバー設定の問題
- **「.htaccessサポート」**について確認
- **「静的ファイル配信設定」**について確認

### 3. 技術的な問題
- **Email**: info@fukusito.net
- **件名**: 「CSS表示問題について」

---

## ✅ 確認チェックリスト

```
□ 最新ファイル (fukusito-website-static-fixed.tar.gz) を使用
□ static/ フォルダ全体をアップロード
□ ファイル権限設定 (644 for files, 755 for directories)
□ 直接CSS URL アクセステスト
□ ブラウザキャッシュクリア
□ 開発者ツールでエラー確認
□ 複数ブラウザでテスト
```

**🎉 すべて確認できればCSSが正常に表示されます！**