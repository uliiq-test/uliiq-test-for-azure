importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/098c293cacd3c6603021.js",
    "revision": "6763bd9e4c7f67e952dc5a9766497132"
  },
  {
    "url": "/_nuxt/09c34d629647e684ed32.js",
    "revision": "70bdc3df52a202877adf9e029de9e446"
  },
  {
    "url": "/_nuxt/157ea4b80e67a31e774d.js",
    "revision": "2329d125382b7e36a11ccebeeb7b4e93"
  },
  {
    "url": "/_nuxt/1a21e495e0a1b9183b7a.js",
    "revision": "0cd8ca0eeaa791542df555f559496ce9"
  },
  {
    "url": "/_nuxt/1dd7996e27b340e0c0db.js",
    "revision": "1a539b1818cd292cc2c19b4c742b1a1a"
  },
  {
    "url": "/_nuxt/39aa4448b0cd71d53f46.js",
    "revision": "c9302377ca8b8fe02e7c07ce6ea6642c"
  },
  {
    "url": "/_nuxt/423dd82abb6490ae6b80.js",
    "revision": "c195d53a4205b894485e7ef362ff958e"
  },
  {
    "url": "/_nuxt/5039babf9925fb3add48.js",
    "revision": "bd77f1ddb2f879909551f84891848ccf"
  },
  {
    "url": "/_nuxt/57ca42ff50bf93b25718.js",
    "revision": "3ee444133e08ebf07dfd8e1684ec7b78"
  },
  {
    "url": "/_nuxt/61de293f2e1b7b233d27.js",
    "revision": "ce9ee9eebf015b23af109c257b1a220d"
  },
  {
    "url": "/_nuxt/68ee7065ecffaf2f2b58.js",
    "revision": "d7ddc0388a8e349655806bb92429b0d2"
  },
  {
    "url": "/_nuxt/73660a54314cb0d3613e.js",
    "revision": "815c8bd4c5d50d54841efdfde723cb15"
  },
  {
    "url": "/_nuxt/7badb29f5bd99d292acc.js",
    "revision": "cd11d10cac6291002132e6a731ba130a"
  },
  {
    "url": "/_nuxt/8263a5913cc7e05e840b.js",
    "revision": "2d1c94aff76d35244cefa63df16212c7"
  },
  {
    "url": "/_nuxt/87417092434e04e33688.js",
    "revision": "7f2b5d2667e123cffb5d6326d4527b35"
  },
  {
    "url": "/_nuxt/9b41f1df404395b0d408.js",
    "revision": "deebfdd7638c25a4655c7ac4690f7c41"
  },
  {
    "url": "/_nuxt/ad3714eceef79dddddac.js",
    "revision": "27112320d1cd031a5a77ead3a8689eae"
  },
  {
    "url": "/_nuxt/b80656f37fb8c1db3493.js",
    "revision": "747456daaede1be761ac6494034f45a9"
  },
  {
    "url": "/_nuxt/bb3061536b1837bbdcc5.js",
    "revision": "023b221fe35a17345eec2d4d5c82e2c8"
  },
  {
    "url": "/_nuxt/bcb6567a286eadcb65a4.js",
    "revision": "09662a8cd920f09b10c96f3a7f6573b9"
  },
  {
    "url": "/_nuxt/ce179e80cb1f0c1e9008.js",
    "revision": "a47789a3428c2599aae5a9f705986e86"
  },
  {
    "url": "/_nuxt/d4e37f1e5b31cddfa717.js",
    "revision": "33f6657c424a87c43888bff25b06f2df"
  },
  {
    "url": "/_nuxt/dec68e9e7c9b93cf979e.js",
    "revision": "50a7a190fc245202f478315d4658be9e"
  },
  {
    "url": "/_nuxt/e01970c68e671ff37934.js",
    "revision": "278c8fd0ab2f64238ba5d6ecab2404cb"
  },
  {
    "url": "/_nuxt/eaebbad86d9d85c3984f.js",
    "revision": "58dc38d44f7a14643db53331a45d23fa"
  },
  {
    "url": "/_nuxt/f3074c3585c6220335d8.js",
    "revision": "6ad272407137e855973a69ff31b387c2"
  },
  {
    "url": "/_nuxt/f837c1bdfff2f326b0a8.js",
    "revision": "4c2a582e1b0815596ee3dcf8d59db4ae"
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
