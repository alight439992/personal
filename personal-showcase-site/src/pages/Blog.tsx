import { Link } from 'react-router-dom'
import { getStore } from '../api/storage'
export default function Blog() {
  const posts = getStore().posts.filter(p=>p.published).sort((a,b)=>b.date.localeCompare(a.date))
  return <div className="page-container subpage"><div className="eyebrow"><span className="pulse-dot" /> PERSONAL JOURNAL</div><h1 className="subpage-title">想法与记录<span>。</span></h1><p className="muted">一些学习笔记、项目过程和日常灵感。</p><div className="blog-cards">{posts.map(p=><Link to={`/blog/${p.id}`} className="blog-card" key={p.id}><div className="blog-card-top"><span className="section-index">JOURNAL / {p.date}</span><span>↗</span></div><h2>{p.title}</h2><p>{p.excerpt}</p><div className="tag-row">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div></Link>)}</div>{posts.length===0&&<div className="empty-state">还没有公开文章，可以在后台添加。</div>}</div>
}
