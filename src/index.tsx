import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// Serve static files (CSS and JS)
app.use('/static/*', serveStatic({ root: './public' }))

// Serve favicon
app.get('/favicon.ico', serveStatic({ root: './public' }))

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              フクシトで、<br />
              <span className="hero-highlight">未来を照らす。</span>
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
              イベント会場での「ちょっとした困りごと」を、その場にいる誰かとつなぐ
            </p>
          </div>
          <div className="product-content">
            <div className="product-info">
              <div className="product-features">
                <div className="feature-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>会場のなかで、近くの人に届く</h4>
                    <p>困りごとを投稿すると、同じ会場にいる支援者に届きます。階段を使わない経路が必要、といった条件も一緒に伝わります</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-compass"></i>
                  <div>
                    <h4>出会うまでを案内</h4>
                    <p>相手までの距離と方角、到着の目安を表示。混雑した会場でもすれ違わずに合流できます</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-elevator"></i>
                  <div>
                    <h4>設備の場所がわかる</h4>
                    <p>エレベーター、多目的トイレ、救護室などを地図と一覧で確認できます。人に頼らず解決できることは、自分で解決できます</p>
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
                          <span>支援者が向かっています</span>
                          <span className="distance">120m</span>
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
            <div className="timeline-item">
              <div className="timeline-date">2026年</div>
              <div className="timeline-content">
                <h4>アプリを作り直し、会場での運用に備える</h4>
                <p>
                  実証実験で見えた課題をもとに、要求仕様書をまとめ直してアプリを再構築しました。
                  設備の地図、合流までの案内、音声入力、ログイン不要の来場者モードなどを新たに搭載しています。
                </p>
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

      {/* CEO Message Section */}
      <section className="ceo-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">代表メッセージ</h2>
            <p className="section-subtitle">
              FukusIToの想いと未来への展望
            </p>
          </div>
          <div className="ceo-content">
            <div className="ceo-profile">
              <div className="ceo-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>
              <div className="ceo-info">
                <h3>榊原 悠大</h3>
                <p className="ceo-title">代表</p>
                <div className="ceo-details">
                  <p><strong>所属：</strong>名城大学情報工学部4年</p>
                  <p><strong>専攻：</strong>医療情報</p>
                  <p><strong>進路：</strong>来年同大学大学院進学予定</p>
                </div>
              </div>
            </div>
            <div className="ceo-story">
              <div className="story-section">
                <h4>私の歩み</h4>
                <p>
                  シャルコーマリートゥース病と呼ばれる末梢神経障害があり、小学5年生から車椅子生活を送っています。
                  大学3年生の時に参加したビジネスコンテストをきっかけにFukusIToをスタートし、
                  同時にスタートアップの世界に入り現在勉強中です。
                </p>
              </div>
              <div className="story-section">
                <h4>FukusIToへの想い</h4>
                <p>
                  FukusIToを立ち上げた思いは、自分がいままで困ったことに対してソリューションを創造することで、
                  この世界にいる誰かの「困った」を1つでも減らしたいというものです。
                </p>
                <p>
                  自分はいままで多くの人に助けられてきました。だからこそ助け合いの重要性が身に染みてわかります。
                  自分にも「助けられるだけでなく、誰かを助けたい」という思いが常にありますが、
                  自分にできることには限りがあります。
                </p>
                <p>
                  だからサービス提供という形で社会課題に挑戦することで、
                  明日困る誰かが救われたら良いなという思いがあります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">FukusIToの活動</h2>
            <p className="section-subtitle">
              これまでの歩みと今後の展望
            </p>
          </div>
          <div className="activities-content">
            <div className="activities-grid">
              <div className="activity-category">
                <h3>これまでの活動</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div className="activity-info">
                      <h4>NAGOYA BOOST 10000</h4>
                      <p>優秀賞 + 一般投票賞を獲得</p>
                      <span className="activity-desc">
                        FukusITo始動のきっかけとなる半年間に及ぶビジネス創出イベントの最終発表にて受賞
                      </span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="activity-info">
                      <h4>各種ビジネスコンテスト参加</h4>
                      <p>Dragon Gate、Garage Challengeなど</p>
                      <span className="activity-desc">
                        様々なビジネスコンテストに参加し、事業のブラッシュアップを継続
                      </span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">
                      <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                    <div className="activity-info">
                      <h4>名城大学にて授業実施</h4>
                      <p>280名の前で講義・実証実験を実施</p>
                      <span className="activity-desc">
                        経済学部の講義「障がい者と社会」にて登壇し、実証実験を行いました
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="activity-category">
                <h3>現在活動中</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="activity-info">
                      <h4>名古屋大学 Common Nexus</h4>
                      <p>「ねのねプログラム」参加中</p>
                      <span className="activity-desc">
                        展示・イベント開催などを積極的に行っています
                      </span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className="activity-info">
                      <h4>Aichi Start-up Battle</h4>
                      <p>愛知県主催の大規模ビジネスコンテスト</p>
                      <span className="activity-desc">
                        採択され、現在参加中です
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="activity-category">
                <h3>今後の活動</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <i className="fas fa-running"></i>
                    </div>
                    <div className="activity-info">
                      <h4>スポーツ団体との連携</h4>
                      <p>会場内の互助促進目的でのサービス利用</p>
                      <span className="activity-desc">
                        スポーツイベントでの助け合い文化の促進を目指します
                      </span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">
                      <i className="fas fa-building"></i>
                    </div>
                    <div className="activity-info">
                      <h4>会社登記</h4>
                      <p>法人化による事業拡大</p>
                      <span className="activity-desc">
                        より本格的な事業展開に向けて準備を進めています
                      </span>
                    </div>
                  </div>
                </div>
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
                <i className="fas fa-info-circle"></i>
                FukusIToのサービスについて
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
              <span className="product-subtitle">イベント会場での「ちょっとした困りごと」を、その場にいる誰かとつなぐ</span>
            </h1>
            <div className="product-badges">
              <span className="badge badge-free">無料</span>
              <span className="badge badge-featured">実証実験中</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">声をかけられないのは、冷たいからではない</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-figure">
              <div className="problem-number">71<span className="problem-unit">%</span></div>
              <p className="problem-caption">見知らぬ人に声をかけることに抵抗がある</p>
              <p className="problem-source">名城大学での実証実験・体験前の回答（2025年6月・n=134）</p>
            </div>
            <div className="problem-text">
              <p>
                実証実験で聞いたところ、「状況によるが、少し勇気がいる」が44%、
                「かなり抵抗があり、できれば避けたい」が23%でした。
              </p>
              <p>
                助けたくない人が多いわけではありません。
                声をかけていいのか、かえって失礼にならないか、自分に何ができるのか。
                決めかねているうちに、その場を通り過ぎてしまいます。
              </p>
              <p>
                困っている側にも同じ迷いがあります。
                誰に頼めばいいか分からず、忙しそうな人を呼び止めるのも気が引ける。
                きっかけがないまま、どちらもその場を離れていきます。
              </p>
              <p className="problem-lead">
                HELP CONNECTは、この一歩を代わりに踏み出すためのアプリです。
                助けが必要だと先に表明してもらうことで、声をかける側の迷いをなくします。
              </p>
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
                大学のオープンキャンパス、展示会、スポーツ観戦。
                こうした会場では、案内板が読み取りにくかったり、エレベーターが見つからなかったり、
                荷物や扉のちょっとしたことで足が止まります。
                スタッフを探して歩き回るほどではないけれど、誰かがいれば数十秒で済む。
                HELP CONNECTは、その数十秒を、同じ会場にいる人とつなぐアプリです。
              </p>
              <p>
                会場という区切りがあるからこそ、相手はすぐ近くにいて、
                助けた人もそのまま自分の予定に戻れます。
                駅や街なかのように「どこから来るか分からない」状態を避けられることが、
                この仕組みが成り立つ条件だと考えています。
              </p>
              <ul className="feature-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>同じ会場にいる人にだけ、困りごとが届く</span>
                </li>
                <li>
                  <i className="fas fa-compass"></i>
                  <span>合流までの距離・方角・到着の目安を表示</span>
                </li>
                <li>
                  <i className="fas fa-elevator"></i>
                  <span>エレベーターや多目的トイレの場所を地図で確認</span>
                </li>
                <li>
                  <i className="fas fa-user-clock"></i>
                  <span>登録なしでも使える来場者モード</span>
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
                            <h5>合流まで</h5>
                            <div className="supporter-list">
                              <div className="supporter-item">
                                <div className="supporter-avatar"></div>
                                <div className="supporter-info">
                                  <span className="name">支援者が向かっています</span>
                                  <span className="distance">約120m・北東</span>
                                  <div className="rating">
                                    <i className="fas fa-clock"></i>
                                    <span>まもなく到着</span>
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
            <p>助けを求めてから、お礼を伝えるまで</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="fas fa-hand-paper"></i>
              </div>
              <h4>困りごとを送る</h4>
              <p>種類を選び、必要なら補足を書きます。文字が打ちにくいときは音声でも入力できます</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="fas fa-bell"></i>
              </div>
              <h4>近くの人が引き受ける</h4>
              <p>同じ会場にいる支援者に届きます。手が空いている人が引き受け、通知でお知らせします</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="fas fa-compass"></i>
              </div>
              <h4>合流する</h4>
              <p>距離と方角、到着の目安が出ます。行き違いそうなときはチャットで補えます</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon">
                <i className="fas fa-check"></i>
              </div>
              <h4>完了して、お礼を伝える</h4>
              <p>お互いに評価します。気になることがあれば、その場から運営に報告できます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="usecase-section">
        <div className="container">
          <div className="section-header">
            <h2>こんなときに</h2>
            <p>体験会や実証実験で、実際に挙がった場面です</p>
          </div>
          <div className="usecase-grid">
            <div className="usecase-card">
              <i className="fas fa-wheelchair"></i>
              <h4>移動</h4>
              <p>「車椅子で、階段しか見つけられず階の移動ができない」</p>
            </div>
            <div className="usecase-card">
              <i className="fas fa-map-signs"></i>
              <h4>案内</h4>
              <p>「初めて行く場所で、トイレの場所がわからない」</p>
            </div>
            <div className="usecase-card">
              <i className="fas fa-box"></i>
              <h4>搬送補助</h4>
              <p>「怪我をして、荷物が運べない」</p>
            </div>
            <div className="usecase-card">
              <i className="fas fa-baby-carriage"></i>
              <h4>ベビーカー</h4>
              <p>「ベビーカーや杖で手がふさがり、大きな荷物が持てない」</p>
            </div>
            <div className="usecase-card">
              <i className="fas fa-question-circle"></i>
              <h4>その他</h4>
              <p>「一人で来ていて、周りに頼れる人がいない」</p>
            </div>
          </div>
          <p className="usecase-note">
            アプリではこの5種類から選んで送ります。
            細かく分けすぎると選ぶのに迷い、大まかすぎると引き受ける側が判断できないためです。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features-detail">
        <div className="container">
          <div className="section-header">
            <h2>主要機能</h2>
            <p>会場で実際に起きることに合わせて作っています</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>会場のなかでのマッチング</h4>
              <p>
                困りごとは、同じ会場にいる支援者にだけ届きます。
                「階段を使わない経路が必要」といった条件も一緒に伝わるので、
                引き受ける前に対応できるかを判断できます。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-compass"></i>
              </div>
              <h4>合流までの案内</h4>
              <p>
                お互いの距離と方角、到着の目安を表示します。
                混雑した会場では、居場所を言葉で説明するのが難しいためです。
                方角表示と地図を切り替えられます。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-elevator"></i>
              </div>
              <h4>設備の場所</h4>
              <p>
                エレベーター、スロープ、多目的トイレ、車椅子席、救護室を
                地図とリストで確認できます。
                人に頼らず解決できることは、自分で解決できたほうがいいと考えています。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h4>チャットと音声入力</h4>
              <p>
                連絡先を交換せずにやり取りできます。
                よく使う言い回しは定型文から選べ、
                文字が打ちにくいときは声で入力できます。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-clock"></i>
              </div>
              <h4>登録なしで使える来場者モード</h4>
              <p>
                その日だけの来場者に、アカウント作成は負担にしかなりません。
                登録せずに助けを求められます。
                ただし支援する側になるには登録が必要です。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-halved"></i>
              </div>
              <h4>評価と通報、運営の見守り</h4>
              <p>
                終わったあとにお互いを評価します。
                気になることがあればその場から運営に報告でき、
                運営は対応が滞っている案件を一覧で把握できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="safety-section">
        <div className="container">
          <div className="section-header">
            <h2>安全のために決めていること</h2>
            <p>
              中間発表で「助ける側が必ずしも『いい人』とは限らないのが怖い」という
              ご指摘をいただきました。もっともな懸念だと考えています。
            </p>
          </div>
          <div className="safety-grid">
            <div className="safety-card">
              <h4><i className="fas fa-map-marker-alt"></i> 会場の外には広げない</h4>
              <p>
                困りごとが届くのは、同じ会場にいる人だけです。
                どこから誰が来るか分からない状態を作らないことが、
                この仕組みが成り立つ前提だと考えています。
              </p>
            </div>
            <div className="safety-card">
              <h4><i className="fas fa-user-shield"></i> 連絡先を交換しない</h4>
              <p>
                やり取りはアプリの中だけで完結します。
                電話番号やSNSのアカウントを渡す必要はありません。
                位置情報も、必要な精度まで粗くして共有します。
              </p>
            </div>
            <div className="safety-card">
              <h4><i className="fas fa-id-card"></i> 支援する側には登録が必要</h4>
              <p>
                助けを求めるだけなら登録は要りませんが、
                支援する側になるには登録が必要です。
                身元をたどれない人を、支援に差し向けないためです。
              </p>
            </div>
            <div className="safety-card">
              <h4><i className="fas fa-flag"></i> 通報と、運営の見守り</h4>
              <p>
                気になることがあれば、その場から運営に報告できます。
                運営は対応が滞っている案件を一覧で把握でき、
                必要なら会場スタッフが引き取ります。
              </p>
            </div>
            <div className="safety-card">
              <h4><i className="fas fa-ban"></i> 引き受けないことを決めている</h4>
              <p>
                医療行為、酒類の提供、資格が必要な行為はお願いできません。
                善意で引き受けた人が責任を負う事態を避けるためです。
              </p>
            </div>
            <div className="safety-card">
              <h4><i className="fas fa-coins"></i> 現金のやり取りをしない</h4>
              <p>
                支援へのお礼はポイントで、会場内の特典と引き換えます。
                現金や換金できるものは扱いません。
                労働の対価になると、別の法律の検討が必要になるためです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <div className="container">
          <div className="section-header">
            <h2>実証実験でわかったこと</h2>
            <p>2025年6月、名城大学の授業内で実施しました</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">389<span className="stat-unit">名</span></div>
              <div className="stat-label">参加者数</div>
              <div className="stat-note">2025年6月19日〜27日</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">71<span className="stat-unit">%</span></div>
              <div className="stat-label">声をかけるのに抵抗がある</div>
              <div className="stat-note">体験前・n=134</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">75<span className="stat-unit">%</span></div>
              <div className="stat-label">体験後、ハードルが下がった</div>
              <div className="stat-note">n=102</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">82<span className="stat-unit">%</span></div>
              <div className="stat-label">「声をかけたい」が前向きに</div>
              <div className="stat-note">n=82</div>
            </div>
          </div>
          <p className="evidence-note">
            設問ごとに回答数が異なるのは、授業内のライブアンケートで、
            回によって回答者が入れ替わったためです。
            別途おこなった体験会（2025年1〜2月・n=13）では、
            満足度92%、「今後も使いたい」92%という回答を得ています。
          </p>
        </div>
      </section>

      {/* For Venues */}
      <section className="venue-section">
        <div className="container">
          <div className="section-header">
            <h2>会場を運営されている方へ</h2>
            <p>大学、展示会場、スタジアム、商業施設などでの導入を想定しています</p>
          </div>
          <div className="venue-grid">
            <div className="venue-item">
              <h4>ご用意いただくもの</h4>
              <ul>
                <li>会場の範囲（中心と半径）</li>
                <li>エレベーター・多目的トイレ・救護室などの位置</li>
                <li>対応が滞ったときに引き取るスタッフの連絡先</li>
              </ul>
            </div>
            <div className="venue-item">
              <h4>来場者にお願いすること</h4>
              <ul>
                <li>助けを求めるだけなら、登録は不要です</li>
                <li>支援する側として参加する方には登録をお願いします</li>
                <li>会場の外に出ると、案件は表示されなくなります</li>
              </ul>
            </div>
            <div className="venue-item">
              <h4>運営画面でわかること</h4>
              <ul>
                <li>いま進行中の案件と、それぞれの経過時間</li>
                <li>応答が遅れている案件</li>
                <li>通報の内容と対応状況</li>
              </ul>
            </div>
          </div>
          <p className="venue-note">
            提供時間は5:00〜22:00を想定し、深夜帯の運用は行いません。
            また、個人宅や許可を得ていない店舗など、
            誰もが立ち入れるわけではない場所は対象外としています。
          </p>
          <div className="venue-cta">
            <a href="mailto:contact@fukusito.net?subject=HELP CONNECT の導入について" className="btn btn-primary btn-large">
              <i className="fas fa-envelope"></i>
              導入について相談する
            </a>
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
              サービスの詳細やご質問は、お気軽にお問い合わせください。
            </p>
            <div className="cta-buttons">
              <a href="/" className="btn btn-primary btn-large">
                <i className="fas fa-info-circle"></i>
                FukusIToについて
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

