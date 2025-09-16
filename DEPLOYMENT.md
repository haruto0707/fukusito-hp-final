# 🚀 FukusITo Website - サーバーデプロイガイド

このガイドでは、FukusIToウェブサイトを所有しているサーバーにデプロイする方法を説明します。

## 🎯 デプロイ方法の選択

### 方法1: 静的サイト（推奨・簡単）
- **適用環境**: Apache、Nginx、IIS、共有ホスティング
- **必要な知識**: 基本的なFTP/SFTPの使用方法
- **メリット**: 簡単、高速、セキュア、低コスト

### 方法2: Node.js サーバー
- **適用環境**: VPS、専用サーバー、クラウドサーバー
- **必要な知識**: Node.js、PM2、リバースプロキシ設定
- **メリット**: 動的機能、高度なカスタマイズ可能

## 🌟 方法1: 静的サイトデプロイ（推奨）

### ステップ1: 静的ファイルの生成

1. **プロジェクトをビルド:**
   \`\`\`bash
   npm run build:static
   \`\`\`

2. **生成されるファイル:**
   - \`static-build/\` フォルダに全ファイルが作成されます
   - \`index.html\`, \`privacy.html\`, \`terms.html\`, \`commercial.html\`, \`contact.html\`, \`product-helpconnect.html\`
   - \`static/\` フォルダ（CSS、JavaScript、画像）
   - \`.htaccess\` （Apache用設定）
   - \`nginx.conf.sample\` （Nginx用設定サンプル）

### ステップ2: ファイルのアップロード

#### A. FTP/SFTPを使用する場合

1. **FTPクライアントを準備:**
   - FileZilla (無料): https://filezilla-project.org/
   - WinSCP (Windows): https://winscp.net/
   - Cyberduck (Mac): https://cyberduck.io/

2. **サーバーに接続:**
   \`\`\`
   ホスト: ftp.your-domain.com (または IPアドレス)
   ユーザー名: あなたのFTPユーザー名
   パスワード: あなたのFTPパスワード
   ポート: 21 (FTP) または 22 (SFTP)
   \`\`\`

3. **ファイルをアップロード:**
   - \`static-build/\` 内の**すべてのファイル**をサーバーのドキュメントルート（通常は \`public_html/\` や \`www/\`）にアップロード
   - ファイル構造を保持してください

#### B. cPanelファイルマネージャを使用する場合

1. cPanelにログイン
2. 「ファイルマネージャ」を開く
3. \`public_html\` フォルダに移動
4. \`static-build/\` の全ファイルをアップロード

#### C. コマンドライン（SSH）を使用する場合

\`\`\`bash
# サーバーに接続
ssh username@your-server.com

# アップロード (rsync使用)
rsync -avz ./static-build/ username@your-server.com:/path/to/html/

# または scp使用
scp -r ./static-build/* username@your-server.com:/path/to/html/
\`\`\`

### ステップ3: サーバー設定

#### Apache サーバーの場合

\`.htaccess\` ファイルが自動的に作成されるので、追加設定は不要です。

#### Nginx サーバーの場合

1. \`nginx.conf.sample\` の内容をNginx設定ファイルに追加:

\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/html;
    index index.html;

    # Remove .html extension from URLs
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    location ~ ^/(.*)\.html$ {
        return 301 /$1;
    }

    # Cache static assets
    location ~* \\.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1M;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
\`\`\`

2. Nginx を再起動:
\`\`\`bash
sudo systemctl reload nginx
\`\`\`

### ステップ4: 動作確認

1. ブラウザでサイトにアクセス: \`http://your-domain.com\`
2. 各ページをテスト:
   - \`http://your-domain.com/privacy\`
   - \`http://your-domain.com/terms\`
   - \`http://your-domain.com/commercial\`
   - \`http://your-domain.com/contact\`
   - \`http://your-domain.com/product-helpconnect\`

---

## 🔧 方法2: Node.js サーバーデプロイ

### ステップ1: サーバーファイルの生成

1. **Node.js版をビルド:**
   \`\`\`bash
   npm run build:server
   \`\`\`

2. **生成されるファイル:**
   - \`server-build/\` フォルダに全ファイルが作成されます

### ステップ2: サーバー要件の確認

- **Node.js**: バージョン 18 以上
- **npm**: パッケージマネージャー
- **PM2**: プロセス管理（推奨）
- **メモリ**: 最小 512MB RAM
- **ポート**: 3000番（またはカスタマイズ可能）

### ステップ3: サーバーにデプロイ

#### A. ファイルアップロード

\`\`\`bash
# サーバーにファイルを転送
scp -r ./server-build/ username@your-server.com:/home/username/fukusito-website/

# または rsync使用
rsync -avz ./server-build/ username@your-server.com:/home/username/fukusito-website/
\`\`\`

#### B. サーバーセットアップ

\`\`\`bash
# サーバーにSSH接続
ssh username@your-server.com

# プロジェクトディレクトリに移動
cd /home/username/fukusito-website

# インストールスクリプト実行
chmod +x install.sh
./install.sh

# または手動インストール
npm install
\`\`\`

#### C. アプリケーション起動

**開発・テスト環境:**
\`\`\`bash
npm start
\`\`\`

**本番環境（PM2使用）:**
\`\`\`bash
# PM2をインストール（グローバル）
npm install -g pm2

# アプリケーション開始
pm2 start ecosystem.config.cjs

# 自動起動設定
pm2 startup
pm2 save
\`\`\`

### ステップ4: リバースプロキシ設定（推奨）

#### Nginx リバースプロキシ

\`/etc/nginx/sites-available/fukusito\` を作成:

\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

有効化:
\`\`\`bash
sudo ln -s /etc/nginx/sites-available/fukusito /etc/nginx/sites-enabled/
sudo systemctl reload nginx
\`\`\`

#### Apache リバースプロキシ

\`.htaccess\` または Apache設定ファイルに追加:

\`\`\`apache
<VirtualHost *:80>
    ServerName your-domain.com
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
\`\`\`

### ステップ5: SSL/HTTPS設定（推奨）

#### Let's Encrypt使用

\`\`\`bash
# Certbot インストール
sudo apt install certbot python3-certbot-nginx

# SSL証明書取得・設定
sudo certbot --nginx -d your-domain.com

# 自動更新設定
sudo crontab -e
# 追加: 0 12 * * * /usr/bin/certbot renew --quiet
\`\`\`

---

## 🔍 トラブルシューティング

### よくある問題

#### 1. **404 エラー（ページが見つからない）**

**静的サイト版:**
- \`.htaccess\` ファイルが正しくアップロードされているか確認
- サーバーが \`.htaccess\` をサポートしているか確認
- ファイル名を確認（\`privacy.html\` など）

**Node.js版:**
- アプリケーションが起動しているか確認: \`pm2 list\`
- ポート3000が開いているか確認: \`netstat -tulpn | grep 3000\`

#### 2. **CSS/JSが読み込まれない**

- \`static/\` フォルダが正しくアップロードされているか確認
- ファイルパーミッションを確認: \`chmod 644 static/*\`
- キャッシュをクリア

#### 3. **メール送信が動作しない**

- お問い合わせフォームはmailto:リンクを使用
- ユーザーのメールクライアントが設定されている必要があります

#### 4. **Node.jsアプリケーションが起動しない**

- Node.jsバージョン確認: \`node --version\` (18+必要)
- 依存関係インストール確認: \`npm install\`
- ログ確認: \`pm2 logs\`

### パフォーマンス最適化

#### 静的サイト版

1. **Gzip圧縮有効化**
2. **ブラウザキャッシュ設定**
3. **CDN使用**（Cloudflare など）

#### Node.js版

1. **PM2クラスターモード使用**
2. **Nginx でリバースプロキシ**
3. **静的ファイルはNginxで直接配信**

---

## 📞 サポート

### 技術的な問題

- **GitHub Issues**: https://github.com/haruto0707/fukusito-hp-renew/issues
- **メール**: info@fukusito.net

### サーバー関連の問題

1. **ホスティングプロバイダーのサポートに確認**
2. **サーバーログを確認**
3. **当社へお問い合わせ**

---

## 🔄 更新手順

### 静的サイト版の更新

1. ローカルで変更を行う
2. \`npm run build:static\` を実行
3. 新しい \`static-build/\` の内容をサーバーにアップロード

### Node.js版の更新

1. ローカルで変更を行う
2. \`npm run build:server\` を実行
3. 新しい \`server-build/\` の内容をサーバーにアップロード
4. サーバーで \`pm2 restart fukusito-website\`

---

**🎉 デプロイ完了後、https://your-domain.com でFukusIToウェブサイトにアクセスできます！**