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
    extend (config, { isClient, loaders: { vue } }) {
      // クライアントのバンドルの Webpack 設定のみを拡張する
      if (isClient) {
        vue.transformAssetUrls.video = ['src', 'poster']
      }
    }
  },
  env: envSet,
  head: {
    title: "WishHub（ウィッシュハブ）｜一人では達成できなかった目標を、仲間を集めてゲーム感覚でチャレンジするアプリです。",
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
        content: "WishHub（ウィッシュハブ）は、一人では達成できなかった目標を、仲間を集めてゲーム感覚でチャレンジするアプリです。"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "WishHub（ウィッシュハブ）｜一人では達成できなかった目標を、仲間を集めてゲーム感覚でチャレンジするアプリ"
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
        content: "https://wishhub.fan/img/top_sns_share.jpg"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "WishHub（ウィッシュハブ）は、一人では達成できなかった目標を、仲間を集めてゲーム感覚でチャレンジするアプリです。"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@WishHub_fan"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "WishHub（ウィッシュハブ）｜一人では達成できなかった目標を、仲間を集めてゲーム感覚でチャレンジするアプリ"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "WishHub（ウィッシュハブ）は、一人では達成できなかった目標を、仲間を集めてゲーム感覚でチャレンジするアプリです。"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://wishhub.fan/img/sns_share.jpg"
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
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
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
  // pwa safariの「プレイヤー設定（更新）で最新情報が反映されない」暫定対処
  plugins:[
    '~/plugins/cookie-storage.ts',
    { src:'~/plugins/msal.ts', ssr: false },
    { src:'~/plugins/browser-image-compression.ts', ssr: false },
    '~/plugins/vee-validate.ts',
    '~/plugins/axios.ts',
    '~/plugins/filters.ts',
    { src: '~plugins/vue-awesome-swiper.ts', ssr: false },
    { src: '~/plugins/infiniteloading.ts', ssr: false },
    '~/plugins/navi-guard.ts',
    '~/plugins/navi-after.ts',
    { src: '~/plugins/croppie.ts', ssr: false },
    { src: '~/plugins/vue-awesome-swiper.ts', ssr: false },
    { src: '~/plugins/CripBoardCopy.ts', ssr: false },
    { src: '~/plugins/vue-lazyload.ts', ssr: false }
  ],
  pwa: {
    manifest: {
      "name": "WishHub",
      "short_name": "WishHub",
      "display": "fullscreen",
      "Scope": "/",
      "start_url": envSet.WEB_URL,
      "description": "一人では達成できなかった目標を、仲間を集めてゲーム感覚でチャレンジするアプリ",
      "splash_pages": null,
      "lang": "ja",
      "icons": [
        {
          "src": "/img/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "/img/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "/img/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "/img/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "/img/icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "/img/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/img/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "/img/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
    },
    workbox: {
      skipWaiting: true,
      clientsClaim: false,
      routingExtensions: '~extensions/sw.routing.js' 
    },
  },
  axios :{
    baseURL: envSet.API_URL || `http://${host}:${port}`,
    proxy:true
  },
  proxy: {
      '/api' : envSet.API_URL
  },
}
