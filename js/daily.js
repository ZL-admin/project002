// Daily fortune engine — deterministic by date (same day = same result)

const STEMS = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const BRANCHES = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const STEM_ELEM = ['木','木','火','火','土','土','金','金','水','水'];
const BRANCH_ELEM = ['水','土','木','木','土','火','火','土','金','金','土','水'];
const ELEM_COLORS = {
  木: { lucky: ['#4caf50','#8bc34a'], name: '绿·青', desc: '木绿系', items: ['橄榄绿衬衫','墨绿外套','薄荷绿T恤'], avoid: '大红、橙色' },
  火: { lucky: ['#f44336','#ff7043'], name: '红·橙', desc: '火红系', items: ['酒红连衣裙','砖红夹克','珊瑚色卫衣'], avoid: '深蓝、黑色' },
  土: { lucky: ['#f9a825','#795548'], name: '黄·棕', desc: '大地系', items: ['卡其色风衣','米白针织衫','焦糖色裤装'], avoid: '纯绿色' },
  金: { lucky: ['#e0e0e0','#fff9c4'], name: '白·米', desc: '金白系', items: ['奶白色西装','银灰polo衫','香槟色裙装'], avoid: '火红、深红' },
  水: { lucky: ['#1565c0','#0d0d1a'], name: '黑·深蓝', desc: '深邃系', items: ['深海蓝外套','墨黑长裤','靛蓝牛仔'], avoid: '土黄、棕色' }
};

const YI_POOL = [
  '签合同','见贵人','出行','相亲','开业','搬家','理发','运动','社交','投资','购物','聚会',
  '求职','考试','谈判','学习','创作','冥想','整理房间','感恩表达','慢跑晨练','尝试新事物'
];
const JI_POOL = [
  '大额消费','争吵','夜间出行','高风险投资','手术','搬重物','开口借钱','做重大决定',
  '远行','酗酒','熬夜','轻信他人','贸然行动','签重要文件','情绪化表达'
];

// Seeded random (mulberry32)
function seeded(seed) {
  let s = seed >>> 0;
  return function() {
    s += 0x6D2B79F5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dateSeed(date) {
  const d = date || new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function getDayPillar(date) {
  const d = date || new Date();
  // Julian Day Number method for day pillar
  const y = d.getFullYear(), m = d.getMonth() + 1, day = d.getDate();
  const jdn = Math.floor((1461 * (y + 4800 + Math.floor((m - 14) / 12))) / 4)
    + Math.floor((367 * (m - 2 - 12 * Math.floor((m - 14) / 12))) / 12)
    - Math.floor((3 * Math.floor((y + 4900 + Math.floor((m - 14) / 12)) / 100)) / 4)
    + day - 32075;
  const stemIdx = (jdn + 9) % 10;
  const branchIdx = (jdn + 1) % 12;
  return { stem: STEMS[stemIdx], branch: BRANCHES[branchIdx], elem: STEM_ELEM[stemIdx] };
}

function getFortuneScores(date) {
  const seed = dateSeed(date);
  const rng = seeded(seed);
  const base = { career: 55, love: 50, wealth: 52, health: 58 };
  return {
    career: Math.min(99, Math.max(30, Math.round(base.career + (rng() - 0.3) * 60))),
    love:   Math.min(99, Math.max(30, Math.round(base.love   + (rng() - 0.3) * 60))),
    wealth: Math.min(99, Math.max(30, Math.round(base.wealth + (rng() - 0.3) * 60))),
    health: Math.min(99, Math.max(30, Math.round(base.health + (rng() - 0.3) * 60)))
  };
}

function getYiJi(date) {
  const seed = dateSeed(date) * 37;
  const rng = seeded(seed);
  const shuffle = arr => arr.slice().sort(() => rng() - 0.5);
  return {
    yi: shuffle(YI_POOL).slice(0, 3),
    ji: shuffle(JI_POOL).slice(0, 3)
  };
}

function getClothing(date) {
  const { elem } = getDayPillar(date);
  return ELEM_COLORS[elem];
}

function getLuckyInfo(date) {
  const seed = dateSeed(date) * 13;
  const rng = seeded(seed);
  const nums = Array.from({ length: 3 }, () => Math.floor(rng() * 9) + 1);
  const dirs = ['东','南','西','北','东南','东北','西南','西北'];
  const colors = ['金色','紫色','白色','绿色','红色','蓝色','银色','粉色'];
  return {
    numbers: [...new Set(nums)].slice(0, 3),
    direction: dirs[Math.floor(rng() * dirs.length)],
    color: colors[Math.floor(rng() * colors.length)]
  };
}

function getDayLabel(scores) {
  const avg = (scores.career + scores.love + scores.wealth + scores.health) / 4;
  if (avg >= 80) return { text: '大吉之日', cls: 'great' };
  if (avg >= 65) return { text: '吉祥顺遂', cls: 'good' };
  if (avg >= 50) return { text: '平稳安定', cls: 'normal' };
  return { text: '宜静待时', cls: 'caution' };
}

// Simplified lunar date (display only, approximate)
function getLunarDisplay(date) {
  const d = date || new Date();
  const months = ['正月','二月','三月','四月','五月','六月','七月','八月','九月','十月','冬月','腊月'];
  const days = ['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十',
    '十一','十二','十三','十四','十五','十六','十七','十八','十九','二十',
    '廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];
  // Approximate lunar date using offset from known new moon
  const BASE = new Date('2025-01-29'); // Lunar New Year 2025
  const diffDays = Math.floor((d - BASE) / 86400000);
  const lunarDay = ((diffDays % 30) + 30) % 30;
  const lunarMonth = ((Math.floor(diffDays / 30) % 12) + 12) % 12;
  const { stem, branch } = getDayPillar(d);
  return `${months[lunarMonth]}${days[lunarDay]} · ${stem}${branch}日`;
}

function getZodiacEmoji(date) {
  const d = date || new Date();
  const m = d.getMonth() + 1, day = d.getDate();
  if ((m === 3 && day >= 21) || (m === 4 && day <= 19)) return { sign: '白羊座', emoji: '♈' };
  if ((m === 4 && day >= 20) || (m === 5 && day <= 20)) return { sign: '金牛座', emoji: '♉' };
  if ((m === 5 && day >= 21) || (m === 6 && day <= 21)) return { sign: '双子座', emoji: '♊' };
  if ((m === 6 && day >= 22) || (m === 7 && day <= 22)) return { sign: '巨蟹座', emoji: '♋' };
  if ((m === 7 && day >= 23) || (m === 8 && day <= 22)) return { sign: '狮子座', emoji: '♌' };
  if ((m === 8 && day >= 23) || (m === 9 && day <= 22)) return { sign: '处女座', emoji: '♍' };
  if ((m === 9 && day >= 23) || (m === 10 && day <= 23)) return { sign: '天秤座', emoji: '♎' };
  if ((m === 10 && day >= 24) || (m === 11 && day <= 22)) return { sign: '天蝎座', emoji: '♏' };
  if ((m === 11 && day >= 23) || (m === 12 && day <= 21)) return { sign: '射手座', emoji: '♐' };
  if ((m === 12 && day >= 22) || (m === 1 && day <= 19)) return { sign: '摩羯座', emoji: '♑' };
  if ((m === 1 && day >= 20) || (m === 2 && day <= 18)) return { sign: '水瓶座', emoji: '♒' };
  return { sign: '双鱼座', emoji: '♓' };
}
