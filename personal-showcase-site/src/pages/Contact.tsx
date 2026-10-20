import { useState } from 'react'
import { getStore } from '../api/storage'
export default function Contact() {
  const profile = getStore().profile
  const [sent,setSent] = useState(false)
  function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); e.currentTarget.reset() }
  return <div className="page-container subpage contact-page"><div className="eyebrow"><span className="pulse-dot" /> LET'S CONNECT</div><h1 className="subpage-title">给我留个消息<span>。</span></h1><p className="muted">可以聊聊项目、学习，或者你最近发现的有趣事情。</p><div className="contact-layout"><form className="contact-form" onSubmit={submit}><label>你的称呼<input required placeholder="怎么称呼你？" /></label><label>邮箱地址<input type="email" required placeholder="name@example.com" /></label><label>想说的话<textarea required rows={5} placeholder="写下你的消息……" /></label><button className="primary-button" type="submit">发送消息 ↗</button>{sent&&<p className="success-message">✦ 已收到！这是前端演示表单，不会向服务器发送邮件。</p>}</form><aside className="contact-info"><div className="contact-orb">✦</div><h3>保持联系</h3><p className="muted">期待交换想法与灵感。</p><div className="contact-detail"><span>EMAIL</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div><div className="contact-detail"><span>LOCATION</span><p>{profile.location}</p></div></aside></div></div>
}
