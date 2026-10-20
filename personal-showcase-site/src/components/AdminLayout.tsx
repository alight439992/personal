import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function AdminLayout() {
  const navigate = useNavigate()
  function logout() { localStorage.removeItem('showcase-admin-auth'); navigate('/admin') }
  return <div className="admin-shell">
    <aside className="sidebar">
      <div className="sidebar-brand">✦ 控制台</div>
      <p className="side-label">工作空间</p>
      <NavLink to="/admin/dashboard">▦　仪表盘</NavLink>
      <NavLink to="/admin/profile">☺　个人资料</NavLink>
      <NavLink to="/admin/skills">✧　技能管理</NavLink>
      <NavLink to="/admin/projects">◇　项目管理</NavLink>
      <NavLink to="/admin/posts">▤　博客管理</NavLink>
      <NavLink to="/admin/settings">⚙　网站设置</NavLink>
      <div className="sidebar-bottom"><button className="ghost-button" onClick={logout}>退出登录</button><NavLink to="/">← 返回网站</NavLink></div>
    </aside>
    <section className="admin-main"><header className="admin-top"><span>个人展示网站 / 管理后台</span><span className="status-pill">● 本地演示模式</span></header><Outlet /></section>
  </div>
}