// Privacy Policy Page
app.get('/privacy', (c) => {
  return c.render(
    <div>
      <section className="legal-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <a href="/">ホーム</a>
              <span>/</span>
              <span>プライバシーポリシー</span>
            </div>
            <h1 className="legal-title">
              <i className="fas fa-shield-alt"></i>
              プライバシーポリシー
            </h1>
            <p className="legal-subtitle">
              お客様の個人情報の取り扱いについて
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-document">
            <div className="document-info">
              <p><strong>制定日：</strong>2025年9月15日</p>
              <p><strong>最終更新日：</strong>2025年9月15日</p>
            </div>

            <div className="legal-section">
              <h2>1. 基本方針</h2>
              <p>
                株式会社FukusITo（以下「当社」といいます）は、当社が提供するサービス（以下「本サービス」といいます）における
                お客様の個人情報の取り扱いについて、個人情報保護法その他関連法令を遵守し、
                お客様の個人情報を適切に取り扱うことをお約束いたします。
              </p>
            </div>

            <div className="legal-section">
              <h2>2. 個人情報の定義</h2>
              <p>
                本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に規定する個人情報、
                すなわち生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
                特定の個人を識別することができるもの（他の情報と容易に照合することができ、
                それにより特定の個人を識別することができることとなるものを含みます）を指します。
              </p>
            </div>

            <div className="legal-section">
              <h2>3. 個人情報の収集</h2>
              <h3>3.1 収集する情報</h3>
              <p>当社は、以下の個人情報を収集することがあります：</p>
              <ul>
                <li>氏名、メールアドレス、電話番号</li>
                <li>住所、年齢、性別</li>
                <li>サービス利用履歴、位置情報</li>
                <li>お問い合わせ内容、コミュニケーション履歴</li>
                <li>その他サービス提供に必要な情報</li>
              </ul>

              <h3>3.2 収集方法</h3>
              <p>当社は、以下の方法により個人情報を収集します：</p>
              <ul>
                <li>お客様がサービス利用時に入力される情報</li>
                <li>お客様からのお問い合わせやご連絡</li>
                <li>サービス利用に伴い自動的に生成される情報</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>4. 個人情報の利用目的</h2>
              <p>当社は、収集した個人情報を以下の目的で利用します：</p>
              <ul>
                <li>本サービスの提供および運営</li>
                <li>お客様への連絡、問い合わせ対応</li>
                <li>サービスの改善・開発</li>
                <li>利用統計データの作成（個人を特定できない形式）</li>
                <li>マーケティング・プロモーション活動</li>
                <li>法令に基づく対応</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>5. 個人情報の第三者提供</h2>
              <p>
                当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
              </p>
              <ul>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>6. 個人情報の管理</h2>
              <p>
                当社は、個人情報の正確性を保ち、これを安全に管理いたします。
                個人情報の漏洩、滅失、き損等を防止するため、適切なセキュリティ対策を実施し、
                継続的な改善に努めます。
              </p>
            </div>

            <div className="legal-section">
              <h2>7. 個人情報の開示・訂正等</h2>
              <p>
                お客様は、当社に対してご自身の個人情報の開示、訂正、追加、削除、利用停止を求めることができます。
                これらのご請求については、本人確認を行った上で、法令に従い対応いたします。
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Cookie等の取り扱い</h2>
              <p>
                当社のウェブサイトでは、お客様の利便性向上のためCookieを使用することがあります。
                Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができますが、
                一部機能が制限される場合があります。
              </p>
            </div>

            <div className="legal-section">
              <h2>9. プライバシーポリシーの変更</h2>
              <p>
                当社は、法令の改正等に伴い、本プライバシーポリシーを変更することがあります。
                変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点で効力を生じるものとします。
              </p>
            </div>

            <div className="legal-section">
              <h2>10. お問い合わせ</h2>
              <p>本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。</p>
              <div className="contact-info">
                <p><strong>株式会社FukusITo</strong></p>
                <p>メール：<a href="mailto:contact@fukusito.net">contact@fukusito.net</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
})

// Terms of Service Page
app.get('/terms', (c) => {
  return c.render(
    <div>
      <section className="legal-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <a href="/">ホーム</a>
              <span>/</span>
              <span>利用規約</span>
            </div>
            <h1 className="legal-title">
              <i className="fas fa-file-contract"></i>
              利用規約
            </h1>
            <p className="legal-subtitle">
              本サービスのご利用に関する規約
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-document">
            <div className="document-info">
              <p><strong>制定日：</strong>2025年9月15日</p>
              <p><strong>最終更新日：</strong>2025年9月15日</p>
            </div>

            <div className="legal-section">
              <h2>第1条（適用）</h2>
              <p>
                本利用規約（以下「本規約」といいます）は、株式会社FukusITo（以下「当社」といいます）が提供する
                HELP CONNECTサービス（以下「本サービス」といいます）の利用条件を定めるものです。
                本サービスをご利用いただく際には、本規約の全ての条項に同意していただく必要があります。
              </p>
            </div>

            <div className="legal-section">
              <h2>第2条（利用登録）</h2>
              <p>
                本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請し、
                当社がこれを承認することによって、利用登録が完了するものとします。
              </p>
              <p>当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります：</p>
              <ul>
                <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                <li>本規約に違反したことがある者からの申請である場合</li>
                <li>その他、当社が利用登録を相当でないと判断した場合</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>第3条（禁止事項）</h2>
              <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：</p>
              <ul>
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社、他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>第4条（本サービスの提供の停止等）</h2>
              <p>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：</p>
              <ul>
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>第5条（利用制限および登録抹消）</h2>
              <p>当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします：</p>
              <ul>
                <li>本規約のいずれかの条項に違反した場合</li>
                <li>登録事項に虚偽の事実があることが判明した場合</li>
                <li>当社からの連絡に対し、一定期間返答がない場合</li>
                <li>本サービスについて、最後の利用から一定期間利用がない場合</li>
                <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>第6条（免責事項）</h2>
              <p>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。</p>
              <p>当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。</p>
            </div>

            <div className="legal-section">
              <h2>第7条（サービス内容の変更等）</h2>
              <p>当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。</p>
            </div>

            <div className="legal-section">
              <h2>第8条（利用規約の変更）</h2>
              <p>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。</p>
            </div>

            <div className="legal-section">
              <h2>第9条（個人情報の取扱い）</h2>
              <p>当社は、本サービスの利用によって取得する個人情報については、当社の「<a href="/privacy">プライバシーポリシー</a>」に従い適切に取り扱うものとします。</p>
            </div>

            <div className="legal-section">
              <h2>第10条（準拠法・裁判管轄）</h2>
              <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
            </div>

            <div className="legal-section">
              <h2>お問い合わせ</h2>
              <p>本利用規約に関するお問い合わせは、以下までご連絡ください。</p>
              <div className="contact-info">
                <p><strong>株式会社FukusITo</strong></p>
                <p>メール：<a href="mailto:contact@fukusito.net">contact@fukusito.net</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
})

// Commercial Transaction Act Page - Removed (pre-incorporation startup)

// Contact Page
app.get('/contact', (c) => {
  return c.render(
    <div>
      <section className="legal-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <a href="/">ホーム</a>
              <span>/</span>
              <span>お問い合わせ</span>
            </div>
            <h1 className="legal-title">
              <i className="fas fa-envelope"></i>
              お問い合わせ
            </h1>
            <p className="legal-subtitle">
              ご質問・ご相談はお気軽にどうぞ
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>各種お問い合わせ先</h2>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>一般的なお問い合わせ</h3>
                <p>サービスに関するご質問やご相談</p>
                <div className="contact-methods">
                  <p><strong>メール：</strong><a href="mailto:contact@fukusito.net">contact@fukusito.net</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-life-ring"></i>
                </div>
                <h3>技術サポート</h3>
                <p>HELP CONNECTアプリの使い方やトラブル</p>
                <div className="contact-methods">
                  <p><strong>メール：</strong><a href="mailto:contact@fukusito.net">contact@fukusito.net</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3>事業提携・取材</h3>
                <p>事業提携のご提案やメディア取材のご依頼</p>
                <div className="contact-methods">
                  <p><strong>メール：</strong><a href="mailto:contact@fukusito.net">contact@fukusito.net</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>プライバシー・法務</h3>
                <p>個人情報や法的事項に関するお問い合わせ</p>
                <div className="contact-methods">
                  <p><strong>メール：</strong><a href="mailto:contact@fukusito.net">contact@fukusito.net</a></p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>お問い合わせフォーム</h2>
              <p className="form-description">
                こちらのフォームからもお問い合わせいただけます。<br />
                内容に応じて適切な担当者からご回答いたします。
              </p>
              
              <form className="contact-form" id="contactForm">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">お名前 <span className="required">*</span></label>
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">メールアドレス <span className="required">*</span></label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">電話番号</label>
                  <input type="tel" id="phone" name="phone" className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="organization" className="form-label">会社名・団体名</label>
                  <input type="text" id="organization" name="organization" className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="category" className="form-label">お問い合わせ種別 <span className="required">*</span></label>
                  <select id="category" name="category" className="form-select" required>
                    <option value="">選択してください</option>
                    <option value="general">一般的なお問い合わせ</option>
                    <option value="support">技術サポート</option>
                    <option value="business">事業提携・取材</option>
                    <option value="privacy">プライバシー・法務</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">件名 <span className="required">*</span></label>
                  <input type="text" id="subject" name="subject" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">お問い合わせ内容 <span className="required">*</span></label>
                  <textarea id="message" name="message" rows={6} className="form-textarea" required placeholder="お問い合わせ内容を詳しくご記入ください"></textarea>
                </div>

                <div className="form-group">
                  <label className="checkbox-container">
                    <input type="checkbox" id="privacy-agreement" name="privacy-agreement" required />
                    <span className="checkmark"></span>
                    <a href="/privacy" target="_blank">プライバシーポリシー</a>に同意する <span className="required">*</span>
                  </label>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary btn-large">
                    <i className="fas fa-paper-plane"></i>
                    送信する
                  </button>
                </div>
              </form>

              <div className="response-note">
                <h4>ご回答について</h4>
                <ul>
                  <li>お問い合わせ内容によって、ご回答までに数日お時間をいただく場合があります</li>
                  <li>土日祝日にいただいたお問い合わせは、翌営業日以降の対応となります</li>
                  <li>内容によってはお電話でご連絡させていただく場合があります</li>
                  <li>お急ぎの場合は、お電話でのお問い合わせをご利用ください</li>
                </ul>
              </div>
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
