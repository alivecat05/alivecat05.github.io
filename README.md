# Dawei Su — Academic Homepage

Live website: **https://alivecat05.github.io/**

中英文个人学术主页，使用原生 HTML、CSS 和 JavaScript，无构建步骤或运行时依赖。默认英文，语言切换会保存到浏览器。禁用 JavaScript 也能阅读全部英文内容。

## 本地预览

```bash
python3 -m http.server 8000
```

访问 http://localhost:8000 。

## 修改内容

- `index.html`：简介、研究兴趣、动态、论文、经历和联系方式。双语文案使用 `data-en`、`data-zh` 属性，并保留标签内的默认英文正文。
- `styles.css`：布局、字体、配色，以及手机和打印样式。
- `script.js`：语言切换、论文筛选。
- `assets/`：论文配图、BibTeX 引用、网站图标和分享预览图。
- `sitemap.xml`：更新内容时同步修改 `lastmod`。

新增论文时复制一个 `.publication` 块，修改内容、链接、图片与 BibTeX；`data-category` 可用 `embodied` 或 `multimodal`。若增加分类，需同时增加筛选按钮。论文页眉、页脚更新时间和 news 条目手动维护。

## GitHub Pages 部署

仓库名称必须是 `alivecat05.github.io`。当前部署方式：**Settings → Pages → Deploy from a branch → main / (root)**。`.nojekyll` 保证静态文件直接发布。提交并推送到 `main` 后，GitHub 自动重新部署。不需要 Actions workflow、Node.js 或第三方托管。

## 内容依据

- 姓名、公开邮箱与 GitHub 地址：[GitHub 个人资料](https://github.com/alivecat05)。
- 深圳大学、机器人工程专业、大晓机器人算法工程师实习生（2026.02 至今）、研究方向：本人提供；未推测学位、毕业年份、导师或工作职责。
- Google Scholar：[个人资料](https://scholar.google.com/citations?user=609eIA8AAAAJ)。制作时 Google 返回 429，未能读取完整论文列表，因此只收录已独立核实的三篇，不展示引用次数或 h-index。
- 最新论文：[arXiv:2610.22471](https://arxiv.org/abs/2610.22471)，[项目主页](https://sensenova.ai/has-gpt-6-astra-achieved-embodied-intelligence)。首页以团队署名简写，完整作者见论文和下载的 BibTeX。配图来自项目主页的 dexterous hands 实验图。
- KeyVT：[arXiv:2606.03100](https://arxiv.org/abs/2606.03100)，[官方仓库](https://github.com/alivecat05/KeyVT)。ICML 2026 录用信息来自论文页面；2026.05 动态和配图来自官方仓库。
- RETLLM：[arXiv:2602.22278](https://arxiv.org/abs/2602.22278)，[官方仓库](https://github.com/alivecat05/RETLLM)。ICASSP 2026 及 2026.01 录用动态与配图来自官方仓库。

论文配图归原作者所有，仅用于介绍本人的相关研究工作。首页线框图为概念示意，不是实验结果。没有使用未提供的个人照片。
