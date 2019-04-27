/* locale: es - Spanish */
export default {
  about: {
    copy:
      "La aplicación de audio para unir todos los servicios de transmisión de música. Reproducir canciones " +
      "de Spotify, Last.fm, Soundcloud, YouTube, mp3s. Crea listas de reproducción" +
      "en servicios como YouTube, Soundcloud, Spotify, Last.fm y más. " +
      "Crea y comparte listas de reproducción en todos los servicios. Seguir a los artistas y promover " +
      "canciones.",
    arriving: "Llegando a 2018",
    title: "Sobre"
  },
  app: {
    network: {
      online: "Con conexión",
      offline: "Sin conexión",
      "offline-detail": "No conectado"
    },

    noscript: {
      title: "mirai.audio se utiliza mejor con JavaScript",
      copy:
        "El euqipo de mirai.audio respeta la decision de deshabilitar JavaScript. " +
        "La funcionalidad de Play/Pause y sin conexión necesitan Javascript. " +
        "el euqipo de mirai.audio se esfuerza en" +
        '<a href="https://github.com/mirai-audio/mir/wiki/Browser-Support">support</a> ' +
        "usuarios sin JavaScript habilitado."
    }
  },
  common: {
    appname: "mirai.audio",
    tagline: "Escucha todo, escucha en todos lados",

    close: "Cerrar",
    loading: "cargando…",
    logout: "Salir",

    svgjar: "svg-jar"
  },
  components: {
    "ma-auth": {
      socialTitle: "Registrarse con ",
      title: "O registrarse",
      "cta-login": "Registrarse con su email",
      "cta-signup": "Registrarse",
      "password-confirm": "Confirmar contraseña"
    },

    "ma-create-media": {
      add: "Aña",
      "error-assertion-failed": "Se produjo un error al agregar esta canción.",
      "error-the-adapter-operation-was-aborted":
        "Se produjo un error, inténtalo de nuevo más tarde.",
      "media-title-label": "Titulo",
      "media-title-placeholder": "El Titulo",
      "media-url-label": "URL",
      "media-url-placeholder": "https://www.youtube.com/watch?v=hpDvtIt6Lsc"
    },

    "ma-header": {
      back: "Atras"
    },

    "ma-login": {
      "cta-login": "Iniciar",
      email: "Email",
      "email-placeholder": "name@example.com",
      password: "Contraseña"
    },

    "ma-media-detail": {
      "label-title": "Título",
      "label-url": "URL",
      "label-date": "Fecha agregada",
      "label-provider": "Proveedor",
      "label-provider-uid": "ID"
    },

    "ma-media-list-item": {
      "delete-button": "Borrar"
    }
  },
  errors: {
    login: {
      other: "Hemos tenido un error. Intentelo de nuevo mas tarde.",
      unauthorized: "Email o contraseña incorrecta.",

      // POST to /users
      "server-internal-error":
        "Hemos tenido un error. Intentelo de nuevo mas tarde.",
      "email-has-invalid-format": "Email invalido.",
      "email-should-be-at-least-7-character(s)":
        "Email tiene que tener al menos 7 caracteres",
      "email-has-already-been-taken": "Este email ya existe.",
      "password-confirmation-does-not-match-confirmation":
        "No hemos encontrado ninguna contraseña",
      "password-should-be-at-least-12-character(s)":
        "La contraseña tiene que tener al menos 12 caracteres."
    }
  },
  routes: {
    application: {
      title: "Home"
    },

    login: {
      title: "Registrarse",
      "cta-twitter": "Twitter",
      "cta-google": "Google",
      "cta-facebook": "Facebook"
    },

    media: {
      index: {
        title: "Detalles"
      },
      new: {
        title: "Añadir canción"
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
      title: "Bienvenido"
    }
  },
  validations: {
    /* overrides for ember-changeset-validation messages
     * see: ember-changeset-validations/utils/messages
     */
    accepted: "{description} tiene que ser aceptado",
    after: "{description} tiene que ser despues {after}",
    before: "{description} tiene que ser antes {before}",
    between: "{description} debe estar entre {min} y {max} caracteres",
    blank: "{description} no puede estar en blanco",
    collection: "{description} tiene que ser una collecón",
    confirmation: "{description} no se encontró {on}",
    date: "{description} debe de ser una fecha valida",
    description: "Este campo",
    email: "{description} Debe ser una dirección de correo electrónico válida",
    empty: "{description}no puede estar vacio",
    equalTo: "{description} tiene que ser igual que {is}",
    even: "{description} debe ser incluso",
    exclusion: "{description} esta reservado",
    greaterThan: "{description} tiene que ser mayor que {gt}",
    greaterThanOrEqualTo: "{description} debe ser mayor que o igual que {gte}",
    inclusion: "{description} no esta incluido en la lista",
    invalid: "{description} es invalido",
    lessThan: "{description} tiene que ser menos que {lt}",
    lessThanOrEqualTo:
      "{description} tiene que ser menor que o igual que {lte}",
    multipleOf: "{description} must be a multiple of {multipleOf}",
    notANumber: "{description} tiene que ser un numbero",
    notAnInteger: "{description} tiene que ser un integer",
    odd: "{description} debe ser impar",
    onOrAfter: "{description} must be on or after {onOrAfter}",
    onOrBefore: "{description} must be on or before {onOrBefore}",
    otherThan: "{description} tiene que ser diferente a {value}",
    phone: "{description} Debe ser un numero de telefono válida",
    positive: "{description} tiene que ser positivo",
    present: "{description} debe de estar en blanco",
    singular: "{description} no puede ser una colleción",
    tooLong: "{description} es demasiado largo (maximo {max} characteres)",
    tooShort: "{description} es demasiado corto (minimo {min} characteres)",
    url: "{description} debe ser una URL válida",
    wrongDateFormat: "{description} el formato tiene que ser {format}",
    wrongLength:
      "{description}la longitud incorrecta (tiene que ser {is} characteres)"
  }
};
