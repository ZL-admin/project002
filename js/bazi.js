// Bazi (八字) engine — four pillars of destiny

const STEMS    = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const BRANCHES = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const STEM_ELEM   = ['木','木','火','火','土','土','金','金','水','水'];
const BRANCH_ELEM = ['水','土','木','木','土','火','火','土','金','金','土','水'];
const STEM_YIN    = [0,1,0,1,0,1,0,1,0,1];

const GENERATES = { 木:'火', 火:'土', 土:'金', 金:'水', 水:'木' };
const RESTRAINS = { 木:'土', 火:'金', 土:'水', 金:'木', 水:'火' };
const ELEM_COLOR = { 木:'#4caf50', 火:'#e53935', 土:'#ff9800', 金:'#bdbdbd', 水:'#1e88e5' };

function toJDN(y, m, d) {
  return Math.floor((1461*(y+4800+Math.floor((m-14)/12)))/4)
    +Math.floor((367*(m-2-12*Math.floor((m-14)/12)))/12)
    -Math.floor((3*Math.floor((y+4900+Math.floor((m-14)/12))/100))/4)
    +d-32075;
}

function getYearPillar(year) {
  return { stem: STEMS[((year-4)%10+10)%10], branch: BRANCHES[((year-4)%12+12)%12] };
}

function getMonthPillar(year, month) {
  const yearStemIdx = ((year-4)%10+10)%10;
  const monthStemBase = [2,4,6,8,0][Math.floor(yearStemIdx/2)];
  const mIdx = month - 1;
  return {
    stem: STEMS[(monthStemBase + mIdx) % 10],
    branch: BRANCHES[(mIdx + 2) % 12]
  };
}

function getDayPillar(year, month, day) {
  const jdn = toJDN(year, month, day);
  return {
    stem: STEMS[((jdn+9)%10+10)%10],
    branch: BRANCHES[((jdn+1)%12+12)%12]
  };
}

function getHourPillar(dayStem, hour) {
  const dayStemIdx = STEMS.indexOf(dayStem);
  const branchIdx = Math.floor((hour+1)/2) % 12;
  const stemBase = [0,2,4,6,8][dayStemIdx%5];
  return {
    stem: STEMS[(stemBase+branchIdx)%10],
    branch: BRANCHES[branchIdx]
  };
}

function calcBazi(birthYear, birthMonth, birthDay, birthHour) {
  const yp = getYearPillar(birthYear);
  const mp = getMonthPillar(birthYear, birthMonth);
  const dp = getDayPillar(birthYear, birthMonth, birthDay);
  const hp = getHourPillar(dp.stem, birthHour);
  const pillars = [yp, mp, dp, hp];

  const elemCount = { 木:0, 火:0, 土:0, 金:0, 水:0 };
  pillars.forEach(p => {
    elemCount[STEM_ELEM[STEMS.indexOf(p.stem)]]++;
    elemCount[BRANCH_ELEM[BRANCHES.indexOf(p.branch)]]++;
  });

  const dayElem = STEM_ELEM[STEMS.indexOf(dp.stem)];
  const dayYin  = STEM_YIN[STEMS.indexOf(dp.stem)] === 1;
  const genMe   = Object.keys(GENERATES).find(k => GENERATES[k] === dayElem);
  const strong  = (elemCount[dayElem] + (elemCount[genMe]||0)) >= 3;

  const luckyElems   = strong ? [RESTRAINS[dayElem], GENERATES[dayElem]] : [genMe, dayElem];
  const unluckyElems = strong ? [dayElem, genMe] : [RESTRAINS[dayElem], GENERATES[dayElem]];

  const yearStemIdx    = STEMS.indexOf(yp.stem);
  const monthBranchIdx = BRANCHES.indexOf(mp.branch);
  const forward = STEM_YIN[yearStemIdx] === 0;
  const luckCycles = Array.from({length:8}, (_,i) => {
    const n = i+1, off = forward ? n : -n;
    const si = ((yearStemIdx + off*2)%10+10)%10;
    const bi = ((monthBranchIdx + off)%12+12)%12;
    return { stem:STEMS[si], branch:BRANCHES[bi],
      stemElem:STEM_ELEM[si], branchElem:BRANCH_ELEM[bi],
      startAge: n*10-7 < 3 ? 3 : n*10-7 };
  });

  return { pillars, labels:['年柱','月柱','日柱','时柱'], elemCount, dayElem, dayYin, strong, luckyElems, unluckyElems, luckCycles };
}

function getPersonality(dayElem, strong) {
  const t = {
    木:{ strong:'刚直正义、富有领导力，但易固执己见，宜学柔',
         weak:'仁慈善良、创造力丰沛，需借力方能充分发挥潜能' },
    火:{ strong:'热情奔放、表达力强，注意戒骄戒躁，修炼定力',
         weak:'温情感召、富有魅力，需稳定环境来施展才华' },
    土:{ strong:'稳重厚实、信用可靠，注意突破保守，拥抱变化',
         weak:'包容广结、温和亲切，在稳定中能发挥最大价值' },
    金:{ strong:'果断干练、原则性强，注意情绪管理，增添柔性',
         weak:'聪慧机敏、善于分析，宽松环境更能激发潜力' },
    水:{ strong:'智慧灵动、洞察力强，注意专注方向，避免涣散',
         weak:'温柔体贴、善解人意，需踏实行动来实现梦想' }
  };
  return t[dayElem][strong ? 'strong' : 'weak'];
}
