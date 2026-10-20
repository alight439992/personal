import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [username,setUsername]=useState('admin')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const navigate=useNavigate()
  function submit(e:React.FormEvent){e.preventDefault();if(username==='admin'&&password==='admin123'){localStorage.setItem('showcase-admin-auth','yes');navigate('/admin/dashboard')}else setError('账号或密码不正确，请检查后重试。')}
  return <div className="login-screen"><div className="login-stars">✦　·　✧　　·　✦</div><form className="login-card" onSubmit={submit}><div className="login-logo">✦</div><div className="section-index">PERSONAL SPACE / ADMIN</div><h1>欢迎回来</h1><p className="muted">登录后管理你的个人展示网站。</p><label>用户名<input value={username} onChange={e=>setUsername(e.target.value)} required /></label><label>密码<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="请输入密码" /></label>{error&&<p className="error-message">{error}</p>}<button className="primary-button full-button">登录控制台 ↗</button><p className="login-hint">演示账号：admin　密码：admin123</p><a className="text-link" href="/">← 返回网站首页</a></form></div>
}
function Link({to,children}:{to:string;children?:React.ReactNode}) { return <a href={to} aria-label="返回首页">{children}</a> }
