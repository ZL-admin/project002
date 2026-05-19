# 天机命理 · H5 命理应用 v2

> 深空暗金主题的沉浸式中国传统命理工具，纯前端、无后端、开箱即用。

**在线体验：** https://zl-admin.github.io/project002/

---

## 功能页面

| 页面 | 新名称 | 功能描述 |
|------|--------|----------|
| `index.html` | 首页仪表盘 | 今日运势（事业/爱情/财运/健康）+ 宜忌 + 穿衣指南 + 今日卦象 |
| `destiny.html` | 命运档案 | 四柱八字排盘、五行分析、日主强弱、大运流年 |
| `sign.html` | 今日签 | 64卦翻牌动效，同一天结果相同，制造每日回访 |
| `yuanfen.html` | 缘分测算 | 两人生日→五行契合度报告，支持分享 |
| `dream.html` | 昨夜的梦 | 220+ 条周公解梦词典，分类搜索 + 热门标签 |
| `jiugong.html` | 数字命运 | 生命数字解析 + 九宫飞星图 |
| `wish.html` | 星愿 | 许愿灯放飞动效，心愿记录存于本地 |
| `fengshui.html` | 能量空间 | 旋转风水罗盘、八方能量、居家风水建议 |

## 核心 JS 模块

| 文件 | 说明 |
|------|------|
| `js/daily.js` | 每日运势引擎：种子随机（同日同结果）、宜忌池、穿衣指南（五行联动）、农历显示 |
| `js/bazi.js` | 八字引擎：儒略日算日柱、天干地支、五行旺衰、喜忌神、大运 |
| `js/hexagram.js` | 六十四卦完整数据：卦辞、象传、综合释义、吉凶标签 |
| `js/dream.js` | 解梦词典：220+ 条，支持关键词 / 分类搜索 |

## 设计风格

| 项目 | 规格 |
|------|------|
| 主色调 | 深宇宙蓝紫 `#0d0d1a` + 金色 `#c9a84c` |
| 卡片质感 | 毛玻璃 `backdrop-filter: blur(12px)` + 金色描边 |
| 背景动效 | Canvas 星粒闪烁 |
| 字体 | Noto Serif SC（衬线标题）+ Noto Sans SC（细圆体正文） |
| 动效 | 卡片浮入、数值滚动、翻牌、星愿放飞、罗盘旋转 |

## 技术栈

- 纯 HTML / CSS / JavaScript，无任何框架或构建工具
- 移动端优先，适配 375–480px 宽度
- LocalStorage 持久化（命运档案、许愿记录）
- 运势算法使用日期种子，同日访问结果一致

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
├── index.html        # 首页仪表盘
├── destiny.html      # 命运档案
├── sign.html         # 今日签
├── yuanfen.html      # 缘分测算
├── dream.html        # 昨夜的梦
├── jiugong.html      # 数字命运
├── wish.html         # 星愿
├── fengshui.html     # 能量空间
├── css/
│   └── style.css     # 深空暗金全站主题
└── js/
    ├── daily.js      # 每日运势引擎
    ├── bazi.js       # 八字引擎
    ├── hexagram.js   # 六十四卦数据
    └── dream.js      # 解梦词典
```

## 免责声明

本工具内容仅供娱乐参考，不构成任何决策建议。
