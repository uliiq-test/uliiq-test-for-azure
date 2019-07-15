importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d0b30c6d8d92e9d5540.js",
    "revision": "8200ecb1a565ef46512eb89795644d27"
  },
  {
    "url": "/_nuxt/0fe8d4797c17b8994cd1.js",
    "revision": "2eff8c3ea4c8aefda441e7ac47622b55"
  },
  {
    "url": "/_nuxt/1681e9f5ccf49d0182ff.js",
    "revision": "251de22c433583530ad66aab5c51d3a6"
  },
  {
    "url": "/_nuxt/1c45ed396c78efb5690b.js",
    "revision": "556721b4f5e124e5a55d9d84feec146e"
  },
  {
    "url": "/_nuxt/308e8e61471291884064.js",
    "revision": "52d7d612e064002ccf1bec1431149c54"
  },
  {
    "url": "/_nuxt/35a59eb987e7f0f9922a.js",
    "revision": "95eb2b7dda7753d477854df1409cc8f3"
  },
  {
    "url": "/_nuxt/4fe5a3fd899492685861.js",
    "revision": "788155094785730f393ebd219f480398"
  },
  {
    "url": "/_nuxt/58431eb7ed3157dfd40a.js",
    "revision": "6ec96eaa9b08ff54dca57e38a5524c1a"
  },
  {
    "url": "/_nuxt/5a53c4cc617cd8d9a9bc.js",
    "revision": "6d6f50b60141a8798a31534ceb0d1cb9"
  },
  {
    "url": "/_nuxt/64ed6bb91b73a5a61338.js",
    "revision": "213ce1f5245aa0e9001e6dd0b4abe52e"
  },
  {
    "url": "/_nuxt/759847f5c6dcd9ba0643.js",
    "revision": "71752bd7e0172af08f02092265d42d04"
  },
  {
    "url": "/_nuxt/838868caea9673d372c9.js",
    "revision": "13fb77454de59d3818b825ad24f10b1b"
  },
  {
    "url": "/_nuxt/8c3e1305a42b3f49054e.js",
    "revision": "2c759e0d3e55977c4a4636ca8924fc1b"
  },
  {
    "url": "/_nuxt/9f66c2c75d5a145de06c.js",
    "revision": "b08924be6facc0a67684dad4baf4a1a8"
  },
  {
    "url": "/_nuxt/a455e01cb05d1737a2a0.js",
    "revision": "ee9139b2355a35ff88de84402a48b445"
  },
  {
    "url": "/_nuxt/cc03612f1c2a9992c6e7.js",
    "revision": "18ff32f6fdaaf00dcbe7ea04755efdec"
  },
  {
    "url": "/_nuxt/d56b260f868dfef4aef4.js",
    "revision": "1f0edabcd182906e26ba0facb07091e0"
  },
  {
    "url": "/_nuxt/d748ef58be4736801fe3.js",
    "revision": "de8983ef844b7b22f6e0366cffcc1cec"
  },
  {
    "url": "/_nuxt/d7fd51affa2544893b2f.js",
    "revision": "7a106f238a17ed151d757ef8845aa532"
  },
  {
    "url": "/_nuxt/dd15d72e9818ec00a186.js",
    "revision": "c986526648c270550597de8b5a762585"
  },
  {
    "url": "/_nuxt/e21f57afeb6df9725296.js",
    "revision": "bef864cdc5902f35cfbc2b86252ad45a"
  },
  {
    "url": "/_nuxt/e3f2b528b9b2368d0b8f.js",
    "revision": "5915e3d459184b731a8a4f5923b18569"
  },
  {
    "url": "/_nuxt/e43e01316bc41c7bceaf.js",
    "revision": "5910025839b1df12650d82378c5ba4e9"
  },
  {
    "url": "/_nuxt/ec663bf26b99a5a0e351.js",
    "revision": "95b39db323740f28c396499542a0adc6"
  },
  {
    "url": "/_nuxt/ed1b7a6ce81419726d7a.js",
    "revision": "ad76e05ef2124245ffbcfb6b731336a0"
  },
  {
    "url": "/_nuxt/f6e643c4af8252a385da.js",
    "revision": "9aa2d1e54dbbbf411ae6125a67f267a3"
  },
  {
    "url": "/_nuxt/f97b41af9633c079592d.js",
    "revision": "f42344556713ed27aab9ce878225e484"
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
