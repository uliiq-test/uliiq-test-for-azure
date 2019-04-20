const parseArgs = require('minimist')
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "127.0.0.1"


var GTAG_ID = 'UA-XXXXXXX-XX';
if(process.env.ASPNETCORE_ENVIRONMENT === 'production'){
  // 本番環境設定値
  GTAG_ID='UA-2977992-32'
} else if (process.env.ASPNETCORE_ENVIRONMENT === 'developmen') {
  // テスト環境設定値
  GTAG_ID='UA-DDDDDDD-DD'
} else if (process.env.ASPNETCORE_ENVIRONMENT === 'uliiq') {
  // ユリーク環境設定値
  GTAG_ID='UA-UUUUUUU-UU'
}　else if (process.env.ASPNETCORE_ENVIRONMENT === 'local') {
  // ローカル環境設定値
  GTAG_ID='UA-LLLLLLL-LL'
}


module.exports = {
  //TODO:現在認証がSPAモードでしか動作しないため、以下の設定を一時的に追加。
  // mode: 'spa',
  build: {
    vendor: ['msal','vue-awesome-swiper'],

    extend (config, { isClient, loaders: { vue } }) {
      // クライアントのバンドルの Webpack 設定のみを拡張する
      if (isClient) {
        vue.transformAssetUrls.video = ['src', 'poster']
      }
    }
  },

  router: {
    middleware: ['auth']
  },
  env: {
    baseUrl: process.env.BASE_URL || `http://${host}:${port}`,
  },
  head: {
    title: "WishHub（ウィッシュハブ）｜アイドル・アーティストの「お願い」をファンの行動で「叶える」",
    meta: [
      {
        name: "robots",
        content: "noindex" 
      },
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        name: "description",
        content:
          "ブロックチェーンにより行動支援を見える化する、まったく新しいサービスです。"
      },
      {
        name: "author",
        content:
          "Contents Works Inc."
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    script: [
        { src: 'https://secure.aadcdn.microsoftonline-p.com/lib/0.1.1/js/msal.min.js' },
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js', type: 'text/javascript', body: true  },
    ],
    link: [
      // Fonts
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c"
      },
      {
        rel: "stylesheet",
        src: "https://fonts.googleapis.com/css?family=M+PLUS+1p"
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico?v=2",
        type: "image/vnd.microsoft.icon"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: [
    "~assets/vendor/nucleo/css/nucleo.css",
    "~assets/vendor/font-awesome/css/font-awesome.min.css",
    "swiper/dist/css/swiper.css",
    "~assets/dest/style.css",
  ],
  build: {},
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "~/modules/typescript.js",
    ['@nuxtjs/google-analytics', {
        id: `${GTAG_ID}`
      }
    ]
  ],
  plugins:[
    //{ src: '~plugins/persistedstate.ts', ssr: false },
    '~/plugins/cookie-storage.ts',
    //{ src: '~/plugins/localStorage.ts', ssr: false },
    '~/plugins/axios.ts',
    '~/plugins/filters.ts',
    { src: '~plugins/vue-awesome-swiper.ts', ssr: false },
    { src:'~/plugins/MsalWishHub.ts', ssr:false},
    { src: '~/plugins/infiniteloading', ssr: false },
  ],
  manifest: {
    name: "WishHub's Page",
    lang: 'ja'
  },
  axios :{
    baseURL: "https://wishhub-dev-api.azurewebsites.net" || `http://${host}:${port}`,    
    proxy:true
  },
  proxy: {
      '/api' :'https://wishhub-dev-api.azurewebsites.net'
  },
}
