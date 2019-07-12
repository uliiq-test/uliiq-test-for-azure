importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06be24660ca19b89c27d.js",
    "revision": "5e5142da28c072efbae6daf4c0a8ca87"
  },
  {
    "url": "/_nuxt/1e040365014f24bb309a.js",
    "revision": "ffc95314a92fbd18b740f48d79ba7d71"
  },
  {
    "url": "/_nuxt/2b428cf6c5f4212a5239.js",
    "revision": "fef8ebfa3bafe12ecbaf945bdc4e0083"
  },
  {
    "url": "/_nuxt/35c5d46595d86e36a718.js",
    "revision": "ca1896b4a581d1be597eff2842612862"
  },
  {
    "url": "/_nuxt/39034255ef5060ee64db.js",
    "revision": "287dcf0c0e670492980e5960bfaa3e3c"
  },
  {
    "url": "/_nuxt/3bac23f473328000ca2a.js",
    "revision": "61e699c8583d1c130422001c872c65ce"
  },
  {
    "url": "/_nuxt/4690671615d406180549.js",
    "revision": "befc7703d413c4510281665102a19a3c"
  },
  {
    "url": "/_nuxt/485c7804e83d3592824c.js",
    "revision": "74ce6fcd44258ca6ad6eda1a438790e6"
  },
  {
    "url": "/_nuxt/4a1029df633ec5f3048a.js",
    "revision": "a1f0abab4f3465c51fd98f770ad16e0f"
  },
  {
    "url": "/_nuxt/59e2db19c38fb18b1f7e.js",
    "revision": "b54b68c3ea0a4e7dd4186bad96272f40"
  },
  {
    "url": "/_nuxt/6033bf344c365258dbbe.js",
    "revision": "1c10a1f51e2674789269d35de5498963"
  },
  {
    "url": "/_nuxt/646dd24a87b21d53ed6c.js",
    "revision": "33131779abb26484449bb709b725fec3"
  },
  {
    "url": "/_nuxt/71cd93b910973cd31927.js",
    "revision": "f4b3134029c6205c6474a6547c98a2df"
  },
  {
    "url": "/_nuxt/76b99bcd60b05424c011.js",
    "revision": "7197b422f614811ffa08be86cfa7ac95"
  },
  {
    "url": "/_nuxt/76e5da60d703048ef015.js",
    "revision": "8e7bd28b8e9900f8aa9430849b46c2d3"
  },
  {
    "url": "/_nuxt/7786453e13086b5af8b4.js",
    "revision": "edbbbb1626f15c62e314b916c45d86e0"
  },
  {
    "url": "/_nuxt/7ba5acba36a245e0273a.js",
    "revision": "89552477b313423d5427b6e15c89d869"
  },
  {
    "url": "/_nuxt/7c087a72667312cd3b16.js",
    "revision": "fa0cd2d00cdb965bc75893b3bcccc9bf"
  },
  {
    "url": "/_nuxt/97a94f509c3a4970b1a6.js",
    "revision": "a5edb825c9b8a53eb7d37e61aeef4034"
  },
  {
    "url": "/_nuxt/c0fd9363c4b96295d32d.js",
    "revision": "8881e2696b0d172a560112cb6c050dc4"
  },
  {
    "url": "/_nuxt/db89c48389028989353b.js",
    "revision": "467bf9d8f57e7350da9c807c411ae651"
  },
  {
    "url": "/_nuxt/e2a94dd9fc391f62f92d.js",
    "revision": "52111d526fa0b591cdb2574ccbc6b7ee"
  },
  {
    "url": "/_nuxt/ebd4b000dea59a7cf036.js",
    "revision": "85da05cb133e03dc70ef2dfd4a5b9f56"
  },
  {
    "url": "/_nuxt/ec21d1b51addc4a7fb7e.js",
    "revision": "39bb05afa07b7d625944699639cb7358"
  },
  {
    "url": "/_nuxt/ec89628e3a18447ece3f.js",
    "revision": "6321287271dadd82e61b768722cd6b08"
  },
  {
    "url": "/_nuxt/f2a490c36a499aa75c3f.js",
    "revision": "6914cfba30499b9d8c98410fbf9dbdc2"
  },
  {
    "url": "/_nuxt/f9aa9631d729a20ad798.js",
    "revision": "03dc01de491121829737109068e58b8b"
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
