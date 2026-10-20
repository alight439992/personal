import type { Store } from '../types'

const KEY = 'personal-showcase-store-v1'
const demo: Store = {
  profile: {
    name: '你的名字',
    tagline: '用好奇心探索世界，用行动记录成长。',
    bio: '你好，欢迎来到我的个人星球。我正在学习数据分析、产品思维与网页开发，喜欢把感兴趣的事情整理成清晰、有趣的作品。',
    location: '中国 · 大连',
    email: 'hello@example.com',
    avatar: '✦'
  },
  skills: [
    { id: 's1', name: 'SQL 数据查询', level: 65, category: '数据分析' },
    { id: 's2', name: 'Excel 数据整理', level: 60, category: '数据分析' },
    { id: 's3', name: '信息搜集与归纳', level: 85, category: '通用能力' },
    { id: 's4', name: '文档与内容整理', level: 88, category: '通用能力' }
  ],
  projects: [
    { id: 'p1', title: '粉丝周边购买行为分析', description: '围绕虚构的偶像周边商城数据，观察商品类别、订单金额与购买趋势，练习 SQL 分析思路。', tags: ['SQL', '数据分析', '项目练习'], link: '#contact', featured: true },
    { id: 'p2', title: '跨平台内容整理档案', description: '将多个平台的公开内容按时间线整理，建立便于检索的资料索引与专题记录。', tags: ['信息搜集', '内容运营'], link: '#contact', featured: true },
    { id: 'p3', title: '个人展示网站', description: '使用 React、TypeScript 与 Vite 搭建的个人网站，包含内容展示与本地后台管理。', tags: ['React', 'TypeScript'], link: '#contact', featured: false }
  ],
  posts: [
    { id: 'b1', title: '把兴趣变成可以复盘的项目', excerpt: '记录如何从一个真实兴趣出发，拆解问题、整理数据，并形成可展示的成果。', content: '## 从兴趣出发\n\n一个项目不一定要从宏大的问题开始。可以先明确自己想知道什么，再把问题拆成可以观察和验证的小问题。\n\n## 记录过程\n\n记录数据来源、处理规则、分析过程和结论。项目的价值不仅是结果，也包括你如何思考。', date: '2026-10-12', tags: ['成长记录', '项目'], published: true },
    { id: 'b2', title: '我的信息整理方法', excerpt: '从零散收藏到有结构的时间线：让资料更容易回看与复用。', content: '## 先建立统一入口\n\n为每条资料保留日期、来源、主题和简短说明。\n\n## 再定期复盘\n\n定期检查重复信息和缺失信息，让资料库始终保持可用。', date: '2026-10-08', tags: ['效率', '整理'], published: true }
  ],
  settings: { siteTitle: '我的个人星球', subtitle: 'A little space of my own', accent: '#a78bfa' }
}

export function initializeStore() {
  if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, JSON.stringify(demo))
}
export function getStore(): Store {
  initializeStore()
  try { return JSON.parse(localStorage.getItem(KEY) || '') as Store }
  catch { localStorage.setItem(KEY, JSON.stringify(demo)); return demo }
}
export function saveStore(store: Store) { localStorage.setItem(KEY, JSON.stringify(store)) }
export function updateStore<K extends keyof Store>(key: K, value: Store[K]) {
  const store = getStore()
  store[key] = value
  saveStore(store)
  return store
}
export function makeId(prefix = 'item') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}
