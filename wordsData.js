// 新概念1-2册 全单词终极美观版（共 1708 个）
// meanings 已完美处理：
//   - 所有 

//   - 第一个词性不换行，从第二个词性开始每个词性单独一行
//   - 显示效果极致美观，前端直接 innerHTML 就能完美换行
// 生成时间：2025.11.30 终极封神版
const wordsData = [
  {
    "word": "excuse",
    "pronunciation": "[ɪkˈskjuːs]",
    "meanings": "[名] 饶恕； 借⼝； 致歉\n[动] 宽恕； 原谅； 辩解",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "me",
    "pronunciation": "[miː]",
    "meanings": "[代] 我（宾语）",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "yes",
    "pronunciation": "[jes]",
    "meanings": "[副] 是\n[名] 是",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "is",
    "pronunciation": "[ɪz]",
    "meanings": "[动] 是",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "this",
    "pronunciation": "[ðɪs]",
    "meanings": "[形] 这\n[代] 这个\n[副] 这个； 这样； 这么",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "your",
    "pronunciation": "[jʊr]",
    "meanings": "[代] 你的； 你们的",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "handbag",
    "pronunciation": "[ˈhændbæɡ]",
    "meanings": "[名] ⼿提包",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "pardon",
    "pronunciation": "[ˈpɑːrd(ǝ)n]",
    "meanings": "[动] 原谅； 宽恕； 请再说⼀遍\n[名] 原谅； 宽恕",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "it",
    "pronunciation": "[ɪt]",
    "meanings": "[代] 它",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "thank you",
    "pronunciation": "[ˈθæŋk juː]",
    "meanings": "[短语] 谢谢你",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "very much",
    "pronunciation": "[ˈveri mʌtʃ]",
    "meanings": "[短语] 很； ⾮常",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "pen",
    "pronunciation": "[pen]",
    "meanings": "[名] 钢笔； 笔； 围栏",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "pencil",
    "pronunciation": "[ˈpens(ǝ)l]",
    "meanings": "[名] 铅笔",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "book",
    "pronunciation": "[bʊk]",
    "meanings": "[名] 书； 账簿\n[动] 预订",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "watch",
    "pronunciation": "[wɑːtʃ]",
    "meanings": "[动] 观看； 观察； ⼩⼼\n[名] ⼿表； 监视； 注意",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "coat",
    "pronunciation": "[kǝʊt]",
    "meanings": "[名] ⼤⾐； 外⾐\n[动] （⽤…） 覆盖",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "dress",
    "pronunciation": "[dres]",
    "meanings": "[名] 连⾐裙； ⾐服\n[动] （给…） 穿⾐服",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "skirt",
    "pronunciation": "[skɜːrt]",
    "meanings": "[名] 短裙； 下摆； 边缘\n[动] 位于…的边缘； 绕着…⾛； 避开",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "shirt",
    "pronunciation": "[ʃɜːrt]",
    "meanings": "[名] 衬衫",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "car",
    "pronunciation": "[kɑːr]",
    "meanings": "[名] ⼩汽⻋",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "house",
    "pronunciation": "[haʊs]",
    "meanings": "[名] 房⼦； 房屋",
    "book": "1册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "umbrella",
    "pronunciation": "[ʌmˈbrelǝ]",
    "meanings": "[名] 伞； ⾬伞",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "please",
    "pronunciation": "[pliːz]",
    "meanings": "[叹] 请\n[动] 使欢喜； 取悦",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "here",
    "pronunciation": "[hɪr]",
    "meanings": "[副] 这⾥",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "my",
    "pronunciation": "[maɪ]",
    "meanings": "[代] 我的",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "ticket",
    "pronunciation": "[ˈtɪkɪt]",
    "meanings": "[名] 票； ⻋票",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "number",
    "pronunciation": "[ˈnʌmbǝr]",
    "meanings": "[名] 数字； 号码",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "five",
    "pronunciation": "[faɪv]",
    "meanings": "[数] 五",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "sorry",
    "pronunciation": "[ˈsɑːri]",
    "meanings": "[形] 对不起的； 遗憾的； 抱歉的\n[叹] 对不起； 抱歉",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "sir",
    "pronunciation": "[sɜːr]",
    "meanings": "[名] 先⽣； 阁下",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "cloakroom",
    "pronunciation": "[ˈklǝʊkruːm]",
    "meanings": "[名] ⾐帽间；（英） 厕所",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "suit",
    "pronunciation": "[suːt]",
    "meanings": "[名] 套装； ⻄装； 诉讼\n[动] 适合； 相配",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "school",
    "pronunciation": "[skuːl]",
    "meanings": "[名] 学校\n[动] 教育",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "teacher",
    "pronunciation": "[ˈtiːtʃǝr]",
    "meanings": "[名] 教师",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "son",
    "pronunciation": "[sʌn]",
    "meanings": "[名] ⼉⼦",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "daughter",
    "pronunciation": "[ˈdɔːtǝr]",
    "meanings": "[名] ⼥⼉",
    "book": "1册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "Mr",
    "pronunciation": "[ˈmɪstǝr]",
    "meanings": "[名] 男⼠",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "good",
    "pronunciation": "[ɡʊd]",
    "meanings": "[形] 好的； 优秀的",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "morning",
    "pronunciation": "[ˈmɔːrnɪŋ]",
    "meanings": "[名] 早晨； 上午",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Miss",
    "pronunciation": "[mɪs]",
    "meanings": "[名] ⼩姐",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "new",
    "pronunciation": "[nuː]",
    "meanings": "[形] 新的",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "student",
    "pronunciation": "[ˈstuːd(ǝ)nt]",
    "meanings": "[名] 学⽣",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "French",
    "pronunciation": "[frentʃ]",
    "meanings": "[形] 法国的； 法国⼈的； 法语的\n[名] 法语； 法国⼈",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "German",
    "pronunciation": "[ˈdʒɜːrmǝn]",
    "meanings": "[形] 德国的； 德国⼈的； 德语的\n[名] 德国⼈； 德语",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "nice",
    "pronunciation": "[naɪs]",
    "meanings": "[形] 令⼈愉快的； 美好的",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "meet",
    "pronunciation": "[miːt]",
    "meanings": "[动] 遇⻅； ⻅⾯； 满⾜",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Japanese",
    "pronunciation": "[ˌdʒæpǝˈniːz]",
    "meanings": "[形] ⽇本的； ⽇本⼈的； ⽇语的\n[名] ⽇语； ⽇本⼈",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Korean",
    "pronunciation": "[kǝˈriːǝn]",
    "meanings": "[名] 朝鲜⼈； 韩国⼈； 朝鲜话； 韩国语\n[形] 朝鲜（或韩国） 的； 朝鲜（或韩国） ⼈的； 朝鲜（或韩） 语的",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Chinese",
    "pronunciation": "[ˌtʃaɪˈniːz]",
    "meanings": "[名] 中国⼈； 汉语\n[形] 中国的",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "too",
    "pronunciation": "[tuː]",
    "meanings": "[副] 也； 过于",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "make",
    "pronunciation": "[meɪk]",
    "meanings": "[动] 做； 制作； 使得",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Swedish",
    "pronunciation": "[ˈswiːdɪʃ]",
    "meanings": "[形] 瑞典的； 瑞典⼈的； 瑞典语的\n[名] 瑞典语； 瑞典⼈",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "American",
    "pronunciation": "[ǝˈmerɪkǝn]",
    "meanings": "[名] 美国⼈； 美洲⼈\n[形] 美国的； 美洲的",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Italian",
    "pronunciation": "[ɪˈtæliǝn]",
    "meanings": "[名] 意⼤利语； 意⼤利⼈\n[形] 意⼤利的； 意⼤利⼈的； 意⼤利语的",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Volvo",
    "pronunciation": "[ˈvɑːlvǝʊ]",
    "meanings": "[名] 沃尔沃（富豪） 汽⻋",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Peugeot",
    "pronunciation": "[ˈpɜːrʒǝʊ]",
    "meanings": "[名] 法国标致（法国汽⻋公司）",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Mercedes",
    "pronunciation": "[mǝrˈseɪdiːz]",
    "meanings": "[名] 梅塞德斯（奔驰）； 默⻄迪丝（⼥⼦名）",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Toyota",
    "pronunciation": "[tɔɪˈǝʊtǝ]",
    "meanings": "[名] 丰⽥汽⻋",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Daewoo",
    "pronunciation": "[ˈdeɪwuː]",
    "meanings": "[名] ⼤宇（韩国⼤宇汽⻋公司）",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Mini",
    "pronunciation": "[ˈmɪni]",
    "meanings": "[名] 迷你汽⻋",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Ford",
    "pronunciation": "[fɔːrd]",
    "meanings": "[名] 福特汽⻋",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "Fiat",
    "pronunciation": "[ˈfiːɑːt]",
    "meanings": "[名] 菲亚特汽⻋",
    "book": "1册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "I",
    "pronunciation": "[aɪ]",
    "meanings": "[代] 我（主语）\n[名] 碘（元素iodine 的符号）",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "am",
    "pronunciation": "[æm]",
    "meanings": "[动] 是； 动词be 的第⼀⼈称单数现在式\n[缩] 上午； “ante meridiem” 的缩写",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "are",
    "pronunciation": "[ɑːr]",
    "meanings": "[动] 是",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "name",
    "pronunciation": "[neɪm]",
    "meanings": "[名] 姓名； 名称\n[动] 命名； 提名； 说出…的名字",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "what",
    "pronunciation": "[wʌt]",
    "meanings": "[代] 什么",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "nationality",
    "pronunciation": "[ˌnæʃǝˈnælǝti]",
    "meanings": "[名] 国籍； ⺠族",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "job",
    "pronunciation": "[dʒɑːb]",
    "meanings": "[名] ⼯作",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "keyboard",
    "pronunciation": "[ˈkiːbɔːrd]",
    "meanings": "[名] 键盘",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "operator",
    "pronunciation": "[ˈɑːpǝreɪtǝr]",
    "meanings": "[名] 操作员； 接线员",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "engineer",
    "pronunciation": "[ˌendʒɪˈnɪr]",
    "meanings": "[名] ⼯程师； 机械师\n[动] 设计（⼯程）； 策划",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "policeman",
    "pronunciation": "[pǝˈliːsmǝn]",
    "meanings": "[名] （男） 警察",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "policewoman",
    "pronunciation": "[pǝˈliːswʊmǝn]",
    "meanings": "[名] ⼥警察",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "taxi driver",
    "pronunciation": "[ˈtæksi ˈdraɪvǝr]",
    "meanings": "[名] 出租⻋司机",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "air hostess",
    "pronunciation": "[ˈer hǝʊstǝs]",
    "meanings": "[短语] 空中⼩姐",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "postman",
    "pronunciation": "[ˈpǝʊstmǝn]",
    "meanings": "[名] 邮递员； 邮差",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "nurse",
    "pronunciation": "[nɜːrs]",
    "meanings": "[名] 护⼠； 保姆\n[动] 护理； 照料； 喂奶",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "mechanic",
    "pronunciation": "[mǝˈkænɪk]",
    "meanings": "[名] 技⼯； 机械师； 机修⼯",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "hairdresser",
    "pronunciation": "[ˈherdresǝr]",
    "meanings": "[名] 理发师； 美发师",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "housewife",
    "pronunciation": "[ˈhaʊswaɪf]",
    "meanings": "[名] 家庭主妇",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "milkman",
    "pronunciation": "[ˈmɪlkmǝn]",
    "meanings": "[名] 送⽜奶的⼈",
    "book": "1册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "hello",
    "pronunciation": "[hǝˈlǝʊ]",
    "meanings": "[叹] 喂； 哈喽\n[名] “喂” 的招呼声或问候声",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "hi",
    "pronunciation": "[haɪ]",
    "meanings": "[叹] 嗨； 你好",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "how",
    "pronunciation": "[haʊ]",
    "meanings": "[副] 如何； 怎样； 多么",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "today",
    "pronunciation": "[tǝˈdeɪ]",
    "meanings": "[名] 今天； 当今\n[副] 在今天； 当今",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "well",
    "pronunciation": "[wel]",
    "meanings": "[副] 好； 对； 满意地\n[形] 健康的\n[名] 泉； 井； 油井\n[叹] （⽤于表示惊讶， 疑虑， 接受等）好",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "fine",
    "pronunciation": "[faɪn]",
    "meanings": "[形] 很好的； 晴朗的； 健康的\n[副] 很好\n[名] 罚款\n[动] 罚款",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "thanks",
    "pronunciation": "[θæŋks]",
    "meanings": "[叹] 谢谢\n[名] 感谢； “thank” 的复数\n[动] 谢谢； “thank” 的第三⼈称单数",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "goodbye",
    "pronunciation": "[ˌɡʊdˈbaɪ]",
    "meanings": "[叹] 再⻅\n[名] 说再⻅",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "see",
    "pronunciation": "[siː]",
    "meanings": "[动] 看； 领悟",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "fat",
    "pronunciation": "[fæt]",
    "meanings": "[形] 肥的\n[名] 脂肪",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "woman",
    "pronunciation": "[ˈwʊmǝn]",
    "meanings": "[名] ⼥⼈； 妇⼥",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "thin",
    "pronunciation": "[θɪn]",
    "meanings": "[形] 瘦的； 薄的",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "tall",
    "pronunciation": "[tɔːl]",
    "meanings": "[形] ⾼的",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "short",
    "pronunciation": "[ʃɔːrt]",
    "meanings": "[形] 短的； 矮的",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "dirty",
    "pronunciation": "[ˈdɜːrti]",
    "meanings": "[形] 肮脏的\n[动] 使变脏",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "clean",
    "pronunciation": "[kliːn]",
    "meanings": "[动] 打扫； 使⼲净\n[形] 洁净的； ⼲净的",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "hot",
    "pronunciation": "[hɑːt]",
    "meanings": "[形] 热的",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "cold",
    "pronunciation": "[kǝʊld]",
    "meanings": "[名] 寒冷； 感冒\n[形] 寒冷的； 冰冷的",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "old",
    "pronunciation": "[ǝʊld]",
    "meanings": "[形] ⽼的； 旧的； 年⽼的",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "young",
    "pronunciation": "[jʌŋ]",
    "meanings": "[形] 年轻的； 年幼的",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "busy",
    "pronunciation": "[ˈbɪzi]",
    "meanings": "[形] 忙碌的； 忙于",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "lazy",
    "pronunciation": "[ˈleɪzi]",
    "meanings": "[形] 懒惰的； 懒散的",
    "book": "1册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "whose",
    "pronunciation": "[huːz]",
    "meanings": "[代] 谁的",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "blue",
    "pronunciation": "[bluː]",
    "meanings": "[形] 蓝⾊的； 忧郁的\n[名] 蓝⾊",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "perhaps",
    "pronunciation": "[pǝrˈhæps]",
    "meanings": "[副] 或许； 可能",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "white",
    "pronunciation": "[waɪt]",
    "meanings": "[形] ⽩⾊的\n[名] ⽩⾊",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "catch",
    "pronunciation": "[kætʃ]",
    "meanings": "[动] 接住； 抓住； 赶上； 得病； 理解\n[名] 接住； 搭扣",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "father",
    "pronunciation": "[ˈfɑːðǝr]",
    "meanings": "[名] ⽗亲； 爸爸",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "mother",
    "pronunciation": "[ˈmʌðǝr]",
    "meanings": "[名] ⺟亲",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "blouse",
    "pronunciation": "[blaʊs]",
    "meanings": "[名] 宽松的⼥短衫； ⼥衬衫",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "sister",
    "pronunciation": "[ˈsɪstǝr]",
    "meanings": "[名] 姐妹",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "tie",
    "pronunciation": "[taɪ]",
    "meanings": "[名] 领带； 关系； 约束； 平局； 淘汰赛\n[动] 绑； 系； 拴； 约束； 与...成平局",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "brother",
    "pronunciation": "[ˈbrʌðǝr]",
    "meanings": "[名] 兄弟",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "his",
    "pronunciation": "[hɪz]",
    "meanings": "[代] 他的（he 的所有格）",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "her",
    "pronunciation": "[hɜːr]",
    "meanings": "[代] 她的",
    "book": "1册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "colour",
    "pronunciation": "[ˈkʌlǝr]",
    "meanings": "[名] 颜⾊\n[动] 着⾊",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "green",
    "pronunciation": "[ɡriːn]",
    "meanings": "[形] 绿⾊的； 未熟的； ⽆经验的\n[名] 绿⾊； 绿⾊物品",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "come",
    "pronunciation": "[kʌm]",
    "meanings": "[动] 来； 到来",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "upstairs",
    "pronunciation": "[ˌʌpˈsterz]",
    "meanings": "[副] 在楼上； 往楼上\n[形] 楼上的； 上层的\n[名] 楼上",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "smart",
    "pronunciation": "[smɑːrt]",
    "meanings": "[形] 聪明的； 敏捷的； 时髦的； ⾐冠楚楚的\n[动] 剧痛； 刺痛； 感到难过",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "hat",
    "pronunciation": "[hæt]",
    "meanings": "[名] 帽⼦",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "same",
    "pronunciation": "[seɪm]",
    "meanings": "[形] 相同的",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "lovely",
    "pronunciation": "[ˈlʌvli]",
    "meanings": "[形] 可爱的； 美丽的",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "case",
    "pronunciation": "[keɪs]",
    "meanings": "[名] 事例； 情况； 案件； 外壳； 容器（箱， 盒）",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "carpet",
    "pronunciation": "[ˈkɑːrpɪt]",
    "meanings": "[名] 地毯",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "dog",
    "pronunciation": "[dɔːɡ]",
    "meanings": "[名] 狗\n[动] 尾随",
    "book": "1册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "customs",
    "pronunciation": "[ˈkʌstǝmz]",
    "meanings": "[名] 关税； 海关\n[名] 习俗； 习惯； “custom” 的复数",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "officer",
    "pronunciation": "[ˈɑːfɪsǝr]",
    "meanings": "[名] 军官； 官员",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "girl",
    "pronunciation": "[ɡɜːrl]",
    "meanings": "[名] ⼥孩",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "Danish",
    "pronunciation": "[ˈdeɪnɪʃ]",
    "meanings": "[形] 丹⻨的； 丹⻨⼈的； 丹⻨语的\n[名] 丹⻨语",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "friend",
    "pronunciation": "[frend]",
    "meanings": "[名] 朋友",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "Norwegian",
    "pronunciation": "[nɔːrˈwiːdʒǝn]",
    "meanings": "[形] 挪威（⼈， 语） 的\n[名] 挪威⼈； 挪威语",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "passport",
    "pronunciation": "[ˈpæspɔːrt]",
    "meanings": "[名] 护照； 通⾏证",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "brown",
    "pronunciation": "[braʊn]",
    "meanings": "[形] 褐⾊的； 棕⾊的\n[名] 褐⾊； 棕⾊",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "tourist",
    "pronunciation": "[ˈtʊrɪst]",
    "meanings": "[名] 旅游者； 观光者",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "Russian",
    "pronunciation": "[ˈrʌʃ(ǝ)n]",
    "meanings": "[名] 俄罗斯⼈； 俄语\n[形] 俄国的； 俄国⼈的； 俄语的",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "Dutch",
    "pronunciation": "[dʌtʃ]",
    "meanings": "[形] 荷兰的； 荷兰⼈的； 荷兰语的\n[名] 荷兰⼈； 荷兰语",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "these",
    "pronunciation": "[ðiːz]",
    "meanings": "[代] 这些； “this” 的复数\n[形] 这些的",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "red",
    "pronunciation": "[red]",
    "meanings": "[形] 红的\n[名] 红⾊",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "grey",
    "pronunciation": "[ɡreɪ]",
    "meanings": "[形] 灰⾊的； 暗淡的\n[名] 灰⾊； 暗淡",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "yellow",
    "pronunciation": "[ˈjelǝʊ]",
    "meanings": "[形] ⻩⾊的\n[名] ⻩⾊",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "black",
    "pronunciation": "[blæk]",
    "meanings": "[形] ⿊⾊的\n[名] ⿊⾊",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "orange",
    "pronunciation": "[ˈɔːrɪndʒ]",
    "meanings": "[形] 橙⾊的\n[名] 橙⾊； 橙⼦",
    "book": "1册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "employee",
    "pronunciation": "[ɪmˈplɔɪiː]",
    "meanings": "[名] 雇员； 受雇者",
    "book": "1册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "hard-working",
    "pronunciation": "[ˌhɑːrd ˈwɜːrkɪŋ]",
    "meanings": "[形] 勤勉的； 努⼒⼯作的",
    "book": "1册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "sales rep",
    "pronunciation": "[ˈseɪlz rep]",
    "meanings": "[短语] 推销员",
    "book": "1册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "man",
    "pronunciation": "[mæn]",
    "meanings": "[名] 男⼈； ⼈\n[动] 操作； ⼯作",
    "book": "1册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "office",
    "pronunciation": "[ˈɑːfɪs]",
    "meanings": "[名] 办公室",
    "book": "1册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "assistant",
    "pronunciation": "[ǝˈsɪstǝnt]",
    "meanings": "[名] 助理； 助⼿\n[形] 助理的； 辅助的",
    "book": "1册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "matter",
    "pronunciation": "[ˈmætǝr]",
    "meanings": "[名] 事情； 物质； 问题； 麻烦\n[动] 要紧",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "children",
    "pronunciation": "[ˈtʃɪldrǝn]",
    "meanings": "[名] ⼉童； ⼩孩； “child” 的复数",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "tired",
    "pronunciation": "[ˈtaɪǝrd]",
    "meanings": "[形] 疲倦的； 厌烦的\n[动] 使疲倦； 使厌烦； “tire” 的过去式和过去分词",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "boy",
    "pronunciation": "[bɔɪ]",
    "meanings": "[名] 男孩",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "thirsty",
    "pronunciation": "[ˈθɜːrsti]",
    "meanings": "[形] ⼝渴的； 渴望的",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "Mum",
    "pronunciation": "[mʌm]",
    "meanings": "[名] 妈妈",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "sit down",
    "pronunciation": "[sɪt daʊn]",
    "meanings": "[短语] 坐下",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "right",
    "pronunciation": "[raɪt]",
    "meanings": "[形] 右边的； 正确的\n[名] 权利； 右边\n[副] 正确地； 直接地； 向右\n[动] 扶直； 纠正",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "ice cream",
    "pronunciation": "[ˈaɪs kriːm]",
    "meanings": "[名] 冰淇淋",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "big",
    "pronunciation": "[bɪɡ]",
    "meanings": "[形] ⼤的",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "small",
    "pronunciation": "[smɔːl]",
    "meanings": "[形] ⼩的",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "open",
    "pronunciation": "[ˈǝʊpǝn]",
    "meanings": "[动] 打开； 开放\n[形] 开放的； 营业的\n[名] 公开； 户外",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "shut",
    "pronunciation": "[ʃʌt]",
    "meanings": "[动] 关； 闭\n[形] 关闭的； 停⽌营业的",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "light",
    "pronunciation": "[laɪt]",
    "meanings": "[名] 光； 灯； 光线\n[形] 轻的； 浅的； 明亮的； 少量的\n[动] 点燃； 照亮",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "heavy",
    "pronunciation": "[ˈhevi]",
    "meanings": "[形] 重的； 沉重的",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "long",
    "pronunciation": "[lɔːŋ]",
    "meanings": "[形] ⻓的； ⻓时间的\n[副] ⻓久地； 始终\n[名] ⻓时间； ⻓期\n[动] 渴望； 盼望",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "shoe",
    "pronunciation": "[ʃuː]",
    "meanings": "[名] 鞋",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "grandfather",
    "pronunciation": "[ˈɡrænfɑːðǝr]",
    "meanings": "[名] 祖⽗； 爷爷",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "grandmother",
    "pronunciation": "[ˈɡrænmʌðǝr]",
    "meanings": "[名] 祖⺟； 外祖⺟",
    "book": "1册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "give",
    "pronunciation": "[ɡɪv]",
    "meanings": "[动] 给予； 发出",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "one",
    "pronunciation": "[wʌn]",
    "meanings": "[数] ⼀",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "which",
    "pronunciation": "[wɪtʃ]",
    "meanings": "[代] 哪个\n[形] 哪个的",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "empty",
    "pronunciation": "[ˈempti]",
    "meanings": "[形] 空的； ⽆意义的\n[动] 倒空； 变空",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "full",
    "pronunciation": "[fʊl]",
    "meanings": "[形] 满的； 充满的\n[副] 完全地\n[名] 完全； 完整",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "large",
    "pronunciation": "[lɑːrdʒ]",
    "meanings": "[形] ⼤的",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "little",
    "pronunciation": "[ˈlɪt(ǝ)l]",
    "meanings": "[形] 少的； ⼩的",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "sharp",
    "pronunciation": "[ʃɑːrp]",
    "meanings": "[形] 锋利的； 灵敏的； 尖刻的； 骤变的",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "blunt",
    "pronunciation": "[blʌnt]",
    "meanings": "[形] 不锋利的； 耿直的\n[动] 使变钝",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "box",
    "pronunciation": "[bɑːks]",
    "meanings": "[名] 箱⼦； 盒⼦； ⼀拳\n[动] 拳击； 装箱",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "glass",
    "pronunciation": "[ɡlæs]",
    "meanings": "[名] 玻璃； 玻璃杯",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "cup",
    "pronunciation": "[kʌp]",
    "meanings": "[名] 杯⼦； 茶杯",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "bottle",
    "pronunciation": "[ˈbɑːt(ǝ)l]",
    "meanings": "[名] 瓶⼦\n[动] ⽤瓶装",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "tin",
    "pronunciation": "[tɪn]",
    "meanings": "[名] 锡； 罐头",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "knife",
    "pronunciation": "[naɪf]",
    "meanings": "[名] ⼑",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "fork",
    "pronunciation": "[fɔːrk]",
    "meanings": "[名] 叉⼦； 分岔； 分⽀\n[动] 分岔； ⽤叉⼦叉",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "spoon",
    "pronunciation": "[spuːn]",
    "meanings": "[名] 勺⼦； 汤匙",
    "book": "1册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "on",
    "pronunciation": "[ɑːn]",
    "meanings": "[介] 在……上",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "shelf",
    "pronunciation": "[ʃelf]",
    "meanings": "[名] 架⼦； 搁板",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "desk",
    "pronunciation": "[desk]",
    "meanings": "[名] 桌⼦； 书桌",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "table",
    "pronunciation": "[ˈteɪb(ǝ)l]",
    "meanings": "[名] 桌⼦； 台⼦； 表格\n[动] 把…列⼊议事⽇程； 搁置",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "plate",
    "pronunciation": "[pleɪt]",
    "meanings": "[名] 盘⼦； 碟⼦",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "cupboard",
    "pronunciation": "[ˈkʌbǝrd]",
    "meanings": "[名] 碗橱； ⾐橱； 橱柜",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "cigarette",
    "pronunciation": "[ˈsɪɡǝret]",
    "meanings": "[名] ⾹烟； 纸烟",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "television",
    "pronunciation": "[ˈtelɪvɪʒ(ǝ)n]",
    "meanings": "[名] 电视机； 电视节⽬； 电视⾏业",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "floor",
    "pronunciation": "[flɔːr]",
    "meanings": "[名] 地板； 地⾯； 楼层",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "dressing table",
    "pronunciation": "[ˈdresɪŋ teɪb(ǝ)l]",
    "meanings": "[短语] 梳妆台",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "magazine",
    "pronunciation": "[ˈmæɡǝziːn]",
    "meanings": "[名] 杂志",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "bed",
    "pronunciation": "[bed]",
    "meanings": "[名] 床； 底；（花） 坛",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "newspaper",
    "pronunciation": "[ˈnuːzpeɪpǝr]",
    "meanings": "[名] 报纸",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "stereo",
    "pronunciation": "[ˈsteriǝʊ]",
    "meanings": "[名] ⽴体声； ⽴体声⾳响\n[形] ⽴体声的",
    "book": "1册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "Mrs",
    "pronunciation": "[ˈmɪsɪz]",
    "meanings": "[缩] 太太； 夫⼈； “Mistress” 的缩写",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "kitchen",
    "pronunciation": "[ˈkɪtʃɪn]",
    "meanings": "[名] 厨房",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "refrigerator",
    "pronunciation": "[rɪˈfrɪdʒǝreɪtǝr]",
    "meanings": "[名] 冰箱",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "electric",
    "pronunciation": "[ɪˈlektrɪk]",
    "meanings": "[形] 电的； ⽤电的",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "left",
    "pronunciation": "[left]",
    "meanings": "[动] 离开； “leave” 的过去式和过去分词\n[名] 左； 左边\n[形] 左边的\n[副] 向左； 在左边",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "cooker",
    "pronunciation": "[ˈkʊkǝr]",
    "meanings": "[名] 炊具； 炉⼦； 灶",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "middle",
    "pronunciation": "[ˈmɪd(ǝ)l]",
    "meanings": "[名] 中间\n[形] 中间的",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "of",
    "pronunciation": "[ʌv]",
    "meanings": "[介] 关于； 属于",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "room",
    "pronunciation": "[ruːm]",
    "meanings": "[名] 房间； 空间",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "where",
    "pronunciation": "[wer]",
    "meanings": "[副] 在哪⾥",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "in",
    "pronunciation": "[ɪn]",
    "meanings": "[介] 在…⾥⾯； 在",
    "book": "1册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "living room",
    "pronunciation": "[ˈlɪvɪŋ ruːm]",
    "meanings": "[短语] 客厅； 起居室",
    "book": "1册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "near",
    "pronunciation": "[nɪr]",
    "meanings": "[形] 近的\n[介] 靠近； 在…附近\n[副] 近地",
    "book": "1册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "window",
    "pronunciation": "[ˈwɪndǝʊ]",
    "meanings": "[名] 窗⼝； 窗户",
    "book": "1册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "armchair",
    "pronunciation": "[ˈɑːrmtʃer]",
    "meanings": "[名] 扶⼿椅； 单座沙发",
    "book": "1册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "door",
    "pronunciation": "[dɔːr]",
    "meanings": "[名] ⻔",
    "book": "1册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "picture",
    "pronunciation": "[ˈpɪktʃǝr]",
    "meanings": "[名] 图画； 照⽚\n[动] 想象； 描述",
    "book": "1册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "wall",
    "pronunciation": "[wɔːl]",
    "meanings": "[名] 墙壁",
    "book": "1册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "trousers",
    "pronunciation": "[ˈtraʊzǝrz]",
    "meanings": "[名] 裤⼦； ⻓裤",
    "book": "1册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "bedroom",
    "pronunciation": "[ˈbedruːm]",
    "meanings": "[名] 卧室",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "untidy",
    "pronunciation": "[ʌnˈtaɪdi]",
    "meanings": "[形] 不整洁的； 凌乱的",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "must",
    "pronunciation": "[mʌst]",
    "meanings": "[助动] 必须； ⼀定要\n[名] 必须做的事； 必不可少的事物",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "air",
    "pronunciation": "[er]",
    "meanings": "[名] 空⽓； 空中； ⽓氛； 神态\n[动] （使） 通⻛； 播出； 晾⼲",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "put",
    "pronunciation": "[pʊt]",
    "meanings": "[动] 放； 放置",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "clothes",
    "pronunciation": "[klǝʊðz]",
    "meanings": "[名] ⾐服； 服装",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "wardrobe",
    "pronunciation": "[ˈwɔːrdrǝʊb]",
    "meanings": "[名] ⾐柜； ⾐橱",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "dust",
    "pronunciation": "[dʌst]",
    "meanings": "[名] 粉尘； 尘埃\n[动] 擦去…的灰尘",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "sweep",
    "pronunciation": "[swiːp]",
    "meanings": "[动] 扫； 打扫； 掠过； 扫荡\n[名] 扫； 打扫； 掠过； 席卷",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "read",
    "pronunciation": "[riːd]",
    "meanings": "[动] 读； 阅读",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "sharpen",
    "pronunciation": "[ˈʃɑːrpǝn]",
    "meanings": "[动] 使尖锐； 使急剧； 使提⾼",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "put on",
    "pronunciation": "[pʊt ɑːn]",
    "meanings": "[短语] 穿戴； 上演； 增加（体重）",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "take off",
    "pronunciation": "[teɪk ɔːf]",
    "meanings": "[短语] 拿掉； 离开； 起⻜； 脱下； 突然成功",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "turn on",
    "pronunciation": "[tɜːrn ɑːn]",
    "meanings": "[短语] 开启； 接通； 发动； 突击",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "turn off",
    "pronunciation": "[tɜːrn ɔːf]",
    "meanings": "[短语] 关掉",
    "book": "1册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "garden",
    "pronunciation": "[ˈɡɑːrd(ǝ)n]",
    "meanings": "[名] 花园\n[动] 从事园艺",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "under",
    "pronunciation": "[ˈʌndǝr]",
    "meanings": "[介] 在…下⾯； 低于",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "tree",
    "pronunciation": "[triː]",
    "meanings": "[名] 树； 树⽊",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "climb",
    "pronunciation": "[klaɪm]",
    "meanings": "[动] 攀爬； 爬升",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "who",
    "pronunciation": "[huː]",
    "meanings": "[代] 谁",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "run",
    "pronunciation": "[rʌn]",
    "meanings": "[动] 跑步； 经营\n[名] 跑； 运转",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "grass",
    "pronunciation": "[ɡræs]",
    "meanings": "[名] 草； 草地； ⼤麻； 告密者\n[动] 使吃草； 放牧； 告发",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "after",
    "pronunciation": "[ˈæftǝr]",
    "meanings": "[副] 以后； 后来\n[介] 在…之后",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "across",
    "pronunciation": "[ǝˈkrɔːs]",
    "meanings": "[副] 横过； 穿过； 越过； 在对⾯\n[介] 穿过； 横过； 在…对⾯",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "cat",
    "pronunciation": "[kæt]",
    "meanings": "[名] 猫",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "type",
    "pronunciation": "[taɪp]",
    "meanings": "[名] 类型； 种类； 典型； 字体\n[动] 打字； 定型； 成为…的典型",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "letter",
    "pronunciation": "[ˈletǝr]",
    "meanings": "[名] 信； 字⺟",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "basket",
    "pronunciation": "[ˈbæskɪt]",
    "meanings": "[名] 篮⼦； 篮； 筐",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "eat",
    "pronunciation": "[iːt]",
    "meanings": "[动] 吃",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "bone",
    "pronunciation": "[bǝʊn]",
    "meanings": "[名] ⻣； ⻣头",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "tooth",
    "pronunciation": "[tuːθ]",
    "meanings": "[名] ⽛⻮",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "cook",
    "pronunciation": "[kʊk]",
    "meanings": "[名] 厨师\n[动] 烹饪",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "milk",
    "pronunciation": "[mɪlk]",
    "meanings": "[名] 奶\n[动] 挤奶",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "meal",
    "pronunciation": "[miːl]",
    "meanings": "[名] ⼀餐； ⼀顿饭",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "drink",
    "pronunciation": "[drɪŋk]",
    "meanings": "[动] 喝； 喝酒\n[名] 饮料； 酒",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "tap",
    "pronunciation": "[tæp]",
    "meanings": "[名] ⽔⻰头； 轻拍； 轻敲； 轻击\n[动] 轻拍； 轻敲； 利⽤； 提取",
    "book": "1册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "day",
    "pronunciation": "[deɪ]",
    "meanings": "[名] ⽇； 天； 时代",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "cloud",
    "pronunciation": "[klaʊd]",
    "meanings": "[名] 云朵； 云层\n[动] 布满云； 使不清楚",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "sky",
    "pronunciation": "[skaɪ]",
    "meanings": "[名] 天空",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "sun",
    "pronunciation": "[sʌn]",
    "meanings": "[名] 太阳； 阳光",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "shine",
    "pronunciation": "[ʃaɪn]",
    "meanings": "[动] 照耀； 发光； 闪耀",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "with",
    "pronunciation": "[wɪð]",
    "meanings": "[介] ⽤； 和； 有； 对； 随着",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "family",
    "pronunciation": "[ˈfæmǝli]",
    "meanings": "[名] 家庭； 家族\n[形] 家庭的； 家族的",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "walk",
    "pronunciation": "[wɔːk]",
    "meanings": "[动] ⾏⾛\n[名] 步⾏",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "over",
    "pronunciation": "[ˈǝʊvǝr]",
    "meanings": "[副] 结束； 越过； ⼤于\n[介] 越过； 遍于…之上",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "bridge",
    "pronunciation": "[brɪdʒ]",
    "meanings": "[名] 桥； 桥梁",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "boat",
    "pronunciation": "[bǝʊt]",
    "meanings": "[名] ⼩船\n[动] 划船； ⽤船运输； ⽤船装运",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "river",
    "pronunciation": "[ˈrɪvǝr]",
    "meanings": "[名] 河； 河流",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "ship",
    "pronunciation": "[ʃɪp]",
    "meanings": "[名] 船； 舰\n[动] 装运； 把…装上船； 使乘船； 在船上⼯作",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "aeroplane",
    "pronunciation": "[ˈerǝpleɪn]",
    "meanings": "[名] ⻜机",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "fly",
    "pronunciation": "[flaɪ]",
    "meanings": "[动] ⻜翔； ⻜⾏\n[名] 苍蝇",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "sleep",
    "pronunciation": "[sliːp]",
    "meanings": "[名] 睡眠\n[动] 睡觉",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "shave",
    "pronunciation": "[ʃeɪv]",
    "meanings": "[动] 刮； 剃",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "cry",
    "pronunciation": "[kraɪ]",
    "meanings": "[动] 哭； 呼喊\n[名] 哭； 呼喊",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "wash",
    "pronunciation": "[wɑːʃ]",
    "meanings": "[动] 洗； 洗涤",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "wait",
    "pronunciation": "[weɪt]",
    "meanings": "[动] 等待； 等候\n[名] 等待； 等候",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "jump",
    "pronunciation": "[dʒʌmp]",
    "meanings": "[名] 跳； 跳跃\n[动] 跳； 跳跃",
    "book": "1册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "photograph",
    "pronunciation": "[ˈfǝʊtǝɡræf]",
    "meanings": "[名] 照⽚； 相⽚\n[动] 照相； 拍照",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "village",
    "pronunciation": "[ˈvɪlɪdʒ]",
    "meanings": "[名] 村庄； 乡村",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "valley",
    "pronunciation": "[ˈvæli]",
    "meanings": "[名] ⼭⾕； 溪⾕； 流域",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "between",
    "pronunciation": "[bɪˈtwiːn]",
    "meanings": "[介] （空间或时间上） 在…之间\n[副] （空间或时间上） 介于…之间",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "hill",
    "pronunciation": "[hɪl]",
    "meanings": "[名] 丘陵； ⼩⼭",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "another",
    "pronunciation": "[ǝˈnʌðǝr]",
    "meanings": "[形] ⼜⼀个的； 另⼀个的\n[代] ⼜⼀； 另⼀； 不同的（⼀个）",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "wife",
    "pronunciation": "[waɪf]",
    "meanings": "[名] 妻⼦； 太太",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "along",
    "pronunciation": "[ǝˈlɔːŋ]",
    "meanings": "[介] 沿着\n[副] 沿着",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "bank",
    "pronunciation": "[bæŋk]",
    "meanings": "[名] 银⾏； 岸\n[动] 把（钱） 存⼊银⾏",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "water",
    "pronunciation": "[ˈwɔːtǝr]",
    "meanings": "[名] ⽔\n[动] 给…浇⽔； 给（某地） 供⽔",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "swim",
    "pronunciation": "[swɪm]",
    "meanings": "[动] 游泳",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "building",
    "pronunciation": "[ˈbɪldɪŋ]",
    "meanings": "[名] 建筑物； 楼房\n[动] 建筑； “build” 的现在分词",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "park",
    "pronunciation": "[pɑːrk]",
    "meanings": "[名] 公园； 园区\n[动] 停放； 停⻋",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "into",
    "pronunciation": "[ˈɪntuː]",
    "meanings": "[介] 进⼊； 到…⾥",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "beside",
    "pronunciation": "[bɪˈsaɪd]",
    "meanings": "[介] 在旁边（或附近）",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "off",
    "pronunciation": "[ɔːf]",
    "meanings": "[介] 离开； 脱落\n[副] 离； 断开\n[叹] ⾛开\n[形] 远离的； 空闲的",
    "book": "1册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "work",
    "pronunciation": "[wɜːrk]",
    "meanings": "[名] ⼯作； 作品； 活计； 制作品\n[动] （使） ⼯作；（使） 运转； 操作； 经营； 起作⽤",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "hard",
    "pronunciation": "[hɑːrd]",
    "meanings": "[形] 坚硬的； 困难的； 费劲的\n[副] 努⼒地",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "bookcase",
    "pronunciation": "[ˈbʊkkeɪs]",
    "meanings": "[名] 书架； 书柜",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "hammer",
    "pronunciation": "[ˈhæmǝr]",
    "meanings": "[名] 锤⼦\n[动] 锤打",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "paint",
    "pronunciation": "[peɪnt]",
    "meanings": "[动] 刷油漆； 画； 绘\n[名] 油漆； 绘画颜料",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "pink",
    "pronunciation": "[pɪŋk]",
    "meanings": "[名] 粉红⾊\n[形] 粉红⾊的",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "favourite",
    "pronunciation": "[ˈfeɪvǝrɪt]",
    "meanings": "[形] 特别受喜爱的\n[名] 特别喜爱的事物",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "homework",
    "pronunciation": "[ˈhǝʊmwɜːrk]",
    "meanings": "[名] 家庭作业； 功课",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "listen",
    "pronunciation": "[ˈlɪs(ǝ)n]",
    "meanings": "[动] 听",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "dish",
    "pronunciation": "[dɪʃ]",
    "meanings": "[名] 盘； 碟； 菜肴",
    "book": "1册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "front",
    "pronunciation": "[frʌnt]",
    "meanings": "[名] 前⾯； 前线\n[形] 前⾯的",
    "book": "1册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "in front of",
    "pronunciation": "[ɪn frʌnt ǝv]",
    "meanings": "[短语] 在...前⾯",
    "book": "1册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "careful",
    "pronunciation": "[ˈkerf(ǝ)l]",
    "meanings": "[形] ⼩⼼的； 仔细的",
    "book": "1册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "vase",
    "pronunciation": "[veɪz]",
    "meanings": "[名] 花瓶",
    "book": "1册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "drop",
    "pronunciation": "[drɑːp]",
    "meanings": "[名] 滴； 下落\n[动] 落下； 掉下",
    "book": "1册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "flower",
    "pronunciation": "[ˈflaʊǝr]",
    "meanings": "[名] 花； 花朵",
    "book": "1册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "show",
    "pronunciation": "[ʃǝʊ]",
    "meanings": "[动] 展示； 表明； 给...看\n[名] 演出； 节⽬； 展览会； 表现",
    "book": "1册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "send",
    "pronunciation": "[send]",
    "meanings": "[动] 发送； 送； 寄",
    "book": "1册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "take",
    "pronunciation": "[teɪk]",
    "meanings": "[动] 拿； 带领； 乘坐； 接受； 花费；做（某个动作）",
    "book": "1册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "cheese",
    "pronunciation": "[tʃiːz]",
    "meanings": "[名] 奶酪",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "bread",
    "pronunciation": "[bred]",
    "meanings": "[名] ⾯包； ⽣计",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "soap",
    "pronunciation": "[sǝʊp]",
    "meanings": "[名] 肥皂",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "chocolate",
    "pronunciation": "[ˈtʃɔːklǝt]",
    "meanings": "[名] 巧克⼒\n[形] 巧克⼒的",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "sugar",
    "pronunciation": "[ˈʃʊɡǝr]",
    "meanings": "[名] 糖； ⻝糖\n[动] 在…中加糖",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "coffee",
    "pronunciation": "[ˈkɔːfi]",
    "meanings": "[名] 咖啡",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "tea",
    "pronunciation": "[tiː]",
    "meanings": "[名] 茶； 茶叶； 茶⽔",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "tobacco",
    "pronunciation": "[tǝˈbækǝʊ]",
    "meanings": "[名] 烟草； 烟叶",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "bird",
    "pronunciation": "[bɜːrd]",
    "meanings": "[名] ⻦",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "any",
    "pronunciation": "[ˈeni]",
    "meanings": "[形] 任何的；\n[代] 任何\n[副] 稍微",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "some",
    "pronunciation": "[sʌm]",
    "meanings": "[形] ⼀些； 某些\n[代] 有些； 若⼲",
    "book": "1册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "of course",
    "pronunciation": "[ǝv kɔːrs]",
    "meanings": "[短语] 当然",
    "book": "1册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "kettle",
    "pronunciation": "[ˈket(ǝ)l]",
    "meanings": "[名] ⽔壶",
    "book": "1册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "behind",
    "pronunciation": "[bɪˈhaɪnd]",
    "meanings": "[介] 在…后⾯\n[副] 在后⾯",
    "book": "1册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "teapot",
    "pronunciation": "[ˈtiːpɑːt]",
    "meanings": "[名] 茶壶",
    "book": "1册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "now",
    "pronunciation": "[naʊ]",
    "meanings": "[副] 现在； ⽬前",
    "book": "1册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "find",
    "pronunciation": "[faɪnd]",
    "meanings": "[动] 找； 找到； 发现； 认为",
    "book": "1册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "boil",
    "pronunciation": "[bɔɪl]",
    "meanings": "[动] 沸腾； 煮； 煮沸\n[名] 煮沸； 沸点",
    "book": "1册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "can",
    "pronunciation": "[kæn]",
    "meanings": "[动] 能\n[名] ⾦属罐",
    "book": "1册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "boss",
    "pronunciation": "[bɔːs]",
    "meanings": "[名] ⽼板",
    "book": "1册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "minute",
    "pronunciation": "[ˈmɪnɪt]",
    "meanings": "[名] 分钟； ⼀会⼉\n[形] 微⼩的",
    "book": "1册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "ask",
    "pronunciation": "[æsk]",
    "meanings": "[动] 问； 询问； 要求",
    "book": "1册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "handwriting",
    "pronunciation": "[ˈhændraɪtɪŋ]",
    "meanings": "[名] 笔迹； ⼿写",
    "book": "1册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "terrible",
    "pronunciation": "[ˈterǝb(ǝ)l]",
    "meanings": "[形] 可怕的； 极坏的； 糟糕的",
    "book": "1册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "lift",
    "pronunciation": "[lɪft]",
    "meanings": "[动] 举起； 抬起； 提起； 解除\n[名] 电梯； 搭便⻋",
    "book": "1册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "cake",
    "pronunciation": "[keɪk]",
    "meanings": "[名] 蛋糕； 饼",
    "book": "1册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "biscuit",
    "pronunciation": "[ˈbɪskɪt]",
    "meanings": "[名] 饼⼲",
    "book": "1册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "like",
    "pronunciation": "[laɪk]",
    "meanings": "[动] 喜欢\n[介] 像",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "want",
    "pronunciation": "[wɑːnt]",
    "meanings": "[动] 想要\n[名] 缺乏",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "fresh",
    "pronunciation": "[freʃ]",
    "meanings": "[形] 新鲜的； 新的； 刚发⽣的； ⽆经验的",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "egg",
    "pronunciation": "[eɡ]",
    "meanings": "[名] 蛋； 鸡蛋",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "butter",
    "pronunciation": "[ˈbʌtǝr]",
    "meanings": "[名] ⻩油； 奶油\n[动] 涂⻩油于...上",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "pure",
    "pronunciation": "[pjʊr]",
    "meanings": "[形] 纯的； 纯净的； 纯粹的",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "honey",
    "pronunciation": "[ˈhʌni]",
    "meanings": "[名] 蜂蜜； 甜蜜； 宝⻉",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "ripe",
    "pronunciation": "[raɪp]",
    "meanings": "[形] 成熟的",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "banana",
    "pronunciation": "[bǝˈnænǝ]",
    "meanings": "[名] ⾹蕉",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "jam",
    "pronunciation": "[dʒæm]",
    "meanings": "[名] 果酱； 堵塞； 困境\n[动] 挤紧； 使堵塞； 猛地做",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "sweet",
    "pronunciation": "[swiːt]",
    "meanings": "[形] 甜的； 悦⼈的\n[名] 糖果",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "Scotch whisky",
    "pronunciation": "[skɑːtʃ ˈwɪski]",
    "meanings": "[短语] 苏格兰威⼠忌",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "choice",
    "pronunciation": "[tʃɔɪs]",
    "meanings": "[名] 选择； 抉择； 精选品\n[形] 上等的； 精选的",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "apple",
    "pronunciation": "[ˈæp(ǝ)l]",
    "meanings": "[名] 苹果",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "wine",
    "pronunciation": "[waɪn]",
    "meanings": "[名] 酒； 果酒； 葡萄酒\n[动] ⽤葡萄酒招待；（请） 喝酒",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "beer",
    "pronunciation": "[bɪr]",
    "meanings": "[名] 啤酒",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "blackboard",
    "pronunciation": "[ˈblækbɔːrd]",
    "meanings": "[名] ⿊板",
    "book": "1册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "butcher",
    "pronunciation": "[ˈbʊtʃǝr]",
    "meanings": "[名] 屠夫； ⾁贩\n[动] 屠宰； 杀戮\n[形] 更男性化的； 更有男⼦⽓的；“butch” 的⽐较级",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "meat",
    "pronunciation": "[miːt]",
    "meanings": "[名] ⾁",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "beef",
    "pronunciation": "[biːf]",
    "meanings": "[名] ⽜⾁",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "lamb",
    "pronunciation": "[læm]",
    "meanings": "[名] 羔⽺； ⼩⽺； 羔⽺⾁",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "husband",
    "pronunciation": "[ˈhʌzbǝnd]",
    "meanings": "[名] 丈夫\n[动] 节俭使⽤",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "steak",
    "pronunciation": "[steɪk]",
    "meanings": "[名] ⽜排； ⾁排",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "mince",
    "pronunciation": "[mɪns]",
    "meanings": "[动] 切碎； 剁碎； 装腔作势地⼩步⾛\n[名] 绞碎的⾁",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "chicken",
    "pronunciation": "[ˈtʃɪkɪn]",
    "meanings": "[名] 鸡⾁； 鸡",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "tell",
    "pronunciation": "[tel]",
    "meanings": "[动] 告诉； 讲述； 说； 辨别",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "truth",
    "pronunciation": "[truːθ]",
    "meanings": "[名] 真理； 事实； 真实",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "either",
    "pronunciation": "[ˈiːðǝr]",
    "meanings": "[副] 也（⽤于否定词组后）\n[代] 两者中的任何⼀个；（⽤于否定句） 两者都不\n[连] 两者之⼀",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "tomato",
    "pronunciation": "[tǝˈmeɪtǝʊ]",
    "meanings": "[名] ⻄红柿； 番茄",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "potato",
    "pronunciation": "[pǝˈteɪtǝʊ]",
    "meanings": "[名] ⼟⾖； ⻢铃薯",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "cabbage",
    "pronunciation": "[ˈkæbɪdʒ]",
    "meanings": "[名] 卷⼼菜",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "lettuce",
    "pronunciation": "[ˈletɪs]",
    "meanings": "[名] ⽣菜； 莴苣",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "pea",
    "pronunciation": "[piː]",
    "meanings": "[名] 豌⾖",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "bean",
    "pronunciation": "[biːn]",
    "meanings": "[名] ⾖； ⾖科植物",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "pear",
    "pronunciation": "[per]",
    "meanings": "[名] 梨⼦",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "grape",
    "pronunciation": "[ɡreɪp]",
    "meanings": "[名] 葡萄",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "peach",
    "pronunciation": "[piːtʃ]",
    "meanings": "[名] 桃⼦； 桃树； 桃红⾊",
    "book": "1册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "Greece",
    "pronunciation": "[ɡriːs]",
    "meanings": "[名] 希腊",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "climate",
    "pronunciation": "[ˈklaɪmǝt]",
    "meanings": "[名] ⽓候；（社会） ⻛⽓； ⼀般（社会） 趋势",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "country",
    "pronunciation": "[ˈkʌntri]",
    "meanings": "[名] 国家； 乡村",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "pleasant",
    "pronunciation": "[ˈplez(ǝ)nt]",
    "meanings": "[形] 令⼈愉快的； 合意的； 宜⼈的",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "weather",
    "pronunciation": "[ˈweðǝr]",
    "meanings": "[名] 天⽓\n[动] 使受⻛吹⾬打； ⻛⼲； 经受住",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "spring",
    "pronunciation": "[sprɪŋ]",
    "meanings": "[名] 春天； 弹簧； 泉\n[动] 跳； 跃； 蹦； 突然猛烈地移动",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "windy",
    "pronunciation": "[ˈwɪndi]",
    "meanings": "[形] 有⻛的； 多⻛的； 空谈的； 吹⽜的",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "warm",
    "pronunciation": "[wɔːrm]",
    "meanings": "[形] 温暖的\n[动] （使） 变暖",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "rain",
    "pronunciation": "[reɪn]",
    "meanings": "[名] ⾬； ⾬⽔\n[动] 下⾬",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "sometimes",
    "pronunciation": "[ˈsʌmtaɪmz]",
    "meanings": "[副] 有时； 间或",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "summer",
    "pronunciation": "[ˈsʌmǝr]",
    "meanings": "[名] 夏季； 夏天",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "autumn",
    "pronunciation": "[ˈɔːtǝm]",
    "meanings": "[名] 秋季； 秋天",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "winter",
    "pronunciation": "[ˈwɪntǝr]",
    "meanings": "[名] 冬季； 冬天",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "snow",
    "pronunciation": "[snǝʊ]",
    "meanings": "[动] 下雪； 降雪\n[名] 雪花； 雪",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "January",
    "pronunciation": "[ˈdʒænjueri]",
    "meanings": "[名] ⼀⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "February",
    "pronunciation": "[ˈfebrueri]",
    "meanings": "[名] ⼆⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "March",
    "pronunciation": "[mɑːrtʃ]",
    "meanings": "[名] 三⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "April",
    "pronunciation": "[ˈeɪprǝl]",
    "meanings": "[名] 四⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "May",
    "pronunciation": "[meɪ]",
    "meanings": "[名] 五⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "June",
    "pronunciation": "[dʒuːn]",
    "meanings": "[名] 六⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "July",
    "pronunciation": "[dʒuˈlaɪ]",
    "meanings": "[名] 七⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "August",
    "pronunciation": "[ˈɔːɡǝst]",
    "meanings": "[名] ⼋⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "September",
    "pronunciation": "[sepˈtembǝr]",
    "meanings": "[名] 九⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "October",
    "pronunciation": "[ɑːkˈtǝʊbǝr]",
    "meanings": "[名] ⼗⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "November",
    "pronunciation": "[nǝʊˈvembǝr]",
    "meanings": "[名] ⼗⼀⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "December",
    "pronunciation": "[dɪˈsembǝr]",
    "meanings": "[名] ⼗⼆⽉",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "the U.S",
    "pronunciation": "[ðǝ ˌjuː ˈes]",
    "meanings": "[名] 美利坚合众国； “the UnitedStates” 的缩写",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "Brazil",
    "pronunciation": "[brǝˈzɪl]",
    "meanings": "[名] 巴⻄",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "Holland",
    "pronunciation": "[ˈhɑːlǝnd]",
    "meanings": "[名] 荷兰",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "England",
    "pronunciation": "[ˈɪŋɡlǝnd]",
    "meanings": "[名] 英格兰； 英国",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "France",
    "pronunciation": "[fræns]",
    "meanings": "[名] 法国",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "Germany",
    "pronunciation": "[ˈdʒɜːrmǝni]",
    "meanings": "[名] 德国",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "Italy",
    "pronunciation": "[ˈɪtǝli]",
    "meanings": "[名] 意⼤利（欧洲国家）",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "Norway",
    "pronunciation": "[ˈnɔːrweɪ]",
    "meanings": "[名] 挪威",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "Russia",
    "pronunciation": "[ˈrʌʃǝ]",
    "meanings": "[名] 俄罗斯",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "Spain",
    "pronunciation": "[speɪn]",
    "meanings": "[名] ⻄班⽛（欧洲国家）",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "Sweden",
    "pronunciation": "[ˈswiːd(ǝ)n]",
    "meanings": "[名] 瑞典",
    "book": "1册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "mild",
    "pronunciation": "[maɪld]",
    "meanings": "[形] 温和的； 轻微的",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "always",
    "pronunciation": "[ˈɔːlweɪz]",
    "meanings": "[副] 总是； ⼀直",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "north",
    "pronunciation": "[nɔːrθ]",
    "meanings": "[名] 北⽅\n[形] 北⽅的\n[副] 在北⽅",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "east",
    "pronunciation": "[iːst]",
    "meanings": "[名] 东⽅\n[形] 东⽅的\n[副] 在东⽅",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "wet",
    "pronunciation": "[wet]",
    "meanings": "[形] 潮的； 湿的\n[动] 使潮湿； 把…弄湿",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "west",
    "pronunciation": "[west]",
    "meanings": "[名] ⻄⽅\n[形] ⻄⽅的\n[副] 在⻄⽅",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "south",
    "pronunciation": "[saʊθ]",
    "meanings": "[名] 南⽅\n[形] 南⽅的\n[副] 在南⽅",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "season",
    "pronunciation": "[ˈsiːz(ǝ)n]",
    "meanings": "[名] 季节\n[动] 给...调味； ⻛⼲",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "best",
    "pronunciation": "[best]",
    "meanings": "[形] 最好的； 最多的； 最⼤的；“good” 的最⾼级\n[副] 最好地； 最多地； 最⼤地；“well” 的最⾼级\n[名] 最⾼⽔平； 最佳物； 佼佼者",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "night",
    "pronunciation": "[naɪt]",
    "meanings": "[名] 夜晚； 晚上",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "rise",
    "pronunciation": "[raɪz]",
    "meanings": "[动] 上升； 提⾼\n[名] 上升； 提⾼",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "early",
    "pronunciation": "[ˈɜːrli]",
    "meanings": "[副] 提早地\n[形] 早的； 早前的",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "set",
    "pronunciation": "[set]",
    "meanings": "[动] 设置； 放置； 使固定\n[名] ⼀组； ⼀套； 集合\n[形] 固定的； 位于…的； 安排好的",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "late",
    "pronunciation": "[leɪt]",
    "meanings": "[形] 晚的； 迟的； 已故的\n[副] 晚； 迟",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "interesting",
    "pronunciation": "[ˈɪntrǝstɪŋ]",
    "meanings": "[形] 有趣的",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "subject",
    "pronunciation": "[ˈsʌbdʒekt]",
    "meanings": "[名] 学科； 对象； 主题； 主语\n[形] 易遭受…的； 受…⽀配的\n[动] 使⾂服",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "conversation",
    "pronunciation": "[ˌkɑːnvǝrˈseɪʃ(ǝ)n]",
    "meanings": "[名] 谈话； 会话； 交谈",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Australia",
    "pronunciation": "[ɔːˈstreɪliǝ]",
    "meanings": "[名] 澳⼤利亚； 澳洲",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Australian",
    "pronunciation": "[ɔːˈstreɪliǝn]",
    "meanings": "[形] 澳⼤利亚的； 澳⼤利亚⼈的\n[名] 澳⼤利亚⼈",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Austria",
    "pronunciation": "[ˈɔːstriǝ]",
    "meanings": "[名] 奥地利",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Austrian",
    "pronunciation": "[ˈɔːstriǝn]",
    "meanings": "[形] 奥地利的； 奥地利⼈的\n[名] 奥地利⼈",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Canada",
    "pronunciation": "[ˈkænǝdǝ]",
    "meanings": "[名] 加拿⼤",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Canadian",
    "pronunciation": "[kǝˈneɪdiǝn]",
    "meanings": "[名] 加拿⼤⼈\n[形] 加拿⼤的； 加拿⼤⼈的",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "China",
    "pronunciation": "[ˈtʃaɪnǝ]",
    "meanings": "[名] 中国",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Finland",
    "pronunciation": "[ˈfɪnlǝnd]",
    "meanings": "[名] 芬兰",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Finnish",
    "pronunciation": "[ˈfɪnɪʃ]",
    "meanings": "[形] 芬兰的； 芬兰⼈的； 芬兰语的\n[名] 芬兰⼈； 芬兰语",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "India",
    "pronunciation": "[ˈɪndiǝ]",
    "meanings": "[名] 印度",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Indian",
    "pronunciation": "[ˈɪndiǝn]",
    "meanings": "[形] 印度的； 印第安⼈的\n[名] 印度⼈； 印第安⼈",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Japan",
    "pronunciation": "[dʒǝˈpæn]",
    "meanings": "[名] ⽇本",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Nigeria",
    "pronunciation": "[naɪˈdʒɪriǝ]",
    "meanings": "[名] 尼⽇利亚",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Nigerian",
    "pronunciation": "[naɪˈdʒɪriǝn]",
    "meanings": "[形] 尼⽇利亚的； 尼⽇利亚⼈的\n[名] 尼⽇利亚⼈",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Turkey",
    "pronunciation": "[ˈtɜːrki]",
    "meanings": "[名] ⼟⽿其（旧名）",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Turkish",
    "pronunciation": "[ˈtɜːrkɪʃ]",
    "meanings": "[形] ⼟⽿其的； ⼟⽿其⼈的； ⼟⽿其语的\n[名] ⼟⽿其语； ⼟⽿其⼈",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Korea",
    "pronunciation": "[kǝˈriːǝ]",
    "meanings": "[名] 韩国； 朝鲜",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Polish",
    "pronunciation": "[ˈpǝʊlɪʃ]",
    "meanings": "[形] 波兰的； 波兰⼈的； 波兰语的\n[名] 波兰语； 波兰⼈",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Poland",
    "pronunciation": "[ˈpǝʊlǝnd]",
    "meanings": "[名] 波兰",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Thai",
    "pronunciation": "[taɪ]",
    "meanings": "[形] 泰国的； 泰国⼈的； 泰语的\n[名] 泰国⼈； 泰国语",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "Thailand",
    "pronunciation": "[ˈtaɪlænd]",
    "meanings": "[名] 泰国",
    "book": "1册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "live",
    "pronunciation": "[lɪv]",
    "meanings": "[动] ⽣活； 居住； 活着\n[形] 活的； 现场的； 实况转播的",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "stay",
    "pronunciation": "[steɪ]",
    "meanings": "[动] 停留； 保持\n[名] 停留； 逗留",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "home",
    "pronunciation": "[hǝʊm]",
    "meanings": "[名] 家； 家庭\n[副] 在家\n[形] 家的； 家庭的\n[动] 送…回家； 提供住处",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "housework",
    "pronunciation": "[ˈhaʊswɜːrk]",
    "meanings": "[名] 家务事； 家务劳动",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "lunch",
    "pronunciation": "[lʌntʃ]",
    "meanings": "[名] 午餐； 午饭",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "afternoon",
    "pronunciation": "[ˌæftǝrˈnuːn]",
    "meanings": "[名] 下午",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "usually",
    "pronunciation": "[ˈjuːʒuǝli]",
    "meanings": "[副] 通常； ⼀般",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "together",
    "pronunciation": "[tǝˈɡeðǝr]",
    "meanings": "[副] ⼀起",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "evening",
    "pronunciation": "[ˈiːvnɪŋ]",
    "meanings": "[名] 晚上； 傍晚",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "arrive",
    "pronunciation": "[ǝˈraɪv]",
    "meanings": "[动] 到达； 抵达",
    "book": "1册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "o'clock",
    "pronunciation": "[ǝˈklɑːk]",
    "meanings": "[副] …点钟",
    "book": "1册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "shop",
    "pronunciation": "[ʃɑːp]",
    "meanings": "[名] 商店\n[动] 购物",
    "book": "1册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "moment",
    "pronunciation": "[ˈmǝʊmǝnt]",
    "meanings": "[名] 瞬间； ⽚刻",
    "book": "1册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "envelope",
    "pronunciation": "[ˈenvǝlǝʊp]",
    "meanings": "[名] 信封",
    "book": "1册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "writing paper",
    "pronunciation": "[ˈraɪtɪŋ peɪpǝr]",
    "meanings": "[短语] 信纸； 书写纸",
    "book": "1册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "shop assistant",
    "pronunciation": "[ˈʃɑːp ǝsɪstǝnt]",
    "meanings": "[短语] 售货员",
    "book": "1册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "size",
    "pronunciation": "[saɪz]",
    "meanings": "[名] ⼤⼩； 尺码",
    "book": "1册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "pad",
    "pronunciation": "[pæd]",
    "meanings": "[名] 垫； ⽖垫； 便笺簿\n[动] 放轻脚步⾛",
    "book": "1册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "glue",
    "pronunciation": "[ɡluː]",
    "meanings": "[名] 胶； 胶⽔\n[动] 胶合； 粘合； 紧附于",
    "book": "1册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "chalk",
    "pronunciation": "[tʃɔːk]",
    "meanings": "[名] 粉笔",
    "book": "1册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "change",
    "pronunciation": "[tʃeɪndʒ]",
    "meanings": "[名] 变化； 变⾰； 零钱\n[动] 变化； 变⾰",
    "book": "1册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "feel",
    "pronunciation": "[fiːl]",
    "meanings": "[动] 感到； 触摸； 认为\n[名] 感受； 触觉",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "look",
    "pronunciation": "[lʊk]",
    "meanings": "[动] 看； 看上去\n[名] 看",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "call",
    "pronunciation": "[kɔːl]",
    "meanings": "[名] 打电话\n[动] 叫； 打电话",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "doctor",
    "pronunciation": "[ˈdɑːktǝr]",
    "meanings": "[名] 医⽣； 博⼠\n[动] 篡改",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "telephone",
    "pronunciation": "[ˈtelɪfǝʊn]",
    "meanings": "[名] 电话； 电话机",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "remember",
    "pronunciation": "[rɪˈmembǝr]",
    "meanings": "[动] 记得； 记住",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "mouth",
    "pronunciation": "[maʊθ]",
    "meanings": "[名] 嘴； ⼝",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "tongue",
    "pronunciation": "[tʌŋ]",
    "meanings": "[名] ⾆头； 语⾔",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "bad",
    "pronunciation": "[bæd]",
    "meanings": "[形] 坏的； 糟糕的； 严重的",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "news",
    "pronunciation": "[nuːz]",
    "meanings": "[名] 新闻； 消息",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "headache",
    "pronunciation": "[ˈhedeɪk]",
    "meanings": "[名] 头痛； 麻烦； 令⼈头痛的⼈（或事物）",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "aspirin",
    "pronunciation": "[ˈæspǝrɪn]",
    "meanings": "[名] 阿司匹林（镇痛解热消炎药）",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "earache",
    "pronunciation": "[ˈɪreɪk]",
    "meanings": "[名] ⽿痛",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "toothache",
    "pronunciation": "[ˈtuːθeɪk]",
    "meanings": "[名] ⽛痛",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "dentist",
    "pronunciation": "[ˈdentɪst]",
    "meanings": "[名] ⽛科医⽣",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "stomach ache",
    "pronunciation": "[ˈstʌmǝk eɪk]",
    "meanings": "[短语] 胃痛",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "medicine",
    "pronunciation": "[ˈmedɪs(ǝ)n]",
    "meanings": "[名] 药； 医学",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "temperature",
    "pronunciation": "[ˈtemprǝˌtʃǝr]",
    "meanings": "[名] 温度； ⽓温； 体温",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "flu",
    "pronunciation": "[fluː]",
    "meanings": "[名] 流感； 流⾏性感冒",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "measles",
    "pronunciation": "[ˈmiːz(ǝ)lz]",
    "meanings": "[名] 麻疹",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "mumps",
    "pronunciation": "[mʌmps]",
    "meanings": "[名] 腮腺炎",
    "book": "1册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "better",
    "pronunciation": "[ˈbetǝr]",
    "meanings": "[形] 更好的； 更优秀的； “good” 的⽐较级\n[副] 更好地； “well” 的⽐较级\n[动] 胜过； 使更佳",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "certainly",
    "pronunciation": "[ˈsɜːrt(ǝ)nli]",
    "meanings": "[副] 毫⽆疑问地； 确定地； 当然",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "get up",
    "pronunciation": "[ɡet ʌp]",
    "meanings": "[短语] 起床",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "yet",
    "pronunciation": "[jet]",
    "meanings": "[副] 还； 然⽽； 仍然\n[连] 然⽽； 但是",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "rich",
    "pronunciation": "[rɪtʃ]",
    "meanings": "[形] 富有的； 富裕的； 丰饶的； 圆润的； 油腻的",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "food",
    "pronunciation": "[fuːd]",
    "meanings": "[名] ⻝物",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "remain",
    "pronunciation": "[rɪˈmeɪn]",
    "meanings": "[动] 剩下； 留下； 保持",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "play",
    "pronunciation": "[pleɪ]",
    "meanings": "[动] 玩； 演奏； 扮演； 播放\n[名] 戏剧； ⽐赛",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "match",
    "pronunciation": "[mætʃ]",
    "meanings": "[名] ⽐赛； ⽕柴\n[动] 相配",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "talk",
    "pronunciation": "[tɔːk]",
    "meanings": "[动] 说话； 交谈\n[名] 谈话",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "library",
    "pronunciation": "[ˈlaɪbreri]",
    "meanings": "[名] 图书馆",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "drive",
    "pronunciation": "[draɪv]",
    "meanings": "[动] 驾驶； 驱使\n[名] 动⼒",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "so",
    "pronunciation": "[sǝʊ]",
    "meanings": "[副] 如此； 这么； 很； 也\n[连] 所以",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "quickly",
    "pronunciation": "[ˈkwɪkli]",
    "meanings": "[副] 迅速地； 快地",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "lean out of",
    "pronunciation": "[liːn aʊt ǝv]",
    "meanings": "[短语] 身体探出",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "break",
    "pronunciation": "[breɪk]",
    "meanings": "[动] 打破； 打断； 休息\n[名] 中断； 休息； 破裂",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "noise",
    "pronunciation": "[nɔɪz]",
    "meanings": "[名] 噪声； 噪⾳",
    "book": "1册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "Dad",
    "pronunciation": "[dæd]",
    "meanings": "[名] 爸爸； 爹爹",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "key",
    "pronunciation": "[kiː]",
    "meanings": "[名] 钥匙； 关键\n[形] 关键的",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "baby",
    "pronunciation": "[ˈbeɪbi]",
    "meanings": "[名] 婴⼉； 宝⻉",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "hear",
    "pronunciation": "[hɪr]",
    "meanings": "[动] 听； 听⻅",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "enjoy",
    "pronunciation": "[ɪnˈdʒɔɪ]",
    "meanings": "[动] 享受； 享有； 喜爱",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "yourself",
    "pronunciation": "[jɔːrˈself]",
    "meanings": "[代] 你⾃⼰",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "ourselves",
    "pronunciation": "[ɑːrˈselvz]",
    "meanings": "[代] 我们⾃⼰",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "mum",
    "pronunciation": "[mʌm]",
    "meanings": "[形] 沉默的； 不说话的\n[名] 妈妈",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "myself",
    "pronunciation": "[maɪˈself]",
    "meanings": "[代] 我⾃⼰",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "themselves",
    "pronunciation": "[ðǝmˈselvz]",
    "meanings": "[代] 他们⾃⼰； 她们⾃⼰； 它们⾃⼰",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "himself",
    "pronunciation": "[hɪmˈself]",
    "meanings": "[代] 他⾃⼰",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "herself",
    "pronunciation": "[hǝrˈself]",
    "meanings": "[代] 她⾃⼰",
    "book": "1册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "greengrocer",
    "pronunciation": "[ˈɡriːnɡrǝʊsǝr]",
    "meanings": "[名] 果菜商； 蔬菜⽔果店",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "absent",
    "pronunciation": "[ˈæbsǝnt]",
    "meanings": "[形] 缺席的\n[动] 缺席； 不参加",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Monday",
    "pronunciation": "[ˈmʌndeɪ]",
    "meanings": "[名] 星期⼀",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Tuesday",
    "pronunciation": "[ˈtuːzdeɪ]",
    "meanings": "[名] 星期⼆",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Wednesday",
    "pronunciation": "[ˈwenzdeɪ]",
    "meanings": "[名] 星期三",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Thursday",
    "pronunciation": "[ˈθɜːrzdeɪ]",
    "meanings": "[名] 星期四",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "keep",
    "pronunciation": "[kiːp]",
    "meanings": "[动] 继续； 保持； 保留",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "spend",
    "pronunciation": "[spend]",
    "meanings": "[动] 花费； 消耗； 度过",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "weekend",
    "pronunciation": "[ˈwiːkend]",
    "meanings": "[名] 周末",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Friday",
    "pronunciation": "[ˈfraɪˌdeɪ]",
    "meanings": "[名] 星期五",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Saturday",
    "pronunciation": "[ˈsætǝrdeɪ]",
    "meanings": "[名] 星期六",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Sunday",
    "pronunciation": "[ˈsʌnˌdeɪ]",
    "meanings": "[名] 星期⽇",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "lucky",
    "pronunciation": "[ˈlʌki]",
    "meanings": "[形] 好运的； 幸运的",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "church",
    "pronunciation": "[tʃɜːrtʃ]",
    "meanings": "[名] 教堂",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "dairy",
    "pronunciation": "[ˈderi]",
    "meanings": "[形] ⽜奶的； 乳品的\n[名] 乳品店",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "baker",
    "pronunciation": "[ˈbeɪkǝr]",
    "meanings": "[名] ⾯包师傅",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "grocer",
    "pronunciation": "[ˈɡrǝʊsǝr]",
    "meanings": "[名] ⻝品杂货商",
    "book": "1册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "year",
    "pronunciation": "[jɪr]",
    "meanings": "[名] 年",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "race",
    "pronunciation": "[reɪs]",
    "meanings": "[名] 种族； 赛跑； 竞争\n[动] ⽐赛； 快速移动",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "town",
    "pronunciation": "[taʊn]",
    "meanings": "[名] 镇； 城镇； 市镇",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "crowd",
    "pronunciation": "[kraʊd]",
    "meanings": "[名] ⼈群； 群众\n[动] 拥挤； 群集",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "stand",
    "pronunciation": "[stænd]",
    "meanings": "[动] 站⽴； 忍受； 抵御\n[名] 停⽌； 抵抗的状态； ⽴⾜点",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "exciting",
    "pronunciation": "[ɪkˈsaɪtɪŋ]",
    "meanings": "[形] 令⼈激动的； 使⼈兴奋的\n[动] 使兴奋； 使激动； “excite” 的现在分词",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "just",
    "pronunciation": "[dʒʌst]",
    "meanings": "[副] 只是； 就； 仅仅； 刚刚； 恰好\n[形] 公正的； 正当的； 合理的",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "finish",
    "pronunciation": "[ˈfɪnɪʃ]",
    "meanings": "[动] 完成； 结束",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "winner",
    "pronunciation": "[ˈwɪnǝr]",
    "meanings": "[名] 优胜者； 成功者",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "way",
    "pronunciation": "[weɪ]",
    "meanings": "[名] 道路； ⽅向； 路线； ⽅法； ⽅式",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "stationer",
    "pronunciation": "[ˈsteɪʃǝnǝr]",
    "meanings": "[名] ⽂具商",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "Denmark",
    "pronunciation": "[ˈdenmɑːrk]",
    "meanings": "[名] 丹⻨（北欧国家）",
    "book": "1册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "awful",
    "pronunciation": "[ˈɔːf(ǝ)l]",
    "meanings": "[形] 可怕的； 糟糕的； 讨厌的\n[副] ⾮常； 极其",
    "book": "1册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "time",
    "pronunciation": "[taɪm]",
    "meanings": "[名] 时间； 倍； 次数； 时期\n[动] 计时； 安排时间\n[形] 时间的； 定时的； 分期的",
    "book": "1册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "answer",
    "pronunciation": "[ˈænsǝr]",
    "meanings": "[名] 回答； 答案\n[动] 回答； 回应",
    "book": "1册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "last",
    "pronunciation": "[læst]",
    "meanings": "[形] 最后的； 最近的\n[副] 最后； 最近⼀次\n[动] 持续",
    "book": "1册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "phone",
    "pronunciation": "[fǝʊn]",
    "meanings": "[名] 电话\n[动] 打电话",
    "book": "1册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "again",
    "pronunciation": "[ǝˈɡen]",
    "meanings": "[副] 再次； ⼜⼀次",
    "book": "1册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "say",
    "pronunciation": "[seɪ]",
    "meanings": "[动] 说； 讲； 说话",
    "book": "1册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "week",
    "pronunciation": "[wiːk]",
    "meanings": "[名] 周； 星期； 礼拜",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "London",
    "pronunciation": "[ˈlʌndǝn]",
    "meanings": "[名] 伦敦（英国⾸都）",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "suddenly",
    "pronunciation": "[ˈsʌdǝnli]",
    "meanings": "[副] 突然； 猛然； 骤然",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "bus stop",
    "pronunciation": "[ˈbʌs stɑːp]",
    "meanings": "[短语] 公共汽⻋站",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "smile",
    "pronunciation": "[smaɪl]",
    "meanings": "[动] 微笑\n[名] 微笑； 笑容",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "pleasantly",
    "pronunciation": "[ˈplez(ǝ)ntli]",
    "meanings": "[副] 愉快地； 快活地",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "understand",
    "pronunciation": "[ˌʌndǝrˈstænd]",
    "meanings": "[动] 理解",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "speak",
    "pronunciation": "[spiːk]",
    "meanings": "[动] 讲话； 发⾔",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "hand",
    "pronunciation": "[hænd]",
    "meanings": "[名] ⼿\n[动] 交； 递； 给",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "pocket",
    "pronunciation": "[ˈpɑːkɪt]",
    "meanings": "[名] ⼝袋； ⾐袋； 兜\n[动] 把…放进⾐袋\n[形] 袖珍的； ⼩型的",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "phrasebook",
    "pronunciation": "[ˈfreɪzbʊk]",
    "meanings": "[名] 短语⼿册； 常⽤语⼿册",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "phrase",
    "pronunciation": "[freɪz]",
    "meanings": "[名] 短语； 词组\n[动] 叙述； 措辞",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "slowly",
    "pronunciation": "[ˈslǝʊli]",
    "meanings": "[副] 缓慢地； 迟缓地",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "hurriedly",
    "pronunciation": "[ˈhɜːrɪdli]",
    "meanings": "[副] 匆忙地； 仓促地",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "cut",
    "pronunciation": "[kʌt]",
    "meanings": "[动] 切； 割； 削减\n[名] 切； 割； 伤⼝； 削减",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "thirstily",
    "pronunciation": "[ˈθɜːrstɪli]",
    "meanings": "[副] 如饥似渴地",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "go",
    "pronunciation": "[ɡǝʊ]",
    "meanings": "[动] ⾛； 去",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "greet",
    "pronunciation": "[ɡriːt]",
    "meanings": "[动] 问候； 打招呼； 迎接",
    "book": "1册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "ago",
    "pronunciation": "[ǝˈɡǝʊ]",
    "meanings": "[副] 以前",
    "book": "1册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "buy",
    "pronunciation": "[baɪ]",
    "meanings": "[动] 买； 换取； 收买； 相信",
    "book": "1册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "pair",
    "pronunciation": "[per]",
    "meanings": "[名] ⼀双； ⼀对\n[动] （使） 成对；（使） 配对",
    "book": "1册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "fashion",
    "pronunciation": "[ˈfæʃ(ǝ)n]",
    "meanings": "[名] 时尚； 流⾏； 姿态； ⽅式\n[动] 制作； 把...塑造成； 使适应",
    "book": "1册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "uncomfortable",
    "pronunciation": "[ʌnˈkʌmfǝtǝbǝl]",
    "meanings": "[形] 使⼈不舒服的； 感到难受的； 不⾃在的",
    "book": "1册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "wear",
    "pronunciation": "[wer]",
    "meanings": "[动] 穿； 戴\n[名] ⾐着； 磨损",
    "book": "1册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "appointment",
    "pronunciation": "[ǝˈpɔɪntmǝnt]",
    "meanings": "[名] 约会； 约定； 职位； 任命",
    "book": "1册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "urgent",
    "pronunciation": "[ˈɜːrdʒǝnt]",
    "meanings": "[形] 紧急的； 紧迫的",
    "book": "1册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "till",
    "pronunciation": "[tɪl]",
    "meanings": "[介] 直到\n[连] 直到\n[名] 现⾦出纳机",
    "book": "1册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "shopping",
    "pronunciation": "[ˈʃɑːpɪŋ]",
    "meanings": "[名] 购物； 所购买之物",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "list",
    "pronunciation": "[lɪst]",
    "meanings": "[名] 表； 名单\n[动] 列出；（船） 倾斜",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "vegetable",
    "pronunciation": "[ˈvedʒtǝb(ǝ)l]",
    "meanings": "[名] 蔬菜",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "need",
    "pronunciation": "[niːd]",
    "meanings": "[名] 需要\n[动] 需要",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "hope",
    "pronunciation": "[hǝʊp]",
    "meanings": "[名] 希望\n[动] 希望",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "thing",
    "pronunciation": "[θɪŋ]",
    "meanings": "[名] 东⻄； 事情",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "money",
    "pronunciation": "[ˈmʌni]",
    "meanings": "[名] 钱； ⾦钱",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "groceries",
    "pronunciation": "[ˈɡrǝʊsǝriz]",
    "meanings": "[名] ⻝品杂货",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "fruit",
    "pronunciation": "[fruːt]",
    "meanings": "[名] ⽔果； 成果\n[动] 结果实",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "stationery",
    "pronunciation": "[ˈsteɪʃǝneri]",
    "meanings": "[名] ⽂具； 信纸",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "newsagent",
    "pronunciation": "[ˈnuːzeɪdʒǝnt]",
    "meanings": "[名] 报刊经销⼈",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "chemist",
    "pronunciation": "[ˈkemɪst]",
    "meanings": "[名] 化学家； 药剂师",
    "book": "1册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "bath",
    "pronunciation": "[bæθ]",
    "meanings": "[名] 洗澡； 浴室\n[动] 给…洗澡",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "nearly",
    "pronunciation": "[ˈnɪrli]",
    "meanings": "[副] ⼏乎； 将近； 差不多",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "ready",
    "pronunciation": "[ˈredi]",
    "meanings": "[形] 准备好的\n[动] 使...准备好",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "dinner",
    "pronunciation": "[ˈdɪnǝr]",
    "meanings": "[名] 晚餐； 晚宴",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "restaurant",
    "pronunciation": "[ˈrestǝrɑːnt]",
    "meanings": "[名] 餐厅； 餐馆",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "roast",
    "pronunciation": "[rǝʊst]",
    "meanings": "[动] 烤； 烘烤\n[名] 烤⾁； 烘烤\n[形] 烤的； 焙的",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "breakfast",
    "pronunciation": "[ˈbrekfǝst]",
    "meanings": "[名] 早餐； 早饭",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "haircut",
    "pronunciation": "[ˈherkʌt]",
    "meanings": "[名] 理发； 发型",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "party",
    "pronunciation": "[ˈpɑːrti]",
    "meanings": "[名] 聚会； 政党",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "holiday",
    "pronunciation": "[ˈhɑːlǝdeɪ]",
    "meanings": "[名] 假⽇； 假期",
    "book": "1册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "mess",
    "pronunciation": "[mes]",
    "meanings": "[名] 脏乱； 杂乱\n[动] 弄糟； 弄乱",
    "book": "1册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "pack",
    "pronunciation": "[pæk]",
    "meanings": "[动] 包装； 收拾⾏李\n[名] 包裹； ⼩包",
    "book": "1册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "suitcase",
    "pronunciation": "[ˈsuːtkeɪs]",
    "meanings": "[名] ⼿提箱",
    "book": "1册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "leave",
    "pronunciation": "[liːv]",
    "meanings": "[动] 离开； 离去； 留下\n[名] 休假",
    "book": "1册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "already",
    "pronunciation": "[ɔːlˈredi]",
    "meanings": "[副] 已经",
    "book": "1册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "Paris",
    "pronunciation": "[ˈpærɪs]",
    "meanings": "[名] 巴黎（法国⾸都）",
    "book": "1册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "cinema",
    "pronunciation": "[ˈsɪnǝmǝ]",
    "meanings": "[名] 电影院； 电影",
    "book": "1册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "film",
    "pronunciation": "[fɪlm]",
    "meanings": "[名] 电影； 底⽚； 薄薄的⼀层\n[动] 拍摄电影",
    "book": "1册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "beautiful",
    "pronunciation": "[ˈbjuːtɪf(ǝ)l]",
    "meanings": "[形] 漂亮的",
    "book": "1册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "city",
    "pronunciation": "[ˈsɪti]",
    "meanings": "[名] 城市",
    "book": "1册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "never",
    "pronunciation": "[ˈnevǝr]",
    "meanings": "[副] 从未； 决不",
    "book": "1册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "ever",
    "pronunciation": "[ˈevǝr]",
    "meanings": "[副] 在任何时候； 总是； 曾经",
    "book": "1册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "attendant",
    "pronunciation": "[ǝˈtendǝnt]",
    "meanings": "[名] 服务⼈员\n[形] 随之⽽来的",
    "book": "1册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "bring",
    "pronunciation": "[brɪŋ]",
    "meanings": "[动] 带来； 引起； 导致",
    "book": "1册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "garage",
    "pronunciation": "[ɡǝˈrɑːʒ]",
    "meanings": "[名] ⻋库； 汽⻋修理⼚",
    "book": "1册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "crash",
    "pronunciation": "[kræʃ]",
    "meanings": "[动] 碰撞； 坠毁； 崩溃\n[名] 碰撞； 坠毁； 崩溃",
    "book": "1册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "lamp-post",
    "pronunciation": "[læmp pǝʊst]",
    "meanings": "[名] 灯杆； 路灯柱",
    "book": "1册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "repair",
    "pronunciation": "[rɪˈper]",
    "meanings": "[动] 修理； 修补\n[名] 修理； 修补",
    "book": "1册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "try",
    "pronunciation": "[traɪ]",
    "meanings": "[名] 尝试； 试图\n[动] 尝试； 试图； 努⼒",
    "book": "1册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "believe",
    "pronunciation": "[bɪˈliːv]",
    "meanings": "[动] 相信； 认为； 信任",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "may",
    "pronunciation": "[meɪ]",
    "meanings": "[助动] 可能； 可以； 会； 愿",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "how long",
    "pronunciation": "[haʊ lɔːŋ]",
    "meanings": "[短语] 多久",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "since",
    "pronunciation": "[sɪns]",
    "meanings": "[连] 因为； 由于； 既然； 从…以后\n[副] 此后； 后来\n[介] ⾃…以后； 从…以来",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "why",
    "pronunciation": "[waɪ]",
    "meanings": "[副] 为什么\n[名] 为什么",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "sell",
    "pronunciation": "[sel]",
    "meanings": "[动] 出售； 卖",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "because",
    "pronunciation": "[bɪˈkɔːz]",
    "meanings": "[连] 因为",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "retire",
    "pronunciation": "[rɪˈtaɪǝr]",
    "meanings": "[动] 退休； 退役",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "cost",
    "pronunciation": "[kɔːst]",
    "meanings": "[动] 花费\n[名] 费⽤； 代价",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "pound",
    "pronunciation": "[paʊnd]",
    "meanings": "[名] 镑； 英镑\n[动] 连续重击； 捣碎",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "worth",
    "pronunciation": "[wɜːrθ]",
    "meanings": "[名] 价值\n[形] 有…价值； 值得的",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "penny",
    "pronunciation": "[ˈpeni]",
    "meanings": "[名] 便⼠",
    "book": "1册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "still",
    "pronunciation": "[stɪl]",
    "meanings": "[副] 仍然； 还是\n[形] 静⽌的； 平静的",
    "book": "1册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "move",
    "pronunciation": "[muːv]",
    "meanings": "[动] 移动； 搬家\n[名] ⾏动； 移动",
    "book": "1册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "miss",
    "pronunciation": "[mɪs]",
    "meanings": "[动] 想念； 错过； 漏掉\n[名] 错过； ⼥⼠； ⼩姐",
    "book": "1册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "neighbour",
    "pronunciation": "[ˈneɪbǝr]",
    "meanings": "[名] 邻居",
    "book": "1册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "person",
    "pronunciation": "[ˈpɜːrs(ǝ)n]",
    "meanings": "[名] ⼈； ⼈员； 个⼈",
    "book": "1册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "people",
    "pronunciation": "[ˈpiːp(ǝ)l]",
    "meanings": "[名] ⼈们； ⼈； ⼈⺠",
    "book": "1册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "poor",
    "pronunciation": "[pʊr]",
    "meanings": "[形] 贫穷的； 可怜的； 缺少的； 拙劣的",
    "book": "1册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "pilot",
    "pronunciation": "[ˈpaɪlǝt]",
    "meanings": "[名] ⻜⾏员； 驾驶员",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "return",
    "pronunciation": "[rɪˈtɜːrn]",
    "meanings": "[动] 返回； 归还\n[名] 返回； 归还",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "New York",
    "pronunciation": "[ˌnuː ˈjɔːrk]",
    "meanings": "[名] 纽约",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Tokyo",
    "pronunciation": "[ˈtǝʊkiǝʊ]",
    "meanings": "[名] 东京（⽇本）",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Madrid",
    "pronunciation": "[mǝˈdrɪd]",
    "meanings": "[名] ⻢德⾥（⻄班⽛⾸都）",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Athens",
    "pronunciation": "[ˈæθǝnz]",
    "meanings": "[名] 雅典（希腊⾸都）",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Berlin",
    "pronunciation": "[bɜːˈlɪn]",
    "meanings": "[名] 柏林（德国）",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Bombay",
    "pronunciation": "[bɑːmˈbeɪ]",
    "meanings": "[名] 孟买",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Geneva",
    "pronunciation": "[dʒǝˈniːvǝ]",
    "meanings": "[名] ⽇内瓦（瑞⼠）",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Moscow",
    "pronunciation": "[ˈmɑːskaʊ]",
    "meanings": "[名] 莫斯科（俄罗斯⾸都）",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Rome",
    "pronunciation": "[rǝʊm]",
    "meanings": "[名] 罗⻢",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Seoul",
    "pronunciation": "[sǝʊl]",
    "meanings": "[名] 汉城； ⾸尔（韩国的⾸都和最⼤城市）",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Stockholm",
    "pronunciation": "[ˈstɑːkˌhǝʊlm]",
    "meanings": "[名] 斯德哥尔摩（瑞典⾸都）",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Sydney",
    "pronunciation": "[ˈsɪdni]",
    "meanings": "[名] 悉尼（澳⼤利亚）",
    "book": "1册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "train",
    "pronunciation": "[treɪn]",
    "meanings": "[名] ⽕⻋； 列⻋； 列； 队\n[动] 训练； 培训",
    "book": "1册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "platform",
    "pronunciation": "[ˈplætfɔːrm]",
    "meanings": "[名] 平台； 站台； ⽉台",
    "book": "1册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "plenty",
    "pronunciation": "[ˈplenti]",
    "meanings": "[形] ⾜够的\n[名] 充裕； 富裕",
    "book": "1册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "bar",
    "pronunciation": "[bɑːr]",
    "meanings": "[名] 棒； 条状物；（⻔､ 窗的） 闩； 酒吧； 栅栏\n[动] 禁⽌； 妨碍； 阻拦",
    "book": "1册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "station",
    "pronunciation": "[ˈsteɪʃ(ǝ)n]",
    "meanings": "[名] ⻋站； 站",
    "book": "1册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "porter",
    "pronunciation": "[ˈpɔːrtǝr]",
    "meanings": "[名] ⾏李搬运⼯； ⻔卫；（列⻋卧⻋的） 服务⽣",
    "book": "1册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "describe",
    "pronunciation": "[dɪˈskraɪb]",
    "meanings": "[动] 描述",
    "book": "1册",
    "lesson": "lesson 97-98"
  },
  {
    "word": "zip",
    "pronunciation": "[zɪp]",
    "meanings": "[名] 拉链； 精⼒； 活⼒\n[动] 拉上拉链； 快速移动； 压缩",
    "book": "1册",
    "lesson": "lesson 97-98"
  },
  {
    "word": "label",
    "pronunciation": "[ˈleɪb(ǝ)l]",
    "meanings": "[名] 标签\n[动] ⽤标签标明",
    "book": "1册",
    "lesson": "lesson 97-98"
  },
  {
    "word": "handle",
    "pronunciation": "[ˈhænd(ǝ)l]",
    "meanings": "[动] 处理； 操纵\n[名] 柄； 把⼿",
    "book": "1册",
    "lesson": "lesson 97-98"
  },
  {
    "word": "address",
    "pronunciation": "[ǝˈdres]",
    "meanings": "[名] 地址； 演讲\n[动] 向…讲话； 提出； 解决",
    "book": "1册",
    "lesson": "lesson 97-98"
  },
  {
    "word": "pence",
    "pronunciation": "[pens]",
    "meanings": "[名] 便⼠； “penny” 的复数",
    "book": "1册",
    "lesson": "lesson 97-98"
  },
  {
    "word": "belong",
    "pronunciation": "[bɪˈlɔːŋ]",
    "meanings": "[动] 应在（某处）； 属于",
    "book": "1册",
    "lesson": "lesson 97-98"
  },
  {
    "word": "ow",
    "pronunciation": "[aʊ]",
    "meanings": "[叹] 哎哟（表示疼痛）",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "slip",
    "pronunciation": "[slɪp]",
    "meanings": "[动] 滑倒； 滑落； 溜⾛； 悄悄地放\n[名] 滑倒； 溜⾛； 疏忽； 纸⽚",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "fall",
    "pronunciation": "[fɔːl]",
    "meanings": "[动] 下降； 跌倒\n[名] 落下； 跌落； 秋天",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "downstairs",
    "pronunciation": "[ˌdaʊnˈsterz]",
    "meanings": "[副] 往楼下； 在楼下\n[形] 楼下的； 底楼的",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "hurt",
    "pronunciation": "[hɜːrt]",
    "meanings": "[动] 受伤； 感到疼痛\n[名] 伤痛\n[形] 受伤的",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "back",
    "pronunciation": "[bæk]",
    "meanings": "[名] 背部； 后⾯\n[副] 回原处； 向后\n[形] 后⾯的； 拖⽋的\n[动] ⽀持",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "stand up",
    "pronunciation": "[stænd ʌp]",
    "meanings": "[短语] 站起来",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "help",
    "pronunciation": "[help]",
    "meanings": "[名] 帮助\n[动] 帮助",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "at once",
    "pronunciation": "[æt wʌns]",
    "meanings": "[短语] ⻢上",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "sure",
    "pronunciation": "[ʃʊr]",
    "meanings": "[副] 当然； 当然可以； 确定\n[形] 确信； 必定的",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "X-ray",
    "pronunciation": "[ˈeks reɪ]",
    "meanings": "[名] X 射线",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "licence",
    "pronunciation": "[ˈlaɪs(ǝ)ns]",
    "meanings": "[名] 许可证； 执照",
    "book": "1册",
    "lesson": "lesson 99-100"
  },
  {
    "word": "Scotland",
    "pronunciation": "[ˈskɑːtlǝnd]",
    "meanings": "[名] 苏格兰",
    "book": "1册",
    "lesson": "lesson 101-102"
  },
  {
    "word": "card",
    "pronunciation": "[kɑːrd]",
    "meanings": "[名] 卡⽚； 纸牌； 银⾏卡",
    "book": "1册",
    "lesson": "lesson 101-102"
  },
  {
    "word": "youth",
    "pronunciation": "[juːθ]",
    "meanings": "[名] ⻘春； 年轻； ⻘年",
    "book": "1册",
    "lesson": "lesson 101-102"
  },
  {
    "word": "hostel",
    "pronunciation": "[ˈhɑːst(ǝ)l]",
    "meanings": "[名] 旅社； 招待所；（校外） 学⽣宿舍",
    "book": "1册",
    "lesson": "lesson 101-102"
  },
  {
    "word": "association",
    "pronunciation": "[ǝˌsǝʊsiˈeɪʃǝn]",
    "meanings": "[名] 协会； 联系； 联想",
    "book": "1册",
    "lesson": "lesson 101-102"
  },
  {
    "word": "soon",
    "pronunciation": "[suːn]",
    "meanings": "[副] 很快； 不久",
    "book": "1册",
    "lesson": "lesson 101-102"
  },
  {
    "word": "write",
    "pronunciation": "[raɪt]",
    "meanings": "[动] 书写； 写信； 写作",
    "book": "1册",
    "lesson": "lesson 101-102"
  },
  {
    "word": "exam",
    "pronunciation": "[ɪɡˈzæm]",
    "meanings": "[名] 考试； 测验",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "pass",
    "pronunciation": "[pæs]",
    "meanings": "[动] 路过； (时间) 流逝； 超过； 传递； 通过\n[名] (考试) 及格； 通⾏证",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "mathematics",
    "pronunciation": "[ˌmæθǝˈmætɪks]",
    "meanings": "[名] 数学",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "question",
    "pronunciation": "[ˈkwestʃǝn]",
    "meanings": "[名] 问题； 疑问\n[动] 询问； 怀疑",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "easy",
    "pronunciation": "[ˈiːzi]",
    "meanings": "[形] 容易的； 轻松的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "enough",
    "pronunciation": "[ɪˈnʌf]",
    "meanings": "[形] ⾜够的； 充⾜的\n[副] ⾜够地； 充分地\n[名] 充⾜； ⾜够\n[叹] 够了",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "paper",
    "pronunciation": "[ˈpeɪpǝr]",
    "meanings": "[名] 纸； 报纸； 论⽂； 试卷\n[动] ⽤墙纸贴",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "fail",
    "pronunciation": "[feɪl]",
    "meanings": "[动] 失败； 不及格； ⽆法做到； 使失望； 衰退； 倒闭\n[名] 失败； 不及格",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "mark",
    "pronunciation": "[mɑːrk]",
    "meanings": "[名] 记号； 痕迹； 分数\n[动] 做标记；（使） 留痕迹； 评分",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "rest",
    "pronunciation": "[rest]",
    "meanings": "[动] （使） 休息；（使） 倚靠； 停留在；中⽌\n[名] 休息； 其他； 剩余部分； 宁静",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "difficult",
    "pronunciation": "[ˈdɪfɪkǝlt]",
    "meanings": "[形] 困难的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "hate",
    "pronunciation": "[heɪt]",
    "meanings": "[动] 讨厌； 憎恨\n[名] 厌恶； 憎恨",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "low",
    "pronunciation": "[lǝʊ]",
    "meanings": "[副] 低； 低矮； 在低处； 往下地\n[形] 低沉的； 低垂的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "cheer",
    "pronunciation": "[tʃɪr]",
    "meanings": "[动] 欢呼； ⿎舞； 使⿎起精神\n[名] 欢呼声； 激励",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "guy",
    "pronunciation": "[ɡaɪ]",
    "meanings": "[名] 家伙； ⼈",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "top",
    "pronunciation": "[tɑːp]",
    "meanings": "[名] 顶； 顶部； 顶端\n[动] 胜过； 超过； 居…之⾸\n[形] 最⾼的； 极棒的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "clever",
    "pronunciation": "[ˈklevǝr]",
    "meanings": "[形] 聪明的； 灵巧的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "stupid",
    "pronunciation": "[ˈstuːpɪd]",
    "meanings": "[形] 愚蠢的； 笨的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "cheap",
    "pronunciation": "[tʃiːp]",
    "meanings": "[形] 便宜的； 廉价的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "expensive",
    "pronunciation": "[ɪkˈspensɪv]",
    "meanings": "[形] 昂贵的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "stale",
    "pronunciation": "[steɪl]",
    "meanings": "[形] 不新鲜的； 陈腐的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "loud",
    "pronunciation": "[laʊd]",
    "meanings": "[形] 响亮的； ⼤声的\n[副] ⼤声地； 响亮地",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "high",
    "pronunciation": "[haɪ]",
    "meanings": "[形] ⾼的\n[副] 在⾼处",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "soft",
    "pronunciation": "[sɔːft]",
    "meanings": "[形] 软的； 柔软的",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "sour",
    "pronunciation": "[ˈsaʊǝr]",
    "meanings": "[形] 酸的； 不友好的； 坏脾⽓的\n[动] （使） 变酸",
    "book": "1册",
    "lesson": "lesson 103-104"
  },
  {
    "word": "spell",
    "pronunciation": "[spel]",
    "meanings": "[动] 拼写； 招致； 意味着； 顶替\n[名] ⼀段时间； 咒语； 魅⼒",
    "book": "1册",
    "lesson": "lesson 105-106"
  },
  {
    "word": "intelligent",
    "pronunciation": "[ɪnˈtelɪdʒǝnt]",
    "meanings": "[形] 有才智的； 聪明的； 明智的",
    "book": "1册",
    "lesson": "lesson 105-106"
  },
  {
    "word": "mistake",
    "pronunciation": "[mɪˈsteɪk]",
    "meanings": "[名] 错误； 失误\n[动] 弄错； 误解",
    "book": "1册",
    "lesson": "lesson 105-106"
  },
  {
    "word": "present",
    "pronunciation": "[ˈprez(ǝ)nt]",
    "meanings": "[名] ⽬前； 礼物\n[形] 在场的； ⽬前的\n[动] 呈现； 提出",
    "book": "1册",
    "lesson": "lesson 105-106"
  },
  {
    "word": "dictionary",
    "pronunciation": "[ˈdɪkʃǝneri]",
    "meanings": "[名] 词典； 字典",
    "book": "1册",
    "lesson": "lesson 105-106"
  },
  {
    "word": "carry",
    "pronunciation": "[ˈkæri]",
    "meanings": "[动] 拿； 携带； 运送",
    "book": "1册",
    "lesson": "lesson 105-106"
  },
  {
    "word": "correct",
    "pronunciation": "[kǝˈrekt]",
    "meanings": "[形] 正确的\n[动] 改正； 修正",
    "book": "1册",
    "lesson": "lesson 105-106"
  },
  {
    "word": "madam",
    "pronunciation": "[ˈmædǝm]",
    "meanings": "[名] 夫⼈； ⼥⼠； ⾮常⾃我的⼥⼦",
    "book": "1册",
    "lesson": "lesson 107-108"
  },
  {
    "word": "as well",
    "pronunciation": "[æz wel]",
    "meanings": "[短语] 也； 同样； ⼜； 还",
    "book": "1册",
    "lesson": "lesson 107-108"
  },
  {
    "word": "pretty",
    "pronunciation": "[ˈprɪti]",
    "meanings": "[形] 漂亮的\n[副] 很； 相当",
    "book": "1册",
    "lesson": "lesson 107-108"
  },
  {
    "word": "idea",
    "pronunciation": "[aɪˈdiːǝ]",
    "meanings": "[名] 主意； 想法； 理念",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "a little",
    "pronunciation": "[ǝ ˈlɪt(ǝ)l]",
    "meanings": "[短语] 少量； 少许",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "teaspoonful",
    "pronunciation": "[ˈtiːspuːnfʊl]",
    "meanings": "[名] ⼀茶匙的量",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "less",
    "pronunciation": "[les]",
    "meanings": "[副] 较少地； 更少地； “little” 的⽐较级\n[形] 更少的； “little” 的⽐较级\n[代] 较少； 更少",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "a few",
    "pronunciation": "[ǝ fjuː]",
    "meanings": "[短语] 少许； 少数",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "pity",
    "pronunciation": "[ˈpɪti]",
    "meanings": "[动] 怜悯； 同情\n[名] 怜悯； 同情； 憾事",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "instead",
    "pronunciation": "[ɪnˈsted]",
    "meanings": "[副] 代替； 反⽽",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "advice",
    "pronunciation": "[ǝdˈvaɪs]",
    "meanings": "[名] 建议； 意⻅",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "most",
    "pronunciation": "[mǝʊst]",
    "meanings": "[形] 最多的； ⼤多数的\n[副] 最\n[代] ⼤部分",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "least",
    "pronunciation": "[liːst]",
    "meanings": "[形] 最少的； 最⼩的； “little” 的最⾼级\n[副] 最⼩； 最少； “little” 的最⾼级\n[名] 最⼩； 最少",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "worse",
    "pronunciation": "[wɜːrs]",
    "meanings": "[副] 更糟； 更坏\n[形] 更坏的； 更糟糕的； “bad” 的⽐较级",
    "book": "1册",
    "lesson": "lesson 109-110"
  },
  {
    "word": "worst",
    "pronunciation": "[wɜːrst]",
    "meanings": "[副] 最坏； 最严重； 最糟\n[形] 最坏的； 最糟糕的； “bad” 的最⾼级； “ill” 的最⾼级\n[名] 最坏的事",
    "book": "1册",
    "lesson": "lesson 111-112"
  },
  {
    "word": "model",
    "pronunciation": "[ˈmɑːd(ǝ)l]",
    "meanings": "[名] 模型； 模特； 模范； 型号\n[动] 将…做成模型； 当模特",
    "book": "1册",
    "lesson": "lesson 111-112"
  },
  {
    "word": "afford",
    "pronunciation": "[ǝˈfɔːrd]",
    "meanings": "[动] 买得起； 担负得起； 有时间做；给予",
    "book": "1册",
    "lesson": "lesson 111-112"
  },
  {
    "word": "deposit",
    "pronunciation": "[dɪˈpɑːzɪt]",
    "meanings": "[名] 存款； 押⾦； 沉淀\n[动] 存储； 堆积",
    "book": "1册",
    "lesson": "lesson 111-112"
  },
  {
    "word": "instalment",
    "pronunciation": "[ɪnˈstɔːlmǝnt]",
    "meanings": "[名] （分期付款中的） ⼀期付款； 分期连载的⼀部分",
    "book": "1册",
    "lesson": "lesson 111-112"
  },
  {
    "word": "price",
    "pronunciation": "[praɪs]",
    "meanings": "[名] 价格； 代价\n[动] 定价",
    "book": "1册",
    "lesson": "lesson 111-112"
  },
  {
    "word": "millionaire",
    "pronunciation": "[ˌmɪljǝˈner]",
    "meanings": "[名] 百万富翁",
    "book": "1册",
    "lesson": "lesson 111-112"
  },
  {
    "word": "conductor",
    "pronunciation": "[kǝnˈdʌktǝr]",
    "meanings": "[名] 指挥； 售票员； 导体",
    "book": "1册",
    "lesson": "lesson 113-114"
  },
  {
    "word": "fare",
    "pronunciation": "[fer]",
    "meanings": "[名] ⻋费； 票价； 费⽤\n[动] 进展； 成功（或不成功等）",
    "book": "1册",
    "lesson": "lesson 113-114"
  },
  {
    "word": "note",
    "pronunciation": "[nǝʊt]",
    "meanings": "[名] 笔记； 便条； 注释； ⾳调； 语⽓； 钞票\n[动] 注意； 备注； 记录",
    "book": "1册",
    "lesson": "lesson 113-114"
  },
  {
    "word": "passenger",
    "pronunciation": "[ˈpæsɪndʒǝr]",
    "meanings": "[名] 旅客； 乘客",
    "book": "1册",
    "lesson": "lesson 113-114"
  },
  {
    "word": "none",
    "pronunciation": "[nʌn]",
    "meanings": "[代] 没有⼀个\n[副] 绝⽆",
    "book": "1册",
    "lesson": "lesson 113-114"
  },
  {
    "word": "neither",
    "pronunciation": "[ˈniːðǝr]",
    "meanings": "[形] 两者都不的\n[代] 两者都不\n[副] 两者都不\n[连] 也不",
    "book": "1册",
    "lesson": "lesson 113-114"
  },
  {
    "word": "get off",
    "pronunciation": "[ɡet ɔːf]",
    "meanings": "[短语] 下⻋； 离开",
    "book": "1册",
    "lesson": "lesson 113-114"
  },
  {
    "word": "tramp",
    "pronunciation": "[træmp]",
    "meanings": "[名] 流浪汉； 流浪乞丐； 徒步旅⾏\n[动] 步⾏； 踩； 踏",
    "book": "1册",
    "lesson": "lesson 113-114"
  },
  {
    "word": "except",
    "pronunciation": "[ɪkˈsept]",
    "meanings": "[连] 除了； 只是\n[动] 不计； 把…除外\n[介] 除了； 除外",
    "book": "1册",
    "lesson": "lesson 113-114"
  },
  {
    "word": "anyone",
    "pronunciation": "[ˈeniwʌn]",
    "meanings": "[代] 任何⼈",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "knock",
    "pronunciation": "[nɑːk]",
    "meanings": "[动] 敲； 撞； 击； 打\n[名] 撞击； 敲击",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "everything",
    "pronunciation": "[ˈevriθɪŋ]",
    "meanings": "[代] 每件事； ⼀切事物",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "quiet",
    "pronunciation": "[ˈkwaɪǝt]",
    "meanings": "[形] 安静的",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "impossible",
    "pronunciation": "[ɪmˈpɑːsǝb(ǝ)l]",
    "meanings": "[形] 不可能的",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "invite",
    "pronunciation": "[ɪnˈvaɪt]",
    "meanings": "[动] 邀请； 招致",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "anything",
    "pronunciation": "[ˈeniθɪŋ]",
    "meanings": "[代] 任何东⻄； 任何事",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "nothing",
    "pronunciation": "[ˈnʌθɪŋ]",
    "meanings": "[代] 没有什么\n[名] ⽆关紧要的事",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "lemonade",
    "pronunciation": "[ˌlemǝˈneɪd]",
    "meanings": "[名] 柠檬汽⽔； 柠檬饮料",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "joke",
    "pronunciation": "[dʒǝʊk]",
    "meanings": "[名] 笑话； 玩笑\n[动] 开玩笑",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "asleep",
    "pronunciation": "[ǝˈsliːp]",
    "meanings": "[形] 睡着的",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "glasses",
    "pronunciation": "[ˈɡlæsɪz]",
    "meanings": "[名] 眼镜\n[名] 玻璃； 玻璃杯； “glass” 的复数",
    "book": "1册",
    "lesson": "lesson 115-116"
  },
  {
    "word": "dining room",
    "pronunciation": "[ˈdaɪnɪŋ ruːm]",
    "meanings": "[短语] （家⾥或宾馆的） 餐厅",
    "book": "1册",
    "lesson": "lesson 117-118"
  },
  {
    "word": "coin",
    "pronunciation": "[kɔɪn]",
    "meanings": "[名] 硬币； ⾦属钱币\n[动] 铸造硬币； 杜撰； 创造",
    "book": "1册",
    "lesson": "lesson 117-118"
  },
  {
    "word": "swallow",
    "pronunciation": "[ˈswɑːlǝʊ]",
    "meanings": "[动] 吞咽； 轻信\n[名] 燕⼦； 吞咽",
    "book": "1册",
    "lesson": "lesson 117-118"
  },
  {
    "word": "later",
    "pronunciation": "[ˈleɪtǝr]",
    "meanings": "[副] 后来； 稍后\n[形] 后来的； 稍后的； 晚些的； 晚年的",
    "book": "1册",
    "lesson": "lesson 117-118"
  },
  {
    "word": "toilet",
    "pronunciation": "[ˈtɔɪlǝt]",
    "meanings": "[名] 厕所； ⻢桶； 卫⽣间； 盥洗室",
    "book": "1册",
    "lesson": "lesson 117-118"
  },
  {
    "word": "ring",
    "pronunciation": "[rɪŋ]",
    "meanings": "[名] 环； 环形物； 戒指； 铃声； 声调； 拳击场\n[动] 成环形； 环绕； 响铃； 鸣； 给…打电话",
    "book": "1册",
    "lesson": "lesson 117-118"
  },
  {
    "word": "story",
    "pronunciation": "[ˈstɔːri]",
    "meanings": "[名] 故事； ⼩说； 轶事； 假话",
    "book": "1册",
    "lesson": "lesson 119-120"
  },
  {
    "word": "happen",
    "pronunciation": "[ˈhæpǝn]",
    "meanings": "[动] 发⽣",
    "book": "1册",
    "lesson": "lesson 119-120"
  },
  {
    "word": "thief",
    "pronunciation": "[θiːf]",
    "meanings": "[名] ⼩偷； 贼； 窃贼",
    "book": "1册",
    "lesson": "lesson 119-120"
  },
  {
    "word": "enter",
    "pronunciation": "[ˈentǝr]",
    "meanings": "[动] 进⼊； 进去",
    "book": "1册",
    "lesson": "lesson 119-120"
  },
  {
    "word": "dark",
    "pronunciation": "[dɑːrk]",
    "meanings": "[形] ⿊暗的； 暗⾊的； 深⾊的\n[名] ⿊暗； 夜； 暗⾊",
    "book": "1册",
    "lesson": "lesson 119-120"
  },
  {
    "word": "torch",
    "pronunciation": "[tɔːrtʃ]",
    "meanings": "[名] ⽕炬； ⼿电筒； ⽕把",
    "book": "1册",
    "lesson": "lesson 119-120"
  },
  {
    "word": "voice",
    "pronunciation": "[vɔɪs]",
    "meanings": "[名] 声⾳； 呼声； 意⻅\n[动] 表达； 发嗓⾳",
    "book": "1册",
    "lesson": "lesson 119-120"
  },
  {
    "word": "parrot",
    "pronunciation": "[ˈpærǝt]",
    "meanings": "[名] 鹦鹉； 学⾆者\n[动] 鹦鹉学⾆地说； 机械地模仿",
    "book": "1册",
    "lesson": "lesson 119-120"
  },
  {
    "word": "exercise book",
    "pronunciation": "[ˈeksǝrsaɪz bʊk]",
    "meanings": "[短语] 练习册； 作业本",
    "book": "1册",
    "lesson": "lesson 119-120"
  },
  {
    "word": "customer",
    "pronunciation": "[ˈkʌstǝmǝr]",
    "meanings": "[名] 客户； 顾客； 主顾",
    "book": "1册",
    "lesson": "lesson 121-122"
  },
  {
    "word": "forget",
    "pronunciation": "[fǝrˈɡet]",
    "meanings": "[动] 忘记； 遗忘",
    "book": "1册",
    "lesson": "lesson 121-122"
  },
  {
    "word": "manager",
    "pronunciation": "[ˈmænɪdʒǝr]",
    "meanings": "[名] 经理； 管理者",
    "book": "1册",
    "lesson": "lesson 121-122"
  },
  {
    "word": "serve",
    "pronunciation": "[sɜːrv]",
    "meanings": "[动] 服务； 接待； 供职； 服役",
    "book": "1册",
    "lesson": "lesson 121-122"
  },
  {
    "word": "counter",
    "pronunciation": "[ˈkaʊntǝr]",
    "meanings": "[名] 柜台； 对⽴⾯\n[动] 反驳； 抵消\n[副] 相反地",
    "book": "1册",
    "lesson": "lesson 121-122"
  },
  {
    "word": "recognize",
    "pronunciation": "[ˈrekǝɡnaɪz]",
    "meanings": "[动] 认出； 意识到； 承认",
    "book": "1册",
    "lesson": "lesson 121-122"
  },
  {
    "word": "road",
    "pronunciation": "[rǝʊd]",
    "meanings": "[名] 道路； 公路",
    "book": "1册",
    "lesson": "lesson 121-122"
  },
  {
    "word": "during",
    "pronunciation": "[ˈdʊrɪŋ]",
    "meanings": "[介] 在…期间",
    "book": "1册",
    "lesson": "lesson 123-124"
  },
  {
    "word": "trip",
    "pronunciation": "[trɪp]",
    "meanings": "[名] 旅⾏； 旅程\n[动] 绊倒； 出差错； 轻快地⾛",
    "book": "1册",
    "lesson": "lesson 123-124"
  },
  {
    "word": "travel",
    "pronunciation": "[ˈtræv(ǝ)l]",
    "meanings": "[动] 旅游； 旅⾏\n[名] 旅游； 旅⾏",
    "book": "1册",
    "lesson": "lesson 123-124"
  },
  {
    "word": "offer",
    "pronunciation": "[ˈɔːfǝr]",
    "meanings": "[名] 提议； 提供； 报价\n[动] 提供； 愿意",
    "book": "1册",
    "lesson": "lesson 123-124"
  },
  {
    "word": "guess",
    "pronunciation": "[ɡes]",
    "meanings": "[动] 猜测； 猜想\n[名] 猜测； 猜想",
    "book": "1册",
    "lesson": "lesson 123-124"
  },
  {
    "word": "grow",
    "pronunciation": "[ɡrǝʊ]",
    "meanings": "[动] ⽣⻓； 成⻓； 种植； 渐渐变成",
    "book": "1册",
    "lesson": "lesson 123-124"
  },
  {
    "word": "beard",
    "pronunciation": "[bɪrd]",
    "meanings": "[名] 胡须； 络腮胡⼦\n[动] 公然反抗",
    "book": "1册",
    "lesson": "lesson 123-124"
  },
  {
    "word": "kitten",
    "pronunciation": "[ˈkɪt(ǝ)n]",
    "meanings": "[名] ⼩猫",
    "book": "1册",
    "lesson": "lesson 123-124"
  },
  {
    "word": "terribly",
    "pronunciation": "[ˈterǝbli]",
    "meanings": "[副] 可怕地； ⾮常； 极",
    "book": "1册",
    "lesson": "lesson 125-126"
  },
  {
    "word": "dry",
    "pronunciation": "[draɪ]",
    "meanings": "[形] ⼲的\n[动] 变⼲",
    "book": "1册",
    "lesson": "lesson 125-126"
  },
  {
    "word": "nuisance",
    "pronunciation": "[ˈnuːs(ǝ)ns]",
    "meanings": "[名] 讨厌的⼈； 讨厌的事",
    "book": "1册",
    "lesson": "lesson 125-126"
  },
  {
    "word": "mean",
    "pronunciation": "[miːn]",
    "meanings": "[动] 意思是； 打算； 导致； 有意；对…严肃认真\n[形] 低劣的； 吝啬的； 平均的\n[名] 平均数； 中庸； 居中",
    "book": "1册",
    "lesson": "lesson 125-126"
  },
  {
    "word": "surprise",
    "pronunciation": "[sǝrˈpraɪz]",
    "meanings": "[动] 使惊奇； 使感到意外\n[名] 惊讶； 惊喜； 意外",
    "book": "1册",
    "lesson": "lesson 125-126"
  },
  {
    "word": "immediately",
    "pronunciation": "[ɪˈmiːdiǝtli]",
    "meanings": "[副] ⽴即； ⻢上\n[连] 即刻",
    "book": "1册",
    "lesson": "lesson 125-126"
  },
  {
    "word": "famous",
    "pronunciation": "[ˈfeɪmǝs]",
    "meanings": "[形] 著名的； 出名的",
    "book": "1册",
    "lesson": "lesson 127-128"
  },
  {
    "word": "actress",
    "pronunciation": "[ˈæktrǝs]",
    "meanings": "[名] ⼥演员",
    "book": "1册",
    "lesson": "lesson 127-128"
  },
  {
    "word": "at least",
    "pronunciation": "[æt liːst]",
    "meanings": "[短语] ⾄少； 不少于； 起码",
    "book": "1册",
    "lesson": "lesson 127-128"
  },
  {
    "word": "actor",
    "pronunciation": "[ˈæktǝr]",
    "meanings": "[名] 演员； 男演员",
    "book": "1册",
    "lesson": "lesson 127-128"
  },
  {
    "word": "wave",
    "pronunciation": "[weɪv]",
    "meanings": "[名] 波； 波浪； 海浪； 挥⼿\n[动] 挥⼿； 挥舞； 招⼿； 起伏",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "track",
    "pronunciation": "[træk]",
    "meanings": "[名] 轨道； 踪迹； ⼩路； 跑道\n[动] 追踪； 跟踪",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "mile",
    "pronunciation": "[maɪl]",
    "meanings": "[名] 英⾥",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "overtake",
    "pronunciation": "[ˌǝʊvǝrˈteɪk]",
    "meanings": "[动] 赶上； 超过",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "speed limit",
    "pronunciation": "[ˈspiːd lɪmɪt]",
    "meanings": "[短语] 速度限制",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "dream",
    "pronunciation": "[driːm]",
    "meanings": "[名] 梦； 梦想\n[动] 梦想； 做梦",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "sign",
    "pronunciation": "[saɪn]",
    "meanings": "[名] 标志； 符号； 告示牌； ⼿势； 征兆\n[动] 签名； 做标记",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "driving licence",
    "pronunciation": "[ˈdraɪvɪŋ laɪs(ǝ)ns]",
    "meanings": "[名] 驾驶执照",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "charge",
    "pronunciation": "[tʃɑːrdʒ]",
    "meanings": "[动] 使承担责任； 收费； 充电； 指控； 给…充电\n[名] 负责； 收费； 指控； 谴责",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "darling",
    "pronunciation": "[ˈdɑːrlɪŋ]",
    "meanings": "[名] ⼼爱的⼈\n[形] 亲爱的",
    "book": "1册",
    "lesson": "lesson 129-130"
  },
  {
    "word": "Egypt",
    "pronunciation": "[ˈiːdʒɪpt]",
    "meanings": "[名] 埃及（东北⾮国家）",
    "book": "1册",
    "lesson": "lesson 131-132"
  },
  {
    "word": "abroad",
    "pronunciation": "[ǝˈbrɔːd]",
    "meanings": "[副] 在国外； 出国",
    "book": "1册",
    "lesson": "lesson 131-132"
  },
  {
    "word": "worry",
    "pronunciation": "[ˈwɜːri]",
    "meanings": "[动] 担⼼； 担忧\n[名] 担⼼； 忧虑",
    "book": "1册",
    "lesson": "lesson 131-132"
  },
  {
    "word": "reporter",
    "pronunciation": "[rɪˈpɔːrtǝr]",
    "meanings": "[名] 记者； 通讯员",
    "book": "1册",
    "lesson": "lesson 133-134"
  },
  {
    "word": "sensational",
    "pronunciation": "[senˈseɪʃǝn(ǝ)l]",
    "meanings": "[形] 轰动的； 耸⼈听闻的； 极好的",
    "book": "1册",
    "lesson": "lesson 133-134"
  },
  {
    "word": "mink coat",
    "pronunciation": "[mɪŋk kǝʊt]",
    "meanings": "[短语] 貂⽪⼤⾐",
    "book": "1册",
    "lesson": "lesson 133-134"
  },
  {
    "word": "future",
    "pronunciation": "[ˈfjuːtʃǝr]",
    "meanings": "[名] 未来； 将来； 前途\n[形] 将来的； 未来的",
    "book": "1册",
    "lesson": "lesson 135-136"
  },
  {
    "word": "get married",
    "pronunciation": "[ɡet ˈmærid]",
    "meanings": "[短语] 结婚",
    "book": "1册",
    "lesson": "lesson 135-136"
  },
  {
    "word": "hotel",
    "pronunciation": "[hǝʊˈtel]",
    "meanings": "[名] 旅馆； 酒店； 饭店",
    "book": "1册",
    "lesson": "lesson 135-136"
  },
  {
    "word": "latest",
    "pronunciation": "[ˈleɪtɪst]",
    "meanings": "[名] 最新消息； 最新事物\n[形] 最新的； 最近的； 最后的；“late” 的最⾼级",
    "book": "1册",
    "lesson": "lesson 135-136"
  },
  {
    "word": "introduce",
    "pronunciation": "[ˌɪntrǝˈduːs]",
    "meanings": "[动] 介绍； 引进",
    "book": "1册",
    "lesson": "lesson 135-136"
  },
  {
    "word": "football",
    "pronunciation": "[ˈfʊtbɔːl]",
    "meanings": "[名] \n[英]⾜球； \n[美]橄榄球",
    "book": "1册",
    "lesson": "lesson 137-138"
  },
  {
    "word": "pool",
    "pronunciation": "[puːl]",
    "meanings": "[名] ⽔塘； ⽔池； 美式撞球； 备⽤物资\n[动] 合伙经营； 共⽤； 汇集",
    "book": "1册",
    "lesson": "lesson 137-138"
  },
  {
    "word": "win",
    "pronunciation": "[wɪn]",
    "meanings": "[动] 赢； 获得\n[名] 胜利； 赢得",
    "book": "1册",
    "lesson": "lesson 137-138"
  },
  {
    "word": "world",
    "pronunciation": "[wɜːrld]",
    "meanings": "[名] 世界",
    "book": "1册",
    "lesson": "lesson 137-138"
  },
  {
    "word": "depend",
    "pronunciation": "[dɪˈpend]",
    "meanings": "[动] 依靠； 依赖； 取决于",
    "book": "1册",
    "lesson": "lesson 137-138"
  },
  {
    "word": "extra",
    "pronunciation": "[ˈekstrǝ]",
    "meanings": "[形] 额外的\n[副] 额外地\n[名] 额外的事物",
    "book": "1册",
    "lesson": "lesson 139-140"
  },
  {
    "word": "overseas",
    "pronunciation": "[ˌǝʊvǝrˈsiːz]",
    "meanings": "[形] 外国的； 海外的\n[副] 在国外； 在海外",
    "book": "1册",
    "lesson": "lesson 139-140"
  },
  {
    "word": "engineering",
    "pronunciation": "[ˌendʒɪˈnɪrɪŋ]",
    "meanings": "[名] ⼯程； ⼯程学",
    "book": "1册",
    "lesson": "lesson 139-140"
  },
  {
    "word": "company",
    "pronunciation": "[ˈkʌmpǝni]",
    "meanings": "[名] 公司； 陪伴",
    "book": "1册",
    "lesson": "lesson 139-140"
  },
  {
    "word": "line",
    "pronunciation": "[laɪn]",
    "meanings": "[名] ⾏； 列； 线； 界线",
    "book": "1册",
    "lesson": "lesson 139-140"
  },
  {
    "word": "excited",
    "pronunciation": "[ɪkˈsaɪtɪd]",
    "meanings": "[形] 激动的； 兴奋的\n[动] 使兴奋； 使激动； “excite” 的过去式和过去分词",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "get on",
    "pronunciation": "[ɡet ɑːn]",
    "meanings": "[短语] 进展； 相处； 上⻋",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "middle-aged",
    "pronunciation": "[ˌmɪd(ǝ)l ˈeɪdʒd]",
    "meanings": "[形] 中年的",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "opposite",
    "pronunciation": "[ˈɑːpǝzɪt]",
    "meanings": "[名] 反⾯； 对⽴⾯\n[形] 对⾯的\n[介] 与…相对\n[副] 在相反的位置",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "curiously",
    "pronunciation": "[ˈkjʊriǝsli]",
    "meanings": "[副] 好奇地； 奇异地； 奇怪地",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "funny",
    "pronunciation": "[ˈfʌni]",
    "meanings": "[形] 滑稽的； 好笑的； 有趣的",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "powder",
    "pronunciation": "[ˈpaʊdǝr]",
    "meanings": "[名] 粉末； 粉\n[动] 搽粉于； 使成粉末",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "compact",
    "pronunciation": "[kǝmˈpækt]",
    "meanings": "[形] 紧密的； ⼩型的\n[名] 协定； ⼩型汽⻋； 化妆粉盒",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "kindly",
    "pronunciation": "[ˈkaɪndli]",
    "meanings": "[副] 亲切地； 和善地； 请\n[形] 仁慈的； 厚道的",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "ugly",
    "pronunciation": "[ˈʌɡli]",
    "meanings": "[形] 丑陋的； 难看的",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "amused",
    "pronunciation": "[ǝˈmjuːzd]",
    "meanings": "[形] 被逗乐的\n[动] 逗乐； 娱乐； 消遣； “amuse”的过去式和过去分词",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "embarrassed",
    "pronunciation": "[ɪmˈbærǝst]",
    "meanings": "[形] 尴尬的； 窘迫的\n[动] 使窘迫； 使尴尬；“embarrass” 的过去式和过去分",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "worried",
    "pronunciation": "[ˈwɜːrid]",
    "meanings": "[形] 担忧的； 焦虑的； 发愁的\n[动] 担⼼； 担忧； “worry” 的过去式和过去分词",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "regularly",
    "pronunciation": "[ˈreɡjǝlǝrli]",
    "meanings": "[副] 有规律地； 定期地； 经常地",
    "book": "1册",
    "lesson": "lesson 141-142"
  },
  {
    "word": "surround",
    "pronunciation": "[sǝˈraʊnd]",
    "meanings": "[动] 环绕； 围绕",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "wood",
    "pronunciation": "[wʊd]",
    "meanings": "[名] ⽊材； ⽊头",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "beauty spot",
    "pronunciation": "[ˈbjuːti spɑːt]",
    "meanings": "[短语] ⻛景点； 美⼈痣",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "hundred",
    "pronunciation": "[ˈhʌndrǝd]",
    "meanings": "[数] 百； ⼀百",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "through",
    "pronunciation": "[θruː]",
    "meanings": "[介] 通过； 穿过\n[副] 彻底； 从头到尾地\n[形] 全程的； 直通的",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "visitor",
    "pronunciation": "[ˈvɪzɪtǝr]",
    "meanings": "[名] 客⼈； 参观者",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "tidy",
    "pronunciation": "[ˈtaɪdi]",
    "meanings": "[形] 整洁的； 整⻬的\n[动] 收拾； 整理",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "litter",
    "pronunciation": "[ˈlɪtǝr]",
    "meanings": "[名] 垃圾； 杂物； ⼀窝⼩崽； 担架\n[动] 乱扔； 乱丢杂物",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "litter basket",
    "pronunciation": "[ˈlɪtǝr ˈbæskɪt]",
    "meanings": "[短语] 废物筐",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "place",
    "pronunciation": "[pleɪs]",
    "meanings": "[名] 地⽅； ⽅位\n[动] 安置； 安放",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "throw",
    "pronunciation": "[θrǝʊ]",
    "meanings": "[动] 扔； 抛； 丢； 投\n[名] 扔； 抛； 摔； 投",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "rubbish",
    "pronunciation": "[ˈrʌbɪʃ]",
    "meanings": "[名] 垃圾； 废物",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "count",
    "pronunciation": "[kaʊnt]",
    "meanings": "[动] 计算； 清点； 看作； 有价值\n[名] 计数； 计算",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "cover",
    "pronunciation": "[ˈkʌvǝr]",
    "meanings": "[动] 遮盖； 包括； 报道\n[名] 封⾯； 遮盖物； 庇护所",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "piece",
    "pronunciation": "[piːs]",
    "meanings": "[名] ⽚； 块； 件； 作品\n[动] 拼凑",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "tyre",
    "pronunciation": "[ˈtaɪǝr]",
    "meanings": "[名] 轮胎",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "rusty",
    "pronunciation": "[ˈrʌsti]",
    "meanings": "[形] ⽣锈的； ⽣疏的",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "among",
    "pronunciation": "[ǝˈmʌŋ]",
    "meanings": "[介] 在…之间",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "prosecute",
    "pronunciation": "[ˈprɑːsɪkjuːt]",
    "meanings": "[动] 起诉； 控告； 检举； 指控； 继续从事",
    "book": "1册",
    "lesson": "lesson 143-144"
  },
  {
    "word": "private",
    "pronunciation": "[ˈpraɪvǝt]",
    "meanings": "[形] 私⼈的",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "conversation",
    "pronunciation": "[ˌkɑːnvǝrˈseɪʃ(ǝ)n]",
    "meanings": "[名] 谈话； 会话； 交谈",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "theatre",
    "pronunciation": "[ˈθiːǝtǝr]",
    "meanings": "[名] 剧场； 电影院",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "seat",
    "pronunciation": "[siːt]",
    "meanings": "[名] 座位\n[动] 使坐下",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "play",
    "pronunciation": "[pleɪ]",
    "meanings": "[动] 玩； 演奏； 扮演； 播放\n[名] 戏剧； ⽐赛",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "loudly",
    "pronunciation": "[ˈlaʊdli]",
    "meanings": "[副] ⼤声地； ⾼声地",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "angry",
    "pronunciation": "[ˈæŋɡri]",
    "meanings": "[形] ⽣⽓的； 愤怒的",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "angrily",
    "pronunciation": "[ˈæŋɡrǝli]",
    "meanings": "[副] ⽣⽓地； 愤怒地",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "attention",
    "pronunciation": "[ǝˈtenʃ(ǝ)n]",
    "meanings": "[名] 注意； 关注； 照料",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "bear",
    "pronunciation": "[ber]",
    "meanings": "[名] 熊\n[动] 负荷； 带有； 忍受； 承受； ⽣（孩⼦）",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "business",
    "pronunciation": "[ˈbɪznǝs]",
    "meanings": "[名] ⽣意； 商业； 事务",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "rudely",
    "pronunciation": "[ˈruːdli]",
    "meanings": "[副] 粗鲁地； ⽆礼地",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "until",
    "pronunciation": "[ǝnˈtɪl]",
    "meanings": "[介] 到…时； 直到…为⽌\n[连] 到…时； 直到…为⽌",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "outside",
    "pronunciation": "[ˌaʊtˈsaɪd]",
    "meanings": "[副] 在外⾯\n[名] 外⾯； 外边； 外部\n[介] 在...外\n[形] 外⾯的； 外界的",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "ring",
    "pronunciation": "[rɪŋ]",
    "meanings": "[名] 环； 环形物； 戒指； 铃声； 声调； 拳击场\n[动] 成环形； 环绕； 响铃； 鸣； 给…打电话",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "aunt",
    "pronunciation": "[ænt]",
    "meanings": "[名] 姑； 婶； 姨； 伯⺟",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "repeat",
    "pronunciation": "[rɪˈpiːt]",
    "meanings": "[动] 重复； 重做\n[名] 重复； 重做",
    "book": "2册",
    "lesson": "lesson 1-2"
  },
  {
    "word": "send",
    "pronunciation": "[send]",
    "meanings": "[动] 发送； 送； 寄",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "postcard",
    "pronunciation": "[ˈpǝʊstkɑːrd]",
    "meanings": "[名] 明信⽚",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "spoil",
    "pronunciation": "[spɔɪl]",
    "meanings": "[动] 宠坏； 搞糟； 变质\n[名] 赃物； 战利品",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "museum",
    "pronunciation": "[mjuˈziːǝm]",
    "meanings": "[名] 博物馆",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "public",
    "pronunciation": "[ˈpʌblɪk]",
    "meanings": "[形] 平⺠的； ⼤众的； 公众的\n[名] 公众； 公共场所",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "friendly",
    "pronunciation": "[ˈfrendli]",
    "meanings": "[形] 友好的",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "waiter",
    "pronunciation": "[ˈweɪtǝr]",
    "meanings": "[名] 服务员； 侍者",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "lend",
    "pronunciation": "[lend]",
    "meanings": "[动] 借给； 借出； 贷（款）",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "decision",
    "pronunciation": "[dɪˈsɪʒ(ǝ)n]",
    "meanings": "[名] 决定； 抉择； 选择",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "whole",
    "pronunciation": "[hǝʊl]",
    "meanings": "[名] 整个； 全部\n[形] 全部的； 整体的",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "single",
    "pronunciation": "[ˈsɪŋɡl]",
    "meanings": "[形] 单⼀的； 单独的； 单身的\n[名] 单曲（唱⽚）\n[动] 挑选",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "exciting",
    "pronunciation": "[ɪkˈsaɪtɪŋ]",
    "meanings": "[形] 令⼈激动的； 使⼈兴奋的\n[动] 使兴奋； 使激动； “excite” 的现在分词",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "receive",
    "pronunciation": "[rɪˈsiːv]",
    "meanings": "[动] 接收； 收到",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "firm",
    "pronunciation": "[fɜːrm]",
    "meanings": "[名] 公司； 商⾏\n[形] 坚固的； 结实的",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "different",
    "pronunciation": "[ˈdɪfrǝnt]",
    "meanings": "[形] 不同的",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "centre",
    "pronunciation": "[ˈsentǝr]",
    "meanings": "[名] 中⼼； 中央\n[动] 放在…中央",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "abroad",
    "pronunciation": "[ǝˈbrɔːd]",
    "meanings": "[副] 在国外； 出国",
    "book": "2册",
    "lesson": "lesson 3-4"
  },
  {
    "word": "pigeon",
    "pronunciation": "[ˈpɪdʒɪn]",
    "meanings": "[名] 鸽⼦",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "message",
    "pronunciation": "[ˈmesɪdʒ]",
    "meanings": "[名] 消息； 信息； 要旨； 要点\n[动] 给…发消息； 给…留⾔",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "cover",
    "pronunciation": "[ˈkʌvǝr]",
    "meanings": "[动] 遮盖； 包括； 报道\n[名] 封⾯； 遮盖物； 庇护所",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "distance",
    "pronunciation": "[ˈdɪstǝns]",
    "meanings": "[名] 距离； 远处\n[动] 保持距离",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "request",
    "pronunciation": "[rɪˈkwest]",
    "meanings": "[名] 请求； 要求的事\n[动] 要求； 请求",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "spare part",
    "pronunciation": "[ˌsper ˈpɑːrt]",
    "meanings": "[名] 备件",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "service",
    "pronunciation": "[ˈsɜːrvɪs]",
    "meanings": "[名] 服务\n[动] 保养； 维修",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "beggar",
    "pronunciation": "[ˈbeɡǝr]",
    "meanings": "[名] 乞丐",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "food",
    "pronunciation": "[fuːd]",
    "meanings": "[名] ⻝物",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "pocket",
    "pronunciation": "[ˈpɑːkɪt]",
    "meanings": "[名] ⼝袋； ⾐袋； 兜\n[动] 把…放进⾐袋\n[形] 袖珍的； ⼩型的",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "call",
    "pronunciation": "[kɔːl]",
    "meanings": "[名] 打电话\n[动] 叫； 打电话",
    "book": "2册",
    "lesson": "lesson 5-6"
  },
  {
    "word": "detective",
    "pronunciation": "[dɪˈtektɪv]",
    "meanings": "[名] 侦探\n[形] 侦探的",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "airport",
    "pronunciation": "[ˈerpɔːrt]",
    "meanings": "[名] 机场； 航空港",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "expect",
    "pronunciation": "[ɪkˈspekt]",
    "meanings": "[动] 期待； 期望； 预期",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "valuable",
    "pronunciation": "[ˈvæljuǝb(ǝ)l]",
    "meanings": "[形] 有价值的； 贵重的； 值钱的",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "parcel",
    "pronunciation": "[ˈpɑːrs(ǝ)l]",
    "meanings": "[名] 包裹； ⼩包\n[动] 捆扎； 打包",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "diamond",
    "pronunciation": "[ˈdaɪmǝnd]",
    "meanings": "[名] 钻⽯； 菱形； ⾦刚⽯",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "steal",
    "pronunciation": "[stiːl]",
    "meanings": "[动] 偷； 窃取",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "main",
    "pronunciation": "[meɪn]",
    "meanings": "[形] 主要的； 最重要的",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "airfield",
    "pronunciation": "[ˈerfiːld]",
    "meanings": "[名] ⻜机场",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "guard",
    "pronunciation": "[ɡɑːrd]",
    "meanings": "[名] 保卫； 警卫\n[动] 守卫； 警戒",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "precious",
    "pronunciation": "[ˈpreʃǝs]",
    "meanings": "[形] 珍贵的； 宝贵的",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "stone",
    "pronunciation": "[stǝʊn]",
    "meanings": "[名] ⽯头； ⽯块\n[动] ⽤⽯头打",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "sand",
    "pronunciation": "[sænd]",
    "meanings": "[名] 沙\n[动] 打磨",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "competition",
    "pronunciation": "[ˌkɑːmpǝˈtɪʃ(ǝ)n]",
    "meanings": "[名] 竞争； ⽐赛",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "neat",
    "pronunciation": "[niːt]",
    "meanings": "[形] 整洁的； 整⻬的； 有条理的",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "path",
    "pronunciation": "[pæθ]",
    "meanings": "[名] 道路； ⼩路； ⼩径",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "wooden",
    "pronunciation": "[ˈwʊd(ǝ)n]",
    "meanings": "[形] ⽊制的； ⽊头的； ⽣硬笨拙的",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "pool",
    "pronunciation": "[puːl]",
    "meanings": "[名] ⽔塘； ⽔池； 美式撞球； 备⽤物资\n[动] 合伙经营； 共⽤； 汇集",
    "book": "2册",
    "lesson": "lesson 7-8"
  },
  {
    "word": "welcome",
    "pronunciation": "[ˈwelkǝm]",
    "meanings": "[名] 欢迎\n[形] 受欢迎的\n[动] 欢迎\n[叹] 欢迎",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "crowd",
    "pronunciation": "[kraʊd]",
    "meanings": "[名] ⼈群； 群众\n[动] 拥挤； 群集",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "gather",
    "pronunciation": "[ˈɡæðǝr]",
    "meanings": "[动] 聚集； 集合",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "hand",
    "pronunciation": "[hænd]",
    "meanings": "[名] ⼿\n[动] 交； 递； 给",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "shout",
    "pronunciation": "[ʃaʊt]",
    "meanings": "[动] ⼤叫； 喊叫\n[名] 喊叫声",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "refuse",
    "pronunciation": "[rɪˈfjuːz]",
    "meanings": "[动] 拒绝； 不接受\n[名] 废料； 垃圾； 废物",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "laugh",
    "pronunciation": "[læf]",
    "meanings": "[动] 笑； 发笑\n[名] 笑； 笑声",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "jazz",
    "pronunciation": "[dʒæz]",
    "meanings": "[名] 爵⼠乐",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "musical",
    "pronunciation": "[ˈmjuːzɪk(ǝ)l]",
    "meanings": "[形] ⾳乐的； 擅⻓⾳乐的； 喜欢⾳乐的； 悦⽿的\n[名] ⾳乐剧； ⾳乐歌舞⽚",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "instrument",
    "pronunciation": "[ˈɪnstrǝmǝnt]",
    "meanings": "[名] 仪器； 乐器； ⼯具； ⼿段； 法律⽂件",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "clavichord",
    "pronunciation": "[ˈklævɪkɔːrd]",
    "meanings": "[名] 古钢琴",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "recently",
    "pronunciation": "[ˈriːs(ǝ)ntli]",
    "meanings": "[副] 最近； 近来",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "damage",
    "pronunciation": "[ˈdæmɪdʒ]",
    "meanings": "[动] 损害； 破坏\n[名] 损害； 破损",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "key",
    "pronunciation": "[kiː]",
    "meanings": "[名] 钥匙； 关键\n[形] 关键的",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "string",
    "pronunciation": "[strɪŋ]",
    "meanings": "[名] 弦； 线； ⼀连串",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "shock",
    "pronunciation": "[ʃɑːk]",
    "meanings": "[名] 震惊； 震动； 冲击； 电击； 休克； 浓密的头发\n[动] 使震惊； 使震动\n[形] 浓密的",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "allow",
    "pronunciation": "[ǝˈlaʊ]",
    "meanings": "[动] 允许； 准许； 给予； 留出； 同意； 承认",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "touch",
    "pronunciation": "[tʌtʃ]",
    "meanings": "[动] 触摸； 接触； 触动\n[名] 触摸； 触觉； 触感",
    "book": "2册",
    "lesson": "lesson 9-10"
  },
  {
    "word": "turn",
    "pronunciation": "[tɜːrn]",
    "meanings": "[动] 转身； 转弯； 转动； 转变\n[名] 轮到的机会； 拐弯； 转变",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "deserve",
    "pronunciation": "[dɪˈzɜːrv]",
    "meanings": "[动] 值得； 应得",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "lawyer",
    "pronunciation": "[ˈlɔɪǝr]",
    "meanings": "[名] 律师",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "bank",
    "pronunciation": "[bæŋk]",
    "meanings": "[名] 银⾏； 岸\n[动] 把（钱） 存⼊银⾏",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "salary",
    "pronunciation": "[ˈsælǝri]",
    "meanings": "[名] 薪⽔",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "immediately",
    "pronunciation": "[ɪˈmiːdiǝtli]",
    "meanings": "[副] ⽴即； ⻢上\n[连] 即刻",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "luck",
    "pronunciation": "[lʌk]",
    "meanings": "[名] 运⽓； 好运； 幸运",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "captain",
    "pronunciation": "[ˈkæptɪn]",
    "meanings": "[名] 队⻓； 船⻓\n[动] 指挥",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "sail",
    "pronunciation": "[seɪl]",
    "meanings": "[动] 航⾏； 驾（船）\n[名] 帆； 航⾏； 航海",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "harbour",
    "pronunciation": "[ˈhɑːrbǝr]",
    "meanings": "[名] 海港\n[动] 庇护； 窝藏",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "proud",
    "pronunciation": "[praʊd]",
    "meanings": "[形] ⾃豪的； 骄傲的",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "important",
    "pronunciation": "[ɪmˈpɔːrt(ǝ)nt]",
    "meanings": "[形] 重要的",
    "book": "2册",
    "lesson": "lesson 11-12"
  },
  {
    "word": "group",
    "pronunciation": "[ɡruːp]",
    "meanings": "[名] 组； 集团； 群\n[动] （使） 形成组； 成群",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "pop singer",
    "pronunciation": "[pɑːp ˈsɪŋǝr]",
    "meanings": "[短语] 流⾏歌⼿",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "club",
    "pronunciation": "[klʌb]",
    "meanings": "[名] 俱乐部； 棍⼦\n[动] ⽤棍棒打",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "performance",
    "pronunciation": "[pǝrˈfɔːrmǝns]",
    "meanings": "[名] 表演； 表现； 性能； 履⾏； 执⾏",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "occasion",
    "pronunciation": "[ǝˈkeɪʒ(ǝ)n]",
    "meanings": "[名] 特殊场合； 时机； 机会； 理由；需要\n[动] 导致； 使发⽣",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "amusing",
    "pronunciation": "[ǝˈmjuːzɪŋ]",
    "meanings": "[形] 逗⼈笑的； 有乐趣的； 好笑的\n[动] 逗乐； 娱乐； 消遣； “amuse”的现在分词",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "experience",
    "pronunciation": "[ɪkˈspɪriǝns]",
    "meanings": "[动] 经历； 体验\n[名] 经验； 阅历",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "wave",
    "pronunciation": "[weɪv]",
    "meanings": "[名] 波； 波浪； 海浪； 挥⼿\n[动] 挥⼿； 挥舞； 招⼿； 起伏",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "lift",
    "pronunciation": "[lɪft]",
    "meanings": "[动] 举起； 抬起； 提起； 解除\n[名] 电梯； 搭便⻋",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "reply",
    "pronunciation": "[rɪˈplaɪ]",
    "meanings": "[动] 答复； 回答\n[名] 答复； 回答",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "language",
    "pronunciation": "[ˈlæŋɡwɪdʒ]",
    "meanings": "[名] 语⾔",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "journey",
    "pronunciation": "[ˈdʒɜːrni]",
    "meanings": "[名] 旅⾏； 旅程",
    "book": "2册",
    "lesson": "lesson 13-14"
  },
  {
    "word": "secretary",
    "pronunciation": "[ˈsekrǝteri]",
    "meanings": "[名] 秘书； ⼤⾂",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "nervous",
    "pronunciation": "[ˈnɜːrvǝs]",
    "meanings": "[形] 担忧的； 焦虑的； 紧张不安的；神经系统的",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "afford",
    "pronunciation": "[ǝˈfɔːrd]",
    "meanings": "[动] 买得起； 担负得起； 有时间做；给予",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "weak",
    "pronunciation": "[wiːk]",
    "meanings": "[形] 虚弱的； ⽆⼒的",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "interrupt",
    "pronunciation": "[ˌɪntǝˈrʌpt]",
    "meanings": "[动] 打断； 打扰； 打岔",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "park",
    "pronunciation": "[pɑːrk]",
    "meanings": "[名] 公园； 园区\n[动] 停放； 停⻋",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "traffic",
    "pronunciation": "[ˈtræfɪk]",
    "meanings": "[名] 交通； 流量； ⾮法交易\n[动] ⾮法买卖",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "ticket",
    "pronunciation": "[ˈtɪkɪt]",
    "meanings": "[名] 票； ⻋票",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "note",
    "pronunciation": "[nǝʊt]",
    "meanings": "[名] 笔记； 便条； 注释； ⾳调； 语⽓； 钞票\n[动] 注意； 备注； 记录",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "area",
    "pronunciation": "[ˈeriǝ]",
    "meanings": "[名] ⾯积； 区域",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "sign",
    "pronunciation": "[saɪn]",
    "meanings": "[名] 标志； 符号； 告示牌； ⼿势； 征兆\n[动] 签名； 做标记",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "reminder",
    "pronunciation": "[rɪˈmaɪndǝr]",
    "meanings": "[名] 提醒⼈的事物； 通知单； 提示信",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "fail",
    "pronunciation": "[feɪl]",
    "meanings": "[动] 失败； 不及格； ⽆法做到； 使失望； 衰退； 倒闭\n[名] 失败； 不及格",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "obey",
    "pronunciation": "[ǝˈbeɪ]",
    "meanings": "[动] 遵守； 服从",
    "book": "2册",
    "lesson": "lesson 15-16"
  },
  {
    "word": "appear",
    "pronunciation": "[ǝˈpɪr]",
    "meanings": "[动] 出现； 似乎； 显得",
    "book": "2册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "stage",
    "pronunciation": "[steɪdʒ]",
    "meanings": "[名] 阶段； 时期； 舞台\n[动] 举⾏； 上演",
    "book": "2册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "bright",
    "pronunciation": "[braɪt]",
    "meanings": "[形] 明亮的； 鲜艳的； 聪明的",
    "book": "2册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "stocking",
    "pronunciation": "[ˈstɑːkɪŋ]",
    "meanings": "[名] ⻓袜",
    "book": "2册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "sock",
    "pronunciation": "[sɑːk]",
    "meanings": "[名] 短袜； 重击\n[动] 猛打",
    "book": "2册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "pub",
    "pronunciation": "[pʌb]",
    "meanings": "[名] 酒吧； 酒馆",
    "book": "2册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "landlord",
    "pronunciation": "[ˈlændlɔːrd]",
    "meanings": "[名] 地主； 房东",
    "book": "2册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "bill",
    "pronunciation": "[bɪl]",
    "meanings": "[名] 账单； 钞票； 议案\n[动] 给…开账单",
    "book": "2册",
    "lesson": "lesson 17-18"
  },
  {
    "word": "hurry",
    "pronunciation": "[ˈhɜːri]",
    "meanings": "[名] 匆忙； 仓促\n[动] 抓紧； 赶快； 匆忙地做",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "ticket office",
    "pronunciation": "[ˈtɪkɪt ˈɑːfɪs]",
    "meanings": "[短语] 票房； 售票处",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "pity",
    "pronunciation": "[ˈpɪti]",
    "meanings": "[动] 怜悯； 同情\n[名] 怜悯； 同情； 憾事",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "exclaim",
    "pronunciation": "[ɪkˈskleɪm]",
    "meanings": "[动] 呼喊； ⼤叫",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "return",
    "pronunciation": "[rɪˈtɜːrn]",
    "meanings": "[动] 返回； 归还\n[名] 返回； 归还",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "sadly",
    "pronunciation": "[ˈsædli]",
    "meanings": "[副] 伤⼼地； 难过地",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "catch",
    "pronunciation": "[kætʃ]",
    "meanings": "[动] 接住； 抓住； 赶上； 得病； 理解\n[名] 接住； 搭扣",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "fisherman",
    "pronunciation": "[ˈfɪʃǝrmǝn]",
    "meanings": "[名] 渔夫",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "boot",
    "pronunciation": "[buːt]",
    "meanings": "[名] 靴⼦， ⻓筒靴；（汽⻋后部的） ⾏李箱； 解雇\n[动] 启动（计算机）； 猛踢",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "waste",
    "pronunciation": "[weɪst]",
    "meanings": "[名] 垃圾； 废物； 浪费\n[动] 浪费； ⽩费； 糟蹋\n[形] 荒芜的； 废弃的； 丢弃的",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "realize",
    "pronunciation": "[ˈriːǝlaɪz]",
    "meanings": "[动] 实现； 认识到； 意识到； 变卖",
    "book": "2册",
    "lesson": "lesson 19-20"
  },
  {
    "word": "mad",
    "pronunciation": "[mæd]",
    "meanings": "[形] 发疯的； 疯狂的； ⽣⽓的",
    "book": "2册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "reason",
    "pronunciation": "[ˈriːz(ǝ)n]",
    "meanings": "[名] 原因； 理由； 理性\n[动] 推理； 推断； 讲道理； 思考",
    "book": "2册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "sum",
    "pronunciation": "[sʌm]",
    "meanings": "[名] 总数； ⾦额\n[动] 总计； 概括",
    "book": "2册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "determined",
    "pronunciation": "[dɪˈtɜːrmɪnd]",
    "meanings": "[形] 坚决的； 坚定的； 有决⼼的\n[动] 决⼼； 决定； “determine” 的过去式和过去分词",
    "book": "2册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "dream",
    "pronunciation": "[driːm]",
    "meanings": "[名] 梦； 梦想\n[动] 梦想； 做梦",
    "book": "2册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "age",
    "pronunciation": "[eɪdʒ]",
    "meanings": "[名] 年龄； 时代\n[动] 变⽼",
    "book": "2册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "channel",
    "pronunciation": "[ˈtʃæn(ǝ)l]",
    "meanings": "[名] 河床； 海峡；（⽔） 槽； 渠道； 频道； 途径\n[动] 引导； 开导； 形成河道",
    "book": "2册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "throw",
    "pronunciation": "[θrǝʊ]",
    "meanings": "[动] 扔； 抛； 丢； 投\n[名] 扔； 抛； 摔； 投",
    "book": "2册",
    "lesson": "lesson 21-22"
  },
  {
    "word": "complete",
    "pronunciation": "[kǝmˈpliːt]",
    "meanings": "[形] 完整的； 完成的\n[动] 完成； 使完整",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "modern",
    "pronunciation": "[ˈmɑːdǝrn]",
    "meanings": "[形] 现代的； 时髦的",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "strange",
    "pronunciation": "[streɪndʒ]",
    "meanings": "[形] 奇怪的； 陌⽣的",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "district",
    "pronunciation": "[ˈdɪstrɪkt]",
    "meanings": "[名] 地区； 区域； ⾏政区",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "manager",
    "pronunciation": "[ˈmænɪdʒǝr]",
    "meanings": "[名] 经理； 管理者",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "upset",
    "pronunciation": "[ʌpˈset]",
    "meanings": "[动] 打翻； 打乱； 使⼼烦\n[形] 沮丧的； 难过的； 不安的",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "sympathetic",
    "pronunciation": "[ˌsɪmpǝˈθetɪk]",
    "meanings": "[形] 同情的",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "complain",
    "pronunciation": "[kǝmˈpleɪn]",
    "meanings": "[动] 抱怨； 投诉",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "wicked",
    "pronunciation": "[ˈwɪkɪd]",
    "meanings": "[形] 邪恶的； 缺德的； 淘⽓的",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "contain",
    "pronunciation": "[kǝnˈteɪn]",
    "meanings": "[动] 包含； 容纳； 克制； 遏制",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "honesty",
    "pronunciation": "[ˈɑːnǝsti]",
    "meanings": "[名] 诚实； 正直； ⽼实",
    "book": "2册",
    "lesson": "lesson 23-24"
  },
  {
    "word": "railway",
    "pronunciation": "[ˈreɪlweɪ]",
    "meanings": "[名] 铁路",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "porter",
    "pronunciation": "[ˈpɔːrtǝr]",
    "meanings": "[名] ⾏李搬运⼯； ⻔卫；（列⻋卧⻋的） 服务⽣",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "several",
    "pronunciation": "[ˈsevrǝl]",
    "meanings": "[代] ⼏个； ⼀些\n[形] 不同的； 各⾃的",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "foreigner",
    "pronunciation": "[ˈfɔːrǝnǝr]",
    "meanings": "[名] 外国⼈； 外来⼈",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "wonder",
    "pronunciation": "[ˈwʌndǝr]",
    "meanings": "[名] 惊奇； 奇迹\n[动] 惊讶； 想知道； 怀疑",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "art",
    "pronunciation": "[ɑːrt]",
    "meanings": "[名] 艺术",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "critic",
    "pronunciation": "[ˈkrɪtɪk]",
    "meanings": "[名] 评论家； 批评者",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "paint",
    "pronunciation": "[peɪnt]",
    "meanings": "[动] 刷油漆； 画； 绘\n[名] 油漆； 绘画颜料",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "pretend",
    "pronunciation": "[prɪˈtend]",
    "meanings": "[动] 假装； 佯装； ⾃称",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "pattern",
    "pronunciation": "[ˈpætǝrn]",
    "meanings": "[名] 模式； 图案； 样式\n[动] 形成图案； 仿造",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "curtain",
    "pronunciation": "[ˈkɜːrt(ǝ)n]",
    "meanings": "[名] 帷幕； 窗帘",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "material",
    "pronunciation": "[mǝˈtɪriǝl]",
    "meanings": "[名] 材料； 原料\n[形] 物质的",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "appreciate",
    "pronunciation": "[ǝˈpriːʃieɪt]",
    "meanings": "[动] 欣赏； 理解； 感激； 增值",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "notice",
    "pronunciation": "[ˈnǝʊtɪs]",
    "meanings": "[名] 注意； 通知\n[动] 注意； 留⼼； 通知",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "whether",
    "pronunciation": "[ˈweðǝr]",
    "meanings": "[连] 是否； 不管； ⽆论",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "hang",
    "pronunciation": "[hæŋ]",
    "meanings": "[动] 悬挂； 吊； 绞死\n[名] 悬挂； 绞刑",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "critically",
    "pronunciation": "[ˈkrɪtɪkli]",
    "meanings": "[副] 批评地； 危急地； 严重地",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "upside down",
    "pronunciation": "[ˌʌpsaɪd ˈdaʊn]",
    "meanings": "[短语] 颠倒； 乱七⼋糟",
    "book": "2册",
    "lesson": "lesson 25-26"
  },
  {
    "word": "tent",
    "pronunciation": "[tent]",
    "meanings": "[名] 帐篷； 帐棚",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "field",
    "pronunciation": "[fiːld]",
    "meanings": "[名] ⽥地； 领域； 场地； 运动场\n[动] 处理， 应付 （问题､ 电话等）",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "smell",
    "pronunciation": "[smel]",
    "meanings": "[名] 闻； ⽓味； 嗅觉\n[动] 嗅； 闻； 散发⽓味； 察觉",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "wonderful",
    "pronunciation": "[ˈwʌndǝrf(ǝ)l]",
    "meanings": "[形] 精彩的； 极好的",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "campfire",
    "pronunciation": "[ˈkæmpfaɪǝr]",
    "meanings": "[名] 营⽕； 篝⽕",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "creep",
    "pronunciation": "[kriːp]",
    "meanings": "[动] 爬⾏； 匍匐； 蹑⼿蹑脚地⾛\n[名] 讨厌⻤； ⻢屁精",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "sleeping bag",
    "pronunciation": "[ˈsliːpɪŋ bæɡ]",
    "meanings": "[短语] 睡袋",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "comfortable",
    "pronunciation": "[ˈkʌmfǝtǝbǝl]",
    "meanings": "[形] 舒服的； 安逸的",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "soundly",
    "pronunciation": "[ˈsaʊndli]",
    "meanings": "[副] 酣 （睡）； 明智地； 可靠地； 完全地",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "leap",
    "pronunciation": "[liːp]",
    "meanings": "[动] 跳跃\n[名] 跳跃",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "heavily",
    "pronunciation": "[ˈhevɪli]",
    "meanings": "[副] 沉重地； 猛烈地",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "stream",
    "pronunciation": "[striːm]",
    "meanings": "[名] 流； 溪\n[动] 流； 流动",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "form",
    "pronunciation": "[fɔːrm]",
    "meanings": "[名] 形式； 表格； 形状\n[动] 组成； 建⽴",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "wind",
    "pronunciation": "[wɪnd]",
    "meanings": "[名] ⻛\n[动] 蜿蜒； 缠绕",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "right",
    "pronunciation": "[raɪt]",
    "meanings": "[形] 右边的； 正确的\n[名] 权利； 右边\n[副] 正确地； 直接地； 向右\n[动] 扶直； 纠正",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "rare",
    "pronunciation": "[rer]",
    "meanings": "[形] 稀少的； 珍奇的",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "ancient",
    "pronunciation": "[ˈeɪnʃǝnt]",
    "meanings": "[形] 古代的； 古⽼的\n[名] 古⼈",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "myth",
    "pronunciation": "[mɪθ]",
    "meanings": "[名] 神话； 虚构故事； 错误观念； 荒诞说法",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "trouble",
    "pronunciation": "[ˈtrʌb(ǝ)l]",
    "meanings": "[名] 麻烦； 问题； 困难\n[动] 使烦恼； 苦恼； 费神",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "effect",
    "pronunciation": "[ɪˈfekt]",
    "meanings": "[名] 影响； 作⽤； 效果； 效应\n[动] 引起； 实现； 使⽣效",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "Medusa",
    "pronunciation": "[mǝˈdjuːsǝ]",
    "meanings": "[名] 美杜莎 （古希腊神话中3 位蛇发⼥怪之⼀）",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "Gorgon",
    "pronunciation": "[ˈɡɔːrɡǝn]",
    "meanings": "[名] ⼽⽿⼯（古希腊神话中三个蛇发⼥怪之⼀）",
    "book": "2册",
    "lesson": "lesson 27-28"
  },
  {
    "word": "taxi",
    "pronunciation": "[ˈtæksi]",
    "meanings": "[名] 出租⻋； 计程⻋\n[动] 乘坐出租汽⻋",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "Pilatus Porter",
    "pronunciation": "[pɪˈleɪtǝs ˈpɔːrtǝr]",
    "meanings": "[名] ⽪勒特斯· 波特（⻜机机名）",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "land",
    "pronunciation": "[lænd]",
    "meanings": "[名] ⼟地； 陆地\n[动] 降落； 着陆",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "plough",
    "pronunciation": "[plaʊ]",
    "meanings": "[名] 犁； 耕地\n[动] 犁 （⽥）； 耕 （地）； 翻（⼟）",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "lonely",
    "pronunciation": "[ˈlǝʊnli]",
    "meanings": "[形] 孤独的； 寂寞的； 偏僻的",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "Welsh",
    "pronunciation": "[welʃ]",
    "meanings": "[形] 威尔⼠的； 威尔⼠⼈的； 威尔⼠语的\n[名] 威尔⼠语； 威尔⼠⼈",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "roof",
    "pronunciation": "[ruːf]",
    "meanings": "[名] 屋顶； 顶部\n[动] 给…盖顶",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "block",
    "pronunciation": "[blɑːk]",
    "meanings": "[名] 块； 街区； ⼤楼； ⼤厦； 障碍物\n[动] 阻塞； 阻碍",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "flat",
    "pronunciation": "[flæt]",
    "meanings": "[形] 平坦的； 扁平的； 平淡⽆味的；（说话） 断然的；（轮胎） 瘪了的\n[名] 公寓； 平坦部分\n[副] 直接地",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "desert",
    "pronunciation": "[ˈdezǝrt]",
    "meanings": "[名] 沙漠； 荒漠\n[动] 抛弃",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "polo",
    "pronunciation": "[ˈpǝʊlǝʊ]",
    "meanings": "[名] ⻢球； ⽔球（运动）",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "Wayle",
    "pronunciation": "[weɪl]",
    "meanings": "[名] 威尔河",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "cut",
    "pronunciation": "[kʌt]",
    "meanings": "[动] 切； 割； 削减\n[名] 切； 割； 伤⼝； 削减",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "kick",
    "pronunciation": "[kɪk]",
    "meanings": "[名] 踢； 踹\n[动] 踢； 踹",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "towards",
    "pronunciation": "[tɔːrdz]",
    "meanings": "[介] 向； 朝； 关于",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "nearly",
    "pronunciation": "[ˈnɪrli]",
    "meanings": "[副] ⼏乎； 将近； 差不多",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "sight",
    "pronunciation": "[saɪt]",
    "meanings": "[名] 看⻅； 景象； 视⼒\n[动] 看到； 观测",
    "book": "2册",
    "lesson": "lesson 29-30"
  },
  {
    "word": "retire",
    "pronunciation": "[rɪˈtaɪǝr]",
    "meanings": "[动] 退休； 退役",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "company",
    "pronunciation": "[ˈkʌmpǝni]",
    "meanings": "[名] 公司； 陪伴",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "bicycle",
    "pronunciation": "[ˈbaɪsɪk(ǝ)l]",
    "meanings": "[名] ⾃⾏⻋； 脚踏⻋",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "save",
    "pronunciation": "[seɪv]",
    "meanings": "[动] 保存； 节省； 拯救\n[介] 除...之外； 除了\n[连] 若不是； 除了",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "workshop",
    "pronunciation": "[ˈwɜːrkʃɑːp]",
    "meanings": "[名] ⻋间； ⼯场； 研讨会",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "helper",
    "pronunciation": "[ˈhelpǝr]",
    "meanings": "[名] 帮助者； 助⼿； 帮⼿",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "employ",
    "pronunciation": "[ɪmˈplɔɪ]",
    "meanings": "[动] 雇佣； 使⽤",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "grandson",
    "pronunciation": "[ˈɡrænsʌn]",
    "meanings": "[名] 孙⼦； 外孙⼦",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "once",
    "pronunciation": "[wʌns]",
    "meanings": "[副] ⼀次； 曾经\n[连] ⼀旦； ⼀…便\n[名] ⼀次\n[形] 从前的",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "temptation",
    "pronunciation": "[tempˈteɪʃ(ǝ)n]",
    "meanings": "[名] 诱惑",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "article",
    "pronunciation": "[ˈɑːrtɪk(ǝ)l]",
    "meanings": "[名] ⽂章； 物品； 项⽬； 条款； 冠词",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "wrap",
    "pronunciation": "[ræp]",
    "meanings": "[动] 包； 缠绕； 覆盖； 穿外⾐； 遮蔽\n[名] 外套； 围⼱； 包裹； 包装材料",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "simply",
    "pronunciation": "[ˈsɪmpli]",
    "meanings": "[副] 简单地； 仅仅； 简直",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "arrest",
    "pronunciation": "[ǝˈrest]",
    "meanings": "[动] 逮捕； 拘留； 阻⽌； 吸引\n[名] 逮捕； 拘捕",
    "book": "2册",
    "lesson": "lesson 31-32"
  },
  {
    "word": "darkness",
    "pronunciation": "[ˈdɑːrknǝs]",
    "meanings": "[名] ⿊暗； 阴暗",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "explain",
    "pronunciation": "[ɪkˈspleɪn]",
    "meanings": "[动] 解释； 说明； 阐明",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "coast",
    "pronunciation": "[kǝʊst]",
    "meanings": "[名] 海岸； 海滨",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "storm",
    "pronunciation": "[stɔːrm]",
    "meanings": "[名] 暴⻛⾬； 雷暴⾬",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "rock",
    "pronunciation": "[rɑːk]",
    "meanings": "[名] 岩⽯； 摇滚乐\n[动] （使） 摇动； 震撼；（使） 摇晃",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "shore",
    "pronunciation": "[ʃɔːr]",
    "meanings": "[名] 岸； 滨",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "light",
    "pronunciation": "[laɪt]",
    "meanings": "[名] 光； 灯； 光线\n[形] 轻的； 浅的； 明亮的； 少量的\n[动] 点燃； 照亮",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "ahead",
    "pronunciation": "[ǝˈhed]",
    "meanings": "[副] 提前； 在前",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "cliff",
    "pronunciation": "[klɪf]",
    "meanings": "[名] 悬崖； 峭壁",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "struggle",
    "pronunciation": "[ˈstrʌɡl]",
    "meanings": "[动] 努⼒； ⽃争； 挣扎\n[名] 努⼒； ⽃争； 难事",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "hospital",
    "pronunciation": "[ˈhɑːspɪt(ǝ)l]",
    "meanings": "[名] 医院",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "station",
    "pronunciation": "[ˈsteɪʃ(ǝ)n]",
    "meanings": "[名] ⻋站； 站",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "most",
    "pronunciation": "[mǝʊst]",
    "meanings": "[形] 最多的； ⼤多数的\n[副] 最\n[代] ⼤部分",
    "book": "2册",
    "lesson": "lesson 33-34"
  },
  {
    "word": "while",
    "pronunciation": "[waɪl]",
    "meanings": "[连] 当…的时候； 尽管； 然⽽\n[名] ⼀会⼉； ⼀段时间",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "regret",
    "pronunciation": "[rɪˈɡret]",
    "meanings": "[名] 遗憾； 痛惜\n[动] 懊悔； 惋惜",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "far",
    "pronunciation": "[fɑːr]",
    "meanings": "[副] 远； 极\n[形] 较远的； 遥远的",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "rush",
    "pronunciation": "[rʌʃ]",
    "meanings": "[动] 冲； 赶忙做； 催促\n[名] 冲； 匆忙",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "act",
    "pronunciation": "[ækt]",
    "meanings": "[动] ⾏动； 表现； 演戏\n[名] ⾏动； 装模作样；（戏） 幕； 法令",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "straight",
    "pronunciation": "[streɪt]",
    "meanings": "[形] 直的； 笔直的； 正直的； 率直的\n[副] 直； 径直； 直接",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "fright",
    "pronunciation": "[fraɪt]",
    "meanings": "[名] 惊吓； 恐怖； 惊骇",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "battered",
    "pronunciation": "[ˈbætǝrd]",
    "meanings": "[形] 破旧不堪的； 受虐待的\n[动] 连续猛击； 殴打； 严重破坏；“batter” 的过去式和过去分词",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "shortly",
    "pronunciation": "[ˈʃɔːrtli]",
    "meanings": "[副] 不久； ⻢上； 简短地",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "afterwards",
    "pronunciation": "[ˈæftǝrwǝrdz]",
    "meanings": "[副] 后来； 然后",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "record",
    "pronunciation": "[ˈrekǝrd]",
    "meanings": "[名] 记录； 唱⽚\n[动] 记录； 录制",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "strong",
    "pronunciation": "[strɔːŋ]",
    "meanings": "[形] 强壮的； 强烈的",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "swimmer",
    "pronunciation": "[ˈswɪmǝr]",
    "meanings": "[名] 游泳运动员； 游泳者",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "succeed",
    "pronunciation": "[sǝkˈsiːd]",
    "meanings": "[动] 成功； 继承",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "train",
    "pronunciation": "[treɪn]",
    "meanings": "[名] ⽕⻋； 列⻋； 列； 队\n[动] 训练； 培训",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "anxiously",
    "pronunciation": "[ˈæŋkʃǝsli]",
    "meanings": "[副] 焦急地； 忧虑地",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "intend",
    "pronunciation": "[ɪnˈtend]",
    "meanings": "[动] 打算； 计划",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "solid",
    "pronunciation": "[ˈsɑːlɪd]",
    "meanings": "[名] 固体； ⽴体图形\n[形] 固体的； 坚固的； 可靠的",
    "book": "2册",
    "lesson": "lesson 35-36"
  },
  {
    "word": "Olympic",
    "pronunciation": "[ǝˈlɪmpɪk]",
    "meanings": "[形] 奥林匹克的",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "hold",
    "pronunciation": "[hǝʊld]",
    "meanings": "[动] 举⾏； 持有； 保留； 抓住； 容纳\n[名] 拿； 持； 控制",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "government",
    "pronunciation": "[ˈɡʌvǝrnmǝnt]",
    "meanings": "[名] 政府； 治理； 统治",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "immense",
    "pronunciation": "[ɪˈmens]",
    "meanings": "[形] 巨⼤的",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "stadium",
    "pronunciation": "[ˈsteɪdiǝm]",
    "meanings": "[名] 体育场； 运动场",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "standard",
    "pronunciation": "[ˈstændǝrd]",
    "meanings": "[名] 标准\n[形] 标准的； 规范的； 权威的",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "capital",
    "pronunciation": "[ˈkæpɪt(ǝ)l]",
    "meanings": "[名] ⾸都； ⼤写字⺟； 财富\n[形] ⼤写的",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "fantastic",
    "pronunciation": "[fænˈtæstɪk]",
    "meanings": "[形] 奇异的； 极好的； 奇妙的",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "design",
    "pronunciation": "[dɪˈzaɪn]",
    "meanings": "[动] 设计； 计划； 谋划； 构思\n[名] 设计； 图案； 花样； 企图； 图谋",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "except",
    "pronunciation": "[ɪkˈsept]",
    "meanings": "[连] 除了； 只是\n[动] 不计； 把…除外\n[介] 除了； 除外",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "Mediterranean",
    "pronunciation": "[ˌmedɪtǝˈreɪniǝn]",
    "meanings": "[名] 地中海\n[形] 地中海的",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "continually",
    "pronunciation": "[kǝnˈtɪnjuǝli]",
    "meanings": "[副] 连续不断地",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "bitterly",
    "pronunciation": "[ˈbɪtǝrli]",
    "meanings": "[副] 痛苦地； 刺⻣地； 激烈地； 极其地",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "sunshine",
    "pronunciation": "[ˈsʌnʃaɪn]",
    "meanings": "[名] 阳光",
    "book": "2册",
    "lesson": "lesson 37-38"
  },
  {
    "word": "operation",
    "pronunciation": "[ˌɑːpǝˈreɪʃ(ǝ)n]",
    "meanings": "[名] 操作； 运⾏； ⼿术",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "successful",
    "pronunciation": "[sǝkˈsesf(ǝ)l]",
    "meanings": "[形] 成功的； 有成就的",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "following",
    "pronunciation": "[ˈfɑːlǝʊɪŋ]",
    "meanings": "[形] 接着的； 下列的\n[动] 跟随； “follow” 的现在分词\n[名] 追随者； 下列各项\n[介] 在...之后",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "patient",
    "pronunciation": "[ˈpeɪʃ(ǝ)nt]",
    "meanings": "[形] 有耐⼼的\n[名] 病⼈",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "alone",
    "pronunciation": "[ǝˈlǝʊn]",
    "meanings": "[形] 独⾃的； 孤独的\n[副] 独⾃； 单独",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "exchange",
    "pronunciation": "[ɪksˈtʃeɪndʒ]",
    "meanings": "[名] 交换； 交易所； 兑换\n[动] 交换； 兑换",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "inquire",
    "pronunciation": "[ɪnˈkwaɪǝr]",
    "meanings": "[动] 询问； 调查",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "certain",
    "pronunciation": "[ˈsɜːrt(ǝ)n]",
    "meanings": "[形] 确定的； ⼀定的； 某个； ⼀定程度上的",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "caller",
    "pronunciation": "[ˈkɔːlǝr]",
    "meanings": "[名] 来访者； 打电话者",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "relative",
    "pronunciation": "[ˈrelǝtɪv]",
    "meanings": "[名] 亲戚\n[形] ⽐较的； 相对的； 相关联的",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "hostess",
    "pronunciation": "[ˈhǝʊstǝs]",
    "meanings": "[名] ⼥主⼈； ⼥房东； ⼥招待； ⼥主持⼈",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "unsmiling",
    "pronunciation": "[ˌʌnˈsmaɪlɪŋ]",
    "meanings": "[形] 不笑的； 不苟⾔笑的； 严肃的",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "tight",
    "pronunciation": "[taɪt]",
    "meanings": "[形] 紧的\n[副] 紧紧地",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "fix",
    "pronunciation": "[fɪks]",
    "meanings": "[动] 修理； 固定； 确定",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "globe",
    "pronunciation": "[ɡlǝʊb]",
    "meanings": "[名] 球体； 全球",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "despair",
    "pronunciation": "[dɪˈsper]",
    "meanings": "[动] 绝望\n[名] 绝望",
    "book": "2册",
    "lesson": "lesson 39-40"
  },
  {
    "word": "rude",
    "pronunciation": "[ruːd]",
    "meanings": "[形] 粗鲁的； ⽆礼的",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "mirror",
    "pronunciation": "[ˈmɪrǝr]",
    "meanings": "[名] 镜⼦\n[动] 反射； 反映",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "hole",
    "pronunciation": "[hǝʊl]",
    "meanings": "[名] 孔； 洞",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "remark",
    "pronunciation": "[rɪˈmɑːrk]",
    "meanings": "[动] 评论； 谈论； 注意到\n[名] 评述； ⾔论； 注意",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "remind",
    "pronunciation": "[rɪˈmaɪnd]",
    "meanings": "[动] 提醒； 使想起",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "lighthouse",
    "pronunciation": "[ˈlaɪthaʊs]",
    "meanings": "[名] 灯塔",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "market",
    "pronunciation": "[ˈmɑːrkɪt]",
    "meanings": "[名] 市场； 商场； 销路； ⾏情\n[动] 在市场上交易； 营销",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "snake charmer",
    "pronunciation": "[ˈsneɪk tʃɑːrmǝr]",
    "meanings": "[短语] 耍蛇者",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "pipe",
    "pronunciation": "[paɪp]",
    "meanings": "[名] 管⼦； 管道； 烟⽃\n[动] 吹笛； 以管输送",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "tune",
    "pronunciation": "[tuːn]",
    "meanings": "[动] 调整； 调⾳\n[名] 曲调； 调⼦",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "glimpse",
    "pronunciation": "[ɡlɪmps]",
    "meanings": "[动] 瞥⻅\n[名] ⼀瞥",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "snake",
    "pronunciation": "[sneɪk]",
    "meanings": "[名] 蛇\n[动] 蛇⾏； 曲折前⾏",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "movement",
    "pronunciation": "[ˈmuːvmǝnt]",
    "meanings": "[名] 活动； 运动； 动作； 乐章",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "continue",
    "pronunciation": "[kǝnˈtɪnjuː]",
    "meanings": "[动] 继续； 连续",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "dance",
    "pronunciation": "[dæns]",
    "meanings": "[名] 舞蹈\n[动] 跳舞",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "obviously",
    "pronunciation": "[ˈɑːbviǝsli]",
    "meanings": "[副] 显然； 明显地",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "difference",
    "pronunciation": "[ˈdɪfrǝns]",
    "meanings": "[名] 差异； 不同",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "Indian",
    "pronunciation": "[ˈɪndiǝn]",
    "meanings": "[形] 印度的； 印第安⼈的\n[名] 印度⼈； 印第安⼈",
    "book": "2册",
    "lesson": "lesson 41-42"
  },
  {
    "word": "pole",
    "pronunciation": "[pǝʊl]",
    "meanings": "[名] 柱； 杆； 地极",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "flight",
    "pronunciation": "[flaɪt]",
    "meanings": "[名] ⻜⾏； 航班； ⻦群；（阶梯的） ⼀段",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "explorer",
    "pronunciation": "[ɪkˈsplɔːrǝr]",
    "meanings": "[名] 探险者； 勘探者",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "lie",
    "pronunciation": "[laɪ]",
    "meanings": "[动] 躺； 撒谎； 欺骗\n[名] 谎⾔",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "serious",
    "pronunciation": "[ˈsɪriǝs]",
    "meanings": "[形] 严肃的； 严重的； 庄重的； 认真的",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "point",
    "pronunciation": "[pɔɪnt]",
    "meanings": "[名] 点； 观点； 要点； 分数\n[动] 指向； 指出； 瞄准",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "seem",
    "pronunciation": "[siːm]",
    "meanings": "[动] 似乎； 好像； 看起来",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "crash",
    "pronunciation": "[kræʃ]",
    "meanings": "[动] 碰撞； 坠毁； 崩溃\n[名] 碰撞； 坠毁； 崩溃",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "sack",
    "pronunciation": "[sæk]",
    "meanings": "[名] 袋⼦； 解雇\n[动] 解雇； 装⼊袋⼦； 劫掠",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "clear",
    "pronunciation": "[klɪr]",
    "meanings": "[形] 清楚的； 明确的； 清晰的； 清澈的； 晴朗的\n[动] 清空； 清除； 放晴； 使明确\n[副] 清楚地； 彻底地",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "aircraft",
    "pronunciation": "[ˈerkræft]",
    "meanings": "[名] 航空器； ⻜⾏器",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "endless",
    "pronunciation": "[ˈendlǝs]",
    "meanings": "[形] ⽆穷的； ⽆尽的",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "plain",
    "pronunciation": "[pleɪn]",
    "meanings": "[名] 平原\n[形] 简单明了的； 朴素的",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "forest",
    "pronunciation": "[ˈfɔːrɪst]",
    "meanings": "[名] 森林",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "risk",
    "pronunciation": "[rɪsk]",
    "meanings": "[名] ⻛险\n[动] 冒...的危险",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "picnic",
    "pronunciation": "[ˈpɪknɪk]",
    "meanings": "[名] 野餐\n[动] 去野餐",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "edge",
    "pronunciation": "[edʒ]",
    "meanings": "[名] 边缘； 锋； 刃； 锋利； 优势\n[动] 使锋利； 使侧着移动",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "strap",
    "pronunciation": "[stræp]",
    "meanings": "[名] 带⼦； ⽪带； ⽪条\n[动] ⽤带缚住； 包扎",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "possession",
    "pronunciation": "[pǝˈzeʃ(ǝ)n]",
    "meanings": "[名] 拥有； 财产",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "breath",
    "pronunciation": "[breθ]",
    "meanings": "[名] 呼吸； ⽓息",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "content",
    "pronunciation": "[ˈkɑːntent]",
    "meanings": "[名] 内容； 含量； ⽬录\n[形] 满⾜的\n[动] 使满意",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "mend",
    "pronunciation": "[mend]",
    "meanings": "[动] 修理； 修补； 康复\n[名] 修补； 补丁； 痊愈",
    "book": "2册",
    "lesson": "lesson 43-44"
  },
  {
    "word": "conscience",
    "pronunciation": "[ˈkɑːnʃǝns]",
    "meanings": "[名] 良⼼； 良知",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "wallet",
    "pronunciation": "[ˈwɑːlɪt]",
    "meanings": "[名] 钱包； ⽪夹； 钱夹",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "savings",
    "pronunciation": "[ˈseɪvɪŋz]",
    "meanings": "[名] 存款； 储蓄⾦\n[名] 节约； “saving” 的复数",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "villager",
    "pronunciation": "[ˈvɪlɪdʒǝr]",
    "meanings": "[名] 村⺠； 乡村居⺠； 乡下⼈",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "per cent",
    "pronunciation": "[pǝr ˈsent]",
    "meanings": "[名] 百分之…",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "unload",
    "pronunciation": "[ˌʌnˈlǝʊd]",
    "meanings": "[动] 卸载； 卸下",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "extremely",
    "pronunciation": "[ɪkˈstriːmli]",
    "meanings": "[副] ⾮常地； 极其地； 极端地",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "occur",
    "pronunciation": "[ǝˈkɜːr]",
    "meanings": "[动] 发⽣； 出现",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "astonish",
    "pronunciation": "[ǝˈstɑːnɪʃ]",
    "meanings": "[动] 使惊讶",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "pile",
    "pronunciation": "[paɪl]",
    "meanings": "[名] 桩； 堆； 摞\n[动] 堆放； 叠放",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "woollen",
    "pronunciation": "[ˈwʊlǝn]",
    "meanings": "[形] ⽑纺的； ⽺⽑的\n[名] ⽑线； ⽑织品",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "goods",
    "pronunciation": "[ɡʊdz]",
    "meanings": "[名] 商品； 货物",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "discover",
    "pronunciation": "[dɪˈskʌvǝr]",
    "meanings": "[动] 发现； 查明； 发觉",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "admit",
    "pronunciation": "[ǝdˈmɪt]",
    "meanings": "[动] 承认； 允许进⼊",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "confine",
    "pronunciation": "[kǝnˈfaɪn]",
    "meanings": "[动] 限制； 监禁",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "normal",
    "pronunciation": "[ˈnɔːrm(ǝ)l]",
    "meanings": "[形] 正常的； ⼀般的",
    "book": "2册",
    "lesson": "lesson 45-46"
  },
  {
    "word": "thirsty",
    "pronunciation": "[ˈθɜːrsti]",
    "meanings": "[形] ⼝渴的； 渴望的",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "ghost",
    "pronunciation": "[ɡǝʊst]",
    "meanings": "[名] ⻤； 幽灵",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "haunt",
    "pronunciation": "[hɔːnt]",
    "meanings": "[动] 出没； 萦绕； ⻓期困扰； 常去\n[名] 常到之地",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "furniture",
    "pronunciation": "[ˈfɜːrnɪtʃǝr]",
    "meanings": "[名] 家具",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "whisky",
    "pronunciation": "[ˈwɪski]",
    "meanings": "[名] 威⼠忌",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "suggest",
    "pronunciation": "[sǝɡˈdʒest]",
    "meanings": "[动] 建议； 提出； 使想起； 暗示",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "shake",
    "pronunciation": "[ʃeɪk]",
    "meanings": "[动] 摇动； 颤动\n[名] 摇动； 颤动",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "accept",
    "pronunciation": "[ǝkˈsept]",
    "meanings": "[动] 接受； 认可； 同意",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "pull",
    "pronunciation": "[pʊl]",
    "meanings": "[动] 拉； 拖； 牵； 拔\n[名] 拉； 拖； 牵； 拔",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "cotton wool",
    "pronunciation": "[ˌkɑːt(ǝ)n ˈwʊl]",
    "meanings": "[短语] 棉絮； 药棉",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "collect",
    "pronunciation": "[kǝˈlekt]",
    "meanings": "[动] 收集",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "collection",
    "pronunciation": "[kǝˈlekʃ(ǝ)n]",
    "meanings": "[名] 收集物； 收藏品",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "nod",
    "pronunciation": "[nɑːd]",
    "meanings": "[动] 点头； 打盹\n[名] 点头",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "meanwhile",
    "pronunciation": "[ˈmiːnwaɪl]",
    "meanings": "[副] 与此同时； 在此期间",
    "book": "2册",
    "lesson": "lesson 47-48"
  },
  {
    "word": "tired",
    "pronunciation": "[ˈtaɪǝrd]",
    "meanings": "[形] 疲倦的； 厌烦的\n[动] 使疲倦； 使厌烦； “tire” 的过去式和过去分词",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "real",
    "pronunciation": "[ˈriːǝl]",
    "meanings": "[形] 真实的； 真的； 真正的",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "owner",
    "pronunciation": "[ˈǝʊnǝr]",
    "meanings": "[名] 所有权⼈； 主⼈； 物主",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "spring",
    "pronunciation": "[sprɪŋ]",
    "meanings": "[名] 春天； 弹簧； 泉\n[动] 跳； 跃； 蹦； 突然猛烈地移动",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "mattress",
    "pronunciation": "[ˈmætrǝs]",
    "meanings": "[名] 褥垫； 床垫",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "gust",
    "pronunciation": "[ɡʌst]",
    "meanings": "[名] ⼀阵狂⻛； 突然的⼀阵\n[动] （⻛） 猛刮",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "sweep",
    "pronunciation": "[swiːp]",
    "meanings": "[动] 扫； 打扫； 掠过； 扫荡\n[名] 扫； 打扫； 掠过； 席卷",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "courtyard",
    "pronunciation": "[ˈkɔːrtjɑːrd]",
    "meanings": "[名] 庭院； 院⼦",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "smash",
    "pronunciation": "[smæʃ]",
    "meanings": "[动] 打碎； 猛烈撞击\n[名] 打碎； 破碎的哗啦声； 撞⻋事故",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "miraculously",
    "pronunciation": "[mɪˈrækjǝlǝsli]",
    "meanings": "[副] 奇迹般地； 神奇地； ⾮凡地",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "unhurt",
    "pronunciation": "[ʌnˈhɜːrt]",
    "meanings": "[形] 未受伤的； 安然⽆恙的",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "glance",
    "pronunciation": "[ɡlæns]",
    "meanings": "[动] 扫视； 瞥⼀眼； 浏览\n[名] ⼀瞥； 扫视",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "promptly",
    "pronunciation": "[ˈprɑːmptli]",
    "meanings": "[副] ⻢上； 迅速地； 敏捷地； 准时地",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "ride",
    "pronunciation": "[raɪd]",
    "meanings": "[动] 骑； 乘坐\n[名] 骑； 乘坐",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "excursion",
    "pronunciation": "[ɪkˈskɜːrʒ(ǝ)n]",
    "meanings": "[名] 远⾜； 短途旅⾏； 涉猎某事",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "conductor",
    "pronunciation": "[kǝnˈdʌktǝr]",
    "meanings": "[名] 指挥； 售票员； 导体",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "view",
    "pronunciation": "[vjuː]",
    "meanings": "[名] 视野； ⻛景； ⻅解\n[动] 审视； 观看",
    "book": "2册",
    "lesson": "lesson 49-50"
  },
  {
    "word": "reward",
    "pronunciation": "[rɪˈwɔːrd]",
    "meanings": "[名] 奖励； 报酬\n[动] 奖励； 回报",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "virtue",
    "pronunciation": "[ˈvɜːrtʃuː]",
    "meanings": "[名] 美德； 优点",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "diet",
    "pronunciation": "[ˈdaɪǝt]",
    "meanings": "[名] ⽇常饮⻝； 节⻝\n[动] 节制饮⻝",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "forbid",
    "pronunciation": "[fǝrˈbɪd]",
    "meanings": "[动] 禁⽌； 不准",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "hurriedly",
    "pronunciation": "[ˈhɜːrɪdli]",
    "meanings": "[副] 匆忙地； 仓促地",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "embarrass",
    "pronunciation": "[ɪmˈbærǝs]",
    "meanings": "[动] 使窘迫； 使尴尬",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "guiltily",
    "pronunciation": "[ˈɡɪltɪli]",
    "meanings": "[副] 内疚地； 有罪地",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "strict",
    "pronunciation": "[strɪkt]",
    "meanings": "[形] 严格的； 严厉的",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "occasionally",
    "pronunciation": "[ǝˈkeɪʒnǝli]",
    "meanings": "[副] 偶尔； 有时",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "temporarily",
    "pronunciation": "[ˌtempǝˈrerǝli]",
    "meanings": "[副] 暂时地； 临时地",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "inch",
    "pronunciation": "[ɪntʃ]",
    "meanings": "[名] 英⼨； 短距离",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "space",
    "pronunciation": "[speɪs]",
    "meanings": "[名] 空间； 太空； 空格； 空⽩\n[动] 以⼀定间隔排列",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "actually",
    "pronunciation": "[ˈæktʃuǝli]",
    "meanings": "[副] 事实上； 实际上； 竟然",
    "book": "2册",
    "lesson": "lesson 51-52"
  },
  {
    "word": "hot",
    "pronunciation": "[hɑːt]",
    "meanings": "[形] 热的",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "fireman",
    "pronunciation": "[ˈfaɪǝrmǝn]",
    "meanings": "[名] 消防队员",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "cause",
    "pronunciation": "[kɔːz]",
    "meanings": "[名] 原因； 理由； 理想； 事业\n[动] 导致； 引起",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "examine",
    "pronunciation": "[ɪɡˈzæmɪn]",
    "meanings": "[动] 检验； 审查； 调查",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "accidentally",
    "pronunciation": "[ˌæksɪˈdentǝli]",
    "meanings": "[副] 意外地",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "remains",
    "pronunciation": "[rɪˈmeɪnz]",
    "meanings": "[名] 遗迹； 残余； 遗体\n[动] 剩下； 留下； 依然不变；“remain” 的第三⼈称单数",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "wire",
    "pronunciation": "[ˈwaɪǝr]",
    "meanings": "[名] ⾦属丝； 电线； 电报\n[动] 发电报； 装电线",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "volt",
    "pronunciation": "[vǝʊlt]",
    "meanings": "[名] 伏特",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "power line",
    "pronunciation": "[ˈpaʊǝr laɪn]",
    "meanings": "[短语] 电⼒线； 输电线； 电源线",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "solve",
    "pronunciation": "[sɑːlv]",
    "meanings": "[动] 解决； 解答",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "mystery",
    "pronunciation": "[ˈmɪstǝri]",
    "meanings": "[名] 谜； 难以理解的事物； 神秘感",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "snatch",
    "pronunciation": "[snætʃ]",
    "meanings": "[动] 夺取； ⼀把抓住\n[名] 夺取； ⼀把抓住； ⾳乐⽚段",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "spark",
    "pronunciation": "[spɑːrk]",
    "meanings": "[名] ⽕花； ⽕星\n[动] 触发； 冒⽕花； 闪光； 激发",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "sticky",
    "pronunciation": "[ˈstɪki]",
    "meanings": "[形] 黏的； 棘⼿的",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "finger",
    "pronunciation": "[ˈfɪŋɡǝr]",
    "meanings": "[名] ⼿指\n[动] ⽤⼿指触摸",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "pie",
    "pronunciation": "[paɪ]",
    "meanings": "[名] 果馅饼",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "mix",
    "pronunciation": "[mɪks]",
    "meanings": "[动] 混合； 掺⼊； 合成； 交往\n[名] 混合； 结合",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "pastry",
    "pronunciation": "[ˈpeɪstri]",
    "meanings": "[名] 糕点； 馅饼⽪",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "annoying",
    "pronunciation": "[ǝˈnɔɪɪŋ]",
    "meanings": "[形] 使恼怒的； 讨厌的\n[动] 使烦恼； 使⽓恼； “annoy” 的现在分词",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "receiver",
    "pronunciation": "[rɪˈsiːvǝr]",
    "meanings": "[名] 听筒； 接收者",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "dismay",
    "pronunciation": "[dɪsˈmeɪ]",
    "meanings": "[名] （因惊愕） 沮丧； 失望\n[动] 使惊愕､ 沮丧",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "recognize",
    "pronunciation": "[ˈrekǝɡnaɪz]",
    "meanings": "[动] 认出； 意识到； 承认",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "persuade",
    "pronunciation": "[pǝrˈsweɪd]",
    "meanings": "[动] 说服； 劝说",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "mess",
    "pronunciation": "[mes]",
    "meanings": "[名] 脏乱； 杂乱\n[动] 弄糟； 弄乱",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "doorknob",
    "pronunciation": "[ˈdɔːrnɑːb]",
    "meanings": "[名] 球形⻔拉⼿",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "register",
    "pronunciation": "[ˈredʒɪstǝr]",
    "meanings": "[动] 注册； 登记\n[名] 登记簿； 现⾦出纳机",
    "book": "2册",
    "lesson": "lesson 53-54"
  },
  {
    "word": "gold",
    "pronunciation": "[ɡǝʊld]",
    "meanings": "[名] ⾦； ⾦币； ⾦⻩⾊\n[形] ⾦⾊的",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "mine",
    "pronunciation": "[maɪn]",
    "meanings": "[名] 矿； 地雷\n[代] 我的（东⻄）\n[动] 采矿； 埋地雷",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "treasure",
    "pronunciation": "[ˈtreʒǝr]",
    "meanings": "[名] 财富； 珍宝； 宝物\n[动] 珍爱； 珍惜； 珍藏",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "revealer",
    "pronunciation": "[rɪˈviːlǝr]",
    "meanings": "[名] 探测器",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "invent",
    "pronunciation": "[ɪnˈvent]",
    "meanings": "[动] 发明； 创造",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "detect",
    "pronunciation": "[dɪˈtekt]",
    "meanings": "[动] 察觉； 查出； 测出",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "bury",
    "pronunciation": "[ˈberi]",
    "meanings": "[动] 埋葬； 埋藏",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "cave",
    "pronunciation": "[keɪv]",
    "meanings": "[名] 洞⽳",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "seashore",
    "pronunciation": "[ˈsiːʃɔːr]",
    "meanings": "[名] 海岸； 海滨； 海边",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "pirate",
    "pronunciation": "[ˈpaɪrǝt]",
    "meanings": "[名] 海盗； 盗版者\n[动] 抢劫； 剽窃； 盗印",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "arm",
    "pronunciation": "[ɑːrm]",
    "meanings": "[名] ⼿臂\n[动] 武装",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "soil",
    "pronunciation": "[sɔɪl]",
    "meanings": "[名] ⼟壤",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "entrance",
    "pronunciation": "[ˈentrǝns]",
    "meanings": "[名] ⼊⼝； 进⼊； 到场\n[动] 使出神； 使⼊迷",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "finally",
    "pronunciation": "[ˈfaɪnǝli]",
    "meanings": "[副] 最后； 终于",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "worthless",
    "pronunciation": "[ˈwɜːrθlǝs]",
    "meanings": "[形] ⽆价值的",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "thoroughly",
    "pronunciation": "[ˈθɜːrǝli]",
    "meanings": "[副] 彻底地； 完全地",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "trunk",
    "pronunciation": "[trʌŋk]",
    "meanings": "[名] 树⼲； 躯⼲； ⼤⾐箱； 象⿐⼦",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "confident",
    "pronunciation": "[ˈkɑːnfɪdǝnt]",
    "meanings": "[形] ⾃信的； 确信的",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "value",
    "pronunciation": "[ˈvæljuː]",
    "meanings": "[名] 价值；（数） 值\n[动] 估价； 重视",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "sound",
    "pronunciation": "[saʊnd]",
    "meanings": "[名] 声⾳； 声响\n[动] 响； 听起来\n[形] 健全的； 完好的； 合理的； 可靠的； 酣睡的",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "excitement",
    "pronunciation": "[ɪkˈsaɪtmǝnt]",
    "meanings": "[名] 兴奋； 激动",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "handsome",
    "pronunciation": "[ˈhænsǝm]",
    "meanings": "[形] 英俊的； 丰厚的",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "Rolls-Royce",
    "pronunciation": "[rǝʊlz rɔɪs]",
    "meanings": "[名] 劳斯莱斯牌汽⻋",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "Benz",
    "pronunciation": "[bents]",
    "meanings": "[名] 奔驰牌汽⻋",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "wheel",
    "pronunciation": "[wiːl]",
    "meanings": "[名] ⻋轮\n[动] 转动",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "explosion",
    "pronunciation": "[ɪkˈsplǝʊʒ(ǝ)n]",
    "meanings": "[名] 爆炸；（感情） 爆发； 激增",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "course",
    "pronunciation": "[kɔːrs]",
    "meanings": "[名] 课程； 过程； ⼀道菜\n[动] 快速流动；（思想或感情） 涌动",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "rival",
    "pronunciation": "[ˈraɪv(ǝ)l]",
    "meanings": "[名] 竞争者； 敌⼿\n[动] 竞争； 相匹敌",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "speed",
    "pronunciation": "[spiːd]",
    "meanings": "[名] 速度； 速率\n[动] 加速； 加快",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "downhill",
    "pronunciation": "[ˌdaʊnˈhɪl]",
    "meanings": "[副] 向下； ⾛下坡\n[形] 下⼭的； 下坡的",
    "book": "2册",
    "lesson": "lesson 55-56"
  },
  {
    "word": "madam",
    "pronunciation": "[ˈmædǝm]",
    "meanings": "[名] 夫⼈； ⼥⼠； ⾮常⾃我的⼥⼦",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "jeans",
    "pronunciation": "[dʒiːnz]",
    "meanings": "[名] ⽜仔裤",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "hesitate",
    "pronunciation": "[ˈhezɪteɪt]",
    "meanings": "[动] 犹豫； 踌躇",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "serve",
    "pronunciation": "[sɜːrv]",
    "meanings": "[动] 服务； 接待； 供职； 服役",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "scornfully",
    "pronunciation": "[ˈskɔːrnfǝli]",
    "meanings": "[副] 轻蔑地； 藐视地",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "punish",
    "pronunciation": "[ˈpʌnɪʃ]",
    "meanings": "[动] 惩罚； 处罚",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "fur",
    "pronunciation": "[fɜːr]",
    "meanings": "[名] ⽑⽪； ⽪草； 软⽑",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "eager",
    "pronunciation": "[ˈiːɡǝr]",
    "meanings": "[形] 热切的； 渴望的",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "blessing",
    "pronunciation": "[ˈblesɪŋ]",
    "meanings": "[名] 祝福； 祷告； 幸事； 批准\n[动] 祝福； 保佑； “bless” 的现在分词",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "disguise",
    "pronunciation": "[dɪsˈɡaɪz]",
    "meanings": "[动] 伪装； 掩饰\n[名] 伪装； 伪装物",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "tiny",
    "pronunciation": "[ˈtaɪni]",
    "meanings": "[形] 极⼩的； 微⼩的； 微量的",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "possess",
    "pronunciation": "[pǝˈzes]",
    "meanings": "[动] 拥有； 占有",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "cursed",
    "pronunciation": "[kɜːrst]",
    "meanings": "[形] 被诅咒的； 可恶的\n[动] 诅咒； 咒骂； “curse” 的过去式和过去分词",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "increase",
    "pronunciation": "[ɪnˈkriːs]",
    "meanings": "[名] 增加； 增⻓\n[动] 增加； 增多",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "plant",
    "pronunciation": "[plænt]",
    "meanings": "[名] 植物； 作物； ⻋间； 装置； ⼯⼚； 发电⼚\n[动] 种植； 栽培； 安置； 放置",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "church",
    "pronunciation": "[tʃɜːrtʃ]",
    "meanings": "[名] 教堂",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "evil",
    "pronunciation": "[ˈiːv(ǝ)l]",
    "meanings": "[名] 邪恶； 罪恶\n[形] 恶毒的",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "reputation",
    "pronunciation": "[ˌrepjuˈteɪʃ(ǝ)n]",
    "meanings": "[名] 名声； 名誉",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "claim",
    "pronunciation": "[kleɪm]",
    "meanings": "[名] 声称； 索要； 要求； 认领\n[动] 声称； 索赔； 要求",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "victim",
    "pronunciation": "[ˈvɪktɪm]",
    "meanings": "[名] 受害者",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "vicar",
    "pronunciation": "[ˈvɪkǝr]",
    "meanings": "[名] 教区牧师",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "source",
    "pronunciation": "[sɔːrs]",
    "meanings": "[名] 来源； 出处； 源泉； 源头； 提供资料者\n[动] （从…） 获得",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "income",
    "pronunciation": "[ˈɪnkʌm]",
    "meanings": "[名] 收⼊； 收益； 所得",
    "book": "2册",
    "lesson": "lesson 57-58"
  },
  {
    "word": "bark",
    "pronunciation": "[bɑːrk]",
    "meanings": "[动] 狗吠； 咆哮； 厉声说\n[名] ⽝吠声； 树⽪",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "press",
    "pronunciation": "[pres]",
    "meanings": "[动] 按； 压\n[名] 按； 压； 出版社； 新闻界",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "paw",
    "pronunciation": "[pɔː]",
    "meanings": "[名] ⽖⼦； 脚⽖",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "latch",
    "pronunciation": "[lætʃ]",
    "meanings": "[名] ⻔闩； 碰锁； 弹簧锁\n[动] ⽤闩闩上； ⽤碰锁锁上",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "expert",
    "pronunciation": "[ˈekspɜːrt]",
    "meanings": "[名] 专家； ⾏家\n[形] ⽼练的； 内⾏的； 专⻔的",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "develop",
    "pronunciation": "[dɪˈvelǝp]",
    "meanings": "[动] 发展； 形成； 制订",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "habit",
    "pronunciation": "[ˈhæbɪt]",
    "meanings": "[名] 习惯",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "remove",
    "pronunciation": "[rɪˈmuːv]",
    "meanings": "[动] 搬迁； 去掉； 移开； 消除",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "future",
    "pronunciation": "[ˈfjuːtʃǝr]",
    "meanings": "[名] 未来； 将来； 前途\n[形] 将来的； 未来的",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "fair",
    "pronunciation": "[fer]",
    "meanings": "[形] 公平的； 合理的； 相当⼤的\n[名] 交易会； 展销会； 集市",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "fortune-teller",
    "pronunciation": "[ˈfɔːrtʃǝnˌtelǝr]",
    "meanings": "[名] 算命者",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "crystal",
    "pronunciation": "[ˈkrɪst(ǝ)l]",
    "meanings": "[名] ⽔晶； 结晶\n[形] 晶体的",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "relation",
    "pronunciation": "[rɪˈleɪʃ(ǝ)n]",
    "meanings": "[名] 关联； 联系； 亲属",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "impatiently",
    "pronunciation": "[ɪmˈpeɪʃ(ǝ)ntli]",
    "meanings": "[副] 不耐烦地； 急躁地",
    "book": "2册",
    "lesson": "lesson 59-60"
  },
  {
    "word": "Hubble",
    "pronunciation": "[ˈhʌbǝl]",
    "meanings": "[名] 哈勃",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "telescope",
    "pronunciation": "[ˈtelɪskǝʊp]",
    "meanings": "[名] 望远镜",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "launch",
    "pronunciation": "[lɔːntʃ]",
    "meanings": "[动] 发射； 发起； 启动； 掷\n[名] 发射； 投掷； 启动",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "NASA",
    "pronunciation": "[ˈnæsǝ]",
    "meanings": "[缩] （美国） 国家航空和航天局 ；“National Aeronautics and SpaceAdministration” 的缩写",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "billion",
    "pronunciation": "[ˈbɪljǝn]",
    "meanings": "[数] ⼗亿",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "faulty",
    "pronunciation": "[ˈfɔːlti]",
    "meanings": "[形] 有缺陷的； 有故障的； 有错误的",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "astronaut",
    "pronunciation": "[ˈæstrǝnɔːt]",
    "meanings": "[名] 宇航员； 太空⼈",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "shuttle",
    "pronunciation": "[ˈʃʌt(ǝ)l]",
    "meanings": "[名] 梭⼦； 穿梭； 往返移动之物； 航天⻜机\n[动] 穿梭移动； 往返运送",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "Endeavour",
    "pronunciation": "[ɪnˈdevǝr]",
    "meanings": "[名] “奋进” 号",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "robot-arm",
    "pronunciation": "[ˈrǝʊbɑːt ɑːrm]",
    "meanings": "[名] 机器⼿臂",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "grab",
    "pronunciation": "[ɡræb]",
    "meanings": "[动] 抓取； 攫取",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "atmosphere",
    "pronunciation": "[ˈætmǝsfɪr]",
    "meanings": "[名] ⼤⽓； ⽓氛； 氛围",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "distant",
    "pronunciation": "[ˈdɪstǝnt]",
    "meanings": "[形] 遥远的； 远处的； 疏远的； 冷漠的",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "galaxy",
    "pronunciation": "[ˈɡælǝksi]",
    "meanings": "[名] 星系； ⼀群出⾊的⼈（或物）",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "universe",
    "pronunciation": "[ˈjuːnɪvɜːrs]",
    "meanings": "[名] 宇宙",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "eagle eye",
    "pronunciation": "[ˌiːɡl ˈaɪ]",
    "meanings": "[短语] 鹰眼； 敏锐的⽬光",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "control",
    "pronunciation": "[kǝnˈtrǝʊl]",
    "meanings": "[动] 控制； 操纵\n[名] 控制； 管制",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "smoke",
    "pronunciation": "[smǝʊk]",
    "meanings": "[动] 抽烟； 冒烟\n[名] 烟； 烟雾",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "desolate",
    "pronunciation": "[ˈdesǝlǝt]",
    "meanings": "[形] 荒凉的； 孤寂凄凉的\n[动] 使荒⽆⼈烟； 使孤寂凄凉",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "threaten",
    "pronunciation": "[ˈθret(ǝ)n]",
    "meanings": "[动] 威胁； 恐吓",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "surrounding",
    "pronunciation": "[sǝˈraʊndɪŋ]",
    "meanings": "[形] 周围的； 附近的\n[动] 环绕； 围绕； “surround” 的现在分词",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "destruction",
    "pronunciation": "[dɪˈstrʌkʃ(ǝ)n]",
    "meanings": "[名] 毁灭； 引起毁灭的根源",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "flood",
    "pronunciation": "[flʌd]",
    "meanings": "[名] 洪⽔； ⽔灾\n[动] 淹没； 泛滥",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "authority",
    "pronunciation": "[ǝˈθɔːrǝti]",
    "meanings": "[名] 权威； 权威⼈⼠； 权⼒； 当局；官⽅机构",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "grass-seed",
    "pronunciation": "[ˈɡrasˈsiːd]",
    "meanings": "[名] 草籽",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "spray",
    "pronunciation": "[spreɪ]",
    "meanings": "[名] 喷雾\n[动] 喷洒",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "quantity",
    "pronunciation": "[ˈkwɑːntǝti]",
    "meanings": "[名] 量； 数量； ⼤量",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "root",
    "pronunciation": "[ruːt]",
    "meanings": "[名] 根； 根源\n[动] ⽣根",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "century",
    "pronunciation": "[ˈsentʃǝri]",
    "meanings": "[名] 世纪； 百年",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "patch",
    "pronunciation": "[pætʃ]",
    "meanings": "[名] 补丁； ⼀⼩⽚； ⼩块地\n[动] 打补丁； 缝补",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "blacken",
    "pronunciation": "[ˈblækǝn]",
    "meanings": "[动] （使） 变⿊； 中伤； 诋毁",
    "book": "2册",
    "lesson": "lesson 61-62"
  },
  {
    "word": "circle",
    "pronunciation": "[ˈsɜːrk(ǝ)l]",
    "meanings": "[名] 圆； 圈\n[动] 圈出； 环绕",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "admire",
    "pronunciation": "[ǝdˈmaɪǝr]",
    "meanings": "[动] 钦佩； 赞赏",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "close",
    "pronunciation": "[klǝʊz]",
    "meanings": "[动] 关闭； 使接近\n[形] 接近的； 亲密的\n[副] 接近地； 紧挨地",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "wedding",
    "pronunciation": "[ˈwedɪŋ]",
    "meanings": "[名] 婚礼； 婚宴",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "reception",
    "pronunciation": "[rɪˈsepʃ(ǝ)n]",
    "meanings": "[名] 接待； 招待会",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "sort",
    "pronunciation": "[sɔːrt]",
    "meanings": "[名] 种类； 类别\n[动] 把…分类； 拣选； 理清； 解决",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "tunnel",
    "pronunciation": "[ˈtʌn(ǝ)l]",
    "meanings": "[名] 隧道； 地道\n[动] 开凿隧道",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "port",
    "pronunciation": "[pɔːrt]",
    "meanings": "[名] 港⼝",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "ventilate",
    "pronunciation": "[ˈventɪleɪt]",
    "meanings": "[动] 使通⻛； 公开表达",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "chimney",
    "pronunciation": "[ˈtʃɪmni]",
    "meanings": "[名] 烟囱",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "sea level",
    "pronunciation": "[ˈsiː lev(ǝ)l]",
    "meanings": "[短语] 海平⾯",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "double",
    "pronunciation": "[ˈdʌb(ǝ)l]",
    "meanings": "[名] 两倍\n[动] （使） 加倍； 是…的两倍； 把…对折",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "ventilation",
    "pronunciation": "[ˌventɪˈleɪʃ(ǝ)n]",
    "meanings": "[名] 通⻛； 通⻛装置",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "fear",
    "pronunciation": "[fɪr]",
    "meanings": "[动] 害怕； 惧怕\n[名] 害怕； 惧怕",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "invasion",
    "pronunciation": "[ɪnˈveɪʒ(ǝ)n]",
    "meanings": "[名] 侵犯； 侵略",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "officially",
    "pronunciation": "[ǝˈfɪʃǝli]",
    "meanings": "[副] 正式地； 官⽅地",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "connect",
    "pronunciation": "[kǝˈnekt]",
    "meanings": "[动] 连接； 接通",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "European",
    "pronunciation": "[ˌjʊrǝˈpiːǝn]",
    "meanings": "[形] 欧洲的； 欧洲⼈的； 欧盟的\n[名] 欧洲⼈",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "continent",
    "pronunciation": "[ˈkɑːntɪnǝnt]",
    "meanings": "[名] 洲； ⼤陆",
    "book": "2册",
    "lesson": "lesson 63-64"
  },
  {
    "word": "versus",
    "pronunciation": "[ˈvɜːrsǝs]",
    "meanings": "[介] 对…； 与…相对",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "Christmas",
    "pronunciation": "[ˈkrɪsmǝs]",
    "meanings": "[名] 圣诞节",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "circus",
    "pronunciation": "[ˈsɜːrkǝs]",
    "meanings": "[名] ⻢戏团",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "present",
    "pronunciation": "[ˈprez(ǝ)nt]",
    "meanings": "[名] ⽬前； 礼物\n[形] 在场的； ⽬前的\n[动] 呈现； 提出",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "accompany",
    "pronunciation": "[ǝˈkʌmpǝni]",
    "meanings": "[动] 陪伴； 伴随； 为…伴奏",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "approach",
    "pronunciation": "[ǝˈprǝʊtʃ]",
    "meanings": "[动] 接近； 靠近； 临近； 处理\n[名] ⽅法； 接近； 靠近； 路径",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "ought",
    "pronunciation": "[ɔːt]",
    "meanings": "[动] 应当； 应该； 可能会",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "weigh",
    "pronunciation": "[weɪ]",
    "meanings": "[动] 称量； 权衡",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "fortunate",
    "pronunciation": "[ˈfɔːrtʃǝnǝt]",
    "meanings": "[形] 幸运的",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "Lancaster",
    "pronunciation": "[ˈlæŋkǝrstǝr]",
    "meanings": "[名] 兰开斯特（美国⼀城市）",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "bomber",
    "pronunciation": "[ˈbɑːmǝr]",
    "meanings": "[名] 轰炸机； 投弹⼿",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "remote",
    "pronunciation": "[rɪˈmǝʊt]",
    "meanings": "[形] 偏远的； 久远的； 渺茫的\n[名] 遥控器",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "Pacific",
    "pronunciation": "[pǝˈsɪfɪk]",
    "meanings": "[名] 太平洋\n[形] 太平洋的",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "wreck",
    "pronunciation": "[rek]",
    "meanings": "[动] 破坏； 毁坏\n[名] 遇难船只； 失事； 残骸",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "rediscover",
    "pronunciation": "[ˌriːdɪˈskʌvǝr]",
    "meanings": "[动] 再次 （重新） 发现",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "aerial",
    "pronunciation": "[ˈeriǝl]",
    "meanings": "[形] 空⽓的； 空中的\n[名] 天线",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "survey",
    "pronunciation": "[ˈsɜːrveɪ]",
    "meanings": "[动] 调查； 勘测\n[名] 调查； 勘测",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "rescue",
    "pronunciation": "[ˈreskjuː]",
    "meanings": "[名] 救援； 营救\n[动] 救援； 营救",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "package",
    "pronunciation": "[ˈpækɪdʒ]",
    "meanings": "[名] 包； 包裹\n[动] 包装",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "enthusiast",
    "pronunciation": "[ɪnˈθuːziæst]",
    "meanings": "[名] 热⼼者； 热衷于…的⼈",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "restore",
    "pronunciation": "[rɪˈstɔːr]",
    "meanings": "[动] 恢复",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "imagine",
    "pronunciation": "[ɪˈmædʒɪn]",
    "meanings": "[动] 想象； 设想； 假想",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "packing case",
    "pronunciation": "[ˈpækɪŋ keɪs]",
    "meanings": "[短语] （⽊制的） 装货箱",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "colony",
    "pronunciation": "[ˈkɑːlǝni]",
    "meanings": "[名] 殖⺠地； 聚居⼈群",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "bee",
    "pronunciation": "[biː]",
    "meanings": "[名] 蜜蜂",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "hive",
    "pronunciation": "[haɪv]",
    "meanings": "[名] 蜂箱； 蜂巢； 蜂群； 闹市\n[动] 使（蜂） ⼊蜂箱； 群居",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "preserve",
    "pronunciation": "[prɪˈzɜːrv]",
    "meanings": "[动] 保存； 保护； 保持\n[名] （某群体） 专有的活动； 保护区",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "beeswax",
    "pronunciation": "[ˈbiːzwæks]",
    "meanings": "[名] 蜂蜡\n[动] 涂蜜蜡于",
    "book": "2册",
    "lesson": "lesson 65-66"
  },
  {
    "word": "volcano",
    "pronunciation": "[vɑːlˈkeɪnǝʊ]",
    "meanings": "[名] ⽕⼭",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "active",
    "pronunciation": "[ˈæktɪv]",
    "meanings": "[形] 积极的； 活跃的； 主动的",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Kivu",
    "pronunciation": "[ˈkiːvuː]",
    "meanings": "[名] 基伍湖",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Congo",
    "pronunciation": "[ˈkɑːŋɡǝʊ]",
    "meanings": "[名] 刚果",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "Kituro",
    "pronunciation": "[ˈkaɪtʊǝrǝʊ]",
    "meanings": "[名] 基图罗（⽕⼭名）",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "erupt",
    "pronunciation": "[ɪˈrʌpt]",
    "meanings": "[动] 爆发； 喷发",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "violently",
    "pronunciation": "[ˈvaɪǝlǝntli]",
    "meanings": "[副] 激烈地； 猛烈地； 凶狠地",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "manage",
    "pronunciation": "[ˈmænɪdʒ]",
    "meanings": "[动] 管理； 设法做到； 完成（困难的事）",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "brilliant",
    "pronunciation": "[ˈbrɪliǝnt]",
    "meanings": "[形] 光辉的； 明亮的； 灿烂的； 卓越的； 极好的",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "liquid",
    "pronunciation": "[ˈlɪkwɪd]",
    "meanings": "[名] 液体\n[形] 液体的； 液态的",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "escape",
    "pronunciation": "[ɪˈskeɪp]",
    "meanings": "[动] 逃避； 逃⾛\n[名] 逃脱； 逃避",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "alive",
    "pronunciation": "[ǝˈlaɪv]",
    "meanings": "[形] 活着的； 活跃的",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "persistent",
    "pronunciation": "[pǝrˈsɪstǝnt]",
    "meanings": "[形] 执着的； 坚持的； 持续的",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "avoid",
    "pronunciation": "[ǝˈvɔɪd]",
    "meanings": "[动] 避免； 避开",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "insist",
    "pronunciation": "[ɪnˈsɪst]",
    "meanings": "[动] 坚持； 坚决要求",
    "book": "2册",
    "lesson": "lesson 67-68"
  },
  {
    "word": "murder",
    "pronunciation": "[ˈmɜːrdǝr]",
    "meanings": "[名] 谋杀\n[动] 谋杀； 杀害",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "instruct",
    "pronunciation": "[ɪnˈstrʌkt]",
    "meanings": "[动] 教授； 教导； 指示； 命令； 通知",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "acquire",
    "pronunciation": "[ǝˈkwaɪǝr]",
    "meanings": "[动] 获得； 得到； 学会",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "confidence",
    "pronunciation": "[ˈkɑːnfɪdǝns]",
    "meanings": "[名] 信⼼； 信任； 秘密； 私事",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "examiner",
    "pronunciation": "[ɪɡˈzæmɪnǝr]",
    "meanings": "[名] 考官； 主考⼈； 检查员",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "suppose",
    "pronunciation": "[sǝˈpǝʊz]",
    "meanings": "[动] 认为； 假设； 猜想",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "tap",
    "pronunciation": "[tæp]",
    "meanings": "[名] ⽔⻰头； 轻拍； 轻敲； 轻击\n[动] 轻拍； 轻敲； 利⽤； 提取",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "react",
    "pronunciation": "[riˈækt]",
    "meanings": "[动] 反应",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "brake",
    "pronunciation": "[breɪk]",
    "meanings": "[名] 刹⻋； 制动器\n[动] 刹⻋",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "pedal",
    "pronunciation": "[ˈped(ǝ)l]",
    "meanings": "[名] 踏板； 踩踏板\n[动] ⽤脚踏动",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "mournful",
    "pronunciation": "[ˈmɔːrnf(ǝ)l]",
    "meanings": "[形] 悲哀的； 哀痛的",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "bullfight",
    "pronunciation": "[ˈbʊlfaɪt]",
    "meanings": "[名] ⽃⽜",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "drunk",
    "pronunciation": "[drʌŋk]",
    "meanings": "[形] 喝醉的\n[动] 喝； 喝酒； “drink” 的过去分词",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "wander",
    "pronunciation": "[ˈwɑːndǝr]",
    "meanings": "[动] 徘徊； 漫游",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "unaware",
    "pronunciation": "[ˌʌnǝˈwer]",
    "meanings": "[形] 没意识到的； 不觉察的； 不知道的",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "bull",
    "pronunciation": "[bʊl]",
    "meanings": "[名] 公⽜； ⼤型雄性动物； 胡扯； 废话",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "matador",
    "pronunciation": "[ˈmætǝdɔːr]",
    "meanings": "[名] ⽃⽜⼠",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "apparently",
    "pronunciation": "[ǝˈpærǝntli]",
    "meanings": "[副] 显然； 表⾯上看起来； 似乎",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "sensitive",
    "pronunciation": "[ˈsensǝtɪv]",
    "meanings": "[形] 敏感的； 感情脆弱的； 体贴的；善解⼈意的",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "criticism",
    "pronunciation": "[ˈkrɪtɪsɪzǝm]",
    "meanings": "[名] 批评； 指责； 评论",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "charge",
    "pronunciation": "[tʃɑːrdʒ]",
    "meanings": "[动] 使承担责任； 收费； 充电； 指控； 给…充电\n[名] 负责； 收费； 指控； 谴责",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "clumsily",
    "pronunciation": "[ˈklʌmzɪli]",
    "meanings": "[副] 笨拙地； 粗陋地",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "bow",
    "pronunciation": "[baʊ]",
    "meanings": "[名] ⼸； 蝴蝶结； 鞠躬\n[动] （使） 鞠躬",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "safety",
    "pronunciation": "[ˈseɪfti]",
    "meanings": "[名] 安全； 平安",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "sympathetically",
    "pronunciation": "[ˌsɪmpǝˈθetɪkli]",
    "meanings": "[副] 怜悯地； 同情地",
    "book": "2册",
    "lesson": "lesson 69-70"
  },
  {
    "word": "parliament",
    "pronunciation": "[ˈpɑːrlǝmǝnt]",
    "meanings": "[名] 国会； 议会",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "erect",
    "pronunciation": "[ɪˈrekt]",
    "meanings": "[形] 直⽴的； 竖⽴的\n[动] 竖⽴； 直⽴； 建⽴",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "accurate",
    "pronunciation": "[ˈækjǝrǝt]",
    "meanings": "[形] 精确的； ⽆误的",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "official",
    "pronunciation": "[ǝˈfɪʃ(ǝ)l]",
    "meanings": "[名] 官员； ⾼级职员\n[形] 官⽅的； 正式的",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "Greenwich",
    "pronunciation": "[ˈɡrenɪtʃ]",
    "meanings": "[名] 格林威治（英国城市）",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "observatory",
    "pronunciation": "[ǝbˈzɜːrvǝtɔːri]",
    "meanings": "[名] 天⽂台； ⽓象台",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "check",
    "pronunciation": "[tʃek]",
    "meanings": "[动] 检查； 核实； 克制\n[名] 检查； ⽀票； ⽅格图案",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "microphone",
    "pronunciation": "[ˈmaɪkrǝfǝʊn]",
    "meanings": "[名] ⻨克⻛； 扩⾳器",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "tower",
    "pronunciation": "[ˈtaʊǝr]",
    "meanings": "[名] 塔； 塔楼\n[动] 远远⾼于； ⾼耸",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "racing",
    "pronunciation": "[ˈreɪsɪŋ]",
    "meanings": "[名] 赛⻋； 竞赛； 竞速\n[动] ⽐赛； 疾⾛； “race” 的现在分词",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "per",
    "pronunciation": "[pǝr]",
    "meanings": "[介] 每； 每⼀",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "Utah",
    "pronunciation": "[ˈjuːtɑː]",
    "meanings": "[名] 犹他州",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "horsepower",
    "pronunciation": "[ˈhɔːrspaʊǝr]",
    "meanings": "[名] ⻢⼒",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "burst",
    "pronunciation": "[bɜːrst]",
    "meanings": "[动] 爆裂； 突然⽽起\n[名] 爆裂； 突然⽽起",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "average",
    "pronunciation": "[ˈævǝrɪdʒ]",
    "meanings": "[形] 平均的； 普通的\n[名] 平均数； 平均⽔平\n[动] 平均为…",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "footstep",
    "pronunciation": "[ˈfʊtstep]",
    "meanings": "[名] ⾜迹； 脚步声",
    "book": "2册",
    "lesson": "lesson 71-72"
  },
  {
    "word": "record-holder",
    "pronunciation": "[ˈrekǝdˌhǝʊldǝr]",
    "meanings": "[名] 纪录保持者",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "truant",
    "pronunciation": "[ˈtruːǝnt]",
    "meanings": "[名] 逃学者； 旷课者\n[形] 逃学的； 怠惰的\n[动] 逃学； 旷课",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "unimaginative",
    "pronunciation": "[ˌʌnɪˈmædʒɪnǝtɪv]",
    "meanings": "[形] 缺乏想象⼒的； ⽆创意的",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "shame",
    "pronunciation": "[ʃeɪm]",
    "meanings": "[名] 羞愧； 羞耻\n[动] 使丢脸； 使羞愧",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "hitchhike",
    "pronunciation": "[ˈhɪtʃhaɪk]",
    "meanings": "[动] 搭便⻋旅游； 沿途搭乘别⼈⻋旅⾏",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "meantime",
    "pronunciation": "[ˈmiːntaɪm]",
    "meanings": "[名] 期间； 与此同时",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "lorry",
    "pronunciation": "[ˈlɔːri]",
    "meanings": "[名] 卡⻋； 载重汽⻋",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "border",
    "pronunciation": "[ˈbɔːrdǝr]",
    "meanings": "[名] 边界； 边疆\n[动] 和…毗邻； 与…接壤",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "evade",
    "pronunciation": "[ɪˈveɪd]",
    "meanings": "[动] 逃避； 回避； 躲避",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "limelight",
    "pronunciation": "[ˈlaɪmlaɪt]",
    "meanings": "[名] 舞台灯光； 公众注意的中⼼",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "precaution",
    "pronunciation": "[prɪˈkɔːʃ(ǝ)n]",
    "meanings": "[名] 预防； 预防措施",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "fan",
    "pronunciation": "[fæn]",
    "meanings": "[名] ⻛扇； 粉丝\n[动] 煽动； 吹拂",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "shady",
    "pronunciation": "[ˈʃeɪdi]",
    "meanings": "[形] 背阴的； 阴凉的； 可疑的",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "sheriff",
    "pronunciation": "[ˈʃerɪf]",
    "meanings": "[名] 郡⻓； ⾏政司法⻓官； 警⻓； 县治安官",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "sneer",
    "pronunciation": "[snɪr]",
    "meanings": "[动] 嘲笑； 讥讽\n[名] 嘲笑； 讥讽",
    "book": "2册",
    "lesson": "lesson 73-74"
  },
  {
    "word": "thick",
    "pronunciation": "[θɪk]",
    "meanings": "[形] 厚的； 粗的； 浓稠的",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "signal",
    "pronunciation": "[ˈsɪɡnǝl]",
    "meanings": "[名] 信号； 标志\n[动] ⽤信号通知",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "stamp",
    "pronunciation": "[stæmp]",
    "meanings": "[名] 邮票； 印记； 跺脚\n[动] 盖印； 跺脚",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "helicopter",
    "pronunciation": "[ˈhelɪkɑːptǝr]",
    "meanings": "[名] 直升机",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "scene",
    "pronunciation": "[siːn]",
    "meanings": "[名] 场景； 现场； 景⾊",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "survivor",
    "pronunciation": "[sǝrˈvaɪvǝr]",
    "meanings": "[名] 幸存者； ⽣还者",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "fool",
    "pronunciation": "[fuːl]",
    "meanings": "[名] 傻⽠； 蠢⼈\n[动] 愚弄\n[形] 愚蠢的",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "bulletin",
    "pronunciation": "[ˈbʊlǝtɪn]",
    "meanings": "[名] 公告； 布告； 公报； 新闻简报",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "announcer",
    "pronunciation": "[ǝˈnaʊnsǝr]",
    "meanings": "[名] ⼴播员； 告知者； 报幕员",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "macaroni",
    "pronunciation": "[ˌmækǝˈrǝʊni]",
    "meanings": "[名] 通⼼粉",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "leading",
    "pronunciation": "[ˈliːdɪŋ]",
    "meanings": "[形] 最重要的； ⼀流的； 处于领导地位的\n[动] 带领； 领导； “lead” 的现在分词",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "grower",
    "pronunciation": "[ˈɡrǝʊǝr]",
    "meanings": "[名] 种植者； ⽣⻓物",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "splendid",
    "pronunciation": "[ˈsplendɪd]",
    "meanings": "[形] 壮观的； 辉煌的； 极好的",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "stalk",
    "pronunciation": "[stɔːk]",
    "meanings": "[名] 茎； 柄； 梗\n[动] 跟踪； 偷偷接近； 昂⾸阔步地⾛",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "thresh",
    "pronunciation": "[θreʃ]",
    "meanings": "[动] 打（⾕）； 脱粒",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "process",
    "pronunciation": "[ˈprɑːses]",
    "meanings": "[名] 过程； 进程； ⼯序\n[动] 处理； 加⼯",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "Signor",
    "pronunciation": "[ˈsiːnjǝʊr]",
    "meanings": "[名] 先⽣（意⼤利语）",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "champion",
    "pronunciation": "[ˈtʃæmpiǝn]",
    "meanings": "[名] 冠军； 优胜者； 拥护者\n[动] 拥护； ⽀持",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "studio",
    "pronunciation": "[ˈstuːdiǝʊ]",
    "meanings": "[名] 演播室； 录⾳棚； ⼯作室",
    "book": "2册",
    "lesson": "lesson 75-76"
  },
  {
    "word": "mummy",
    "pronunciation": "[ˈmʌmi]",
    "meanings": "[名] ⽊乃伊； ⼲⼫； 妈咪",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "Egyptian",
    "pronunciation": "[iˈdʒɪpʃ(ǝ)n]",
    "meanings": "[名] 埃及⼈； 埃及语\n[形] 埃及的； 埃及⼈的",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "temple",
    "pronunciation": "[ˈtemp(ǝ)l]",
    "meanings": "[名] 庙宇； 太阳⽳",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "mark",
    "pronunciation": "[mɑːrk]",
    "meanings": "[名] 记号； 痕迹； 分数\n[动] 做标记；（使） 留痕迹； 评分",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "plate",
    "pronunciation": "[pleɪt]",
    "meanings": "[名] 盘⼦； 碟⼦",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "disease",
    "pronunciation": "[dɪˈziːz]",
    "meanings": "[名] 病； 疾病",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "last",
    "pronunciation": "[læst]",
    "meanings": "[形] 最后的； 最近的\n[副] 最后； 最近⼀次\n[动] 持续",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "prove",
    "pronunciation": "[pruːv]",
    "meanings": "[动] 证明； 证实",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "resin",
    "pronunciation": "[ˈrez(ǝ)n]",
    "meanings": "[名] 树脂； 合成树脂\n[动] 涂树脂",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "skin",
    "pronunciation": "[skɪn]",
    "meanings": "[名] ⽪肤； ⽑⽪； 外⽪\n[动] 剥⽪； 削⽪",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "section",
    "pronunciation": "[ˈsekʃ(ǝ)n]",
    "meanings": "[名] 部分； 部⻔； 章节",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "figure",
    "pronunciation": "[ˈfɪɡjǝr]",
    "meanings": "[名] 数字； 身材； 重要或有名的⼈物\n[动] 计算； 认为； 弄懂",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "normally",
    "pronunciation": "[ˈnɔːrmǝli]",
    "meanings": "[副] 正常地； 通常地",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "survive",
    "pronunciation": "[sǝrˈvaɪv]",
    "meanings": "[动] 幸存； ⽣存； 存活； 艰难挺过",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "entitle",
    "pronunciation": "[ɪnˈtaɪt(ǝ)l]",
    "meanings": "[动] 授权； 命名； 给...权利（或资格）",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "calm",
    "pronunciation": "[kɑːm]",
    "meanings": "[动] （使） 平静；（使） 镇定\n[形] 平静的； 镇静的\n[名] 平静",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "nerve",
    "pronunciation": "[nɜːrv]",
    "meanings": "[名] 神经； 勇⽓； 胆量",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "concentration",
    "pronunciation": "[ˌkɑːns(ǝ)nˈtreɪʃ(ǝ)n]",
    "meanings": "[名] 专注； 关注； 聚集； 浓度",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "suffer",
    "pronunciation": "[ˈsʌfǝr]",
    "meanings": "[动] 遭受； 忍受",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "symptom",
    "pronunciation": "[ˈsɪmptǝm]",
    "meanings": "[名] 征兆； 症状",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "temper",
    "pronunciation": "[ˈtempǝr]",
    "meanings": "[名] 暴躁脾⽓； 情绪； ⼼情； 性情\n[动] 使…缓和； 冲淡",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "appetite",
    "pronunciation": "[ˈæpɪtaɪt]",
    "meanings": "[名] 胃⼝； ⻝欲； 嗜好； 爱好",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "produce",
    "pronunciation": "[prǝˈduːs]",
    "meanings": "[动] ⽣产； ⽣育； 制造； 出示； 导致； 引起\n[名] 农产品",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "urge",
    "pronunciation": "[ɜːrdʒ]",
    "meanings": "[动] 催促； ⼒劝\n[名] 强烈欲望； 迫切要求",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "satisfaction",
    "pronunciation": "[ˌsætɪsˈfækʃ(ǝ)n]",
    "meanings": "[名] 满意； 满⾜",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "delighted",
    "pronunciation": "[dɪˈlaɪtɪd]",
    "meanings": "[形] ⾼兴的； 愉快的； 快乐的\n[动] 使⾼兴； 使愉快； “delight” 的过去式和过去分词",
    "book": "2册",
    "lesson": "lesson 77-78"
  },
  {
    "word": "parent",
    "pronunciation": "[ˈperǝnt]",
    "meanings": "[名] ⽗亲（或⺟亲）",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "flight attendant",
    "pronunciation": "[ˈflaɪt ǝtendǝnt]",
    "meanings": "[短语] 航空乘务员； 空姐",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "frightened",
    "pronunciation": "[ˈfraɪt(ǝ)nd]",
    "meanings": "[形] 惊吓的； 受惊的； 害怕的\n[动] 使惊吓； 使惊恐； “frighten” 的过去式和过去分词",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "curious",
    "pronunciation": "[ˈkjʊriǝs]",
    "meanings": "[形] 好奇的",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "bomb",
    "pronunciation": "[bɑːm]",
    "meanings": "[名] 炸弹\n[动] 投弹于； 轰炸",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "palace",
    "pronunciation": "[ˈpælǝs]",
    "meanings": "[名] 宫殿； 王宫",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "extraordinary",
    "pronunciation": "[ɪkˈstrɔːrdǝneri]",
    "meanings": "[形] 不平常的； ⾮凡的",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "exhibition",
    "pronunciation": "[ˌeksɪˈbɪʃ(ǝ)n]",
    "meanings": "[名] 展览； 展出",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "iron",
    "pronunciation": "[ˈaɪǝrn]",
    "meanings": "[名] 铁； 铁器； 熨⽃； 镣铐\n[形] 铁制的； 坚强的； 顽强的\n[动] 熨烫； ⽤铁装备",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "various",
    "pronunciation": "[ˈveriǝs]",
    "meanings": "[形] 各种各样的； 不同的； 各种的",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "machinery",
    "pronunciation": "[mǝˈʃiːnǝri]",
    "meanings": "[名] 机械装置； 机械（总称）",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "display",
    "pronunciation": "[dɪˈspleɪ]",
    "meanings": "[动] 展示； 陈列\n[名] 展示； 陈列",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "steam",
    "pronunciation": "[stiːm]",
    "meanings": "[名] 蒸汽； ⽔蒸⽓\n[动] 蒸",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "profit",
    "pronunciation": "[ˈprɑːfɪt]",
    "meanings": "[名] 利润； 收益\n[动] 获利； 有益于",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "college",
    "pronunciation": "[ˈkɑːlɪdʒ]",
    "meanings": "[名] 学院； ⼤学",
    "book": "2册",
    "lesson": "lesson 79-80"
  },
  {
    "word": "prisoner",
    "pronunciation": "[ˈprɪznǝr]",
    "meanings": "[名] 囚犯； 犯⼈",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "bush",
    "pronunciation": "[bʊʃ]",
    "meanings": "[名] 灌⽊丛； 矮树",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "rapidly",
    "pronunciation": "[ˈræpɪdli]",
    "meanings": "[副] 迅速地； 快速地",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "uniform",
    "pronunciation": "[ˈjuːnɪfɔːrm]",
    "meanings": "[形] ⼀致的； 统⼀的\n[名] 制服",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "rifle",
    "pronunciation": "[ˈraɪf(ǝ)l]",
    "meanings": "[名] 步枪； 来复枪（⼜称来福枪）\n[动] 快速搜寻",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "shoulder",
    "pronunciation": "[ˈʃǝʊldǝr]",
    "meanings": "[名] 肩膀\n[动] 承担",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "march",
    "pronunciation": "[mɑːrtʃ]",
    "meanings": "[名] ⾏军； ⾏进； 游⾏\n[动] ⾏军； ⾏进； 游⾏",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "boldly",
    "pronunciation": "[ˈbǝʊldli]",
    "meanings": "[副] ⼤胆地， 显眼地",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "blaze",
    "pronunciation": "[bleɪz]",
    "meanings": "[名] 烈⽕； ⽕焰； 闪耀\n[动] 闪耀； 熊熊燃烧； 发亮光",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "salute",
    "pronunciation": "[sǝˈluːt]",
    "meanings": "[名] 敬礼； 致敬； ⾏礼\n[动] 敬礼； 致敬； ⾏礼",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "elderly",
    "pronunciation": "[ˈeldǝrli]",
    "meanings": "[形] 年⽼的； 年⻓的",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "grey",
    "pronunciation": "[ɡreɪ]",
    "meanings": "[形] 灰⾊的； 暗淡的\n[名] 灰⾊； 暗淡",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "sharp",
    "pronunciation": "[ʃɑːrp]",
    "meanings": "[形] 锋利的； 灵敏的； 尖刻的； 骤变的",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "blow",
    "pronunciation": "[blǝʊ]",
    "meanings": "[名] 吹； 打击\n[动] 吹； 打击",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "monster",
    "pronunciation": "[ˈmɑːnstǝr]",
    "meanings": "[名] 怪物； 妖怪； 庞然⼤物",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "sailor",
    "pronunciation": "[ˈseɪlǝr]",
    "meanings": "[名] ⽔⼿； 海员",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "creature",
    "pronunciation": "[ˈkriːtʃǝr]",
    "meanings": "[名] ⽣物； 动物",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "peculiar",
    "pronunciation": "[pɪˈkjuːliǝr]",
    "meanings": "[形] 奇怪的； 独特的",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "shining",
    "pronunciation": "[ˈʃaɪnɪŋ]",
    "meanings": "[形] 闪闪发亮的； 华丽的； 辉煌的\n[动] 照耀； 发光； 闪耀； “shine” 的现在分词",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "oarfish",
    "pronunciation": "[ˈɔːfɪʃ]",
    "meanings": "[名] 桨⻥； 皇带⻥",
    "book": "2册",
    "lesson": "lesson 81-82"
  },
  {
    "word": "election",
    "pronunciation": "[ɪˈlekʃ(ǝ)n]",
    "meanings": "[名] 选举； 当选",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "former",
    "pronunciation": "[ˈfɔːrmǝr]",
    "meanings": "[形] 以前的； 前者的\n[名] 模⼦",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "defeat",
    "pronunciation": "[dɪˈfiːt]",
    "meanings": "[动] 击败； 战胜； 使受挫\n[名] 失败； 战胜",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "fanatical",
    "pronunciation": "[fǝˈnætɪk(ǝ)l]",
    "meanings": "[形] 狂热⼊迷的",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "opponent",
    "pronunciation": "[ǝˈpǝʊnǝnt]",
    "meanings": "[名] 对⼿； 反对者； 敌⼿",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "radical",
    "pronunciation": "[ˈrædɪk(ǝ)l]",
    "meanings": "[形] 根本的； 彻底的； 激进的\n[名] 激进分⼦",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "progressive",
    "pronunciation": "[prǝˈɡresɪv]",
    "meanings": "[形] 先进的； 前进的\n[名] 改⾰论者； 进步论者",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "ex-",
    "pronunciation": "[eks]",
    "meanings": "[前缀] （前缀） 前…",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "suspicious",
    "pronunciation": "[sǝˈspɪʃǝs]",
    "meanings": "[形] 怀疑的； 令⼈怀疑的",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "strike",
    "pronunciation": "[straɪk]",
    "meanings": "[动] 击打； 罢⼯； 侵袭； 突然想到；划 （⽕柴）\n[名] 罢⼯； 袭击",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "busman",
    "pronunciation": "[ˈbʌsmǝn]",
    "meanings": "[名] 公共汽⻋司机",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "state",
    "pronunciation": "[steɪt]",
    "meanings": "[名] 情形； 状态； 国家； 州\n[动] 说明； 陈述； 声明； 规定\n[形] 国事礼仪（或规格） 的； 州的；邦的",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "agreement",
    "pronunciation": "[ǝˈɡriːmǝnt]",
    "meanings": "[名] ⼀致； 同意； 协议",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "relieve",
    "pronunciation": "[rɪˈliːv]",
    "meanings": "[动] 减轻； 缓解",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "pressure",
    "pronunciation": "[ˈpreʃǝr]",
    "meanings": "[名] 压⼒； 压强； 压迫\n[动] 对…施加压⼒",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "extent",
    "pronunciation": "[ɪkˈstent]",
    "meanings": "[名] ⻓度； ⼴度； 程度",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "volunteer",
    "pronunciation": "[ˌvɑːlǝnˈtɪr]",
    "meanings": "[名] 志愿者\n[动] ⾃愿做",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "gratitude",
    "pronunciation": "[ˈɡrætɪtuːd]",
    "meanings": "[名] 感激之情； 感谢",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "the Press",
    "pronunciation": "[ðǝ pres]",
    "meanings": "[名] 新闻界",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "object",
    "pronunciation": "[ˈɑːbdʒekt]",
    "meanings": "[名] 物体； ⽬的； 对象； 宾语\n[动] 反对； 有意⻅； 讨厌",
    "book": "2册",
    "lesson": "lesson 83-84"
  },
  {
    "word": "inform",
    "pronunciation": "[ɪnˈfɔːrm]",
    "meanings": "[动] 通知； 告知",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "headmaster",
    "pronunciation": "[ˌhedˈmæstǝr]",
    "meanings": "[名] 校⻓",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "contribute",
    "pronunciation": "[kǝnˈtrɪbjuːt]",
    "meanings": "[动] 捐献； 投稿； 贡献； 促成",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "gift",
    "pronunciation": "[ɡɪft]",
    "meanings": "[名] 礼物； 天赋",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "album",
    "pronunciation": "[ˈælbǝm]",
    "meanings": "[名] 相册； 专辑",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "patience",
    "pronunciation": "[ˈpeɪʃ(ǝ)ns]",
    "meanings": "[名] 耐⼼； 忍耐",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "encouragement",
    "pronunciation": "[ɪnˈkɜːrɪdʒmǝnt]",
    "meanings": "[名] ⿎励； ⿎舞",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "farewell",
    "pronunciation": "[ˌferˈwel]",
    "meanings": "[名] 再会； 别了",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "honour",
    "pronunciation": "[ˈɑːnǝr]",
    "meanings": "[名] 荣誉； 荣幸； 尊敬\n[动] 尊敬； 给予荣誉",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "coincidence",
    "pronunciation": "[kǝʊˈɪnsɪdǝns]",
    "meanings": "[名] 巧合； ⼀致",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "total",
    "pronunciation": "[ˈtǝʊt(ǝ)l]",
    "meanings": "[名] 总额； 总计\n[动] 共计； 总数达\n[形] 总的； 全部的",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "devote",
    "pronunciation": "[dɪˈvǝʊt]",
    "meanings": "[动] 投⼊； 奉献",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "gardening",
    "pronunciation": "[ˈɡɑːrdnɪŋ]",
    "meanings": "[名] 园艺（学）\n[动] 从事园艺； “garden” 的现在分词",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "hobby",
    "pronunciation": "[ˈhɑːbi]",
    "meanings": "[名] 爱好",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "swing",
    "pronunciation": "[swɪŋ]",
    "meanings": "[名] 摇摆； 秋千\n[动] 摇摆",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "speedboat",
    "pronunciation": "[ˈspiːdbǝʊt]",
    "meanings": "[名] 快艇",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "desperately",
    "pronunciation": "[ˈdespǝrǝtli]",
    "meanings": "[副] 绝望地； 拼命地； 不顾⼀切地；极度地",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "companion",
    "pronunciation": "[kǝmˈpænjǝn]",
    "meanings": "[名] 同伴； 伴侣",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "water ski",
    "pronunciation": "[ˈwɔːtǝr skiː]",
    "meanings": "[短语] （由快艇牵引⽔橇） 滑⽔",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "buoy",
    "pronunciation": "[ˈbuːi]",
    "meanings": "[名] 浮标； 浮筒\n[动] 使浮起； ⽀撑； ⿎励",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "tremendous",
    "pronunciation": "[trǝˈmendǝs]",
    "meanings": "[形] 巨⼤的； 极⼤的",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "petrol",
    "pronunciation": "[ˈpetrǝl]",
    "meanings": "[名] 汽油",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "drift",
    "pronunciation": "[drɪft]",
    "meanings": "[动] 飘； 漂流； 漂移\n[名] 流动； 趋势",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "gently",
    "pronunciation": "[ˈdʒentli]",
    "meanings": "[副] 温柔地； 温和地； 轻轻地",
    "book": "2册",
    "lesson": "lesson 85-86"
  },
  {
    "word": "alibi",
    "pronunciation": "[ˈælǝbaɪ]",
    "meanings": "[名] 不在犯罪现场证明； 辩解； 托辞",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "commit",
    "pronunciation": "[kǝˈmɪt]",
    "meanings": "[动] 犯（罪､ 错）； 承诺；（公开地） 表达意⻅； 投⼊",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "inspector",
    "pronunciation": "[ɪnˈspektǝr]",
    "meanings": "[名] 检查员； 巡视员； 视察员",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "employer",
    "pronunciation": "[ɪmˈplɔɪǝr]",
    "meanings": "[名] 雇主",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "confirm",
    "pronunciation": "[kǝnˈfɜːrm]",
    "meanings": "[动] 证实； 确认； 批准",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "truth",
    "pronunciation": "[truːθ]",
    "meanings": "[名] 真理； 事实； 真实",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "trap",
    "pronunciation": "[træp]",
    "meanings": "[名] 圈套； 陷阱； 困境\n[动] 设圈套； 陷⼊（困境）",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "surface",
    "pronunciation": "[ˈsɜːrfɪs]",
    "meanings": "[名] 表⾯\n[动] 显露； 给…铺路⾯",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "explosive",
    "pronunciation": "[ɪkˈsplǝʊsɪv]",
    "meanings": "[名] 炸药； 爆炸物\n[形] 爆炸的",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "vibration",
    "pronunciation": "[vaɪˈbreɪʃ(ǝ)n]",
    "meanings": "[名] 震动； 颤动； 抖动",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "collapse",
    "pronunciation": "[kǝˈlæps]",
    "meanings": "[动] 倒塌； 昏倒； 暴跌； 折叠\n[名] 倒塌； 崩溃； 病倒； 暴跌",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "drill",
    "pronunciation": "[drɪl]",
    "meanings": "[名] 钻机； 反复的练习\n[动] 钻孔；（教某⼈） 反复练习",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "capsule",
    "pronunciation": "[ˈkæps(ǝ)l]",
    "meanings": "[名] 胶囊； 太空舱\n[形] 压缩的； 概要的\n[动] 压缩； 简述",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "layer",
    "pronunciation": "[ˈleɪǝr]",
    "meanings": "[名] 层； 层次",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "beneath",
    "pronunciation": "[bɪˈniːθ]",
    "meanings": "[介] 在…下⾯",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "lower",
    "pronunciation": "[ˈlǝʊǝr]",
    "meanings": "[动] 降低； 减少\n[形] 较低的； 下游的\n[形] 更低的； “low” 的⽐较级",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "progress",
    "pronunciation": "[ˈprɑːɡres]",
    "meanings": "[名] 进展； 进步； 缓慢前进； 稳步前进\n[动] 进展； 进步；（时间） 逐渐过去；前进",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "smoothly",
    "pronunciation": "[ˈsmuːðli]",
    "meanings": "[副] 顺利地； 平稳地； 顺畅地",
    "book": "2册",
    "lesson": "lesson 87-88"
  },
  {
    "word": "slip",
    "pronunciation": "[slɪp]",
    "meanings": "[动] 滑倒； 滑落； 溜⾛； 悄悄地放\n[名] 滑倒； 溜⾛； 疏忽； 纸⽚",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "comedy",
    "pronunciation": "[ˈkɑːmǝdi]",
    "meanings": "[名] 喜剧",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "queue",
    "pronunciation": "[kjuː]",
    "meanings": "[名] ⾏列； ⻓队\n[动] 排队",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "dull",
    "pronunciation": "[dʌl]",
    "meanings": "[形] 愚笨的； 枯燥的； 感觉迟钝的；⽆趣的； 阴暗的\n[动] 减轻 （疼痛）",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "artiste",
    "pronunciation": "[ɑːrˈtist]",
    "meanings": "[名] 表演艺术家； 艺⼈",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "advertiser",
    "pronunciation": "[ˈædvǝrtaɪzǝr]",
    "meanings": "[名] 登⼴告者； ⼴告商",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "chip",
    "pronunciation": "[tʃɪp]",
    "meanings": "[名] 炸薯条； 芯⽚； 碎⽚\n[动] 削成碎⽚； 碎裂",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "overfish",
    "pronunciation": "[ˌǝʊvǝˈfɪʃ]",
    "meanings": "[动] 捕捞过度",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "giant",
    "pronunciation": "[ˈdʒaɪǝnt]",
    "meanings": "[名] 巨⼈； 伟⼈\n[形] 巨⼤的； 伟⼤的",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "terrify",
    "pronunciation": "[ˈterɪfaɪ]",
    "meanings": "[动] 使恐惧； 使惊吓",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "diver",
    "pronunciation": "[ˈdaɪvǝr]",
    "meanings": "[名] 潜⽔员； 跳⽔者",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "oil rig",
    "pronunciation": "[ˈɔɪl rɪɡ]",
    "meanings": "[短语] ⽯油钻塔",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "wit",
    "pronunciation": "[wɪt]",
    "meanings": "[名] 机智 （的⼈）； ⻛趣（的⼈）； 才智； 头脑； 智慧",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "cage",
    "pronunciation": "[keɪdʒ]",
    "meanings": "[名] 笼⼦\n[及物] 把…关进笼⼦",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "shark",
    "pronunciation": "[ʃɑːrk]",
    "meanings": "[名] 鲨⻥",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "whale",
    "pronunciation": "[weɪl]",
    "meanings": "[名] 鲸\n[动] 捕鲸",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "variety",
    "pronunciation": "[vǝˈraɪǝti]",
    "meanings": "[名] 变化； 多样性；（同⼀事物） 不同种类；（动植物的） 品种",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "cod",
    "pronunciation": "[kɑːd]",
    "meanings": "[名] 鳕⻥； 鳕⻥⾁",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "skate",
    "pronunciation": "[skeɪt]",
    "meanings": "[动] 溜冰\n[名] 旱冰鞋",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "factor",
    "pronunciation": "[ˈfæktǝr]",
    "meanings": "[名] 因素； 要素； 因数； 代理⼈； 倍数； 系数\n[动] 把…因素包括进去； 分解成因⼦； 做代理商（或管家）",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "crew",
    "pronunciation": "[kruː]",
    "meanings": "[名] 全体船员； 全体⼈员",
    "book": "2册",
    "lesson": "lesson 89-90"
  },
  {
    "word": "balloon",
    "pronunciation": "[bǝˈluːn]",
    "meanings": "[名] ⽓球； 热⽓球； 玩具⽓球； 球状物\n[动] 乘热⽓球⻜⾏； 膨胀；（使） 激增",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "royal",
    "pronunciation": "[ˈrɔɪǝl]",
    "meanings": "[形] 皇家的； 盛⼤的",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "spy",
    "pronunciation": "[spaɪ]",
    "meanings": "[名] 间谍； 密探\n[动] 秘密侦察； 发现",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "track",
    "pronunciation": "[træk]",
    "meanings": "[名] 轨道； 踪迹； ⼩路； 跑道\n[动] 追踪； 跟踪",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "binoculars",
    "pronunciation": "[bɪˈnɑːkjǝlǝrz]",
    "meanings": "[名] 双筒望远镜",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "fast",
    "pronunciation": "[fæst]",
    "meanings": "[形] 快的； 迅速的\n[副] 迅速\n[动] 禁⻝； 斋戒",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "ladder",
    "pronunciation": "[ˈlædǝr]",
    "meanings": "[名] 梯⼦； 阶梯",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "shed",
    "pronunciation": "[ʃed]",
    "meanings": "[名] 棚屋\n[动] 摆脱； 去除； 使脱落",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "sarcastic",
    "pronunciation": "[sɑːrˈkæstɪk]",
    "meanings": "[形] 讽刺的； 嘲讽的； 挖苦的",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "tone",
    "pronunciation": "[tǝʊn]",
    "meanings": "[名] ⾳调； ⾊调； 语⽓； 氛围； 强健状况\n[动] 使协调； 使健壮",
    "book": "2册",
    "lesson": "lesson 91-92"
  },
  {
    "word": "noble",
    "pronunciation": "[ˈnǝʊb(ǝ)l]",
    "meanings": "[形] 贵族的； ⾼尚的\n[名] 贵族",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "monument",
    "pronunciation": "[ˈmɑːnjumǝnt]",
    "meanings": "[名] 纪念碑； 历史遗迹； 不朽作品",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "statue",
    "pronunciation": "[ˈstætʃuː]",
    "meanings": "[名] 雕像； 雕塑",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "liberty",
    "pronunciation": "[ˈlɪbǝrti]",
    "meanings": "[名] ⾃由",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "sculptor",
    "pronunciation": "[ˈskʌlptǝr]",
    "meanings": "[名] 雕刻家； 雕塑家",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "actual",
    "pronunciation": "[ˈæktʃuǝl]",
    "meanings": "[形] 真实的； 实际的",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "copper",
    "pronunciation": "[ˈkɑːpǝr]",
    "meanings": "[名] 铜； 铜币",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "support",
    "pronunciation": "[sǝˈpɔːrt]",
    "meanings": "[动] ⽀持； ⽀撑\n[名] 拥护； 帮助",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "framework",
    "pronunciation": "[ˈfreɪmwɜːrk]",
    "meanings": "[名] ⻣架； ⽀架； 框架",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "transport",
    "pronunciation": "[ˈtrænspɔːrt]",
    "meanings": "[名] 运输\n[动] 运输",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "site",
    "pronunciation": "[saɪt]",
    "meanings": "[名] 位置； 场所",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "pedestal",
    "pronunciation": "[ˈpedɪst(ǝ)l]",
    "meanings": "[名] 底座； 基座",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "Los Angeles",
    "pronunciation": "[ˌlɔːs ˈændʒǝlǝs]",
    "meanings": "[名] 洛杉矶（美国）",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "reluctant",
    "pronunciation": "[rɪˈlʌktǝnt]",
    "meanings": "[形] 不情愿的； 勉强的",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "weight",
    "pronunciation": "[weɪt]",
    "meanings": "[名] 重量； 砝码； 秤锤； 重物； 负担； 重要性\n[动] 使负担； 装载过重； 视…为重要",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "underwater",
    "pronunciation": "[ˌʌndǝrˈwɔːtǝr]",
    "meanings": "[形] ⽔下的\n[副] 在⽔下",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "tricycle",
    "pronunciation": "[ˈtraɪsɪk(ǝ)l]",
    "meanings": "[名] 三轮脚踏⻋",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "compete",
    "pronunciation": "[kǝmˈpiːt]",
    "meanings": "[动] 竞争； ⽐赛",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "yard",
    "pronunciation": "[jɑːrd]",
    "meanings": "[名] 码； 院⼦； 庭院",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "gasp",
    "pronunciation": "[ɡæsp]",
    "meanings": "[动] 喘⽓； 喘息； 倒抽⽓\n[名] 喘⽓； 喘息",
    "book": "2册",
    "lesson": "lesson 93-94"
  },
  {
    "word": "fantasy",
    "pronunciation": "[ˈfæntǝsi]",
    "meanings": "[名] 幻想； 奇幻",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "ambassador",
    "pronunciation": "[æmˈbæsǝdǝr]",
    "meanings": "[名] ⼤使",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "Escalopia",
    "pronunciation": "[eˈskɑːlǝpiǝ]",
    "meanings": "[名] 艾斯卡罗⽐亚（虚构的国名）",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "frightful",
    "pronunciation": "[ˈfraɪtf(ǝ)l]",
    "meanings": "[形] 可怕的； 讨厌的； ⾮常的",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "fire extinguisher",
    "pronunciation": "[ˈfaɪǝr ɪkstɪŋɡwɪʃǝr]",
    "meanings": "[短语] 灭⽕器",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "drily",
    "pronunciation": "[ˈdraɪli]",
    "meanings": "[副] 冷淡地； 枯燥⽆味地",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "embassy",
    "pronunciation": "[ˈembǝsi]",
    "meanings": "[名] ⼤使馆",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "heaven",
    "pronunciation": "[ˈhev(ǝ)n]",
    "meanings": "[名] 天堂； 天国",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "basement",
    "pronunciation": "[ˈbeɪsmǝnt]",
    "meanings": "[名] 地下室",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "definitely",
    "pronunciation": "[ˈdefɪnǝtli]",
    "meanings": "[副] 明确地； 肯定地",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "post",
    "pronunciation": "[pǝʊst]",
    "meanings": "[名] 邮件； 邮寄； 职位； 帖⼦； 岗位； 柱\n[动] 邮寄； 张贴； 公布； 使驻守",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "shot",
    "pronunciation": "[ʃɑːt]",
    "meanings": "[名] 射击； 射⻔； 照⽚； 注射\n[动] 射击； 拍摄（电影）； 疾驰；“shoot” 的过去式和过去分词",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "festival",
    "pronunciation": "[ˈfestɪv(ǝ)l]",
    "meanings": "[名] 节⽇",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "lantern",
    "pronunciation": "[ˈlæntǝrn]",
    "meanings": "[名] 灯笼； 提灯",
    "book": "2册",
    "lesson": "lesson 95-96"
  },
  {
    "word": "spectacle",
    "pronunciation": "[ˈspektǝk(ǝ)l]",
    "meanings": "[名] 景象； 奇观； 场⾯； 眼镜",
    "book": "2册",
    "lesson": "lesson 95-96"
  }
];
