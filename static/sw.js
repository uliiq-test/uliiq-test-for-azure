importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01c175c54eaa1b0fabcf.js",
    "revision": "027bd14882dab23f526a026e0725a213"
  },
  {
    "url": "/_nuxt/05ddc8e8a94558ade465.js",
    "revision": "a4fbadf8c7c1647f1162b16b0878628a"
  },
  {
    "url": "/_nuxt/132698f15a7b6361198a.js",
    "revision": "873a95bb7ed87bb0927eddebfe7458a3"
  },
  {
    "url": "/_nuxt/133375d04788d154b5ec.js",
    "revision": "aab79891bfb6483b01412762e7322a2a"
  },
  {
    "url": "/_nuxt/1640f8248cd0966e9827.js",
    "revision": "a37a69d16ab0c02de237a56c8c096efb"
  },
  {
    "url": "/_nuxt/1d1342fd55c1da4948c0.js",
    "revision": "a86eba366c1f0897a451132a46a1a3e5"
  },
  {
    "url": "/_nuxt/2deb743f3b9443af054f.js",
    "revision": "4116e6794b374792eadd5c4ddbd425f2"
  },
  {
    "url": "/_nuxt/2dec94c742428f3a2eac.js",
    "revision": "ef2b81eaae3dad43c3b335eaf667ab8c"
  },
  {
    "url": "/_nuxt/33c1b30fcd63a4f82161.js",
    "revision": "33cd2be0b458a1b6982cf58c0937f577"
  },
  {
    "url": "/_nuxt/611c55a0d8e13270274a.js",
    "revision": "3c5cf2a291d15789acb5c6e142b9edd9"
  },
  {
    "url": "/_nuxt/7a67ede117d86e86339e.js",
    "revision": "55422ffab69ea80a278cffa12ff6be1d"
  },
  {
    "url": "/_nuxt/821ab4393acb536b0dd5.js",
    "revision": "84c474028901f7b65e800ed3052ea228"
  },
  {
    "url": "/_nuxt/894004882a823a7fe536.js",
    "revision": "7bc1d85988a85927af9d173a12083123"
  },
  {
    "url": "/_nuxt/a6419c547dfe9582090f.js",
    "revision": "80053af74fd314b089a8d7c4205137c6"
  },
  {
    "url": "/_nuxt/a94635f5677a6c0eae17.js",
    "revision": "a5fcff8a1ea2b0a9baf55d55db9d5cf5"
  },
  {
    "url": "/_nuxt/aafa306f84d496ac5c04.js",
    "revision": "965bb8c986a5abc03217015bb2ad33cf"
  },
  {
    "url": "/_nuxt/b0b6f46b33c23d0d33f6.js",
    "revision": "fe50636483b03487b6e3d666d45d546d"
  },
  {
    "url": "/_nuxt/c8f3b62797d761a024ec.js",
    "revision": "4b9ea282bbde94766ff7baaca96c646c"
  },
  {
    "url": "/_nuxt/d2ff772177d72d15d179.js",
    "revision": "627f8a0813031603cd533f883d6cabb9"
  },
  {
    "url": "/_nuxt/d3637ca0e879b2704f6d.js",
    "revision": "055a024cee46eae3e3b630e230d6b072"
  },
  {
    "url": "/_nuxt/d7bbf08d42bd431615e0.js",
    "revision": "b5baac63ebcc8db97c055c6b2397a0a6"
  },
  {
    "url": "/_nuxt/e11a60a682fda430b618.js",
    "revision": "f059b8c02d33ed6ca493b65a8a309fa3"
  },
  {
    "url": "/_nuxt/f2700f586456ad212964.js",
    "revision": "46cb238a9a6ea61f7a6fae2443ad4455"
  },
  {
    "url": "/_nuxt/f57bda1d470e87146a21.js",
    "revision": "d440fdd2fefa204867afef47b8711843"
  },
  {
    "url": "/_nuxt/f77acfa7a044ba73c05f.js",
    "revision": "bcd3ebe6dbb754f6b7abb697865b63a4"
  },
  {
    "url": "/_nuxt/fa8f67ae7dfafe0651ff.js",
    "revision": "7b9f53b46c6fe994b30181dba813ec43"
  },
  {
    "url": "/_nuxt/fb6921bdb940150d6823.js",
    "revision": "37eafc79734cda596fa2c45b12e44ec7"
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
