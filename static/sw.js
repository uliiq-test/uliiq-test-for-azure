importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/085efa8accc9f043a273.js",
    "revision": "6e263e578aa440c2ee6423ba9983d095"
  },
  {
    "url": "/_nuxt/0d4404f5b2301c14db87.js",
    "revision": "68e39ed8a635bada8ac741f63383d492"
  },
  {
    "url": "/_nuxt/0e56698b437783efc737.js",
    "revision": "994115141e89f8970045aa30d381ea70"
  },
  {
    "url": "/_nuxt/12f42557a63a0661f9b9.js",
    "revision": "8c379e5e2db01e4de8ef1eeb918397ab"
  },
  {
    "url": "/_nuxt/1f003c7ec791b85900a5.js",
    "revision": "da80efad0fd5e215a6fa950cf1f0476d"
  },
  {
    "url": "/_nuxt/1f61e05a965f98d5c8de.js",
    "revision": "56775029d8ee5138e25f69d2ffa3d422"
  },
  {
    "url": "/_nuxt/3510addb21e0447188e6.js",
    "revision": "cfd4433896c6e59a2c55cf1a2c212ac3"
  },
  {
    "url": "/_nuxt/4154563d78912f52a889.js",
    "revision": "8ac1cb6e9611971e5909a3014f87ea7c"
  },
  {
    "url": "/_nuxt/432e4879fd3838b96064.js",
    "revision": "0fe1d09e0dff479310d91462d43539fa"
  },
  {
    "url": "/_nuxt/5b37a81db3e7d55d0e51.js",
    "revision": "7b7377e410035b9cdd5468954bf0e595"
  },
  {
    "url": "/_nuxt/689afe63c868e670b5d6.js",
    "revision": "24517c31933dfb720d40eac69f32349e"
  },
  {
    "url": "/_nuxt/6eafd917b3a6161be990.js",
    "revision": "267ff184cc81c523f9e52ef2f399401a"
  },
  {
    "url": "/_nuxt/6fbf237feaa91d8d2748.js",
    "revision": "e95667fb44534ca02319e2e3dc2842d0"
  },
  {
    "url": "/_nuxt/7141844736da852eb3b8.js",
    "revision": "5b24d9f27d5959ff99d80054364ff28f"
  },
  {
    "url": "/_nuxt/72ed3cc0f5637335121c.js",
    "revision": "53fb49eaed9abcc1caddfeaa92b217d8"
  },
  {
    "url": "/_nuxt/79fb6df8b9a6f3a5add0.js",
    "revision": "dccb702014145cdb08e57d72ab2933cf"
  },
  {
    "url": "/_nuxt/7ac0404d528ca78000cc.js",
    "revision": "ab5133186914e97863b74980aa916f7d"
  },
  {
    "url": "/_nuxt/8a052059aafcf61be27c.js",
    "revision": "a3ceb3f7e4f49a9545522e9f9f08b16f"
  },
  {
    "url": "/_nuxt/9fb8f00c01a916769481.js",
    "revision": "21f5aa96d7ebe63492ddf2a93a465f19"
  },
  {
    "url": "/_nuxt/a53ea28b860638f86454.js",
    "revision": "6e411e4c80059a874834c223d529e598"
  },
  {
    "url": "/_nuxt/a8a4560e85edadbfa7c5.js",
    "revision": "bb480eb3fb54bd05b39c32802aa3f417"
  },
  {
    "url": "/_nuxt/b281d1a9ebe80eea6970.js",
    "revision": "5cc4e8f67b8f1331ebc7f95f041907b7"
  },
  {
    "url": "/_nuxt/b6dc80c64d13afbe158b.js",
    "revision": "9c61478e9ce3885056338730f40a467a"
  },
  {
    "url": "/_nuxt/d7233359f266e096744c.js",
    "revision": "48760d7167b6ea4f9d8e902378cf1e56"
  },
  {
    "url": "/_nuxt/dbf93f5cc84ae8eb9bac.js",
    "revision": "dbb681d99815a5ab7017622a6de049e5"
  },
  {
    "url": "/_nuxt/f5a14358646721aeefe0.js",
    "revision": "1b37a890e9ad5a11ec83ae5d8b16b232"
  }
], {
  "cacheId": "WishHub",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
