importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02dbe2ef62cf8a786706.js",
    "revision": "89c0400fc4a3cc178358d3b632cd0b72"
  },
  {
    "url": "/_nuxt/045ed751d02e95c6a9a4.js",
    "revision": "567c5816d2f3165c3839527c1cd774ad"
  },
  {
    "url": "/_nuxt/081947bdfdb7dc4e04b7.js",
    "revision": "8ea8d28a37e87fe446148623585d0044"
  },
  {
    "url": "/_nuxt/2423a20aa7db090b5843.js",
    "revision": "f360b7757753eed86cff19f134879387"
  },
  {
    "url": "/_nuxt/296cb2ef93ace87a9ddf.js",
    "revision": "ac56127f1052c0ffd67e2d41180b6396"
  },
  {
    "url": "/_nuxt/2fe663c70d017c495da8.js",
    "revision": "b9f6b5b6c93c85d862ba58fdc4fc4992"
  },
  {
    "url": "/_nuxt/3726c463e3ee0587ab46.js",
    "revision": "d120a30362c3a7c18a65ef121ef75e3f"
  },
  {
    "url": "/_nuxt/4838f88684df16c19bc8.js",
    "revision": "8bc3342b11023b2284942b9dce0afc0f"
  },
  {
    "url": "/_nuxt/5a847096a469ff150717.js",
    "revision": "6a9342e08f88bc57e9d8c1bf615c46d2"
  },
  {
    "url": "/_nuxt/6c1d423aeecc64b809a4.js",
    "revision": "dba9e4bb1b45e5e332508d8c249922a4"
  },
  {
    "url": "/_nuxt/786a0faa552688e6cfb2.js",
    "revision": "ba8fbd6d05cd2d4e108ed4965754939e"
  },
  {
    "url": "/_nuxt/7abb27789a62d55717b6.js",
    "revision": "ddf0b2cec4d7462aa0b5136f762a6104"
  },
  {
    "url": "/_nuxt/7f8b0170da8aadcf66a6.js",
    "revision": "8402680a1c9a7d13f99e7b27f47f6b1e"
  },
  {
    "url": "/_nuxt/846d631a2ffc1f54a526.js",
    "revision": "9a477d8ee26050831d9fcf8bc45d0674"
  },
  {
    "url": "/_nuxt/87718b0f064a94569509.js",
    "revision": "1ee202fe1242ec9a876aceff27f70263"
  },
  {
    "url": "/_nuxt/8e7257266bc2482081d6.js",
    "revision": "5bf889e83d7844179d261625d45195a9"
  },
  {
    "url": "/_nuxt/8f6ec09c2f438884a83b.js",
    "revision": "bc6869359479c400c9de7599edc46ed5"
  },
  {
    "url": "/_nuxt/9e72ec52d2979aa2587a.js",
    "revision": "cc1a58dde9b9442931ffd03f48d6b4db"
  },
  {
    "url": "/_nuxt/aa4c6dd4b4a5037bc11a.js",
    "revision": "cbb86ecbca24f3d72b46149f4a612511"
  },
  {
    "url": "/_nuxt/b3f7bb69c2b54d490135.js",
    "revision": "c61683d58aa950e26a5dc943bc7babb4"
  },
  {
    "url": "/_nuxt/cb194b10df07a0e34618.js",
    "revision": "b5fb8c72f18d3bc6309d3a18dfc4cef9"
  },
  {
    "url": "/_nuxt/d64a6863236e66090c37.js",
    "revision": "4589cebbc7c140b09c1861ce6c8507c1"
  },
  {
    "url": "/_nuxt/d74222269dd310829f40.js",
    "revision": "d8455fadd6fb8abc4bf55d75f00f6d57"
  },
  {
    "url": "/_nuxt/d9ecef322a1ddfbfc504.js",
    "revision": "d2357222eba70ec5e3ee008c08e57682"
  },
  {
    "url": "/_nuxt/de58636dcb6991183292.js",
    "revision": "975d86de556e8380e703ff9786be346b"
  },
  {
    "url": "/_nuxt/ee6964c5d8462032adb9.js",
    "revision": "9494b2b4d11b3924461b7dd38c7438e7"
  },
  {
    "url": "/_nuxt/f25b26a09c713841822c.js",
    "revision": "58a6bc7f66a74bb01079d5430d9bbb21"
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
