import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AdminLayout from './components/AdminLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import Manage from './pages/admin/Manage'
import ProfileAdmin from './pages/admin/ProfileAdmin'
import SettingsAdmin from './pages/admin/SettingsAdmin'

function Protected() {
  return localStorage.getItem('showcase-admin-auth') === 'yes' ? <AdminLayout /> : <Navigate to="/admin" replace />
}
export default function App() {
  return <Routes>
    <Route element={<SiteLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
    <Route path="/admin" element={<Login />} />
    <Route element={<Protected />}>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/profile" element={<ProfileAdmin />} />
      <Route path="/admin/skills" element={<Manage type="skills" />} />
      <Route path="/admin/projects" element={<Manage type="projects" />} />
      <Route path="/admin/posts" element={<Manage type="posts" />} />
      <Route path="/admin/settings" element={<SettingsAdmin />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}
