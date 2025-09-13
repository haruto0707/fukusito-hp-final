# FukusITo - 福祉と技術で、未来を照らす。

## プロジェクト概要
- **名前**: FukusITo Modern Website
- **目的**: 福祉×テクノロジーのスタートアップのモダンなコーポレートサイト
- **主要機能**: HELP CONNECTアプリの紹介、チーム紹介、実績紹介

## 🌐 URL
- **開発環境**: https://3000-i0zb8o0m644cs0mj2ozfm-6532622b.e2b.dev
- **API Health**: https://3000-i0zb8o0m644cs0mj2ozfm-6532622b.e2b.dev/api/health
- **GitHub**: (未設定)

## 🔗 SNS
- **X (Twitter)**: https://x.com/FukusITo_
- **Facebook**: https://www.facebook.com/profile.php?id=61578296602292
- **Instagram**: https://www.instagram.com/fukusito/

## 🏗️ データアーキテクチャ
- **フロントエンド**: Hono JSX Renderer + TypeScript
- **スタイリング**: カスタムCSS + CSS Custom Properties
- **JavaScript**: バニラJS (アクセシビリティ重視)
- **ストレージ**: 静的サイト (サーバーサイド状態なし)
- **デプロイ**: Cloudflare Pages

## 📱 ユーザーガイド

### 主要セクション
1. **ヒーローセクション**: メインメッセージと製品・チームへの導線
2. **ミッションセクション**: 3つの核となる価値観の紹介
3. **プロダクトセクション**: HELP CONNECTアプリの詳細機能
4. **実績セクション**: タイムライン形式での成果紹介
5. **チームセクション**: 6名のメンバー紹介
   - 榊原悠大 (代表)
   - 伊丹斉彬 (セールス)
   - 清家陸人 (開発)
   - 西岡亮 (マネジメント)
   - 稲葉百音 (イベント企画)
   - 加藤貴大 (コミュニケーションプロモーター)
6. **CTAセクション**: お問い合わせとアプリダウンロードへの導線

### アクセシビリティ機能
- キーボードナビゲーション完全対応
- スクリーンリーダー対応（ARIA属性）
- 高コントラストモード対応
- アニメーション削減設定対応
- フォーカス管理とスキップリンク

## 🚀 デプロイ
- **プラットフォーム**: Cloudflare Pages
- **状態**: ✅ 開発サーバー稼働中
- **技術スタック**: Hono + TypeScript + Cloudflare Workers
- **最終更新**: 2024年9月

## 🎨 デザイン特徴

### カラーパレット
- **プライマリ**: #EA580C (Orange 600)
- **セカンダリ**: #16A34A (Green 600) 
- **アクセント**: #FFA726 (Light Orange)
- **グラデーション**: オレンジ→グリーンの美しいグラデーション
- **ダークモード**: prefers-color-scheme対応

### レスポンシブブレイクポイント
- **モバイル**: ~768px
- **タブレット**: 769px~1024px  
- **デスクトップ**: 1025px~

### アニメーション
- **スクロール連動**: Intersection Observer API
- **ホバー効果**: 微細なトランジション
- **パフォーマンス重視**: アニメーション削減対応

## 📊 パフォーマンス

### Core Web Vitals対応
- **LCP**: Largest Contentful Paint監視
- **FID**: First Input Delay測定  
- **CLS**: Cumulative Layout Shift最小化

### 最適化
- **フォント**: Google Fonts (Noto Sans JP)
- **画像**: 最適化されたサイズとフォーマット
- **JavaScript**: モジュール化と遅延読み込み
- **CSS**: カスタムプロパティとモダン機能

## 🛠️ 開発

### ローカル開発
```bash
npm run build
pm2 start ecosystem.config.cjs
```

### 主要コマンド
```bash
npm run dev          # Vite開発サーバー
npm run build        # プロダクションビルド  
npm run preview      # プレビューサーバー
pm2 logs --nostream  # ログ確認
```

### ファイル構造
```
webapp/
├── src/
│   ├── index.tsx       # メインアプリケーション
│   └── renderer.tsx    # HTML レンダラー
├── public/static/
│   ├── style.css       # メインスタイル
│   └── app.js         # JavaScript機能
├── dist/              # ビルド出力
├── ecosystem.config.cjs # PM2設定
└── wrangler.jsonc     # Cloudflare設定
```

## 🔧 次のステップ

### 実装済み機能
- ✅ レスポンシブデザイン
- ✅ アクセシビリティ対応  
- ✅ SEO最適化
- ✅ パフォーマンス最適化
- ✅ モダンUI/UX
- ✅ スムーススクロール
- ✅ アニメーション効果

### 推奨される追加機能
- 🔲 実際のメンバー写真の差し替え
- 🔲 お問い合わせフォーム
- 🔲 ブログ/ニュースセクション
- 🔲 多言語対応 (英語版)
- 🔲 Cloudflare Analytics導入
- 🔲 製品詳細ページの拡充

### Cloudflareデプロイ準備
1. Cloudflare API キー設定
2. wrangler.jsonc の本番環境設定
3. カスタムドメインの設定
4. 環境変数の管理

## 📈 SEO・マーケティング

### 構造化データ
- Organization スキーマ実装済み
- 適切なメタタグ設定
- Open Graph / Twitter Cards対応

### パフォーマンススコア目標
- **Lighthouse Score**: 90+ (全項目)
- **Page Speed**: 2秒以内
- **Accessibility**: 100点
- **SEO**: 100点

---

**開発者**: FukusITo Developer Team  
**ライセンス**: All Rights Reserved  
**お問い合わせ**: contact@fukusito.net