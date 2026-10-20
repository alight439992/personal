import { Link, NavLink, Outlet } from 'react-router-dom'
import { getStore } from '../api/storage'

export default function SiteLayout() {
  const store = getStore()
  return <div className="site-shell">
    <header className="topbar">
      <Link className="brand" to="/"><span className="brand-mark">✦</span>{store.settings.siteTitle}</Link>
      <nav>
        <NavLink to="/" end>首页</NavLink>
        <NavLink to="/blog">博客</NavLink>
        <NavLink to="/contact">联系</NavLink>
        <Link className="admin-link" to="/admin">管理后台 ↗</Link>
      </nav>
    </header>
    <main><Outlet /></main>
    <footer className="footer"><span>✦ 在自己的小小星球上，慢慢发光。</span><span>© 2026 {store.profile.name}</span></footer>
  </div>
}
