# 易经风水 · 命理玄学 H5

> 一款纯前端的中国传统命理工具，无需后端，开箱即用。

**在线体验：** https://zl-admin.github.io/project002/

---

## 功能页面

| 页面 | 功能描述 |
|------|----------|
| `index.html` | 首页：今日运势、卦象、万年历、功能入口 |
| `bazi.html` | 八字算命：四柱排盘、五行分析、格局、大运 |
| `daily.html` | 每日一签：今日卦象、摇卦起课、六十四卦浏览 |
| `dream.html` | 周公解梦：220+ 条词典，关键词搜索 + 分类筛选 |
| `jiugong.html` | 九宫算命：九星飞泊、本命宫、流年运势 |
| `wish.html` | 许愿灯：SVG 灯笼放飞动画、祈福文案 |
| `fengshui.html` | 风水罗盘：可旋转罗盘、八卦方位、居家建议 |

## 核心 JS 模块

| 文件 | 说明 |
|------|------|
| `js/bazi.js` | 八字引擎：儒略日算日柱、天干地支、五行旺衰、喜忌神、大运 |
| `js/hexagram.js` | 六十四卦：卦辞、象传、综合释义、吉凶标签 |
| `js/dream.js` | 解梦词典：220+ 条，支持精确 / 模糊搜索 |

## 技术栈

- 纯 HTML / CSS / JavaScript，无任何框架依赖
- 移动端优先，适配 375–480px 宽度
- 中国风配色：深红 `#c0392b` · 金色 `#d4a017` · 暗底 `#1c0a00`

## 本地运行

```bash
git clone https://github.com/ZL-admin/project002.git
cd project002
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```

## 目录结构

```
project002/
├── index.html
├── bazi.html
├── daily.html
├── dream.html
├── jiugong.html
├── wish.html
├── fengshui.html
├── css/
│   └── style.css
└── js/
    ├── bazi.js
    ├── hexagram.js
    └── dream.js
```

## 免责声明

本工具内容仅供娱乐参考，不构成任何决策建议。
