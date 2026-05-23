# Sage — Eastern Wisdom Companion

> An AI emotional companion and daily life guidance app for modern women.  
> Soft rose & cream aesthetic · Eastern wisdom reframed for contemporary life · Pure frontend, no backend.

**Live:** https://zl-admin.github.io/project002/

---

## Positioning

| | |
|---|---|
| **App name** | Sage |
| **Tagline** | Eastern wisdom for modern life |
| **Target user** | Women 28–45, western professionals, modern urban anxiety |
| **Interest tags** | astrology · tarot · self-healing · mindfulness · journaling |
| **Not** | Chinese fortune-telling. Eastern wisdom (I Ching, Taoism) as a lens for clarity and reflection. |
| **Inspired by** | Finch (wellness + gamification) · Stoic (self-reflection toolkit) |

---

## Core Pages (v3)

| Page | Role | Key Features |
|------|------|-------------|
| `index.html` | **Today** | Mood check-in · Daily energy scores (Focus/Connection/Abundance/Vitality) · Rotating intention prompt · Today's flow (aligned/mindful of) · I Ching hexagram preview |
| `reflect.html` | **Reflect** | Mood tracker · Eastern-wisdom journal prompts (daily rotating) · Free journal (localStorage) · 7-day mood history · Past entry archive |
| `breathe.html` | **Breathe** | Animated breathing circle · Box (4·4·4·4) / 4·7·8 / Ocean (5·5) techniques · Session timer + cycle counter · Tao wisdom quotes |
| `wisdom.html` | **Wisdom** | Daily I Ching hexagram · Full English interpretations (all 64 hexagrams) · Tao Te Ching quotes · Reflection prompt → links to journal |
| `destiny.html` | **You** | Birth chart (四柱八字) · Five-element analysis · Personality archetype · Luck cycles |

## Secondary Pages (legacy, Chinese)

| Page | Feature |
|------|---------|
| `sign.html` | Daily hexagram card flip (今日签) |
| `yuanfen.html` | Compatibility reading (缘分测算) |
| `dream.html` | Dream dictionary 220+ entries (解梦) |
| `jiugong.html` | Numerology + Nine Palace grid |
| `wish.html` | Lantern wish animation (星愿) |
| `fengshui.html` | Feng shui compass (风水罗盘) |

---

## Design System (v3)

| Token | Value |
|-------|-------|
| Background | `#FDF9F7` warm cream |
| Primary | `#B87878` rose |
| Secondary | `#7A9172` sage green |
| Accent | `#B8895A` warm tan |
| Text | `#2D2419` warm dark brown |
| Heading font | Cormorant Garamond (elegant serif) |
| Body font | DM Sans (modern, clean) |
| Cards | Pure white `#FFFFFF` + soft rose shadow |
| Radius | 20px cards · 12px inner elements |
| Animation | Slow fade-up entries · Breathing circle CSS transition |

**Before (v2):** Deep space dark blue `#0d0d1a` + gold `#c9a84c` · Star canvas · Chinese fortune-telling  
**After (v3):** Warm cream + rose · Soft gradient ambient · Eastern wisdom companion

---

## JS Modules

| File | Description |
|------|-------------|
| `js/daily.js` | Daily engine: seeded random (same day = same result), yi/ji pools, clothing guide, zodiac, lunar date |
| `js/hexagram.js` | 64 I Ching hexagrams: full data, `getHexagramByDate()`, `drawHexagram()` |
| `js/bazi.js` | Birth chart engine: Julian Day method, heavenly stems/earthly branches, five-element analysis, luck cycles |
| `js/dream.js` | Dream dictionary: 220+ entries, keyword + category search |

---

## Tech Stack

- Pure HTML / CSS / JavaScript — zero frameworks, zero build tools
- Mobile-first, 375–480px optimized
- `localStorage` for mood history, journal entries, birth data, wishes
- Date-seeded determinism: same day = same hexagram, same intention prompt, same scores

## Local Dev

```bash
git clone https://github.com/ZL-admin/project002.git
cd project002
python3 -m http.server 8080
# Open http://localhost:8080
```

## File Structure

```
project002/
├── index.html        # Today tab
├── reflect.html      # Reflect tab (journal + mood)
├── breathe.html      # Breathe tab (breathing exercises)
├── wisdom.html       # Wisdom tab (I Ching + Tao quotes)
├── destiny.html      # You tab (birth chart)
├── sign.html         # Legacy: daily sign card
├── yuanfen.html      # Legacy: compatibility
├── dream.html        # Legacy: dream dictionary
├── jiugong.html      # Legacy: numerology
├── wish.html         # Legacy: lantern wishes
├── fengshui.html     # Legacy: feng shui compass
├── css/
│   └── style.css     # Full design system (rose/cream theme)
└── js/
    ├── daily.js      # Daily fortune engine
    ├── bazi.js       # Birth chart engine
    ├── hexagram.js   # I Ching 64 hexagrams
    └── dream.js      # Dream dictionary
```

---

*Content is for entertainment and reflection purposes only, not decision-making advice.*
