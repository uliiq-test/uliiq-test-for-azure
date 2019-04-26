importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0dac4cddab54c0bc6212.js",
    "revision": "2af2eaff1c24250ecfeab3a269bbd9f2"
  },
  {
    "url": "/_nuxt/1eaa24c1787428c2ab5f.js",
    "revision": "629025df920dd0a91a5605875dbecb37"
  },
  {
    "url": "/_nuxt/28ab5e58794c44053f2a.js",
    "revision": "1f462dbeaff00fe5cd6d7ce984270218"
  },
  {
    "url": "/_nuxt/2d322a313b7713159bf7.js",
    "revision": "4086c8baabbfe9f0c4bca7dd135828cd"
  },
  {
    "url": "/_nuxt/326f8bb637d94ebcc269.js",
    "revision": "7bf8dec3afa4d5c03cdd16003ca02745"
  },
  {
    "url": "/_nuxt/331dfe6dbcab67d24f65.js",
    "revision": "7d64a01354fb91c143e10613d58a0938"
  },
  {
    "url": "/_nuxt/35e388f3d97d09edf716.js",
    "revision": "739bae7214154b8bd55537328666563d"
  },
  {
    "url": "/_nuxt/49aedd21f7ad7d5f703a.js",
    "revision": "190e2e5863d606d061ab8d50c36d1e21"
  },
  {
    "url": "/_nuxt/4a8fb99308254e978253.js",
    "revision": "8b8e839b024aff62f4fe4142a9f9a91b"
  },
  {
    "url": "/_nuxt/5c748d363a5af5ce56d4.js",
    "revision": "af9690312e10425d7f36581bd2ae435c"
  },
  {
    "url": "/_nuxt/6dde27e9d1c39054040a.js",
    "revision": "223d5aa26a9434b64d09357abe0c5da2"
  },
  {
    "url": "/_nuxt/8bc8166a5aba6f95cffc.js",
    "revision": "809c33eba3c1a683bbbf09bbf1a15570"
  },
  {
    "url": "/_nuxt/a7f442fc5defb539ee77.js",
    "revision": "45408ac832a785cedf65cce51da49616"
  },
  {
    "url": "/_nuxt/ab8a592663d0c06e44a5.js",
    "revision": "5ef4c3dae0bb8454c216215b8e6e60d8"
  },
  {
    "url": "/_nuxt/b777138b0e7808e57085.js",
    "revision": "d31ecb36078acf32b83970dca45e5a20"
  },
  {
    "url": "/_nuxt/cbb9e21aaec28ee40e7a.js",
    "revision": "73a7151b5c84c25bd3cddb314c914d59"
  },
  {
    "url": "/_nuxt/d19937ed71f46ef0ba4a.js",
    "revision": "14eab606b75aa8f4dbd684ce18097702"
  },
  {
    "url": "/_nuxt/d1d2992cbcd6c82f3765.js",
    "revision": "d3fa0cbcb323a30b1326f3c091707280"
  },
  {
    "url": "/_nuxt/d22fa6b9bef4917bccd0.js",
    "revision": "2369d3630188a053f898dae9dacd8d00"
  },
  {
    "url": "/_nuxt/e2bececbcdd170a9c42c.js",
    "revision": "aa6cdbf6de042f2feba568947c0d359f"
  },
  {
    "url": "/_nuxt/f74017417368e9046f5f.js",
    "revision": "03b27cf14089a7a2b075a8adbf2911a2"
  },
  {
    "url": "/_nuxt/f98bd8322e5e92140766.js",
    "revision": "2fc135bb9205137f94296c758a130df1"
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
