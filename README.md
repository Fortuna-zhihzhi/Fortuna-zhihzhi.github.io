# Fortuna 求职向像素博客

纯 **HTML / CSS / JS** 静态站，视觉为像素 RPG + 三栏布局，托管在 GitHub Pages。

> 仓库地址：<https://github.com/Fortuna-zhihzhi/Fortuna-zhizhi.github.io>  
> 站点数据：改 [`data/site.js`](./data/site.js) 即可，无需改页面结构。

## 栏目

| 页面 | 内容 |
|------|------|
| `index.html` | 概览 / 精选项目 / 快速入口 |
| `projects.html` | 项目展示（角色、亮点、日志入口） |
| `logs.html` | 分项目学习日志（可 `?project=` 过滤） |
| `awards.html` | 奖项 + 学生工作 |
| `stack.html` | 技术栈熟练度 |
| `papers.html` | 论文阅读笔记 |
| `opensource.html` | 开源源码区 |

## 本地预览

```bash
cd portfolio-site   # 或本仓库根目录
python3 -m http.server 8080
# 浏览器打开 http://127.0.0.1:8080
```

## 发布到 GitHub Pages

1. 把本目录文件推到仓库 `main`（或 `master`）根目录。
2. 仓库 **Settings → Pages**：
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
3. 访问地址注意命名差异：
   - GitHub 用户名：`Fortuna-zhihzhi`
   - 本仓库名：`Fortuna-zhizhi.github.io`
   - 用户主页站要求仓库名严格为 **`用户名.github.io`**。  
     若两者不一致，Pages 可能落在：
     ```text
     https://fortuna-zhihzhi.github.io/Fortuna-zhizhi.github.io/
     ```
   - 若你希望地址是 `https://fortuna-zhihzhi.github.io/`，请把仓库改名为：
     ```text
     Fortuna-zhihzhi.github.io
     ```

## 求职投递前请替换

在 `data/site.js` 中修改：

- `profile.email` / `github` / `bio`
- `awards` / `studentWork` 示例条目
- `papers` 中的示例论文
- 项目仓库真实链接

## 设计说明

- 风格参考像素 RPG / 菜单式三栏信息架构。
- **未使用**任何任天堂宝可梦等第三方 IP 的官方立绘或商标素材；图标为 CSS 几何像素块。
- 字体：Google Fonts — Press Start 2P、VT323、站酷快乐体。

## 目录

```text
.
├── index.html
├── projects.html
├── logs.html
├── awards.html
├── stack.html
├── papers.html
├── opensource.html
├── css/style.css
├── js/app.js
├── data/site.js
└── README.md
```
