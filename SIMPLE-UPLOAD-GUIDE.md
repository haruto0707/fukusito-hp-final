# 📤 FukusITo ウェブサイト - 簡単アップロードガイド

## 🎯 npm不要！FTPでサーバーにアップロードする手順

### **必要なもの**
- ✅ サーバーのFTP情報（ホスト、ユーザー名、パスワード）
- ✅ FTPクライアントソフト（FileZilla推奨）
- ✅ `fukusito-website-static.tar.gz` ファイル

---

## 🚀 ステップ1: ファイルの準備

### 1-1. ファイルをダウンロード
- `fukusito-website-static.tar.gz` をPCにダウンロード

### 1-2. ファイルを展開
**Windows:**
- 7-Zip、WinRAR、または標準のzip機能で展開
- フォルダ内に以下が入っています：
  ```
  index.html
  privacy.html
  terms.html
  commercial.html
  contact.html
  product-helpconnect.html
  static/（フォルダ）
  .htaccess
  nginx.conf.sample
  ```

**Mac/Linux:**
```bash
tar -xzf fukusito-website-static.tar.gz
```

---

## 📡 ステップ2: FTPクライアントの準備

### 2-1. FileZillaをダウンロード（推奨）
- **公式サイト**: https://filezilla-project.org/
- 無料で使いやすいFTPクライアント

### 2-2. その他のFTPクライアント
- **WinSCP** (Windows): https://winscp.net/
- **Cyberduck** (Mac): https://cyberduck.io/
- **cPanel ファイルマネージャ**（ブラウザ上で操作）

---

## 🌐 ステップ3: サーバーに接続

### 3-1. FTP接続情報
サーバー会社から提供された以下の情報を確認：
```
ホスト名: ftp.your-domain.com （またはIPアドレス）
ユーザー名: your-username
パスワード: your-password
ポート: 21 (FTP) または 22 (SFTP)
```

### 3-2. FileZillaで接続
1. FileZillaを起動
2. 上部のクイック接続バーに情報を入力：
   - **ホスト**: `ftp.your-domain.com`
   - **ユーザー名**: `your-username`
   - **パスワード**: `your-password`
   - **ポート**: `21`
3. 「クイック接続」をクリック

---

## 📁 ステップ4: ファイルのアップロード

### 4-1. サーバー側のフォルダを確認
接続後、以下のフォルダを探してください：
- `public_html/` （最も一般的）
- `www/`
- `htdocs/`
- `web/`

### 4-2. 既存ファイルのバックアップ（重要）
既にウェブサイトがある場合：
1. 既存のファイルを別フォルダにバックアップ
2. または、別の場所にコピー

### 4-3. FukusIToファイルをアップロード
1. **左側**（ローカル）：展開したFukusIToファイルを選択
2. **右側**（サーバー）：`public_html/` フォルダを開く
3. **全ファイルを選択**して右クリック → 「アップロード」
4. **フォルダ構造を保持**してアップロード

**アップロードするファイル一覧：**
```
✅ index.html → トップページ
✅ privacy.html → プライバシーポリシー
✅ terms.html → 利用規約  
✅ commercial.html → 特定商取引法表記
✅ contact.html → お問い合わせ
✅ product-helpconnect.html → 製品詳細
✅ static/ フォルダ → CSS、JavaScript、画像
✅ .htaccess → サーバー設定（Apache用）
```

---

## ✅ ステップ5: 動作確認

### 5-1. ウェブサイトにアクセス
ブラウザで以下のURLにアクセス：
- **メインページ**: `http://your-domain.com`
- **プライバシーポリシー**: `http://your-domain.com/privacy`
- **利用規約**: `http://your-domain.com/terms`
- **特定商取引法表記**: `http://your-domain.com/commercial`
- **お問い合わせ**: `http://your-domain.com/contact`
- **製品詳細**: `http://your-domain.com/product-helpconnect`

### 5-2. 確認項目
- ✅ ページが正しく表示される
- ✅ 文字ロゴが表示される
- ✅ CSS（デザイン）が適用される
- ✅ ナビゲーションが動作する
- ✅ お問い合わせフォームが動作する

---

## 🔧 トラブルシューティング

### 問題1: 「404 Not Found」エラー
**原因**: ファイルが正しい場所にアップロードされていない
**解決策**: 
- ファイルが `public_html/` 内にあるか確認
- `index.html` がルートディレクトリにあるか確認

### 問題2: デザインが崩れる（CSS適用されない）
**原因**: `static/` フォルダがアップロードされていない
**解決策**:
- `static/` フォルダ全体を再アップロード
- フォルダ構造が保持されているか確認

### 問題3: プライバシーポリシーなどのページが「404」
**原因**: `.htaccess` ファイルの問題
**解決策**:
- `.htaccess` ファイルがアップロードされているか確認
- サーバーがApacheで `.htaccess` をサポートしているか確認
- Nginxサーバーの場合は管理者に設定を依頼

### 問題4: お問い合わせフォームが動作しない
**説明**: フォームはメールクライアント（Outlook、Gmailアプリ等）を開く仕様
**対処**: ユーザーのPCにメールクライアントが設定されている必要があります

---

## 📞 サポート

### 技術的な問題
- **Email**: info@fukusito.net
- **件名**: 「ウェブサイトアップロードに関する問い合わせ」

### サーバー設定の問題
1. **ホスティングプロバイダーのサポートに問い合わせ**
2. **`.htaccess` サポートについて確認**
3. **PHP、データベース不要であることを伝える**

---

## 🎉 アップロード完了後

✅ **ウェブサイトが正常に表示されたら完了です！**

### 定期的な更新
1. 新しいファイルセットを受け取る
2. 既存ファイルをバックアップ  
3. 新しいファイルで置き換え
4. 動作確認

### SEO対策
- **Google Search Console** にサイトを登録
- **Google Analytics** でアクセス解析
- **サイトマップ** の提出（必要に応じて）

---

**🌐 これで FukusITo ウェブサイトがあなたのサーバーで稼働します！**