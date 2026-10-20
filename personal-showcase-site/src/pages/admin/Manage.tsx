import { useState } from 'react'
import { getStore, makeId, updateStore } from '../../api/storage'
import type { Post, Project, Skill } from '../../types'

type Kind='skills'|'projects'|'posts'
const config:Record<Kind,{title:string;singular:string;fields:{key:string;label:string;placeholder:string;type?:string}[]}> = {
 skills:{title:'技能管理',singular:'技能',fields:[{key:'name',label:'技能名称',placeholder:'例如：SQL 数据查询'},{key:'level',label:'熟练度（0-100）',placeholder:'65',type:'number'},{key:'category',label:'分类',placeholder:'例如：数据分析'}]},
 projects:{title:'项目管理',singular:'项目',fields:[{key:'title',label:'项目名称',placeholder:'项目标题'},{key:'description',label:'项目简介',placeholder:'用一两句话介绍项目'},{key:'tags',label:'标签（用英文逗号分隔）',placeholder:'SQL, 数据分析'},{key:'link',label:'链接',placeholder:'#contact'}]},
 posts:{title:'博客管理',singular:'文章',fields:[{key:'title',label:'文章标题',placeholder:'文章标题'},{key:'excerpt',label:'摘要',placeholder:'简短介绍文章'},{key:'date',label:'发布日期',placeholder:'2026-10-20',type:'date'},{key:'tags',label:'标签（用英文逗号分隔）',placeholder:'学习, 记录'},{key:'content',label:'正文',placeholder:'支持用 ## 开头表示小标题',type:'textarea'}]}
}
export default function Manage({type}:{type:Kind}) {
 const meta=config[type]
 const [items,setItems]=useState<any[]>(getStore()[type])
 const [editing,setEditing]=useState<any|null>(null)
 const [showForm,setShowForm]=useState(false)
 const [notice,setNotice]=useState('')
 function blank(){return type==='skills'?{name:'',level:60,category:'数据分析'}:type==='projects'?{title:'',description:'',tags:'',link:'#contact',featured:true}:{title:'',excerpt:'',date:new Date().toISOString().slice(0,10),tags:'',content:'',published:true}}
 function open(item?:any){setEditing(item?{...item,tags:Array.isArray(item.tags)?item.tags.join(', '):item.tags}:blank());setShowForm(true);setNotice('')}
 function persist(next:any[]){setItems(next);updateStore(type,next)}
 function save(e:React.FormEvent){e.preventDefault();const value={...editing,id:editing.id||makeId(type)};if(type==='skills')value.level=Math.min(100,Math.max(0,Number(value.level)||0));if(type==='projects'||type==='posts')value.tags=String(value.tags||'').split(',').map((x:string)=>x.trim()).filter(Boolean);if(type==='posts'&&value.published===undefined)value.published=true;const next=editing.id?items.map(x=>x.id===value.id?value:x):[value,...items];persist(next);setShowForm(false);setNotice('已保存，刷新页面后仍会保留。')}
 function remove(id:string){if(!confirm('确定删除这条内容吗？此操作无法撤销。'))return;persist(items.filter(x=>x.id!==id));setNotice('已删除。')}
 function toggle(id:string){const next=items.map(x=>x.id===id?{...x,published:!x.published}:x);persist(next)}
 return <div className="admin-content"><div className="admin-page-title"><div><span className="section-index">CONTENT MANAGER</span><h1>{meta.title}</h1><p className="muted">在这里新增、编辑或删除网站内容。</p></div><button className="primary-button" onClick={()=>open()}>＋ 新增{meta.singular}</button></div>{notice&&<div className="success-banner">✦ {notice}</div>}
 {showForm&&<div className="admin-panel edit-panel"><div className="panel-heading"><h2>{editing.id?'编辑':'新增'}{meta.singular}</h2><button className="close-button" onClick={()=>setShowForm(false)}>×</button></div><form className="admin-form" onSubmit={save}>{meta.fields.map(f=><label key={f.key}>{f.label}{f.type==='textarea'?<textarea required={f.key==='content'} rows={5} value={editing[f.key]??''} placeholder={f.placeholder} onChange={e=>setEditing({...editing,[f.key]:e.target.value})}/>:<input required={['name','title'].includes(f.key)} type={f.type||'text'} value={editing[f.key]??''} placeholder={f.placeholder} onChange={e=>setEditing({...editing,[f.key]:e.target.value})}/>}</label>)}{type==='posts'&&<label className="checkbox-label"><input type="checkbox" checked={!!editing.published} onChange={e=>setEditing({...editing,published:e.target.checked})}/> 公开发布</label>}<div className="form-actions"><button type="button" className="secondary-button" onClick={()=>setShowForm(false)}>取消</button><button className="primary-button">保存内容</button></div></form></div>}
 <div className="admin-panel"><div className="panel-heading"><div><h2>全部内容 <span className="inline-count">{items.length}</span></h2></div></div>{items.length===0?<div className="empty-state">还没有内容，点击右上角新增。</div>:<div className="manage-list">{items.map((item,i)=><div className="manage-row" key={item.id}><div className="manage-index">{String(i+1).padStart(2,'0')}</div><div className="manage-info"><strong>{item.name||item.title||'未命名'}</strong><p>{item.description||item.excerpt||item.category||(item.tags||[]).join?.(', ')||''}</p></div>{type==='posts'&&<button className={`publish-chip ${item.published?'is-published':''}`} onClick={()=>toggle(item.id)}>{item.published?'已公开':'未公开'}</button>}<button className="small-action" onClick={()=>open(item)}>编辑</button><button className="small-action danger" onClick={()=>remove(item.id)}>删除</button></div>)}</div>}</div></div>
}
