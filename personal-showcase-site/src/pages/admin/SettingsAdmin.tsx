import { useState } from 'react'
import { getStore, updateStore } from '../../api/storage'
export default function SettingsAdmin(){
 const [settings,setSettings]=useState(getStore().settings);const [saved,setSaved]=useState(false)
 function submit(e:React.FormEvent){e.preventDefault();updateStore('settings',settings);setSaved(true)}
 return <div className="admin-content"><div className="admin-page-title"><div><span className="section-index">SITE PREFERENCES</span><h1>网站设置</h1><p className="muted">自定义网站名称与副标题。</p></div></div>{saved&&<div className="success-banner">✦ 网站设置已保存，刷新后仍会保留。</div>}<div className="admin-panel"><form className="admin-form profile-form" onSubmit={submit}><label>网站名称<input required value={settings.siteTitle} onChange={e=>setSettings({...settings,siteTitle:e.target.value})}/></label><label>英文副标题<input value={settings.subtitle} onChange={e=>setSettings({...settings,subtitle:e.target.value})}/></label><label>主题点缀色<input type="color" value={settings.accent} onChange={e=>setSettings({...settings,accent:e.target.value})}/></label><div className="admin-note"><span>i</span><div><strong>说明</strong><p>当前版本为本地演示版，主题颜色选择器会保存设置，但页面的主要渐变装饰仍使用默认紫蓝色。</p></div></div><button className="primary-button">保存设置</button></form></div></div>
}
