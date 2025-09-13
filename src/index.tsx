import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              福祉と技術で、<br />
              <span className="text-gradient">未来を照らす。</span>
            </h1>
            <p className="hero-description">
              FukusIToは、テクノロジーで社会課題を解決するスタートアップです。<br />
              「誰も取り残さない」社会の実現を目指し、助け合い文化を技術で支援します。
            </p>
            <div className="hero-buttons">
              <a href="#product" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                製品を見る
              </a>
              <a href="#team" className="btn btn-secondary">
                <i className="fas fa-users"></i>
                チームについて
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <i className="fas fa-heart hero-icon"></i>
              <div className="floating-elements">
                <div className="element element-1"><i className="fas fa-hands-helping"></i></div>
                <div className="element element-2"><i className="fas fa-mobile-alt"></i></div>
                <div className="element element-3"><i className="fas fa-globe"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">私たちのミッション</h2>
            <p className="section-subtitle">
              身体障害者である代表の経験を活かし、当事者の視点からサービスを設計しています
            </p>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-universal-access"></i>
              </div>
              <h3>誰も取り残さない</h3>
              <p>障害の有無に関わらず、すべての人が安心して外出できる社会を目指します</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>助け合い文化の創造</h3>
              <p>World Giving Indexで低い日本の助け合い文化を、技術の力で向上させます</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>イノベーションの追求</h3>
              <p>最新技術を活用し、福祉分野に新たな価値とソリューションを提供します</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="product-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">HELP CONNECT</h2>
            <p className="section-subtitle">
              外出先での「ちょっとした困りごと」を解決するアプリ
            </p>
          </div>
          <div className="product-content">
            <div className="product-info">
              <div className="product-features">
                <div className="feature-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>位置情報で最適なマッチング</h4>
                    <p>GPS機能を活用し、お困りの方と近くにいるサポーターを瞬時にマッチング</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-comments"></i>
                  <div>
                    <h4>リアルタイムコミュニケーション</h4>
                    <p>アプリ内チャットで安心・安全なやり取りが可能</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-star"></i>
                  <div>
                    <h4>評価システム</h4>
                    <p>利用者・サポーター双方の評価システムで信頼性を確保</p>
                  </div>
                </div>
              </div>
              <a href="/product-helpconnect" className="btn btn-primary btn-large">
                <i className="fas fa-external-link-alt"></i>
                詳細を見る
              </a>
            </div>
            <div className="product-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="app-ui">
                    <div className="app-header">
                      <div className="signal-bars"></div>
                      <span>HELP CONNECT</span>
                      <div className="battery"></div>
                    </div>
                    <div className="app-content">
                      <div className="help-button">
                        <i className="fas fa-hands-helping"></i>
                        <span>助けを求める</span>
                      </div>
                      <div className="nearby-helpers">
                        <div className="helper-item">
                          <div className="helper-avatar"></div>
                          <span>田中さん</span>
                          <span className="distance">100m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="achievement-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">実績・成果</h2>
            <p className="section-subtitle">
              私たちの取り組みが評価されています
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2024年9月</div>
              <div className="timeline-content">
                <h4>チーム結成</h4>
                <p>NAGOYA BOOST 10000にてチームを結成し、事業をスタート</p>
              </div>
            </div>
            <div className="timeline-item featured">
              <div className="timeline-date">2025年2月</div>
              <div className="timeline-content">
                <h4>優秀賞・一般投票賞を獲得</h4>
                <p>NAGOYA BOOST 10000で優秀賞・一般投票賞をダブル受賞</p>
                <div className="achievement-badges">
                  <span className="badge badge-gold"><i className="fas fa-trophy"></i> 優秀賞</span>
                  <span className="badge badge-silver"><i className="fas fa-users"></i> 一般投票賞</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025年6月</div>
              <div className="timeline-content">
                <h4>名城大学での実証実験</h4>
                <p>約280名が参加する大規模な実証実験を実施し、有効性を検証</p>
                <div className="stats">
                  <span className="stat-item">
                    <strong>280名</strong>
                    <span>参加者数</span>
                  </span>
                  <span className="stat-item">
                    <strong>3回目</strong>
                    <span>実施回数</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">チームメンバー</h2>
            <p className="section-subtitle">
              多様な専門性を持つメンバーが集結
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h4>伊丹 斉彬</h4>
                <p className="role">代表・プロダクトマネージャー</p>
                <p className="description">当事者視点を活かしたサービス設計を担当</p>
              </div>
            </div>
            <div className="team-card">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h4>稲葉 百音</h4>
                <p className="role">技術責任者</p>
                <p className="description">アプリ開発・システム設計を担当</p>
              </div>
            </div>
            <div className="team-card">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h4>加藤 貴大</h4>
                <p className="role">デザイナー</p>
                <p className="description">UI/UXデザイン・ブランディングを担当</p>
              </div>
            </div>
            <div className="team-card">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h4>清家 陸人</h4>
                <p className="role">マーケティング</p>
                <p className="description">市場分析・事業戦略を担当</p>
              </div>
            </div>
            <div className="team-card">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h4>西岡 亮</h4>
                <p className="role">ビジネス開発</p>
                <p className="description">パートナーシップ・事業開発を担当</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>一緒に未来を創りませんか？</h2>
            <p>FukusIToは、テクノロジーの力で誰もが活躍できる社会の実現を目指しています。<br />
            私たちの取り組みにご関心をお持ちの方は、ぜひお気軽にお問い合わせください。</p>
            <div className="cta-buttons">
              <a href="mailto:contact@fukusito.net" className="btn btn-primary btn-large">
                <i className="fas fa-envelope"></i>
                お問い合わせ
              </a>
              <a href="/product-helpconnect" className="btn btn-secondary btn-large">
                <i className="fas fa-download"></i>
                アプリをダウンロード
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
})

// API routes
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
