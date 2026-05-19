// 64 Hexagrams data for I Ching

const HEXAGRAMS = [
  {id:1, name:'乾', symbol:'☰☰', binary:'111111', upper:'乾',lower:'乾', fortune:'大吉', brief:'天行健，君子以自强不息', desc:'刚健之极，宜积极进取，大展宏图，此时运势旺盛，万事可为。'},
  {id:2, name:'坤', symbol:'☷☷', binary:'000000', upper:'坤',lower:'坤', fortune:'吉', brief:'地势坤，君子以厚德载物', desc:'柔顺包容，宜以静制动，默默耕耘，积累终将厚积薄发。'},
  {id:3, name:'屯', symbol:'☵☳', binary:'100010', upper:'坎',lower:'震', fortune:'中', brief:'云雷屯，君子以经纶', desc:'初生之难，万事开头难，但坚持必有突破，不可轻言放弃。'},
  {id:4, name:'蒙', symbol:'☶☵', binary:'010001', upper:'艮',lower:'坎', fortune:'中', brief:'山下出泉，蒙，君子以果行育德', desc:'启蒙求学之象，谦虚请教，循序渐进，方能开启智慧之门。'},
  {id:5, name:'需', symbol:'☵☰', binary:'111010', upper:'坎',lower:'乾', fortune:'吉', brief:'云上于天，需，君子以饮食宴乐', desc:'时机未到，等待是智慧，养精蓄锐，机会自然降临。'},
  {id:6, name:'讼', symbol:'☰☵', binary:'010111', upper:'乾',lower:'坎', fortune:'凶', brief:'天与水违行，讼，君子以作事谋始', desc:'纠纷争讼之象，宜和解退让，争则两败俱伤。'},
  {id:7, name:'师', symbol:'☷☵', binary:'010000', upper:'坤',lower:'坎', fortune:'吉', brief:'地中有水，师，君子以容民畜众', desc:'统领众人，以德服人，团结合作，方能成就大事。'},
  {id:8, name:'比', symbol:'☵☷', binary:'000010', upper:'坎',lower:'坤', fortune:'吉', brief:'地上有水，比，先王以建万国', desc:'亲密协作之象，选择志同道合的伙伴，共谋大业。'},
  {id:9, name:'小畜', symbol:'☴☰', binary:'111011', upper:'巽',lower:'乾', fortune:'中', brief:'风行天上，小畜，君子以懿文德', desc:'小有积累，但时机未完全成熟，继续蓄势，不宜贸进。'},
  {id:10, name:'履', symbol:'☰☱', binary:'110111', upper:'乾',lower:'兑', fortune:'吉', brief:'上天下泽，履，君子以辨上下，定民志', desc:'谨慎行事，步步为营，即使行走险途也能化险为夷。'},
  {id:11, name:'泰', symbol:'☷☰', binary:'111000', upper:'坤',lower:'乾', fortune:'大吉', brief:'天地交，泰，后以财成天地之道', desc:'天地交融，万物畅通，是难得的大吉之卦，诸事顺遂。'},
  {id:12, name:'否', symbol:'☰☷', binary:'000111', upper:'乾',lower:'坤', fortune:'凶', brief:'天地不交，否，君子以俭德辟难', desc:'闭塞不通之象，宜守中待变，逆境中蓄积力量。'},
  {id:13, name:'同人', symbol:'☰☲', binary:'101111', upper:'乾',lower:'离', fortune:'吉', brief:'天与火，同人，君子以类族辨物', desc:'众人齐心，志同道合，团结一致，共创佳绩。'},
  {id:14, name:'大有', symbol:'☲☰', binary:'111101', upper:'离',lower:'乾', fortune:'大吉', brief:'火在天上，大有，君子以遏恶扬善', desc:'丰收盛大，财富旺盛，但需防骄奢，以德持盈。'},
  {id:15, name:'谦', symbol:'☷☶', binary:'001000', upper:'坤',lower:'艮', fortune:'吉', brief:'地中有山，谦，君子以裒多益寡', desc:'谦逊内敛之德，满招损谦受益，谦虚处世百事皆宜。'},
  {id:16, name:'豫', symbol:'☳☷', binary:'000100', upper:'震',lower:'坤', fortune:'吉', brief:'雷出地奋，豫，先王以作乐崇德', desc:'喜悦顺畅，顺势而为，欢乐祥和，但勿因乐而怠惰。'},
  {id:17, name:'随', symbol:'☱☳', binary:'100110', upper:'兑',lower:'震', fortune:'吉', brief:'泽中有雷，随，君子以向晦入宴息', desc:'顺应时势，灵活变通，跟随正确的方向，必获善果。'},
  {id:18, name:'蛊', symbol:'☶☴', binary:'011001', upper:'艮',lower:'巽', fortune:'中', brief:'山下有风，蛊，君子以振民育德', desc:'积弊待革，需要整治改革，勇于面对问题，才能重焕生机。'},
  {id:19, name:'临', symbol:'☷☱', binary:'110000', upper:'坤',lower:'兑', fortune:'吉', brief:'泽上有地，临，君子以教思无穷', desc:'亲临督导，主动出击，时机正好，宜积极行动把握机遇。'},
  {id:20, name:'观', symbol:'☴☷', binary:'000011', upper:'巽',lower:'坤', fortune:'中', brief:'风行地上，观，先王以省方观民设教', desc:'冷静观察，深思熟虑，不急于行动，洞察局势再做决定。'},
  {id:21, name:'噬嗑', symbol:'☲☳', binary:'100101', upper:'离',lower:'震', fortune:'中', brief:'雷电，噬嗑，先王以明罚敕法', desc:'需要突破障碍，果断处理问题，刚柔并济方能化解困局。'},
  {id:22, name:'贲', symbol:'☶☲', binary:'101001', upper:'艮',lower:'离', fortune:'吉', brief:'山下有火，贲，君子以明庶政', desc:'文采斐然，注重形象与品质，以美好的形式展现内在价值。'},
  {id:23, name:'剥', symbol:'☶☷', binary:'000001', upper:'艮',lower:'坤', fortune:'凶', brief:'山附于地，剥，上以厚下安宅', desc:'剥落衰退，宜守不宜进，等待转机，厚积实力以待复苏。'},
  {id:24, name:'复', symbol:'☷☳', binary:'100000', upper:'坤',lower:'震', fortune:'吉', brief:'雷在地中，复，先王以至日闭关', desc:'否极泰来，一阳来复，新的循环开始，充满希望与生机。'},
  {id:25, name:'无妄', symbol:'☰☳', binary:'100111', upper:'乾',lower:'震', fortune:'吉', brief:'天下雷行，无妄，先王以茂对时育万物', desc:'顺应天道，真诚无妄，不期望意外之财，踏实行事必有所成。'},
  {id:26, name:'大畜', symbol:'☶☰', binary:'111001', upper:'艮',lower:'乾', fortune:'吉', brief:'天在山中，大畜，君子以多识前言往行', desc:'大量积累，厚积薄发，储备学识与能量，时机成熟将大展身手。'},
  {id:27, name:'颐', symbol:'☶☳', binary:'100001', upper:'艮',lower:'震', fortune:'中', brief:'山下有雷，颐，君子以慎言语，节饮食', desc:'养生颐神，注意饮食起居，修身养性，健康才是根本。'},
  {id:28, name:'大过', symbol:'☱☴', binary:'011110', upper:'兑',lower:'巽', fortune:'中', brief:'泽灭木，大过，君子以独立不惧', desc:'超越常规，独当一面，非常时期需非常之策，勇于承担。'},
  {id:29, name:'坎', symbol:'☵☵', binary:'010010', upper:'坎',lower:'坎', fortune:'中', brief:'水洊至，习坎，君子以常德行习教事', desc:'重重险阻，但习险能越险，保持信心坚持前行，终将渡过难关。'},
  {id:30, name:'离', symbol:'☲☲', binary:'101101', upper:'离',lower:'离', fortune:'吉', brief:'明两作，离，大人以继明照于四方', desc:'光明普照，文明昌盛，展现才华与光彩，照亮四方。'},
  {id:31, name:'咸', symbol:'☱☶', binary:'001110', upper:'兑',lower:'艮', fortune:'大吉', brief:'山上有泽，咸，君子以虚受人', desc:'感应相合，心有灵犀，感情和睦，万事皆有感应之机。'},
  {id:32, name:'恒', symbol:'☳☴', binary:'011100', upper:'震',lower:'巽', fortune:'吉', brief:'雷风，恒，君子以立不易方', desc:'恒久坚持，不轻易改变方向，持之以恒是成功的关键。'},
  {id:33, name:'遁', symbol:'☰☶', binary:'001111', upper:'乾',lower:'艮', fortune:'中', brief:'天下有山，遁，君子以远小人', desc:'进退有道，适时隐退保全实力，避开纷争，韬光养晦。'},
  {id:34, name:'大壮', symbol:'☳☰', binary:'111100', upper:'震',lower:'乾', fortune:'吉', brief:'雷在天上，大壮，君子以非礼弗履', desc:'阳气旺盛，实力强大，但需节制，以正道行事方能长久。'},
  {id:35, name:'晋', symbol:'☲☷', binary:'000101', upper:'离',lower:'坤', fortune:'大吉', brief:'明出地上，晋，君子以自昭明德', desc:'日出东方，前途光明，积极进取，功名富贵指日可待。'},
  {id:36, name:'明夷', symbol:'☷☲', binary:'101000', upper:'坤',lower:'离', fortune:'中', brief:'明入地中，明夷，君子以莅众用晦而明', desc:'光明受阻，身处逆境，需忍辱负重，保存实力等待时机。'},
  {id:37, name:'家人', symbol:'☴☲', binary:'101011', upper:'巽',lower:'离', fortune:'吉', brief:'风自火出，家人，君子以言有物而行有恒', desc:'家庭和睦，各守本分，家道兴旺，齐心协力共创美好。'},
  {id:38, name:'睽', symbol:'☲☱', binary:'110101', upper:'离',lower:'兑', fortune:'中', brief:'上火下泽，睽，君子以同而异', desc:'意见相左，求同存异，在分歧中寻找共识，化矛盾为合力。'},
  {id:39, name:'蹇', symbol:'☵☶', binary:'001010', upper:'坎',lower:'艮', fortune:'凶', brief:'山上有水，蹇，君子以反身修德', desc:'前路艰难，不可强行，退守待机，反思自省，方能化险。'},
  {id:40, name:'解', symbol:'☳☵', binary:'010100', upper:'震',lower:'坎', fortune:'吉', brief:'雷雨作，解，君子以赦过宥罪', desc:'困难解除，迎来转机，把握机会，果断行动，开创新局。'},
  {id:41, name:'损', symbol:'☶☱', binary:'110001', upper:'艮',lower:'兑', fortune:'中', brief:'山下有泽，损，君子以惩忿窒欲', desc:'减损自我，利他人，损之又损，反而得益，学会取舍。'},
  {id:42, name:'益', symbol:'☴☳', binary:'100011', upper:'巽',lower:'震', fortune:'大吉', brief:'风雷，益，君子以见善则迁，有过则改', desc:'增益丰盈，利己利人，行善积德，福报自然而来。'},
  {id:43, name:'夬', symbol:'☱☰', binary:'111110', upper:'兑',lower:'乾', fortune:'吉', brief:'泽上于天，夬，君子以施禄及下', desc:'果断决断，清除障碍，正义必胜，勇于亮出立场。'},
  {id:44, name:'姤', symbol:'☰☴', binary:'011111', upper:'乾',lower:'巽', fortune:'中', brief:'天下有风，姤，后以施命诰四方', desc:'邂逅相遇，机遇突现，但需谨慎分辨，警惕诱惑。'},
  {id:45, name:'萃', symbol:'☱☷', binary:'000110', upper:'兑',lower:'坤', fortune:'吉', brief:'泽上于地，萃，君子以除戎器戒不虞', desc:'聚集汇聚，众志成城，广结善缘，集体的力量无穷。'},
  {id:46, name:'升', symbol:'☷☴', binary:'011000', upper:'坤',lower:'巽', fortune:'大吉', brief:'地中生木，升，君子以顺德，积小以高大', desc:'由下而上，稳步晋升，循序渐进，终能达到理想高度。'},
  {id:47, name:'困', symbol:'☱☵', binary:'010110', upper:'兑',lower:'坎', fortune:'凶', brief:'泽无水，困，君子以致命遂志', desc:'陷入困境，但君子处困不馁，坚守本志，困境终会突破。'},
  {id:48, name:'井', symbol:'☵☴', binary:'011010', upper:'坎',lower:'巽', fortune:'吉', brief:'木上有水，井，君子以劳民劝相', desc:'取之不竭，用之不尽，修身蓄德如深井，滋养万物。'},
  {id:49, name:'革', symbol:'☱☲', binary:'101110', upper:'兑',lower:'离', fortune:'吉', brief:'泽中有火，革，君子以治历明时', desc:'革故鼎新，变革之时，顺应时代潮流，主动求变。'},
  {id:50, name:'鼎', symbol:'☲☴', binary:'011101', upper:'离',lower:'巽', fortune:'大吉', brief:'木上有火，鼎，君子以正位凝命', desc:'鼎器烹饪，化繁为精，成就卓越，功名成就之象。'},
  {id:51, name:'震', symbol:'☳☳', binary:'100100', upper:'震',lower:'震', fortune:'中', brief:'洊雷，震，君子以恐惧修省', desc:'雷震惊惕，以戒慎恐惧之心，时刻保持警醒，危中有机。'},
  {id:52, name:'艮', symbol:'☶☶', binary:'001001', upper:'艮',lower:'艮', fortune:'吉', brief:'兼山，艮，君子以思不出其位', desc:'静止沉稳，安守本分，专注当下，止于其所是大智慧。'},
  {id:53, name:'渐', symbol:'☴☶', binary:'001011', upper:'巽',lower:'艮', fortune:'吉', brief:'山上有木，渐，君子以居贤德善俗', desc:'循序渐进，不可操之过急，稳步推进方能水到渠成。'},
  {id:54, name:'归妹', symbol:'☳☱', binary:'110100', upper:'震',lower:'兑', fortune:'凶', brief:'泽上有雷，归妹，君子以永终知敝', desc:'情感之事需谨慎，不可冲动行事，尊重规则方能长久。'},
  {id:55, name:'丰', symbol:'☳☲', binary:'101100', upper:'震',lower:'离', fortune:'大吉', brief:'雷电皆至，丰，君子以折狱致刑', desc:'丰盛鼎盛，人生巅峰，把握当下盛况，居安思危。'},
  {id:56, name:'旅', symbol:'☲☶', binary:'001101', upper:'离',lower:'艮', fortune:'中', brief:'山上有火，旅，君子以明慎用刑', desc:'旅途漂泊，处处谨慎，以礼待人，异乡也能觅得机缘。'},
  {id:57, name:'巽', symbol:'☴☴', binary:'011011', upper:'巽',lower:'巽', fortune:'吉', brief:'随风，巽，君子以申命行事', desc:'柔顺入微，春风化雨，以柔克刚，润物无声成就大事。'},
  {id:58, name:'兑', symbol:'☱☱', binary:'110110', upper:'兑',lower:'兑', fortune:'大吉', brief:'丽泽，兑，君子以朋友讲习', desc:'喜悦和乐，人际和谐，口才出众，交流带来丰厚收益。'},
  {id:59, name:'涣', symbol:'☴☵', binary:'010011', upper:'巽',lower:'坎', fortune:'中', brief:'风行水上，涣，先王以享于帝立庙', desc:'散涣消融，化解隔阂，以真诚化解矛盾，重建和谐。'},
  {id:60, name:'节', symbol:'☵☱', binary:'110010', upper:'坎',lower:'兑', fortune:'吉', brief:'泽上有水，节，君子以制数度，议德行', desc:'节制有度，不过分不不足，适度是最高智慧。'},
  {id:61, name:'中孚', symbol:'☴☱', binary:'110011', upper:'巽',lower:'兑', fortune:'大吉', brief:'泽上有风，中孚，君子以议狱缓死', desc:'内心诚信，以诚感人，真诚是打动一切的力量。'},
  {id:62, name:'小过', symbol:'☳☶', binary:'001100', upper:'震',lower:'艮', fortune:'中', brief:'山上有雷，小过，君子以行过乎恭，丧过乎哀', desc:'小事过头，宜小心谨慎，不可大动，以守为攻。'},
  {id:63, name:'既济', symbol:'☵☲', binary:'101010', upper:'坎',lower:'离', fortune:'吉', brief:'水在火上，既济，君子以思患而豫防之', desc:'大功告成，已渡过险境，但要居安思危，防患未然。'},
  {id:64, name:'未济', symbol:'☲☵', binary:'010101', upper:'离',lower:'坎', fortune:'中', brief:'火在水上，未济，君子以慎辨物居方', desc:'事未完成，继续努力，终点亦是新的起点，前途可期。'}
];

function getHexagramByDate(date) {
  const d = date || new Date();
  const seed = d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate();
  let s = seed >>> 0;
  s += 0x6D2B79F5;
  let t = Math.imul(s ^ (s>>>15), 1|s);
  t = t + Math.imul(t^(t>>>7), 61|t)^t;
  const idx = ((t^(t>>>14))>>>0) % 64;
  return HEXAGRAMS[idx];
}

function drawHexagram(hex) {
  const lines = hex.binary.split('').reverse();
  return lines.map(b => b==='1'
    ? '<div class="hex-line yang"></div>'
    : '<div class="hex-line yin"><span></span><span></span></div>'
  ).join('');
}
