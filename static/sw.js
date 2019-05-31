importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1c20394e6328d9029943.js",
    "revision": "96114ab18a191bbd389652a11098a4ea"
  },
  {
    "url": "/_nuxt/1ea6b7a595a7a614a749.js",
    "revision": "a7f19e0eb20fcc7358296bfa4a3e0bfc"
  },
  {
    "url": "/_nuxt/32f88f0abc77cc6bebbc.js",
    "revision": "9d7449b3a2e04ab9dd0a7fc6a60f106b"
  },
  {
    "url": "/_nuxt/44d355b64238bc3a8a62.js",
    "revision": "9d9ad7903411541b11faa0de11951d80"
  },
  {
    "url": "/_nuxt/4c84fefcd1e5e985c307.js",
    "revision": "dffd801b07c3b1f53c4c4674bfea2215"
  },
  {
    "url": "/_nuxt/5ee5a2cbf7b8649666f3.js",
    "revision": "fcea2a99efb8e14331806d07c2dd1d98"
  },
  {
    "url": "/_nuxt/5fda01512215c4a0c656.js",
    "revision": "754ed4988908701863ef32d1158aedf5"
  },
  {
    "url": "/_nuxt/633c22c03f64d6f02dcb.js",
    "revision": "a6c38f45bebd90dc2ad5d69d1166dcfe"
  },
  {
    "url": "/_nuxt/64902782fd8005d2d335.js",
    "revision": "5df32e0bcb12fa676ad55c9ae4130a1b"
  },
  {
    "url": "/_nuxt/67953294aea61e743830.js",
    "revision": "eee921b505aee747bb832cd83587772d"
  },
  {
    "url": "/_nuxt/7a015edffa347ee69733.js",
    "revision": "23a9dbcc44c38ea39ca5fad82d90a1a3"
  },
  {
    "url": "/_nuxt/7c397356666381c3c5fe.js",
    "revision": "4737f8cbe2262032a2ec81564d320715"
  },
  {
    "url": "/_nuxt/900368d638ac44d1ffc7.js",
    "revision": "a77ff0a7de7c9171f2c141c92af994a5"
  },
  {
    "url": "/_nuxt/9deab07878ef5a86fade.js",
    "revision": "fdc305aebb95cc36faf6597008b91766"
  },
  {
    "url": "/_nuxt/ab434eed2b5557b8a2e6.js",
    "revision": "aba5b3d29ff04bf16145f20609a07013"
  },
  {
    "url": "/_nuxt/ac44e329f294b8f0e119.js",
    "revision": "ccce64223dd06737014b8c7774c94519"
  },
  {
    "url": "/_nuxt/ae0f3871cbdfe1c8e3b6.js",
    "revision": "17e9c19cabafd08104e7a5fcd1f3654d"
  },
  {
    "url": "/_nuxt/bb5663d3a9aa55503295.js",
    "revision": "a110d07105425ac779e5d554de40ef94"
  },
  {
    "url": "/_nuxt/c207d98a6b9472ca790f.js",
    "revision": "df333c1c42dc410458bf996bb8138c82"
  },
  {
    "url": "/_nuxt/d7735b3c118f4188ce29.js",
    "revision": "764f42f5d7980eaf5d6a0fad86a0c57f"
  },
  {
    "url": "/_nuxt/dada2db4e2f8aaa9bd8e.js",
    "revision": "133cc94f680886b02dc721bad8adf9c8"
  },
  {
    "url": "/_nuxt/de133e205c963638f4ad.js",
    "revision": "7e5157c7f944cd972b100e91cca24e9d"
  },
  {
    "url": "/_nuxt/eececf7011bf9ea1e4aa.js",
    "revision": "143177703c6dc886c47b5e6e7a59338a"
  },
  {
    "url": "/_nuxt/ef46af566193d3014bd5.js",
    "revision": "eb3d5ecbd5698c8c098a783bf91bdd7b"
  },
  {
    "url": "/_nuxt/f541ecbbd5c5d091624d.js",
    "revision": "52ff39321712c14a1e7627d5f3d7ad4d"
  },
  {
    "url": "/_nuxt/fb6649c23ce9ea5552ee.js",
    "revision": "73c6beec8388756e9d529adefa49feea"
  }
], {
  "cacheId": "nuxt-community-typescript",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
