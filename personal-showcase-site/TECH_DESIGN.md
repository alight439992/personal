# 技术设计文档

## 技术栈
- React 18
- TypeScript
- Vite
- React Router
- 原生 CSS
- localStorage（模拟数据持久化）

## 结构
- `src/api/`: 统一数据访问层
- `src/types/`: 类型定义
- `src/components/`: 导航、布局等可复用组件
- `src/pages/`: 首页、博客、联系页
- `src/pages/admin/`: 后台登录、仪表盘、内容管理
- `src/styles.css`: 全局样式与响应式样式

## 数据流
页面通过 `src/api/storage.ts` 读写数据；页面组件不直接分散操作 localStorage。首次访问时初始化演示数据。

## 部署
执行 `npm run build`，构建产物位于 `dist/`。可部署至 Vercel 或 Cloudflare Pages，构建命令 `npm run build`，输出目录 `dist`。
