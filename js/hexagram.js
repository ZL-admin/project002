/**
 * 六十四卦完整数据
 * 包含：卦名、卦象符号、卦辞、彖传、象传、上下卦、爻辞
 */

const HEXAGRAM = (() => {
  // 八卦基本数据
  const BAGUA = {
    乾: { symbol: '☰', binary: '111', element: '天', wuxing: '金', direction: '西北', number: 1 },
    坤: { symbol: '☷', binary: '000', element: '地', wuxing: '土', direction: '西南', number: 2 },
    震: { symbol: '☳', binary: '001', element: '雷', wuxing: '木', direction: '东',   number: 4 },
    巽: { symbol: '☴', binary: '110', element: '风', wuxing: '木', direction: '东南', number: 5 },
    坎: { symbol: '☵', binary: '010', element: '水', wuxing: '水', direction: '北',   number: 6 },
    离: { symbol: '☲', binary: '101', element: '火', wuxing: '火', direction: '南',   number: 3 },
    艮: { symbol: '☶', binary: '100', element: '山', wuxing: '土', direction: '东北', number: 7 },
    兑: { symbol: '☱', binary: '011', element: '泽', wuxing: '金', direction: '西',   number: 8 }
  };

  // 六十四卦完整数据
  const HEXAGRAMS = [
    {
      number: 1, name: '乾', fullName: '乾为天', symbol: '䷀',
      upper: '乾', lower: '乾', lines: '111111',
      judgment: '元亨利贞。',
      image: '天行健，君子以自强不息。',
      meaning: '刚健中正，大吉大利。象征天道运行，生生不息。宜积极进取，自强不息。',
      luck: '大吉', tags: ['事业','进取','领导']
    },
    {
      number: 2, name: '坤', fullName: '坤为地', symbol: '䷁',
      upper: '坤', lower: '坤', lines: '000000',
      judgment: '元亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋，安贞吉。',
      image: '地势坤，君子以厚德载物。',
      meaning: '柔顺宽厚，包容万物。宜以柔克刚，顺势而为，广结善缘。',
      luck: '吉', tags: ['顺从','包容','合作']
    },
    {
      number: 3, name: '屯', fullName: '水雷屯', symbol: '䷂',
      upper: '坎', lower: '震', lines: '010001',
      judgment: '元亨利贞，勿用有攸往，利建侯。',
      image: '云雷屯，君子以经纶。',
      meaning: '万物草创之初，艰难险阻。宜坚守正道，积累力量，不宜冒进。',
      luck: '小吉', tags: ['创业','坚持','积累']
    },
    {
      number: 4, name: '蒙', fullName: '山水蒙', symbol: '䷃',
      upper: '艮', lower: '坎', lines: '100010',
      judgment: '亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。',
      image: '山下出泉，蒙；君子以果行育德。',
      meaning: '启蒙教育，求知向学。宜虚心求教，明辨是非，循序渐进。',
      luck: '中', tags: ['学习','求知','教育']
    },
    {
      number: 5, name: '需', fullName: '水天需', symbol: '䷄',
      upper: '坎', lower: '乾', lines: '010111',
      judgment: '有孚，光亨，贞吉。利涉大川。',
      image: '云上于天，需；君子以饮食宴乐。',
      meaning: '等待时机，养精蓄锐。宜耐心等待，不可急躁，时机到来自然亨通。',
      luck: '吉', tags: ['等待','耐心','时机']
    },
    {
      number: 6, name: '讼', fullName: '天水讼', symbol: '䷅',
      upper: '乾', lower: '坎', lines: '111010',
      judgment: '有孚窒惕，中吉，终凶。利见大人，不利涉大川。',
      image: '天与水违行，讼；君子以作事谋始。',
      meaning: '争讼纷起，宜和解为上。谨慎行事，不宜冒险，遇事宜求大人调解。',
      luck: '凶', tags: ['争讼','谨慎','和解']
    },
    {
      number: 7, name: '师', fullName: '地水师', symbol: '䷆',
      upper: '坤', lower: '坎', lines: '000010',
      judgment: '贞，丈人吉，无咎。',
      image: '地中有水，师；君子以容民畜众。',
      meaning: '统帅军民，纪律严明。宜以正道领导众人，团结一致，方可成事。',
      luck: '中', tags: ['团队','领导','纪律']
    },
    {
      number: 8, name: '比', fullName: '水地比', symbol: '䷇',
      upper: '坎', lower: '坤', lines: '010000',
      judgment: '吉。原筮元永贞，无咎。不宁方来，后夫凶。',
      image: '地上有水，比；先王以建万国，亲诸侯。',
      meaning: '亲近相助，团结合作。宜广结善缘，以诚待人，共同进步。',
      luck: '吉', tags: ['合作','友情','团结']
    },
    {
      number: 9, name: '小畜', fullName: '风天小畜', symbol: '䷈',
      upper: '巽', lower: '乾', lines: '110111',
      judgment: '亨。密云不雨，自我西郊。',
      image: '风行天上，小畜；君子以懿文德。',
      meaning: '积小成大，蓄势待发。宜修身养德，积累力量，时机未到不宜大动。',
      luck: '中', tags: ['积累','修养','蓄势']
    },
    {
      number: 10, name: '履', fullName: '天泽履', symbol: '䷉',
      upper: '乾', lower: '兑', lines: '111011',
      judgment: '履虎尾，不咥人，亨。',
      image: '上天下泽，履；君子以辩上下，定民志。',
      meaning: '谨慎行事，守礼而行。如履薄冰，须小心谨慎，遵守规矩方可化险为夷。',
      luck: '中', tags: ['谨慎','礼仪','规矩']
    },
    {
      number: 11, name: '泰', fullName: '地天泰', symbol: '䷊',
      upper: '坤', lower: '乾', lines: '000111',
      judgment: '小往大来，吉亨。',
      image: '天地交，泰；后以财成天地之道，辅相天地之宜，以左右民。',
      meaning: '天地交泰，万物亨通。吉星高照，诸事顺利，宜积极行动，把握良机。',
      luck: '大吉', tags: ['顺利','吉祥','和谐']
    },
    {
      number: 12, name: '否', fullName: '天地否', symbol: '䷋',
      upper: '乾', lower: '坤', lines: '111000',
      judgment: '否之匪人，不利君子贞，大往小来。',
      image: '天地不交，否；君子以俭德辟难，不可荣以禄。',
      meaning: '天地不交，万物不通。时运不济，宜守静待时，低调行事，避免冒险。',
      luck: '凶', tags: ['阻碍','困难','守静']
    },
    {
      number: 13, name: '同人', fullName: '天火同人', symbol: '䷌',
      upper: '乾', lower: '离', lines: '111101',
      judgment: '同人于野，亨。利涉大川，利君子贞。',
      image: '天与火，同人；君子以类族辨物。',
      meaning: '志同道合，携手共进。宜广结志同道合之友，团结协作，共创大业。',
      luck: '吉', tags: ['合作','友谊','志同']
    },
    {
      number: 14, name: '大有', fullName: '火天大有', symbol: '䷍',
      upper: '离', lower: '乾', lines: '101111',
      judgment: '元亨。',
      image: '火在天上，大有；君子以遏恶扬善，顺天休命。',
      meaning: '光明正大，大丰收。财运亨通，事业有成，宜顺天应时，发挥所长。',
      luck: '大吉', tags: ['财富','成功','丰收']
    },
    {
      number: 15, name: '谦', fullName: '地山谦', symbol: '䷎',
      upper: '坤', lower: '艮', lines: '000100',
      judgment: '亨，君子有终。',
      image: '地中有山，谦；君子以裒多益寡，称物平施。',
      meaning: '谦虚谨慎，终得吉祥。宜低调处世，谦逊待人，厚积薄发。',
      luck: '吉', tags: ['谦虚','低调','厚积']
    },
    {
      number: 16, name: '豫', fullName: '雷地豫', symbol: '䷏',
      upper: '震', lower: '坤', lines: '001000',
      judgment: '利建侯行师。',
      image: '雷出地奋，豫；先王以作乐崇德，殷荐之上帝，以配祖考。',
      meaning: '欢乐和谐，顺势而行。适宜建功立业，鼓舞人心，奋勇向前。',
      luck: '吉', tags: ['欢乐','进取','奋发']
    },
    {
      number: 17, name: '随', fullName: '泽雷随', symbol: '䷐',
      upper: '兑', lower: '震', lines: '011001',
      judgment: '元亨利贞，无咎。',
      image: '泽中有雷，随；君子以向晦入宴息。',
      meaning: '随机应变，顺势而为。宜灵活处世，顺应时势，与时俱进。',
      luck: '吉', tags: ['顺应','灵活','随机']
    },
    {
      number: 18, name: '蛊', fullName: '山风蛊', symbol: '䷑',
      upper: '艮', lower: '巽', lines: '100110',
      judgment: '元亨，利涉大川。先甲三日，后甲三日。',
      image: '山下有风，蛊；君子以振民育德。',
      meaning: '拨乱反正，革故鼎新。须整治积弊，破旧立新，方能重获生机。',
      luck: '中', tags: ['改革','整治','新生']
    },
    {
      number: 19, name: '临', fullName: '地泽临', symbol: '䷒',
      upper: '坤', lower: '兑', lines: '000011',
      judgment: '元亨利贞。至于八月有凶。',
      image: '泽上有地，临；君子以教思无穷，容保民无疆。',
      meaning: '临近吉期，时机来临。宜积极行动，把握时机，但需防范物极必反。',
      luck: '吉', tags: ['时机','行动','临近']
    },
    {
      number: 20, name: '观', fullName: '风地观', symbol: '䷓',
      upper: '巽', lower: '坤', lines: '110000',
      judgment: '盥而不荐，有孚颙若。',
      image: '风行地上，观；先王以省方观民设教。',
      meaning: '观察审视，以待时机。宜冷静观察，深思熟虑，不宜轻举妄动。',
      luck: '中', tags: ['观察','思考','审慎']
    },
    {
      number: 21, name: '噬嗑', fullName: '火雷噬嗑', symbol: '䷔',
      upper: '离', lower: '震', lines: '101001',
      judgment: '亨，利用狱。',
      image: '雷电，噬嗑；先王以明罚敕法。',
      meaning: '雷厉风行，明断是非。宜铁面无私，果断处理问题，清除障碍。',
      luck: '中', tags: ['果断','明断','清除障碍']
    },
    {
      number: 22, name: '贲', fullName: '山火贲', symbol: '䷕',
      upper: '艮', lower: '离', lines: '100101',
      judgment: '亨，小利有攸往。',
      image: '山下有火，贲；君子以明庶政，无敢折狱。',
      meaning: '文采焕发，修饰美化。宜注重形象，以文修质，内外兼修。',
      luck: '吉', tags: ['美化','形象','修饰']
    },
    {
      number: 23, name: '剥', fullName: '山地剥', symbol: '䷖',
      upper: '艮', lower: '坤', lines: '100000',
      judgment: '不利有攸往。',
      image: '山附于地，剥；上以厚下，安宅。',
      meaning: '剥落衰败，不宜前进。宜守静待时，积蓄力量，等待转机。',
      luck: '凶', tags: ['衰退','守静','等待']
    },
    {
      number: 24, name: '复', fullName: '地雷复', symbol: '䷗',
      upper: '坤', lower: '震', lines: '000001',
      judgment: '亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。',
      image: '雷在地中，复；先王以至日闭关，商旅不行，后不省方。',
      meaning: '否极泰来，回归正道。一阳复始，生机勃发，宜重新出发，把握转机。',
      luck: '吉', tags: ['转机','复苏','新生']
    },
    {
      number: 25, name: '无妄', fullName: '天雷无妄', symbol: '䷘',
      upper: '乾', lower: '震', lines: '111001',
      judgment: '元亨利贞。其匪正有眚，不利有攸往。',
      image: '天下雷行，物与无妄；先王以茂对时，育万物。',
      meaning: '无妄而行，顺天应道。宜诚实守信，不可妄想，一切顺其自然。',
      luck: '吉', tags: ['诚信','自然','顺道']
    },
    {
      number: 26, name: '大畜', fullName: '山天大畜', symbol: '䷙',
      upper: '艮', lower: '乾', lines: '100111',
      judgment: '利贞，不家食吉，利涉大川。',
      image: '天在山中，大畜；君子以多识前言往行，以畜其德。',
      meaning: '积聚力量，厚德载物。宜博学多识，积累资本，待时而动。',
      luck: '吉', tags: ['积累','厚德','蓄势']
    },
    {
      number: 27, name: '颐', fullName: '山雷颐', symbol: '䷚',
      upper: '艮', lower: '震', lines: '100001',
      judgment: '贞吉，观颐，自求口实。',
      image: '山下有雷，颐；君子以慎言语，节饮食。',
      meaning: '颐养身心，节制有度。宜注重养生，言行谨慎，以正养正。',
      luck: '中', tags: ['养生','节制','谨慎']
    },
    {
      number: 28, name: '大过', fullName: '泽风大过', symbol: '䷛',
      upper: '兑', lower: '巽', lines: '011110',
      judgment: '栋桡，利有攸往，亨。',
      image: '泽灭木，大过；君子以独立不惧，遁世无闷。',
      meaning: '非常时期，大有过之。宜以非常之法处非常之事，当机立断，力挽狂澜。',
      luck: '凶', tags: ['危机','应变','果断']
    },
    {
      number: 29, name: '坎', fullName: '坎为水', symbol: '䷜',
      upper: '坎', lower: '坎', lines: '010010',
      judgment: '有孚，维心亨，行有尚。',
      image: '水洊至，习坎；君子以常德行，习教事。',
      meaning: '险中求胜，处险不惊。宜坚定信念，勇于面对困难，持之以恒终可脱险。',
      luck: '凶', tags: ['险境','坚守','突破']
    },
    {
      number: 30, name: '离', fullName: '离为火', symbol: '䷝',
      upper: '离', lower: '离', lines: '101101',
      judgment: '利贞，亨。畜牝牛，吉。',
      image: '明两作，离；大人以继明照于四方。',
      meaning: '光明磊落，附丽互照。宜依附正道，发挥才能，以柔顺之心处世。',
      luck: '吉', tags: ['光明','才能','依附']
    },
    {
      number: 31, name: '咸', fullName: '泽山咸', symbol: '䷞',
      upper: '兑', lower: '艮', lines: '011100',
      judgment: '亨，利贞，取女吉。',
      image: '山上有泽，咸；君子以虚受人。',
      meaning: '感应相通，阴阳相合。宜以诚感人，虚怀若谷，感情和谐美满。',
      luck: '吉', tags: ['感情','和谐','相通']
    },
    {
      number: 32, name: '恒', fullName: '雷风恒', symbol: '䷟',
      upper: '震', lower: '巽', lines: '001110',
      judgment: '亨，无咎，利贞，利有攸往。',
      image: '雷风，恒；君子以立不易方。',
      meaning: '恒久不变，坚守正道。宜持之以恒，坚定不移，长久方得成就。',
      luck: '吉', tags: ['坚持','持久','稳定']
    },
    {
      number: 33, name: '遁', fullName: '天山遁', symbol: '䷠',
      upper: '乾', lower: '艮', lines: '111100',
      judgment: '亨，小利贞。',
      image: '天下有山，遁；君子以远小人，不恶而严。',
      meaning: '功成身退，避世隐居。宜审时度势，适时退隐，以退为进。',
      luck: '中', tags: ['退隐','审时','避让']
    },
    {
      number: 34, name: '大壮', fullName: '雷天大壮', symbol: '䷡',
      upper: '震', lower: '乾', lines: '001111',
      judgment: '利贞。',
      image: '雷在天上，大壮；君子以非礼弗履。',
      meaning: '阳刚壮盛，但须守正。宜以正道施展才能，不可逞强，量力而行。',
      luck: '吉', tags: ['壮盛','正道','力量']
    },
    {
      number: 35, name: '晋', fullName: '火地晋', symbol: '䷢',
      upper: '离', lower: '坤', lines: '101000',
      judgment: '康侯用锡马蕃庶，昼日三接。',
      image: '明出地上，晋；君子以自昭明德。',
      meaning: '蒸蒸日上，前途光明。宜积极进取，彰显德行，把握晋升机遇。',
      luck: '大吉', tags: ['晋升','进步','光明']
    },
    {
      number: 36, name: '明夷', fullName: '地火明夷', symbol: '䷣',
      upper: '坤', lower: '离', lines: '000101',
      judgment: '利艰贞。',
      image: '明入地中，明夷；君子以莅众，用晦而明。',
      meaning: '光明受损，暗中养晦。宜藏锋守拙，韬光养晦，以待时机。',
      luck: '凶', tags: ['养晦','隐忍','守护']
    },
    {
      number: 37, name: '家人', fullName: '风火家人', symbol: '䷤',
      upper: '巽', lower: '离', lines: '110101',
      judgment: '利女贞。',
      image: '风自火出，家人；君子以言有物，而行有恒。',
      meaning: '家庭和睦，各守其位。宜重视家庭，言行一致，家和万事兴。',
      luck: '吉', tags: ['家庭','和睦','责任']
    },
    {
      number: 38, name: '睽', fullName: '火泽睽', symbol: '䷥',
      upper: '离', lower: '兑', lines: '101011',
      judgment: '小事吉。',
      image: '上火下泽，睽；君子以同而异。',
      meaning: '相违对立，小事可成。宜求同存异，在矛盾中寻求和谐，化异为同。',
      luck: '中', tags: ['矛盾','求同','化解']
    },
    {
      number: 39, name: '蹇', fullName: '水山蹇', symbol: '䷦',
      upper: '坎', lower: '艮', lines: '010100',
      judgment: '利西南，不利东北；利见大人，贞吉。',
      image: '山上有水，蹇；君子以反身修德。',
      meaning: '艰难险阻，举步维艰。宜反思自省，修身养德，寻求贵人相助。',
      luck: '凶', tags: ['艰难','反思','贵人']
    },
    {
      number: 40, name: '解', fullName: '雷水解', symbol: '䷧',
      upper: '震', lower: '坎', lines: '001010',
      judgment: '利西南，无所往，其来复吉。有攸往，夙吉。',
      image: '雷雨作，解；君子以赦过宥罪。',
      meaning: '困难解除，雷雨化解。宜把握时机，尽快行动，宽以待人。',
      luck: '吉', tags: ['解困','行动','宽容']
    },
    {
      number: 41, name: '损', fullName: '山泽损', symbol: '䷨',
      upper: '艮', lower: '兑', lines: '100011',
      judgment: '有孚，元吉，无咎，可贞，利有攸往。曷之用，二簋可用享。',
      image: '山下有泽，损；君子以惩忿窒欲。',
      meaning: '减损自我，有益于人。宜克制私欲，损己利人，以退让换取长远之利。',
      luck: '中', tags: ['克制','奉献','减损']
    },
    {
      number: 42, name: '益', fullName: '风雷益', symbol: '䷩',
      upper: '巽', lower: '震', lines: '110001',
      judgment: '利有攸往，利涉大川。',
      image: '风雷，益；君子以见善则迁，有过则改。',
      meaning: '增益获益，利于进取。宜见贤思齐，知错能改，积极行动，大有收获。',
      luck: '大吉', tags: ['获益','进步','行动']
    },
    {
      number: 43, name: '夬', fullName: '泽天夬', symbol: '䷪',
      upper: '兑', lower: '乾', lines: '011111',
      judgment: '扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。',
      image: '泽上于天，夬；君子以施禄及下，居德则忌。',
      meaning: '决断清除，刚健果决。宜公正处事，果断行动，彻底清除障碍。',
      luck: '吉', tags: ['决断','果决','清除']
    },
    {
      number: 44, name: '姤', fullName: '天风姤', symbol: '䷫',
      upper: '乾', lower: '巽', lines: '111110',
      judgment: '女壮，勿用取女。',
      image: '天下有风，姤；后以施命诰四方。',
      meaning: '邂逅相遇，阴来遇阳。宜防范小人，谨慎交往，不可轻信陌生人。',
      luck: '中', tags: ['相遇','谨慎','防范']
    },
    {
      number: 45, name: '萃', fullName: '泽地萃', symbol: '䷬',
      upper: '兑', lower: '坤', lines: '011000',
      judgment: '亨。王假有庙，利见大人，亨，利贞，用大牲吉，利有攸往。',
      image: '泽上于地，萃；君子以除戎器，戒不虞。',
      meaning: '聚集众力，汇聚资源。宜凝聚人心，广结善缘，共谋大事。',
      luck: '吉', tags: ['聚集','合作','资源']
    },
    {
      number: 46, name: '升', fullName: '地风升', symbol: '䷭',
      upper: '坤', lower: '巽', lines: '000110',
      judgment: '元亨，用见大人，勿恤，南征吉。',
      image: '地中生木，升；君子以顺德，积小以高大。',
      meaning: '步步高升，循序渐进。宜脚踏实地，积少成多，稳步上升。',
      luck: '大吉', tags: ['晋升','进步','积累']
    },
    {
      number: 47, name: '困', fullName: '泽水困', symbol: '䷮',
      upper: '兑', lower: '坎', lines: '011010',
      judgment: '亨，贞，大人吉，无咎，有言不信。',
      image: '泽无水，困；君子以致命遂志。',
      meaning: '陷入困境，处境艰难。宜坚守志向，不言困苦，以德感人，终可突围。',
      luck: '凶', tags: ['困境','坚守','突破']
    },
    {
      number: 48, name: '井', fullName: '水风井', symbol: '䷯',
      upper: '坎', lower: '巽', lines: '010110',
      judgment: '改邑不改井，无丧无得，往来井井。汔至，亦未绠井，羸其瓶，凶。',
      image: '木上有水，井；君子以劳民劝相。',
      meaning: '深井养人，源源不绝。宜发掘潜能，服务他人，持之以恒方有收获。',
      luck: '中', tags: ['潜能','服务','持续']
    },
    {
      number: 49, name: '革', fullName: '泽火革', symbol: '䷰',
      upper: '兑', lower: '离', lines: '011101',
      judgment: '巳日乃孚，元亨利贞，悔亡。',
      image: '泽中有火，革；君子以治历明时。',
      meaning: '变革创新，去旧迎新。宜顺应时代，大胆革新，但须审时度势，循序渐进。',
      luck: '吉', tags: ['变革','创新','改变']
    },
    {
      number: 50, name: '鼎', fullName: '火风鼎', symbol: '䷱',
      upper: '离', lower: '巽', lines: '101110',
      judgment: '元吉，亨。',
      image: '木上有火，鼎；君子以正位凝命。',
      meaning: '稳固重器，国泰民安。宜稳扎稳打，以德立身，担当重任。',
      luck: '大吉', tags: ['稳固','地位','成就']
    },
    {
      number: 51, name: '震', fullName: '震为雷', symbol: '䷲',
      upper: '震', lower: '震', lines: '001001',
      judgment: '亨。震来虩虩，笑言哑哑，震惊百里，不丧匕鬯。',
      image: '洊雷，震；君子以恐惧修省。',
      meaning: '震动惊吓，惊而后安。宜居安思危，警醒自省，在震动中保持冷静。',
      luck: '中', tags: ['警醒','冷静','自省']
    },
    {
      number: 52, name: '艮', fullName: '艮为山', symbol: '䷳',
      upper: '艮', lower: '艮', lines: '100100',
      judgment: '艮其背，不获其身，行其庭，不见其人，无咎。',
      image: '兼山，艮；君子以思不出其位。',
      meaning: '静止不动，安分守己。宜安守本分，静心修养，不超越本分。',
      luck: '中', tags: ['静止','守分','修养']
    },
    {
      number: 53, name: '渐', fullName: '风山渐', symbol: '䷴',
      upper: '巽', lower: '艮', lines: '110100',
      judgment: '女归吉，利贞。',
      image: '山上有木，渐；君子以居贤德，善俗。',
      meaning: '循序渐进，水到渠成。宜按部就班，稳步前进，急不得。',
      luck: '吉', tags: ['渐进','稳步','耐心']
    },
    {
      number: 54, name: '归妹', fullName: '雷泽归妹', symbol: '䷵',
      upper: '震', lower: '兑', lines: '001011',
      judgment: '征凶，无攸利。',
      image: '泽上有雷，归妹；君子以永终知敝。',
      meaning: '仓促行事，有所不利。宜守正持重，不可轻举妄动，择机而行。',
      luck: '凶', tags: ['谨慎','守正','等待']
    },
    {
      number: 55, name: '丰', fullName: '雷火丰', symbol: '䷶',
      upper: '震', lower: '离', lines: '001101',
      judgment: '亨，王假之，勿忧，宜日中。',
      image: '雷电皆至，丰；君子以折狱致刑。',
      meaning: '丰盛极盛，如日中天。宜发挥才能，展现自我，但需防物极必反。',
      luck: '大吉', tags: ['丰收','鼎盛','才能']
    },
    {
      number: 56, name: '旅', fullName: '火山旅', symbol: '䷷',
      upper: '离', lower: '艮', lines: '101100',
      judgment: '小亨，旅贞吉。',
      image: '山上有火，旅；君子以明慎用刑，而不留狱。',
      meaning: '旅途漂泊，异乡求存。宜谨慎行事，广结善缘，明辨是非。',
      luck: '中', tags: ['出行','谨慎','随机应变']
    },
    {
      number: 57, name: '巽', fullName: '巽为风', symbol: '䷸',
      upper: '巽', lower: '巽', lines: '110110',
      judgment: '小亨，利有攸往，利见大人。',
      image: '随风，巽；君子以申命行事。',
      meaning: '柔顺入微，随风潜入。宜以柔克刚，善于沟通，循序渐进达目标。',
      luck: '吉', tags: ['柔顺','沟通','渗透']
    },
    {
      number: 58, name: '兑', fullName: '兑为泽', symbol: '䷹',
      upper: '兑', lower: '兑', lines: '011011',
      judgment: '亨，利贞。',
      image: '丽泽，兑；君子以朋友讲习。',
      meaning: '喜悦和乐，广结良缘。宜与友共进，以诚待人，快乐处世。',
      luck: '吉', tags: ['喜悦','友情','和乐']
    },
    {
      number: 59, name: '涣', fullName: '风水涣', symbol: '䷺',
      upper: '巽', lower: '坎', lines: '110010',
      judgment: '亨。王假有庙，利涉大川，利贞。',
      image: '风行水上，涣；先王以享于帝，立庙。',
      meaning: '涣散离析，需凝聚人心。宜以诚感人，凝聚力量，共渡难关。',
      luck: '中', tags: ['凝聚','诚信','团结']
    },
    {
      number: 60, name: '节', fullName: '水泽节', symbol: '䷻',
      upper: '坎', lower: '兑', lines: '010011',
      judgment: '亨。苦节不可贞。',
      image: '泽上有水，节；君子以制数度，议德行。',
      meaning: '节制有度，恰到好处。宜遵守规范，适度节制，不可过苦过严。',
      luck: '中', tags: ['节制','规范','适度']
    },
    {
      number: 61, name: '中孚', fullName: '风泽中孚', symbol: '䷼',
      upper: '巽', lower: '兑', lines: '110011',
      judgment: '豚鱼吉，利涉大川，利贞。',
      image: '泽上有风，中孚；君子以议狱缓死。',
      meaning: '内心诚信，以诚待物。宜以诚信处世，信守承诺，感化万物。',
      luck: '大吉', tags: ['诚信','信任','感化']
    },
    {
      number: 62, name: '小过', fullName: '雷山小过', symbol: '䷽',
      upper: '震', lower: '艮', lines: '001100',
      judgment: '亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上，宜下，大吉。',
      image: '山上有雷，小过；君子以行过乎恭，丧过乎哀，用过乎俭。',
      meaning: '小有过错，宜小不宜大。宜谦恭处世，从小事做起，不可好高骛远。',
      luck: '中', tags: ['谦恭','小心','稳健']
    },
    {
      number: 63, name: '既济', fullName: '水火既济', symbol: '䷾',
      upper: '坎', lower: '离', lines: '010101',
      judgment: '亨，小利贞，初吉终乱。',
      image: '水在火上，既济；君子以思患而豫防之。',
      meaning: '大功告成，但需防乱。宜居安思危，防患未然，不可骄傲自满。',
      luck: '吉', tags: ['成功','居安思危','防患']
    },
    {
      number: 64, name: '未济', fullName: '火水未济', symbol: '䷿',
      upper: '离', lower: '坎', lines: '101010',
      judgment: '亨，小狐汔济，濡其尾，无攸利。',
      image: '火在水上，未济；君子以慎辨物居方。',
      meaning: '大业未成，曙光在前。宜谨慎辨别，把握方向，终将成功在望。',
      luck: '中', tags: ['未完成','曙光','坚持']
    }
  ];

  // 按卦名索引
  const byName = {};
  const byNumber = {};
  HEXAGRAMS.forEach(h => {
    byName[h.name] = h;
    byNumber[h.number] = h;
  });

  // 根据日期hash获取卦
  function getByDate(dateStr) {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
    }
    const idx = hash % 64;
    return HEXAGRAMS[idx];
  }

  // 随机起卦
  function random() {
    return HEXAGRAMS[Math.floor(Math.random() * 64)];
  }

  // 根据数字起卦（1-64）
  function getByNumber(n) {
    return byNumber[n] || HEXAGRAMS[0];
  }

  // 摇卦（三枚铜钱法，简化版）
  function shake() {
    const lines = [];
    for (let i = 0; i < 6; i++) {
      const coins = [Math.random() > 0.5 ? 3 : 2, Math.random() > 0.5 ? 3 : 2, Math.random() > 0.5 ? 3 : 2];
      const sum = coins.reduce((a, b) => a + b, 0);
      lines.push(sum % 2 === 0 ? 0 : 1); // 偶数=阴，奇数=阳
    }
    const binary = lines.join('');
    return HEXAGRAMS.find(h => h.lines === binary) || random();
  }

  // 六爻解释
  const YAO_NAMES = ['初爻','二爻','三爻','四爻','五爻','上爻'];

  return {
    BAGUA,
    HEXAGRAMS,
    byName,
    byNumber,
    getByDate,
    getByNumber,
    random,
    shake,
    YAO_NAMES
  };
})();
