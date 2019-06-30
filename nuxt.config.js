const parseArgs = require('minimist')

const environment = process.env.NODE_ENV || 'test';
const envSet = require(`./env.${environment}.js`)
console.log("use crossenv: " + `./env.${environment}.js`);

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

module.exports = {
  build: {
    vendor: ['vue-awesome-swiper'],

    extend (config, { isClient, loaders: { vue } }) {
      // クライアントのバンドルの Webpack 設定のみを拡張する
      if (isClient) {
        vue.transformAssetUrls.video = ['src', 'poster']
      }
    }
  },
  env: envSet,
  head: {
    title: "WishHub（ウィッシュハブ）｜小さな行動から始める、誰かの夢のお手伝い アクションファンディングサービス",
    meta: [
      { hid: 'fb:app_id', property: 'fb:app_id', content: envSet.FB_APP_ID},
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        name: "google-site-verification",
        content:
          "AqZAAjgcZdaYEcRJ4NmfxlUcJRFzYWydrt5ojpZZDIg"
      },
      {
        name: "author",
        content:
          "Contents Works Inc."
      },
      {
        hid: "description",
        name: "description",
        content: "WishHub（ウィッシュハブ）は、誰でも「小さな行動」で、誰かの『夢』を応援できる行動支援（アクションファンディング）サービスです。"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "WishHub（ウィッシュハブ）｜小さな行動から始める、誰かの夢のお手伝い アクションファンディングサービス"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "article"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "WishHub"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://wishhub.fan"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://wishhub.fan/img/reward_common.jpg"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "WishHub（ウィッシュハブ）は、誰でも「小さな行動」で、誰かの『夢』を応援できる行動支援（アクションファンディング）サービスです。"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@WishHub_fan"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "WishHub（ウィッシュハブ）｜小さな行動から始める、誰かの夢のお手伝い アクションファンディングサービス"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "WishHub（ウィッシュハブ）は、誰でも「小さな行動」で、誰かの『夢』を応援できる行動支援（アクションファンディング）サービスです。"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://wishhub.fan/img/reward_common.jpg"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      }
    ],
    script: [
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js', type: 'text/javascript', body: true  }
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
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "~/modules/typescript.js",
    /* See https://matteogabriele.gitbooks.io/vue-analytics/content/docs/turn-off-development.html */
    // GTAG_IDが未設定の場合はトラッキングを送信しない
    ['@nuxtjs/google-analytics',
      { id: envSet.GTAG_ID || 'dummy',
        debug: {
          sendHitTask: (envSet.GTAG_ID ? true : false),
        }
      }
    ],
    ['cookie-universal-nuxt', { parseJSON: false }]
  ],
  plugins:[
    '~/plugins/cookie-storage.ts',
    { src:'~/plugins/msalWishHub.ts', ssr: false },
    '~/plugins/vee-validate.ts',
    '~/plugins/axios.ts',
    '~/plugins/filters.ts',
    { src: '~plugins/vue-awesome-swiper.ts', ssr: false },
    { src: '~/plugins/infiniteloading.ts', ssr: false },
    '~/plugins/navi-guard.ts',
    { src: '~/plugins/croppie.ts', ssr: false },
  ],
  manifest: {
    lang: 'ja',
    name: "WishHub",
    description: "小さな行動から始める、誰かの夢のお手伝い アクションファンディングサービス"
  },
  axios :{
    baseURL: envSet.API_URL || `http://${host}:${port}`,
    proxy:true
  },
  proxy: {
      '/api' : envSet.API_URL
  },
}
