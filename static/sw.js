importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0543bc33f01612ed2ea2.js",
    "revision": "40e7b86b52df1a90c509d592a31cc769"
  },
  {
    "url": "/_nuxt/059fff8092231ff5aac2.js",
    "revision": "b51d6fa0ce649128d0039c2be5420dbc"
  },
  {
    "url": "/_nuxt/05e13b7e5114aee7280f.js",
    "revision": "2b67bb76ed8deae40383263c29b57d24"
  },
  {
    "url": "/_nuxt/1735264af2b6e7c45930.js",
    "revision": "f73fe257312d7febee72a4693ea2b387"
  },
  {
    "url": "/_nuxt/2e7a5957105388b0220b.js",
    "revision": "6f38073078e85cfd27b7e52da0a2b52b"
  },
  {
    "url": "/_nuxt/44d355b64238bc3a8a62.js",
    "revision": "9d9ad7903411541b11faa0de11951d80"
  },
  {
    "url": "/_nuxt/4b46c198977d3d742493.js",
    "revision": "f906126499b92f10247f593317b502df"
  },
  {
    "url": "/_nuxt/5cfac07e6a73cdc1121b.js",
    "revision": "23f98b1559ac2451ee6c7c310dd3d9d4"
  },
  {
    "url": "/_nuxt/5f0125bb79c0aba3f801.js",
    "revision": "c9de9e79e83e1d137d4f83b0db641d4f"
  },
  {
    "url": "/_nuxt/5f65658da95b75f21cc7.js",
    "revision": "4d18a1d407947f2954cf14de5c55cf5d"
  },
  {
    "url": "/_nuxt/63e28b2910f2cd254802.js",
    "revision": "5319e811fdfe633ea2ef4741b324b2af"
  },
  {
    "url": "/_nuxt/6570935b0a40e79cf35a.js",
    "revision": "fda430495dfad48258873fd4ed62d3a7"
  },
  {
    "url": "/_nuxt/6a582b0758cde02ce9a7.js",
    "revision": "681f87d8b89862b3ac5b626e9ecbf19d"
  },
  {
    "url": "/_nuxt/76798de9fb480287c544.js",
    "revision": "d5602cea5e0b4687e230c7e7e4d11ef8"
  },
  {
    "url": "/_nuxt/78e95309be3756f4880b.js",
    "revision": "f8a04d68d8f58a9e8958f60f332f76bd"
  },
  {
    "url": "/_nuxt/81e0334ca86b3467df4d.js",
    "revision": "99452f459942ce66efb9400b4923399f"
  },
  {
    "url": "/_nuxt/88f8a0c44e8a107d4480.js",
    "revision": "98026e37c11ac397cb31eb28fc2526c7"
  },
  {
    "url": "/_nuxt/8c6c97cab605663d8dd5.js",
    "revision": "9d0363cea35ca9568a88477e30368baf"
  },
  {
    "url": "/_nuxt/a1930a62bb0fbea3e645.js",
    "revision": "37e17eed8d3b7f2d6113279da4920e8d"
  },
  {
    "url": "/_nuxt/bb5ec84b43959cc78e14.js",
    "revision": "2589ad5c9f99ba24ca08b9ba8b446ead"
  },
  {
    "url": "/_nuxt/cafbb995424123b6e98e.js",
    "revision": "78bf9336db8695573f17476f5fac6299"
  },
  {
    "url": "/_nuxt/ccef04be1e58ba7ab055.js",
    "revision": "5942089e6e9e413ec6a59cd8e7f48422"
  },
  {
    "url": "/_nuxt/d5de4f2d913c1bc4c82d.js",
    "revision": "7b5e97782ff7c4862241948a44240b20"
  },
  {
    "url": "/_nuxt/e635cfe7cbe1c9b47ac5.js",
    "revision": "4763ee391d150b9d0a8f39d425b89589"
  },
  {
    "url": "/_nuxt/f446b3a5d57427f207a4.js",
    "revision": "0c922fdaab1b7e20a5fc356fb738a228"
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
