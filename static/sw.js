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
    "url": "/_nuxt/12bc967c039484c3eddf.js",
    "revision": "2db8266f10bdec388e929b11c8bfbce8"
  },
  {
    "url": "/_nuxt/1453c2750f55a24a5c02.js",
    "revision": "bd77f1ddb2f879909551f84891848ccf"
  },
  {
    "url": "/_nuxt/157ea4b80e67a31e774d.js",
    "revision": "2329d125382b7e36a11ccebeeb7b4e93"
  },
  {
    "url": "/_nuxt/174454940ba654913d70.js",
    "revision": "0cd8ca0eeaa791542df555f559496ce9"
  },
  {
    "url": "/_nuxt/1c0190160808013a9b0c.js",
    "revision": "38fcf7d09ea22d19773005d5f1fea45f"
  },
  {
    "url": "/_nuxt/224d521a8d323fec2040.js",
    "revision": "d7ddc0388a8e349655806bb92429b0d2"
  },
  {
    "url": "/_nuxt/54a9bada52f05ddd9091.js",
    "revision": "739ea8b2817e6870c92214fab96d6d7c"
  },
  {
    "url": "/_nuxt/5afcca688bc68d3d4980.js",
    "revision": "c195d53a4205b894485e7ef362ff958e"
  },
  {
    "url": "/_nuxt/70e7c6fd2272594b8386.js",
    "revision": "3caf032bc19dcc2629c1170542081a37"
  },
  {
    "url": "/_nuxt/73660a54314cb0d3613e.js",
    "revision": "815c8bd4c5d50d54841efdfde723cb15"
  },
  {
    "url": "/_nuxt/7e74a91c21229cb17f2c.js",
    "revision": "eb892378ce8c69b1032c88b80a6aa091"
  },
  {
    "url": "/_nuxt/7f93766660eab00df65c.js",
    "revision": "f0b058cc32591f80489f58989ddc1aae"
  },
  {
    "url": "/_nuxt/850df8fb35edfa18ff12.js",
    "revision": "b6be5573d23bfbca43bdd10a4396862e"
  },
  {
    "url": "/_nuxt/89e43b616d83dbe2d918.js",
    "revision": "a0a8c3845f19f254999ea30dba5b32fd"
  },
  {
    "url": "/_nuxt/904f6996dcfbb226f3ad.js",
    "revision": "ae12f9c15a5ac31b1f6b70e635eeab55"
  },
  {
    "url": "/_nuxt/9b41f1df404395b0d408.js",
    "revision": "deebfdd7638c25a4655c7ac4690f7c41"
  },
  {
    "url": "/_nuxt/a53ddd7316e6de5a7b90.js",
    "revision": "e28fa14ba4ad3651a192f2cb9b8276ca"
  },
  {
    "url": "/_nuxt/b5ef856fcc5f2050bc54.js",
    "revision": "b4f15b31efc450b4d1dccf587fd7ba41"
  },
  {
    "url": "/_nuxt/b72d99fdc2fca074c56b.js",
    "revision": "cc37d137e63cf2723312dadeb6db2ba9"
  },
  {
    "url": "/_nuxt/bb3061536b1837bbdcc5.js",
    "revision": "023b221fe35a17345eec2d4d5c82e2c8"
  },
  {
    "url": "/_nuxt/bb6328efaf60cd5c9e88.js",
    "revision": "a337cd9502020e13601684c5fe40ec6e"
  },
  {
    "url": "/_nuxt/f1649369218b95fe2326.js",
    "revision": "cd11d10cac6291002132e6a731ba130a"
  },
  {
    "url": "/_nuxt/f3074c3585c6220335d8.js",
    "revision": "6ad272407137e855973a69ff31b387c2"
  },
  {
    "url": "/_nuxt/fe64bc442e874f317cb5.js",
    "revision": "cca4b45488f66d6f7fa0423955b59c7f"
  },
  {
    "url": "/_nuxt/ff472d70845b0bc46240.js",
    "revision": "8a186f5b3a0a6c16f3ab9f2172c4c079"
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
