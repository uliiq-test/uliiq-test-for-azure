importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/041a1e55d1663139f309.js",
    "revision": "c2dd99903a47601e9669a5e88db6deb6"
  },
  {
    "url": "/_nuxt/0b33abb9fae769442453.js",
    "revision": "323eddc1c907b2ab39618a9152fa2551"
  },
  {
    "url": "/_nuxt/0c25d9695f03abcb6efb.js",
    "revision": "ad48303f21eda788c35da295d6f3e8db"
  },
  {
    "url": "/_nuxt/1c7b0e062eacfbbb20c8.js",
    "revision": "66d25998db4fe6bb185cd4dd8ff2f904"
  },
  {
    "url": "/_nuxt/1f61e05a965f98d5c8de.js",
    "revision": "56775029d8ee5138e25f69d2ffa3d422"
  },
  {
    "url": "/_nuxt/233f7d4e91737d60bb0a.js",
    "revision": "f2da9c0e52d5cf94d543872d669c8297"
  },
  {
    "url": "/_nuxt/248a4a5b1e16073b5137.js",
    "revision": "278449a2c75f116d0a920859966a96e7"
  },
  {
    "url": "/_nuxt/39a419c586386ed202ad.js",
    "revision": "994115141e89f8970045aa30d381ea70"
  },
  {
    "url": "/_nuxt/5b37a81db3e7d55d0e51.js",
    "revision": "7b7377e410035b9cdd5468954bf0e595"
  },
  {
    "url": "/_nuxt/6138d8a6f115fcaa9590.js",
    "revision": "1b8a110788570a1f0018771571ac3901"
  },
  {
    "url": "/_nuxt/7dc897b0b68ede48f171.js",
    "revision": "a3ceb3f7e4f49a9545522e9f9f08b16f"
  },
  {
    "url": "/_nuxt/818e59a02d5e70ec84c3.js",
    "revision": "63510e983d6e0ba6e8b6a691617a672d"
  },
  {
    "url": "/_nuxt/91070e3332ecf5d08207.js",
    "revision": "4206fd420d243ef8c8bfbba4bb9c8bbe"
  },
  {
    "url": "/_nuxt/9691ec834ffa2a527280.js",
    "revision": "84d4410e5686c65417c5614a1d10a7d2"
  },
  {
    "url": "/_nuxt/a5ac9aea4250e97717cb.js",
    "revision": "28725573859e96359fc4af3f6254e79b"
  },
  {
    "url": "/_nuxt/a8d6aac3799b346298d2.js",
    "revision": "e004d69a4fd7710edf8096634d4e4a50"
  },
  {
    "url": "/_nuxt/ac020d502158c153a4bd.js",
    "revision": "f5d959da017c558ea856734716b40197"
  },
  {
    "url": "/_nuxt/b6dc80c64d13afbe158b.js",
    "revision": "9c61478e9ce3885056338730f40a467a"
  },
  {
    "url": "/_nuxt/babec59dbb089a37d5e1.js",
    "revision": "977c986f840047cf640c3eddeaffd051"
  },
  {
    "url": "/_nuxt/caa72a547c4c1b2e4adc.js",
    "revision": "3dfaf2c2c72c7ae4234ccef2448f8adc"
  },
  {
    "url": "/_nuxt/d7233359f266e096744c.js",
    "revision": "48760d7167b6ea4f9d8e902378cf1e56"
  },
  {
    "url": "/_nuxt/d7420d97733bd996411d.js",
    "revision": "57f7c825447aa8792f5e834c21cc9836"
  },
  {
    "url": "/_nuxt/ebdf6592e4940d72621e.js",
    "revision": "34284a019b546f24ad9cbcb635170892"
  },
  {
    "url": "/_nuxt/f7b1e8fa9aa12c57909f.js",
    "revision": "e857a15c1ed257da1357b6444648f427"
  },
  {
    "url": "/_nuxt/f90d6d43ae37b6020be7.js",
    "revision": "ddc1fce9575af092d31bc324957ab0fd"
  },
  {
    "url": "/_nuxt/fe29db37119c78e84a26.js",
    "revision": "21f5aa96d7ebe63492ddf2a93a465f19"
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
