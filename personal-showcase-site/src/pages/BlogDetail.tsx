import { Link, useParams } from 'react-router-dom'
import { getStore } from '../api/storage'
export default function BlogDetail() {
  const { id } = useParams()
  const post = getStore().posts.find(p=>p.id===id && p.published)
  if (!post) return <div className="page-container subpage"><h1>没有找到这篇文章。</h1><Link className="text-link" to="/blog">← 返回博客</Link></div>
  return <article className="page-container article-page"><Link className="text-link" to="/blog">← 返回文章列表</Link><div className="section-index article-date">JOURNAL / {post.date}</div><h1>{post.title}</h1><p className="article-excerpt">{post.excerpt}</p><div className="tag-row">{post.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div><div className="article-content">{post.content.split('\n').map((line,i)=>line.startsWith('## ')?<h2 key={i}>{line.slice(3)}</h2>:line?<p key={i}>{line}</p>:<br key={i}/>)}</div></article>
}
