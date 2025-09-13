import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

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
                <h4>榊原 悠大</h4>
                <p className="role">代表</p>
                <p className="description">会社の全体戦略と事業推進を統括</p>
              </div>
            </div>
            <div className="team-card">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h4>伊丹 斉彬</h4>
                <p className="role">セールス</p>
                <p className="description">営業戦略と顧客開拓を担当</p>
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
                <p className="role">開発</p>
                <p className="description">アプリ開発とシステム構築を担当</p>
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
                <p className="role">マネジメント</p>
                <p className="description">プロジェクト管理と組織運営を担当</p>
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
                <p className="role">イベント企画</p>
                <p className="description">イベントの企画・運営とプロモーションを担当</p>
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
                <p className="role">コミュニケーションプロモーター</p>
                <p className="description">PR・広報活動とブランディングを担当</p>
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

// Product detail page
app.get('/product-helpconnect', (c) => {
  return c.render(
    <div>
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <a href="/">ホーム</a>
              <span>/</span>
              <span>HELP CONNECT</span>
            </div>
            <h1 className="product-title">
              HELP CONNECT
              <span className="product-subtitle">外出先での「ちょっとした困りごと」を解決するアプリ</span>
            </h1>
            <div className="product-badges">
              <span className="badge badge-new">新機能</span>
              <span className="badge badge-free">無料</span>
              <span className="badge badge-featured">注目</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="product-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>製品概要</h2>
              <p className="lead">
                HELP CONNECTは、障害のある方が外出先で困った際に、近くにいるサポーターに助けを求めることができるマッチングアプリです。
                リアルタイムの位置情報を活用し、安心・安全なコミュニケーションを実現します。
              </p>
              <ul className="feature-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>GPS位置情報による最適なマッチング</span>
                </li>
                <li>
                  <i className="fas fa-shield-alt"></i>
                  <span>安心・安全なコミュニケーション機能</span>
                </li>
                <li>
                  <i className="fas fa-users"></i>
                  <span>サポーター・利用者双方向の評価システム</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>リアルタイム通知とレスポンス</span>
                </li>
              </ul>
            </div>
            <div className="overview-visual">
              <div className="app-showcase">
                <div className="phone-container">
                  <div className="phone-frame">
                    <div className="phone-screen">
                      <div className="app-interface">
                        <div className="app-header">
                          <div className="status-bar"></div>
                          <h3>HELP CONNECT</h3>
                        </div>
                        <div className="app-main">
                          <div className="help-request-card">
                            <h4>助けを求める</h4>
                            <div className="request-options">
                              <div className="option-card active">
                                <i className="fas fa-wheelchair"></i>
                                <span>移動のサポート</span>
                              </div>
                              <div className="option-card">
                                <i className="fas fa-eye"></i>
                                <span>視覚的サポート</span>
                              </div>
                              <div className="option-card">
                                <i className="fas fa-hands-helping"></i>
                                <span>その他のサポート</span>
                              </div>
                            </div>
                          </div>
                          <div className="nearby-supporters">
                            <h5>近くのサポーター</h5>
                            <div className="supporter-list">
                              <div className="supporter-item">
                                <div className="supporter-avatar"></div>
                                <div className="supporter-info">
                                  <span className="name">田中さん</span>
                                  <span className="distance">約100m</span>
                                  <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <span>4.8</span>
                                  </div>
                                </div>
                              </div>
                              <div className="supporter-item">
                                <div className="supporter-avatar"></div>
                                <div className="supporter-info">
                                  <span className="name">佐藤さん</span>
                                  <span className="distance">約200m</span>
                                  <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <span>4.9</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

      {/* How it Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>ご利用の流れ</h2>
            <p>簡単3ステップで、必要なサポートを受けることができます</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>アプリを開く</h4>
              <p>HELP CONNECTアプリを起動し、現在地を確認します</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="fas fa-hand-paper"></i>
              </div>
              <h4>サポートを要請</h4>
              <p>必要なサポートの種類を選択し、助けを求めます</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>サポーターと連携</h4>
              <p>近くのサポーターとマッチングし、安全にサポートを受けます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-detail">
        <div className="container">
          <div className="section-header">
            <h2>主要機能</h2>
            <p>HELP CONNECTの充実した機能をご紹介します</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>位置情報マッチング</h4>
              <p>
                GPS機能を活用して、お困りの方の近くにいるサポーターを自動で検索・マッチング。
                効率的で迅速な支援を実現します。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h4>安全なチャット機能</h4>
              <p>
                アプリ内チャットシステムにより、個人情報を交換することなく、
                安心してコミュニケーションを取ることができます。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <h4>相互評価システム</h4>
              <p>
                利用者・サポーター双方の評価システムにより、
                信頼性の高いコミュニティを維持します。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bell"></i>
              </div>
              <h4>リアルタイム通知</h4>
              <p>
                プッシュ通知機能により、サポート要請や応答を
                リアルタイムで受け取ることができます。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-history"></i>
              </div>
              <h4>利用履歴管理</h4>
              <p>
                過去の利用履歴を確認でき、よく利用する場所や
                サポーターとの関係性を把握できます。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-cog"></i>
              </div>
              <h4>カスタマイズ設定</h4>
              <p>
                個人のニーズに合わせて通知設定やプロフィール情報を
                カスタマイズできます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">280+</div>
              <div className="stat-label">実証実験参加者</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3回</div>
              <div className="stat-label">実施回数</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">満足度</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">サービス提供時間</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta">
        <div className="container">
          <div className="cta-content">
            <h2>HELP CONNECTを始めませんか？</h2>
            <p>
              より良い社会の実現に向けて、一緒に歩んでいきましょう。<br />
              アプリのダウンロードやご質問は、お気軽にお問い合わせください。
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary btn-large">
                <i className="fas fa-download"></i>
                アプリをダウンロード
              </a>
              <a href="mailto:contact@fukusito.net" className="btn btn-secondary btn-large">
                <i className="fas fa-envelope"></i>
                お問い合わせ
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
