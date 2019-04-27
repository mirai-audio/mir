/* locale: zh-ch Chinese (Mandarin) */
export default {
  about: {
    copy:
      "所有的流媒体音乐播放服务联合起来！ 从" +
      "Spotify, Last.fm, Soundcloud, YouTube, 或者mp3中任意聆听." +
      "跨越YouTube, Soundcloud, Spotify, Last.fm等服务直接创建和分享播放列表. " +
      "关注歌手并分享喜爱的歌曲。",
    arriving: "2018年 敬请期待"
  },
  app: {
    network: {
      online: "在线",
      offline: "离线",
      "offline-detail": "无网络连接"
    },

    noscript: {
      title: "mirai.audio需要JavaScript以获得更好体验",
      copy:
        "mirai.audio团队尊重您禁用JavaScript的选择。" +
        "播放/暂停和离线功能需要开启JavaScript才可以使用。" +
        "mirai.audio团队将尽全力" +
        '<a href="https://github.com/mirai-audio/mir/wiki/Browser-Support">支持</a> ' +
        "未启用JavaScript的用户。"
    }
  },
  common: {
    appname: "mirai.audio",
    tagline: "随时随地，随意聆听",

    close: "关闭",
    loading: "装载…",
    logout: "登出",

    svgjar: "svg-jar"
  },
  components: {
    "ma-auth": {
      socialTitle: "登录",
      title: "或注册",
      "cta-login": "使用Email登录",
      "cta-signup": "注册",
      "password-confirm": "确认密码"
    },

    "ma-create-media": {
      add: "Add",
      "error-assertion-failed": "An error occurred adding this song.",
      "error-the-adapter-operation-was-aborted":
        "An error occurred, try again later.",
      "error-ember-data-request-post-http":
        "An error occurred, try again later.",
      "media-title-label": "标题",
      "media-title-placeholder": "标题",
      "media-url-label": "URL",
      "media-url-placeholder": "https://www.youtube.com/watch?v=hpDvtIt6Lsc"
    },

    "ma-header": {
      back: "返回"
    },

    "ma-login": {
      "cta-login": "登录",
      email: "Email",
      "email-placeholder": "name@example.com",
      password: "密码"
    },

    "ma-media-detail": {
      "label-title": "标题",
      "label-url": "URL",
      "label-date": "添加日期",
      "label-provider": "服务名称",
      "label-provider-uid": "唯一ID"
    },

    "ma-media-list-item": {
      "delete-button": "删除"
    }
  },
  errors: {
    login: {
      other: "发生了未知的错误，请稍后再试。",
      unauthorized: "Email或者密码错误。",

      // POST to /users
      "server-internal-error": "发生了未知的错误，请稍后再试。",
      "email-has-invalid-format": "Email格式不正确。",
      "email-should-be-at-least-7-character(s)": "Email必须包含至少7个字符。",
      "email-has-already-been-taken": "该Email已被注册。",
      "password-confirmation-does-not-match-confirmation":
        "两次密码输入不一致。",
      "password-should-be-at-least-12-character(s)":
        "密码必须包含至少12个字符。"
    }
  },
  routes: {
    application: {
      title: "主页"
    },

    login: {
      title: "登录",
      "cta-twitter": "Twitter",
      "cta-google": "Google",
      "cta-facebook": "Facebook"
    },

    media: {
      index: {
        title: "详细"
      },
      new: {
        title: "添加歌曲"
      }
    },

    styleguide: {
      title: "风格指南",
      "latin-1":
        "! \" # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; " +
        "< = > ?@" +
        "A B C D E F G H I J K L M N OP Q R S T U V W X Y Z [ \\ ] ^ _`" +
        "a b c d e f g h i j k l m n op q r s t u v w x y z { | } ~",
      hiragana:
        "ぁ あ ぃ い ぅ う ぇ え ぉ お か が き ぎ く ぐ け げ " +
        "こ ご さ ざ し じ す ず せ ぜ そ ぞ た だ ち ぢ っ つ づ て で " +
        "と ど な に ぬ ね の は ば ぱ ひ び ぴ ふ ぶ ぷ へ べ ぺ ほ ぼ " +
        "ぽ ま み む め も ゃ や ゅ ゆ ょ よ ら り る れ ろ ゎ わ ゐ ゑ " +
        "を ん ゔ ゕ ゖ  ゙ ゚ ゛ ゜ ゝ ゞ ゟ",
      katakana:
        "゠ ァ ア ィ イ ゥ ウ ェ エ ォ オ カ ガ キ ギ ク グ ケ ゲ " +
        "コ ゴ サ ザ シ ジ ス ズ セ ゼ ソ ゾ タ ダ チ ヂ ッ ツ ヅ テ デ " +
        "ト ド ナ ニ ヌ ネ ノ ハ バ パ ヒ ビ ピ フ ブ プ ヘ ベ ペ ホ ボ ポ " +
        "マ ミ ム メ モ ャ ヤ ュ ユ ョ ヨ ラ リ ル レ ロ ヮ ワ ヰ ヱ ヲ ン ヴ " +
        "ヵ ヶ ヷ ヸ ヹ ヺ ・ ー ヽ ヾ ヿ",
      "lorem-ipsum":
        "Lorem ipsum dolor sit amet, consectetur adipiscing " +
        "複素数体であれば、任意のCM-タイプの A は、実際。",
      "lorem-ipsum-en-title": "Suspendisse Sed Iaculis Metus",
      "lorem-ipsum-en":
        "Lorem ipsum dolor sit amet, consectetur adipiscing " +
        "elit. Etiam pulvinar ultricies dictum. Morbi erat nisi, suscipit at " +
        "viverra eget, rhoncus ac sapien.  Maecenas eleifend nulla quis " +
        "consectetur sollicitudin. Mauris vitae faucibus magna. Mauris at " +
        "maximus risus. Praesent consequat elementum elementum. Vestibulum " +
        "sollicitudin ac dolor congue auctor. Fusce euismod ante nec ipsum " +
        "efficitur, ac porta justo ultrices. Suspendisse sed iaculis metus, " +
        "vitae tincidunt est.  Phasellus vulputate eros lacus, id dictum sem " +
        "mollis in. Praesent massa urna, commodo a facilisis sed, ullamcorper " +
        "sit amet lacus.",
      "lorem-ipsum-ja-title": "攻殻機動隊",
      "lorem-ipsum-ja":
        "時は21世紀、第3次核大戦とアジアが勝利した第4次非核大" +
        "戦を経て、世界は「地球統一ブロック」となり、科学技術が飛躍的に高度化" +
        "した日本が舞台。その中でマイクロマシン(Micromachine)技術（作中では" +
        "マイクロマシニング" +
        "と表記されている）を使用して脳の神経ネットに素子（デバイス）を直接接続" +
        "する電脳化技術や、義手・義足にロボット技術を付加した発展系であるサイボ" +
        "ーグ（義体化）技術が発展、普及した。結果、多くの人間が電脳によってイン" +
        "ターネットに直接アクセスできる時代が到来した。生身の人間、電脳化した人" +
        "間、サイボーグ、アンドロイド、バイオロイドが混在する社会の中で、テロや" +
        "暗殺、汚職などの犯罪を事前に察知してその被害を最小限に防ぐ内務省直属の" +
        "攻性公安警察組織「公安9課」（通称「攻殻機動隊」）の活動を描いた物語。" +
        "作中の年表は別項、攻殻機動隊シリーズの年表を参照。",
      "lorem-ipsum-zh-cn-title": "攻壳机动队",
      "lorem-ipsum-zh-cn":
        "21世纪，经过第三次和第四次世界大战洗礼的近未来科技已可" +
        "将人类除大脑外的所有身体器官用生化电子的义体代替，并将人类大脑改装成与" +
        "具有互联网功能的电子脑。上层社会和有经济条件的中产阶级人类纷纷进行义体" +
        "手术，加装先进的电子脑，并用性能更高的人造义肢替换原有的身体器官——赛博" +
        "格（生化人）已然渐渐成为社会常态。" +
        "人类社会的全面义体化（电子化）虽然带来了巨大的便利，却也不可避免地催生" +
        "出了一种新的犯罪方式——电子犯罪。电子化并互联网化的人类开始受到黑客攻击" +
        "，暴露在大脑被入侵、记忆被篡改等危险之中。日本政府因此专门成立了首相直" +
        "属的特别情报机构“公安九课”（也就是所谓的“攻壳机动队”），来应对这种新兴" +
        "的犯罪。"
    },

    typography: {
      title: "文版设计"
    },

    welcome: {
      title: "欢迎"
    }
  },
  validations: {
    /* overrides for ember-changeset-validation messages
     * see: ember-changeset-validations/utils/messages
     */
    accepted: "{description}必须选择接受",
    after: "{description}必须在{after}之后",
    before: "{description}必须在{before}之前",
    between: "{description}必须在{min}和{max}之间",
    blank: "{description}不可以为空白",
    collection: "{description}必须是集合",
    confirmation: "{description}与{on}不一致",
    date: "{description}必须是正确的日期格式",
    description: "该字段",
    email: "{description}必须是有效的Email地址",
    empty: "{description}不可以为空",
    equalTo: "{description}必须等于{is}",
    even: "{description}必须是偶数",
    exclusion: "{description}是保留字段",
    greaterThan: "{description}必须大于{gt}",
    greaterThanOrEqualTo: "{description}必须大于或等于{gte}",
    inclusion: "{description}并未被包含在列表中",
    invalid: "{description}无效",
    lessThan: "{description}必须小于{lt}",
    lessThanOrEqualTo: "{description}必须小于或等于{lte}",
    notANumber: "{description}必须是数字",
    notAnInteger: "{description}必须是整数",
    odd: "{description}必须是奇数",
    onOrAfter: "{description} must be on or after {onOrAfter}",
    onOrBefore: "{description} must be on or before {onOrBefore}",
    otherThan: "{description}不可以是{value}",
    phone: "{description}必须是有效的电话号码",
    positive: "{description}必须大于零",
    present: "{description}必须是空白",
    singular: "{description}不可以是集合",
    tooLong: "{description}太长了(最长为{max}个字符)",
    tooShort: "{description}太短了(最短为{min}个字符)",
    url: "{description}必须是有效的URL",
    wrongDateFormat: "{description}必须使用类似{format}的格式",
    wrongLength: "{description}长度错误(必须是{is}个字符)"
  }
};
