import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FukusITo - 福祉と技術で、未来を照らす。</title>
        <meta name="description" content="FukusIToは、テクノロジーで社会課題を解決するスタートアップです。HELP CONNECTアプリで、障害のある方の外出支援を行っています。" />
        <meta name="keywords" content="福祉,アクセシビリティ,バリアフリー,アプリ,スタートアップ,HELP CONNECT,障害者支援" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fukusito.net/" />
        <meta property="og:title" content="FukusITo - 福祉と技術で、未来を照らす。" />
        <meta property="og:description" content="テクノロジーで社会課題を解決し、誰もが活躍できる社会を目指すスタートアップです。" />
        <meta property="og:site_name" content="FukusITo" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fukusito.net/" />
        <meta property="twitter:title" content="FukusITo - 福祉と技術で、未来を照らす。" />
        <meta property="twitter:description" content="テクノロジーで社会課題を解決し、誰もが活躍できる社会を目指すスタートアップです。" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        {/* External CSS and Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        
        {/* Custom CSS */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FukusITo",
          "url": "https://fukusito.net",
          "logo": "https://fukusito.net/logo.png",
          "description": "テクノロジーで社会課題を解決するスタートアップ",
          "foundingDate": "2024-09",
          "founder": {
            "@type": "Person",
            "name": "伊丹 斉彬"
          },
          "sameAs": []
        })}
        </script>
      </head>
      <body>
        {/* Navigation Header */}
        <header className="header">
          <nav className="nav">
            <div className="container">
              <div className="nav-content">
                <div className="nav-brand">
                  <a href="/" className="brand-link">
                    <img src="/logo.png" alt="FukusITo ロゴ" className="brand-logo" />
                    <span>FukusITo</span>
                  </a>
                </div>
                <div className="nav-menu" id="nav-menu">
                  <a href="#product" className="nav-link">製品</a>
                  <a href="#team" className="nav-link">チーム</a>
                  <a href="/product-helpconnect" className="nav-link">詳細</a>
                  <a href="mailto:contact@fukusito.net" className="nav-link nav-cta">
                    <i className="fas fa-envelope"></i>
                    お問い合わせ
                  </a>
                </div>
                <button className="nav-toggle" id="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="footer-brand">
                  <div className="brand-logo">
                    <img src="/logo.png" alt="FukusITo ロゴ" className="footer-logo" />
                    <span>FukusITo</span>
                  </div>
                  <p>テクノロジーで社会課題を解決し、<br />誰もが活躍できる社会を目指します。</p>
                </div>
              </div>
              <div className="footer-section">
                <h4>製品・サービス</h4>
                <ul>
                  <li><a href="/product-helpconnect">HELP CONNECT</a></li>
                  <li><a href="#product">製品概要</a></li>
                  <li><a href="#team">開発チーム</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>会社情報</h4>
                <ul>
                  <li><a href="#team">チームについて</a></li>
                  <li><a href="mailto:contact@fukusito.net">お問い合わせ</a></li>
                  <li><a href="/privacy">プライバシーポリシー</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>フォローする</h4>
                <div className="social-links">
                  <a href="https://x.com/FukusITo_" className="social-link" aria-label="X (旧Twitter)" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61578296602292" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/fukusito/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 FukusITo. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* JavaScript */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
