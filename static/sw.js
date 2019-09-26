importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/041a1e55d1663139f309.js",
    "revision": "c2dd99903a47601e9669a5e88db6deb6"
  },
  {
    "url": "/_nuxt/093a63535c66e0cb37cb.js",
    "revision": "7cd658941251f15434969e8542fed623"
  },
  {
    "url": "/_nuxt/0e56698b437783efc737.js",
    "revision": "994115141e89f8970045aa30d381ea70"
  },
  {
    "url": "/_nuxt/1896ddeaedc292e0ae59.js",
    "revision": "e004d69a4fd7710edf8096634d4e4a50"
  },
  {
    "url": "/_nuxt/1f61e05a965f98d5c8de.js",
    "revision": "56775029d8ee5138e25f69d2ffa3d422"
  },
  {
    "url": "/_nuxt/20fed4be086230a205e3.js",
    "revision": "66d25998db4fe6bb185cd4dd8ff2f904"
  },
  {
    "url": "/_nuxt/2f7a1054eea93b188ae6.js",
    "revision": "ad48303f21eda788c35da295d6f3e8db"
  },
  {
    "url": "/_nuxt/3cacc76c4af1c3a675d6.js",
    "revision": "57f7c825447aa8792f5e834c21cc9836"
  },
  {
    "url": "/_nuxt/442c94c95646a431de12.js",
    "revision": "e7aad10ab869899f8ca5527f82c58ce5"
  },
  {
    "url": "/_nuxt/52e410fadf1ba601b72c.js",
    "revision": "1b8a110788570a1f0018771571ac3901"
  },
  {
    "url": "/_nuxt/5b37a81db3e7d55d0e51.js",
    "revision": "7b7377e410035b9cdd5468954bf0e595"
  },
  {
    "url": "/_nuxt/76e8ccbf8e519743fdce.js",
    "revision": "3dfaf2c2c72c7ae4234ccef2448f8adc"
  },
  {
    "url": "/_nuxt/7dc897b0b68ede48f171.js",
    "revision": "a3ceb3f7e4f49a9545522e9f9f08b16f"
  },
  {
    "url": "/_nuxt/7f165826d686619281b2.js",
    "revision": "ddc1fce9575af092d31bc324957ab0fd"
  },
  {
    "url": "/_nuxt/8a8ad9309ec92d2fedfe.js",
    "revision": "278449a2c75f116d0a920859966a96e7"
  },
  {
    "url": "/_nuxt/92dc2d56038b1bf9525c.js",
    "revision": "bff6d22b8ea52768ca2bba721125911d"
  },
  {
    "url": "/_nuxt/9fb8f00c01a916769481.js",
    "revision": "21f5aa96d7ebe63492ddf2a93a465f19"
  },
  {
    "url": "/_nuxt/b3a25fca033a9bc53ebb.js",
    "revision": "977c986f840047cf640c3eddeaffd051"
  },
  {
    "url": "/_nuxt/b6dc80c64d13afbe158b.js",
    "revision": "9c61478e9ce3885056338730f40a467a"
  },
  {
    "url": "/_nuxt/babbad30dcd93928acba.js",
    "revision": "63510e983d6e0ba6e8b6a691617a672d"
  },
  {
    "url": "/_nuxt/c2db818ffaf25b7f63d5.js",
    "revision": "f0154c7ddfe7226b83cace2ae36b23d6"
  },
  {
    "url": "/_nuxt/c3d734aa323d4b29cfbf.js",
    "revision": "34284a019b546f24ad9cbcb635170892"
  },
  {
    "url": "/_nuxt/c66e5f50b58f2780be37.js",
    "revision": "28725573859e96359fc4af3f6254e79b"
  },
  {
    "url": "/_nuxt/ccda35b9835eb05ba123.js",
    "revision": "f5d959da017c558ea856734716b40197"
  },
  {
    "url": "/_nuxt/d7233359f266e096744c.js",
    "revision": "48760d7167b6ea4f9d8e902378cf1e56"
  },
  {
    "url": "/_nuxt/e31a49fac81c481d07f0.js",
    "revision": "de277ec1c2e8ece53342f0ebbd44b3fe"
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
