importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/10a4c0a0885986638223.js",
    "revision": "5ff9bc68b3f2faf3ffd0215a1b5ce114"
  },
  {
    "url": "/_nuxt/12b78772a29ba3ef97d0.js",
    "revision": "eb1c34e186c941d4c8b06fecb49efa36"
  },
  {
    "url": "/_nuxt/15baf9f7e07e8578d1f8.js",
    "revision": "b46a744fc10b65ec6ce9eab7a832d81b"
  },
  {
    "url": "/_nuxt/1ac5f361986551719c96.js",
    "revision": "53c2e7e89e3410699f83091a2769969e"
  },
  {
    "url": "/_nuxt/3037b68e1c0473a1514f.js",
    "revision": "aa9509626fb232dcb2e04414eabf4d95"
  },
  {
    "url": "/_nuxt/3056074fe8dc250d210f.js",
    "revision": "617052da47c2148c8f4473d0cd69eb49"
  },
  {
    "url": "/_nuxt/3c58d69734c7cd3c2ced.js",
    "revision": "0c089197c30fe08b013e349fe19a7bd4"
  },
  {
    "url": "/_nuxt/440874250c77cfc399bd.js",
    "revision": "e7cfc9584a6add56c521ccfd9220dd11"
  },
  {
    "url": "/_nuxt/5116343d90e8f2591b51.js",
    "revision": "d9903b27ece90e62d40b88ec2e22fb54"
  },
  {
    "url": "/_nuxt/5139ec1810ef339e95d6.js",
    "revision": "168cfdfb182a214dc83b4dfbee59b170"
  },
  {
    "url": "/_nuxt/5771017aeeed0bb9507d.js",
    "revision": "13e5ee7400429f7ce925bb681b2d9f43"
  },
  {
    "url": "/_nuxt/593d8caec746032ab0ae.js",
    "revision": "57406f22cd76139dc14054411d908fc7"
  },
  {
    "url": "/_nuxt/6b74653f8f8908df12dd.js",
    "revision": "3183b5696eee3dcdfbbf80e9d70a1916"
  },
  {
    "url": "/_nuxt/6bd3d8af81b6cdbe8758.js",
    "revision": "2f4816a60ad52263bc2aa30fac531113"
  },
  {
    "url": "/_nuxt/797c9fb7d10527d7aa2d.js",
    "revision": "c9afa25b033712e126b19917c660cc1c"
  },
  {
    "url": "/_nuxt/91504a3867408e8a40d4.js",
    "revision": "60ecaf3f2a98d83aec0756e2b50b090c"
  },
  {
    "url": "/_nuxt/986c3dab2f83e7f77b76.js",
    "revision": "658b2f434871d764b5fe1cb783776212"
  },
  {
    "url": "/_nuxt/9a7ed992d67fe1693064.js",
    "revision": "aa8259d5175c0e9eebab1ff71545bebe"
  },
  {
    "url": "/_nuxt/a6a982a65635b91ff5b3.js",
    "revision": "6f1017d8c54e3f1992fd3015f500d6a0"
  },
  {
    "url": "/_nuxt/b21d34244ef2e9fa2934.js",
    "revision": "3ba8a4a93fb7c85b8bd3eda38f8663da"
  },
  {
    "url": "/_nuxt/c270fa7b16e8c9e85c66.js",
    "revision": "a7e481e0485caa5b32c7a959ff38f1dd"
  },
  {
    "url": "/_nuxt/c51060392d0b68579078.js",
    "revision": "ec5a49eb1311a9822a45812eeb279453"
  },
  {
    "url": "/_nuxt/ce68dd88f8e1f079a028.js",
    "revision": "8612ba29b2c95859f1afda0a9da85f1d"
  },
  {
    "url": "/_nuxt/cfd36b8c8a9deeafe9a0.js",
    "revision": "38d63168db0a7f880d22e42d8bb8d2e3"
  },
  {
    "url": "/_nuxt/e02554098c0de633828f.js",
    "revision": "6286893a733b5603b15c60c76276234f"
  },
  {
    "url": "/_nuxt/e0ace6202d8d9579aa1b.js",
    "revision": "ef724adf2ef03008940209bfcdb85665"
  },
  {
    "url": "/_nuxt/f2d08275ef6c3684aa7c.js",
    "revision": "4da9346367f20c5fe2174369b44a7d04"
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
