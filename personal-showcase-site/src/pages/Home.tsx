import { Link } from 'react-router-dom'
import { getStore } from '../api/storage'

export default function Home() {
  const { profile, skills, projects, posts } = getStore()
  return <div className="page-container">
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse-dot" /> WELCOME TO MY UNIVERSE</div>
        <h1>你好，我是<br /><span>{profile.name}</span><i className="sparkle">✦</i></h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="muted hero-bio">{profile.bio}</p>
        <div className="hero-actions"><a className="primary-button" href="#projects">看看我的作品 <span>↘</span></a><Link className="secondary-button" to="/contact">和我聊聊</Link></div>
        <div className="hero-meta"><span>⌖ {profile.location}</span><span>✧ 保持好奇，持续生长</span></div>
      </div>
      <div className="orbit-art" aria-label="星球装饰"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="planet"><span>✦</span></div><div className="orbit-star star-a">✧</div><div className="orbit-star star-b">✦</div><div className="orbit-star star-c">✳</div><div className="orbit-label">MY LITTLE<br />UNIVERSE</div></div>
      <div className="hero-bottom-note">SCROLL TO EXPLORE　↓</div>
    </section>
    <section className="section about-section" id="about">
      <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>关于我<span>。</span></h2><p>正在探索自己的可能性，也认真记录每一步。</p></div>
      <div className="about-grid"><div className="about-card large-card"><div className="card-icon">☾</div><h3>关于这个星球</h3><p>{profile.bio}</p><div className="mini-orbit">✦　✧　·　✧　✦</div></div><div className="about-card quote-card"><span className="quote-mark">“</span><p>不必一下子抵达远方，<br />每一次好奇都是新的起点。</p><span className="quote-caption">A NOTE TO MYSELF</span></div></div>
    </section>
    <section className="section" id="skills"><div className="section-heading"><span className="section-index">02 / SKILLS</span><h2>技能星图<span>。</span></h2><p>持续学习中，以下是我目前正在积累的能力。</p></div>
      <div className="skill-grid">{skills.map(s => <div className="skill-card" key={s.id}><div className="skill-top"><span>{s.name}</span><span className="skill-percent">{s.level}%</span></div><div className="progress-track"><div className="progress-fill" style={{width:`${s.level}%`}} /></div><div className="skill-category">{s.category}</div></div>)}</div>
    </section>
    <section className="section" id="projects"><div className="section-heading section-row"><div><span className="section-index">03 / SELECTED WORK</span><h2>项目档案<span>。</span></h2><p>把问题拆小，把想法做出来。</p></div><span className="count-badge">0{projects.length} PROJECTS</span></div>
      <div className="project-grid">{projects.map((p, i) => <article className="project-card" key={p.id}><div className={`project-art art-${i%3}`}><span className="project-number">0{i+1}</span><span className="project-symbol">{['✺','⌘','✧'][i%3]}</span><span className="project-art-caption">A WORK IN PROGRESS</span></div><div className="project-body"><div className="tag-row">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div><h3>{p.title}</h3><p>{p.description}</p><a href={p.link} className="text-link">了解更多 ↗</a></div></article>)}</div>
    </section>
    <section className="section blog-preview"><div className="section-heading section-row"><div><span className="section-index">04 / JOURNAL</span><h2>最近的记录<span>。</span></h2><p>想法、过程，以及一些小小的发现。</p></div><Link to="/blog" className="text-link">全部文章 ↗</Link></div><div className="post-list">{posts.filter(p=>p.published).slice(0,3).map(p=><Link to={`/blog/${p.id}`} className="post-row" key={p.id}><span className="post-date">{p.date}</span><span className="post-title">{p.title}</span><span className="post-arrow">↗</span></Link>)}</div></section>
    <section className="contact-banner" id="contact"><div><span className="section-index">05 / SAY HELLO</span><h2>有想法，就来聊聊吧。</h2><p>欢迎交流项目、学习方法，或者任何有趣的事情。</p></div><Link to="/contact" className="primary-button">联系我　↗</Link></section>
  </div>
}
