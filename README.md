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

新增论文时复制一个 `.publication` 块，修改内容、链接、图片与 BibTeX；`data-category` 可用 `embodied`、`multimodal` 或 `interpretability`。若增加分类，需同时增加筛选按钮。论文页眉、页脚更新时间和 news 条目手动维护。

## GitHub Pages 部署

仓库名称必须是 `alivecat05.github.io`。当前部署方式：**Settings → Pages → Deploy from a branch → main / (root)**。`.nojekyll` 保证静态文件直接发布。提交并推送到 `main` 后，GitHub 自动重新部署。不需要 Actions workflow、Node.js 或第三方托管。

## 内容依据

- 姓名、公开邮箱与 GitHub 地址：[GitHub 个人资料](https://github.com/alivecat05)。
- 深圳大学、机器人工程专业、大晓机器人算法工程师实习生（2026.02 至今）、研究方向：本人提供；未推测学位、毕业年份、导师或工作职责。
- Google Scholar：[个人资料](https://scholar.google.com/citations?user=609eIA8AAAAJ)。制作时 Google 返回 429，未能读取完整论文列表。目前收录五篇经论文原文、官方项目或会议页面核实的成果，不展示未经核实的引用次数或 h-index。
- 最新论文：[arXiv:2610.22471](https://arxiv.org/abs/2610.22471)，[项目主页](https://sensenova.ai/has-gpt-6-astra-achieved-embodied-intelligence)。首页以团队署名简写，完整作者见论文和下载的 BibTeX。配图来自项目主页的 dexterous hands 实验图。
- KeyVT：[arXiv:2606.03100](https://arxiv.org/abs/2606.03100)，[官方仓库](https://github.com/alivecat05/KeyVT)。ICML 2026 录用信息来自论文页面；2026.05 动态和配图来自官方仓库。
- RETLLM：[arXiv:2602.22278](https://arxiv.org/abs/2602.22278)，[官方仓库](https://github.com/alivecat05/RETLLM)。ICASSP 2026 及 2026.01 录用动态与配图来自官方仓库。
- Sparsemax SAE：[arXiv:2604.14925](https://arxiv.org/abs/2604.14925)，[CVPR 2026 官方论文页](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Improving_Sparse_Autoencoder_with_Dynamic_Attention_CVPR_2026_paper.html)，[官方仓库](https://github.com/qyj-bkjx/Sparsemax-SAE)。作者、会议和正式 BibTeX 来自 CVF；配图来自官方仓库的 `figs/framework.png`。
- ACE-Data-0：[arXiv:2607.28625](https://arxiv.org/abs/2607.28625)，[项目主页](https://ace-data-engine.github.io/ACE-Data-0/)，[数据集](https://huggingface.co/datasets/ACERobotics/ACE-Data-0)。作者名单来自 arXiv，配图来自项目主页的 `assets/images/data-teaser.webp`。

## 机构标志

- 大晓机器人：原始 SVG 来自 [ACE Robotics 官网](https://www.acerobotics.com/images/logo.svg)。
- 深圳大学：原始 PNG 来自 [深圳大学官网](https://www.szu.edu.cn/images/logo_03.png)。

标志保持原始比例与配色，仅用于标注本人所属机构，不表示机构对本网站的额外背书。论文配图归原作者所有，仅用于介绍本人的相关研究工作。首页线框图为概念示意，不是实验结果。没有使用未提供的个人照片。
