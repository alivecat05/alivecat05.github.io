# Dawei Su — Academic Homepage

Live website: **https://alivecat05.github.io/**

Y2K 千禧年亚文化风中英文个人主页：黑绿底色、酸性绿点缀、银色金属字、光盘与轨道图形、早期电脑窗口。主视觉不使用人物装饰；研究档案展示真实论文框架图或官方总览图，保留原图中的实验样例。背景带移动网格、扫描光带、沿轨道运动的光点与桌面鼠标视差；右下角固定开关可暂停动效，偏好保存在本机，并自动遵循系统减少动态效果设置。系统减少动态效果开启时，开关明确显示已减弱状态；页面不可见时暂停动画。使用原生 HTML、CSS 和 JavaScript，无构建步骤或运行时依赖。默认英文，语言切换会保存到浏览器。禁用 JavaScript 也能阅读全部英文内容。

## 本地预览

```bash
python3 -m http.server 8000
```

访问 http://localhost:8000 。

## 修改内容

- `index.html`：简介、研究兴趣、动态、论文、经历和联系方式。双语文案使用 `data-en`、`data-zh` 属性，并保留标签内的默认英文正文。
- `styles.css`：布局、字体、配色，以及手机和打印样式。
- `script.js`：语言切换、论文筛选、动效偏好与轻量鼠标视差。
- `assets/`：论文配图、BibTeX 引用、网站图标和分享预览图。
- `sitemap.xml`：更新内容时同步修改 `lastmod`。

新增论文时复制一个 `.publication` 块，修改内容、链接、论文框架图与 BibTeX；`data-category` 可用 `embodied`、`multimodal` 或 `interpretability`。若增加分类，需同时增加筛选按钮。论文页眉、页脚更新时间和 news 条目手动维护。

## GitHub Pages 部署

仓库名称必须是 `alivecat05.github.io`。当前部署方式：**Settings → Pages → Deploy from a branch → main / (root)**。`.nojekyll` 保证静态文件直接发布。提交并推送到 `main` 后，GitHub 自动重新部署。不需要 Actions workflow、Node.js 或第三方托管。

## 内容依据

- 姓名、公开邮箱与 GitHub 地址：[GitHub 个人资料](https://github.com/alivecat05)。
- 深圳大学、机器人工程专业、大晓机器人算法工程师实习生（2026.02 至今）、研究方向：本人提供；未推测学位、毕业年份、导师或工作职责。
- Google Scholar：[个人资料](https://scholar.google.com/citations?user=609eIA8AAAAJ)。制作时 Google 返回 429，未能读取完整论文列表。目前收录五篇经论文原文、官方项目或会议页面核实的成果，不展示未经核实的引用次数或 h-index。
- 最新论文：[arXiv:2610.22471](https://arxiv.org/abs/2610.22471)，[项目主页](https://sensenova.ai/has-gpt-6-astra-achieved-embodied-intelligence)。首页以团队署名简写，完整作者见论文和下载的 BibTeX。配图使用论文 Figure 2 的 ICL 协议原始框架图：[icl_protocol.svg](https://arxiv.org/html/2610.22471v1/icl_protocol.svg)。
- KeyVT：[arXiv:2606.03100](https://arxiv.org/abs/2606.03100)，[官方仓库](https://github.com/alivecat05/KeyVT)。ICML 2026 录用信息来自论文页面；2026.05 动态和配图来自官方仓库。
- RETLLM：[arXiv:2602.22278](https://arxiv.org/abs/2602.22278)，[官方仓库](https://github.com/alivecat05/RETLLM)。ICASSP 2026 及 2026.01 录用动态与配图来自官方仓库。
- Sparsemax SAE：[arXiv:2604.14925](https://arxiv.org/abs/2604.14925)，[CVPR 2026 官方论文页](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Improving_Sparse_Autoencoder_with_Dynamic_Attention_CVPR_2026_paper.html)，[官方仓库](https://github.com/qyj-bkjx/Sparsemax-SAE)。作者、会议和正式 BibTeX 来自 CVF；配图来自官方仓库的 `figs/framework.png`。
- ACE-Data-0：[arXiv:2607.28625](https://arxiv.org/abs/2607.28625)，[项目主页](https://ace-data-engine.github.io/ACE-Data-0/)，[数据集](https://huggingface.co/datasets/ACERobotics/ACE-Data-0)。作者名单来自 arXiv，配图来自项目主页的 `assets/images/data-teaser.webp`。

## 机构标志

- 大晓机器人：原始 SVG 来自 [ACE Robotics 官网](https://www.acerobotics.com/images/logo.svg)。
- 深圳大学：原始 PNG 来自 [深圳大学官网](https://www.szu.edu.cn/images/logo_03.png)。

标志保持原始比例与配色，仅用于标注本人所属机构，不表示机构对本网站的额外背书。论文配图归原作者所有，仅用于介绍本人的相关研究工作。

## 视觉素材

- 首页光盘、轨道、网格、扫描光带由 CSS 绘制，无图片下载或第三方动效库。
- 研究档案使用 `embodied-framework.svg`、`ace-data-0.webp`、`keyvt.png`、`sparsemax-sae.png` 和 `retllm.png`，来源见「内容依据」。保持原图比例、配色和完整内容；点击图片可在新标签页查看原图。
- `assets/favicon.svg`：光盘与轨道图标。
- `assets/social-y2k.png`：与主页一致的无人物分享预览图。
- 字体使用系统无衬线与等宽字体，不加载第三方字体。
- 人物限制适用于主视觉与装饰；论文原图中的人物实验样例按真实论文框架图要求保留。旧动漫插画、旧分享图和抽象论文封面已移除。
