/* locale: en-US - US English */
export default {
  about: {
    copy:
      "The audio app to unite all music streaming services.  Play songs " +
      "from Spotify, Last.fm, Soundcloud, YouTube, mp3s. Create playlists " +
      "across services like YouTube, Soundcloud, Spotify, Last.fm, and more. " +
      "Create and share playlists across services. Follow artists and promote " +
      "songs.",
    arriving: "Arriving in 2018",
    title: "About"
  },

  app: {
    network: {
      online: "Online",
      offline: "Offline",
      "offline-detail": "No connection"
    },
    noscript: {
      title: "mirai.audio is better with JavaScript",
      copy:
        "mirai.audio team respects the decision to disable JavaScript. " +
        "Play/Pause and offline functionality require JavaScript to function. " +
        "mirai.audio team strives to " +
        '<a href="https://github.com/mirai-audio/mir/wiki/Browser-Support">support</a> ' +
        "users without JavaScript enabled."
    }
  },
  common: {
    appname: "mirai.audio",
    tagline: "Play everything, play everywhere",

    close: "Close" /* Close (a dialog, or window) */,
    loading: "loading…" /* please wait, loading… */,
    logout: "Logout" /* Logout (of the site) */,

    svgjar: "svg-jar"
  },
  components: {
    "ma-auth": {
      socialTitle: "Sign in with",
      title: "Or sign up",
      "cta-login": "Sign in with email",
      "cta-signup": "Sign up",
      "password-confirm": "Confirm password"
    },

    "ma-create-media": {
      add: "Add",
      "error-assertion-failed": "An error occurred adding this song.",
      "error-the-adapter-operation-was-aborted":
        "An error occurred, try again later.",
      "error-ember-data-request-post-http":
        "An error occurred, try again later.",
      "media-title-label": "Title",
      "media-title-placeholder": "A Title",
      "media-url-label": "URL",
      "media-url-placeholder": "https://www.youtube.com/watch?v=hpDvtIt6Lsc"
    },

    "ma-header": {
      back: "Back"
    },

    "ma-login": {
      "cta-login": "Sign in",
      email: "Email",
      "email-placeholder": "name@example.com",
      password: "Password"
    },

    "ma-media-detail": {
      "label-title": "Title",
      "label-url": "URL",
      "label-date": "Date added",
      "label-provider": "Provider",
      "label-provider-uid": "ID"
    },

    "ma-media-list-item": {
      "delete-button": "Delete"
    }
  },
  errors: {
    login: {
      other: "An error occurred, try again later.",
      unauthorized: "Email or password is incorrect.",

      // POST to /users
      "server-internal-error": "An error occurred, try again later.",
      "email-has-invalid-format": "Email format invalid.",
      "email-should-be-at-least-7-character(s)":
        "Email must be at least 7 characters",
      "email-has-already-been-taken": "A user with that email already exists.",
      "password-confirmation-does-not-match-confirmation":
        "Password confirmation does not match the password.",
      "password-should-be-at-least-12-character(s)":
        "Password should be at least 12 characters"
    }
  },
  routes: {
    application: {
      title: "Home"
    },

    login: {
      title: "Sign in",
      "cta-twitter": "Twitter",
      "cta-google": "Google",
      "cta-facebook": "Facebook"
    },

    media: {
      index: {
        title: "Detail"
      },
      new: {
        title: "Add song"
      }
    },

    styleguide: {
      title: "Styleguide",
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
        "作中の年表は別項、攻殻機動隊シリーズの年表を参照。"
    },

    typography: {
      title: "Typography"
    },

    welcome: {
      title: "Welcome"
    }
  },
  validations: {
    /* overrides for ember-changeset-validation messages
     * see: ember-changeset-validations/utils/messages
     */
    accepted: "{description} must be accepted",
    after: "{description} must be after {after}",
    before: "{description} must be before {before}",
    between: "{description} must be between {min} and {max} characters",
    blank: "{description} can't be blank",
    collection: "{description} must be a collection",
    confirmation: "{description} doesn't match {on}",
    date: "{description} must be a valid date",
    description: "This field",
    email: "{description} must be a valid email address",
    empty: "{description} can't be empty",
    equalTo: "{description} must be equal to {is}",
    even: "{description} must be even",
    exclusion: "{description} is reserved",
    greaterThan: "{description} must be greater than {gt}",
    greaterThanOrEqualTo:
      "{description} must be greater than or equal to {gte}",
    inclusion: "{description} is not included in the list",
    invalid: "{description} is invalid",
    lessThan: "{description} must be less than {lt}",
    lessThanOrEqualTo: "{description} must be less than or equal to {lte}",
    multipleOf: "{description} must be a multiple of {multipleOf}",
    notANumber: "{description} must be a number",
    notAnInteger: "{description} must be an integer",
    odd: "{description} must be odd",
    onOrAfter: "{description} must be on or after {onOrAfter}",
    onOrBefore: "{description} must be on or before {onOrBefore}",
    otherThan: "{description} must be other than {value}",
    phone: "{description} must be a valid phone number",
    positive: "{description} must be positive",
    present: "{description} must be blank",
    singular: "{description} can't be a collection",
    tooLong: "{description} is too long (maximum is {max} characters)",
    tooShort: "{description} is too short (minimum is {min} characters)",
    url: "{description} must be a valid url",
    wrongDateFormat: "{description} must be in the format of {format}",
    wrongLength: "{description} is the wrong length (should be {is} characters)"
  }
};
