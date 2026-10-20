# 个人展示网站（星空主题）

这是根据作业需求文档整理的 React + TypeScript + Vite 项目，包含个人展示前台、博客列表/详情、联系表单，以及 `/admin` 后台管理。

## 本地运行（Windows）

1. 先安装 Node.js 的 LTS 版本：https://nodejs.org/
2. 解压整个 ZIP 文件，进入解压后的 `personal-showcase-site` 文件夹。
3. 在这个文件夹的空白处按住 Shift 点击鼠标右键，选择“在此处打开终端”；或者在文件夹地址栏输入 `cmd` 后回车。
4. 输入以下命令，每行输入后按回车：

   ```bash
   npm install
   npm run dev
   ```

5. 终端出现 `Local: http://localhost:5173/` 后，按住 Ctrl 点击该地址，或复制到浏览器打开。

注意：不要把 `npm install` 或 `npm run dev` 输入到浏览器地址栏；它们是在终端/CMD里运行的命令。

## 后台登录

- 地址：本地网站地址后面加 `/admin`，例如 `http://localhost:5173/admin`
- 用户名：`admin`
- 密码：`admin123`

本项目是课程作业演示版，账号验证和数据均保存在浏览器本地，不适合真实生产环境。清除浏览器本地存储会重置演示数据。

## 部署建议

可将整个项目上传到 GitHub，再导入 Vercel 或 Cloudflare Pages。构建命令为 `npm run build`，输出目录为 `dist`。部署前先在本地确认能打开和构建成功。

## 主要目录

- `src/api/`：统一的 localStorage 数据接口
- `src/types/`：数据类型
- `src/components/`：可复用组件
- `src/pages/`：前台页面
- `src/pages/admin/`：后台页面
- `src/styles.css`：页面样式

## 作业提交提醒

请按老师的问卷/截图要求，分别提交需求/设计文档截图、部署后前台与后台截图、公开访问域名。部署后的域名需要你完成托管平台发布后才能获得，本项目不会自动生成公网网址。
