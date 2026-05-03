/**
 * 八字核心引擎
 * 天干地支 | 儒略日算日柱 | 藏干五行 | 旺衰喜忌
 */

const BAZI = (() => {
  // 十天干
  const TIANGAN = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
  // 十二地支
  const DIZHI   = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];

  // 天干五行
  const TG_WUXING = { 甲:'木',乙:'木',丙:'火',丁:'火',戊:'土',己:'土',庚:'金',辛:'金',壬:'水',癸:'水' };
  // 天干阴阳
  const TG_YINYANG = { 甲:'阳',乙:'阴',丙:'阳',丁:'阴',戊:'阳',己:'阴',庚:'阳',辛:'阴',壬:'阳',癸:'阴' };

  // 地支五行
  const DZ_WUXING = { 子:'水',丑:'土',寅:'木',卯:'木',辰:'土',巳:'火',午:'火',未:'土',申:'金',酉:'金',戌:'土',亥:'水' };
  // 地支阴阳
  const DZ_YINYANG = { 子:'阳',丑:'阴',寅:'阳',卯:'阴',辰:'阳',巳:'阴',午:'阳',未:'阴',申:'阳',酉:'阴',戌:'阳',亥:'阴' };

  // 藏干（每支主气、中气、余气）
  const CANGGAN = {
    子: ['癸'],
    丑: ['己','癸','辛'],
    寅: ['甲','丙','戊'],
    卯: ['乙'],
    辰: ['戊','乙','癸'],
    巳: ['丙','庚','戊'],
    午: ['丁','己'],
    未: ['己','丁','乙'],
    申: ['庚','壬','戊'],
    酉: ['辛'],
    戌: ['戊','辛','丁'],
    亥: ['壬','甲']
  };

  // 地支藏干五行占比（用于日主旺衰计算）
  const CANGGAN_RATIO = {
    子: { 癸: 1 },
    丑: { 己: 0.6, 癸: 0.2, 辛: 0.2 },
    寅: { 甲: 0.6, 丙: 0.2, 戊: 0.2 },
    卯: { 乙: 1 },
    辰: { 戊: 0.6, 乙: 0.2, 癸: 0.2 },
    巳: { 丙: 0.6, 庚: 0.2, 戊: 0.2 },
    午: { 丁: 0.7, 己: 0.3 },
    未: { 己: 0.6, 丁: 0.2, 乙: 0.2 },
    申: { 庚: 0.6, 壬: 0.2, 戊: 0.2 },
    酉: { 辛: 1 },
    戌: { 戊: 0.6, 辛: 0.2, 丁: 0.2 },
    亥: { 壬: 0.7, 甲: 0.3 }
  };

  // 五行相生相克
  const SHENG = { 木:'火', 火:'土', 土:'金', 金:'水', 水:'木' };
  const KE   = { 木:'土', 火:'金', 土:'水', 金:'木', 水:'火' };

  // 月支对应月令（节气月份，简化版：以月份近似）
  const MONTH_DZ = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];

  // ===== 儒略日 =====
  function toJulianDay(year, month, day) {
    if (month <= 2) { year -= 1; month += 12; }
    const A = Math.floor(year / 100);
    const B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524;
  }

  // ===== 年柱 =====
  function yearPillar(year, month, day) {
    // 以立春（约2月4日）为界
    let y = year;
    if (month < 2 || (month === 2 && day < 4)) y -= 1;
    const tg = TIANGAN[(y - 4) % 10];
    const dz = DIZHI[(y - 4) % 12];
    return { tg, dz, label: tg + dz };
  }

  // ===== 月柱 =====
  function monthPillar(year, month, day) {
    // 简化：以节气月（寅月=2月4日起）近似，不做精确节气计算
    let y = year;
    if (month < 2 || (month === 2 && day < 4)) y -= 1;
    // 月支序号：寅=2月，卯=3月... 丑=1月，子=上年12月
    const monthIdx = (month - 1 + 12) % 12; // 0=1月=丑
    // 月支：1月→丑(1), 2月→寅(2)...
    const dzIdx = (month + 1) % 12; // 寅月从2月开始
    const dz = DIZHI[dzIdx];
    // 天干：年干决定月干起点
    const yearTgIdx = (y - 4) % 10;
    const tgBase = [0, 2, 4, 6, 8][yearTgIdx % 5]; // 甲己年从甲子月
    const tgIdx = (tgBase + dzIdx) % 10;
    const tg = TIANGAN[tgIdx];
    return { tg, dz, label: tg + dz };
  }

  // ===== 日柱（儒略日法）=====
  function dayPillar(year, month, day) {
    const jd = toJulianDay(year, month, day);
    const tgIdx = (jd + 49) % 10;
    const dzIdx = (jd + 11) % 12;
    const tg = TIANGAN[tgIdx];
    const dz = DIZHI[dzIdx];
    return { tg, dz, label: tg + dz };
  }

  // ===== 时柱 =====
  function hourPillar(hour, dayTg) {
    // 时支序号：子时=0点
    const dzIdx = Math.floor((hour + 1) / 2) % 12;
    const dz = DIZHI[dzIdx];
    const dayTgIdx = TIANGAN.indexOf(dayTg);
    const tgBase = [0, 2, 4, 6, 8][dayTgIdx % 5];
    const tgIdx = (tgBase + dzIdx) % 10;
    const tg = TIANGAN[tgIdx];
    return { tg, dz, label: tg + dz };
  }

  // ===== 计算完整八字 =====
  function calc(year, month, day, hour) {
    const yp = yearPillar(year, month, day);
    const mp = monthPillar(year, month, day);
    const dp = dayPillar(year, month, day);
    const hp = hourPillar(hour, dp.tg);
    return {
      year:  yp,
      month: mp,
      day:   dp,
      hour:  hp,
      pillars: [yp, mp, dp, hp],
      labels: ['年柱','月柱','日柱','时柱']
    };
  }

  // ===== 五行计分（用于旺衰）=====
  function wuxingScore(bazi) {
    const score = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 };
    bazi.pillars.forEach(p => {
      const tgWx = TG_WUXING[p.tg];
      if (tgWx) score[tgWx] += 1;
      const ratios = CANGGAN_RATIO[p.dz] || {};
      Object.entries(ratios).forEach(([cg, ratio]) => {
        const cgWx = TG_WUXING[cg];
        if (cgWx) score[cgWx] += ratio;
      });
    });
    return score;
  }

  // ===== 日主旺衰 =====
  function riyuStrength(bazi) {
    const dayTg = bazi.day.tg;
    const dayWx = TG_WUXING[dayTg];
    const score = wuxingScore(bazi);
    const selfScore = score[dayWx] || 0;
    const total = Object.values(score).reduce((a, b) => a + b, 0);
    const ratio = selfScore / total;
    if (ratio >= 0.4) return '旺';
    if (ratio >= 0.25) return '中';
    return '弱';
  }

  // ===== 喜忌神 =====
  function xijiShen(bazi) {
    const dayWx = TG_WUXING[bazi.day.tg];
    const strength = riyuStrength(bazi);
    let xi, ji;
    if (strength === '旺') {
      // 身旺喜泄耗克，忌生比
      xi = [KE[dayWx], SHENG[dayWx]]; // 克我、我生（泄）
      ji = [dayWx, /* 生我 */ Object.keys(SHENG).find(k => SHENG[k] === dayWx)];
    } else {
      // 身弱喜生比，忌泄克
      const shengWo = Object.keys(SHENG).find(k => SHENG[k] === dayWx);
      xi = [dayWx, shengWo];
      ji = [SHENG[dayWx], KE[dayWx]];
    }
    return { strength, xi: xi.filter(Boolean), ji: ji.filter(Boolean) };
  }

  // ===== 格局简判 =====
  function geju(bazi) {
    const score = wuxingScore(bazi);
    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const top = sorted[0][0];
    const map = { 木:'七杀格', 火:'印绶格', 土:'食神格', 金:'财星格', 水:'官杀格' };
    const dayWx = TG_WUXING[bazi.day.tg];
    if (top === dayWx) return '比劫格';
    return map[top] || '普通格';
  }

  // ===== 大运（简化：每10年一运）=====
  function dayun(bazi, birthYear, gender) {
    const yearTgIdx = TIANGAN.indexOf(bazi.year.tg);
    const isYang = yearTgIdx % 2 === 0;
    const isMale = gender === '男';
    // 顺逆规则：阳男阴女顺，阴男阳女逆
    const forward = (isYang && isMale) || (!isYang && !isMale);
    const monthDzIdx = DIZHI.indexOf(bazi.month.dz);
    const monthTgIdx = TIANGAN.indexOf(bazi.month.tg);
    const yunList = [];
    for (let i = 1; i <= 8; i++) {
      const step = forward ? i : -i;
      const dzIdx = ((monthDzIdx + step) % 12 + 12) % 12;
      const tgIdx = ((monthTgIdx + step) % 10 + 10) % 10;
      const startAge = i * 10;
      yunList.push({
        tg: TIANGAN[tgIdx],
        dz: DIZHI[dzIdx],
        label: TIANGAN[tgIdx] + DIZHI[dzIdx],
        startYear: birthYear + startAge,
        startAge
      });
    }
    return yunList;
  }

  // ===== 流年 =====
  function liuNian(startYear, count = 10) {
    return Array.from({ length: count }, (_, i) => {
      const y = startYear + i;
      const tg = TIANGAN[(y - 4) % 10];
      const dz = DIZHI[(y - 4) % 12];
      return { year: y, tg, dz, label: tg + dz };
    });
  }

  // ===== 生肖 =====
  function shengXiao(year) {
    const animals = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];
    return animals[(year - 4) % 12];
  }

  // ===== 星座 =====
  function xingZuo(month, day) {
    const signs = [
      { name:'摩羯',end:[1,19] },{ name:'水瓶',end:[2,18] },{ name:'双鱼',end:[3,20] },
      { name:'白羊',end:[4,19] },{ name:'金牛',end:[5,20] },{ name:'双子',end:[6,20] },
      { name:'巨蟹',end:[7,22] },{ name:'狮子',end:[8,22] },{ name:'处女',end:[9,22] },
      { name:'天秤',end:[10,22] },{ name:'天蝎',end:[11,21] },{ name:'射手',end:[12,21] },
      { name:'摩羯',end:[12,31] }
    ];
    for (const s of signs) {
      if (month < s.end[0] || (month === s.end[0] && day <= s.end[1])) return s.name + '座';
    }
    return '摩羯座';
  }

  // ===== 天干五行颜色 =====
  function wuxingColor(wx) {
    const map = { 木:'#27ae60', 火:'#e74c3c', 土:'#d4a017', 金:'#bdc3c7', 水:'#3498db' };
    return map[wx] || '#fff';
  }

  // ===== 性格描述 =====
  function personalityDesc(dayTg) {
    const desc = {
      甲: '正直坚强，有领导力，不畏困难，但略显固执',
      乙: '温柔随和，适应力强，善解人意，偶尔优柔寡断',
      丙: '热情开朗，光明磊落，富有魄力，有时急躁',
      丁: '聪颖细腻，温婉有才，感情丰富，思虑过多',
      戊: '稳重踏实，宽厚包容，诚信可靠，行动偏慢',
      己: '谦逊内敛，心思缜密，善于谋划，有时疑心重',
      庚: '刚毅果断，义气重情，行动力强，冲劲有余',
      辛: '聪慧灵巧，审美独特，坚韧不拔，较为敏感',
      壬: '智慧灵活，善于交际，多才多艺，有时心不专',
      癸: '温柔善良，直觉敏锐，神秘内敛，情感细腻'
    };
    return desc[dayTg] || '';
  }

  // 公开API
  return {
    TIANGAN, DIZHI, TG_WUXING, DZ_WUXING, TG_YINYANG, DZ_YINYANG,
    CANGGAN, SHENG, KE,
    calc, wuxingScore, riyuStrength, xijiShen, geju,
    dayun, liuNian, shengXiao, xingZuo, wuxingColor, personalityDesc,
    toJulianDay
  };
})();
