importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00d3594679b6d077b776.js",
    "revision": "6a9342e08f88bc57e9d8c1bf615c46d2"
  },
  {
    "url": "/_nuxt/02dbe2ef62cf8a786706.js",
    "revision": "89c0400fc4a3cc178358d3b632cd0b72"
  },
  {
    "url": "/_nuxt/059775802ce37cb7d840.js",
    "revision": "d120a30362c3a7c18a65ef121ef75e3f"
  },
  {
    "url": "/_nuxt/07d33983214c7cca6e52.js",
    "revision": "567c5816d2f3165c3839527c1cd774ad"
  },
  {
    "url": "/_nuxt/0880ec366426db8d95a3.js",
    "revision": "b9f6b5b6c93c85d862ba58fdc4fc4992"
  },
  {
    "url": "/_nuxt/14f3b7a6c0fd45036fec.js",
    "revision": "58a6bc7f66a74bb01079d5430d9bbb21"
  },
  {
    "url": "/_nuxt/19e0c25bb784ccd0c864.js",
    "revision": "f360b7757753eed86cff19f134879387"
  },
  {
    "url": "/_nuxt/1fd302a1994293bddcf1.js",
    "revision": "9a477d8ee26050831d9fcf8bc45d0674"
  },
  {
    "url": "/_nuxt/20e3e7e4011b3fe85eb1.js",
    "revision": "dba9e4bb1b45e5e332508d8c249922a4"
  },
  {
    "url": "/_nuxt/296cb2ef93ace87a9ddf.js",
    "revision": "ac56127f1052c0ffd67e2d41180b6396"
  },
  {
    "url": "/_nuxt/424e9b7a7a664b3a80ea.js",
    "revision": "d8455fadd6fb8abc4bf55d75f00f6d57"
  },
  {
    "url": "/_nuxt/6b3cd90afbb91a7a67c4.js",
    "revision": "365dabd931e0ad4bc48548f949c0feb4"
  },
  {
    "url": "/_nuxt/6d618665e23b4831fda1.js",
    "revision": "ddf0b2cec4d7462aa0b5136f762a6104"
  },
  {
    "url": "/_nuxt/786a0faa552688e6cfb2.js",
    "revision": "ba8fbd6d05cd2d4e108ed4965754939e"
  },
  {
    "url": "/_nuxt/8d1e26cb74435cfb6a32.js",
    "revision": "8bc3342b11023b2284942b9dce0afc0f"
  },
  {
    "url": "/_nuxt/97c4ba949a981fa65499.js",
    "revision": "5bf889e83d7844179d261625d45195a9"
  },
  {
    "url": "/_nuxt/9af9de0ec4395c821a8e.js",
    "revision": "1ee202fe1242ec9a876aceff27f70263"
  },
  {
    "url": "/_nuxt/aa4c6dd4b4a5037bc11a.js",
    "revision": "cbb86ecbca24f3d72b46149f4a612511"
  },
  {
    "url": "/_nuxt/b7765c3a4876ed68d2f1.js",
    "revision": "9494b2b4d11b3924461b7dd38c7438e7"
  },
  {
    "url": "/_nuxt/b875c86c4c658eee9c4c.js",
    "revision": "d2357222eba70ec5e3ee008c08e57682"
  },
  {
    "url": "/_nuxt/beb4fb045e439dce511b.js",
    "revision": "cc1a58dde9b9442931ffd03f48d6b4db"
  },
  {
    "url": "/_nuxt/cb194b10df07a0e34618.js",
    "revision": "b5fb8c72f18d3bc6309d3a18dfc4cef9"
  },
  {
    "url": "/_nuxt/d76a6f121b5a846d7ac7.js",
    "revision": "8402680a1c9a7d13f99e7b27f47f6b1e"
  },
  {
    "url": "/_nuxt/d9c362902d7463974c4f.js",
    "revision": "c61683d58aa950e26a5dc943bc7babb4"
  },
  {
    "url": "/_nuxt/de58636dcb6991183292.js",
    "revision": "975d86de556e8380e703ff9786be346b"
  },
  {
    "url": "/_nuxt/de699c85b2faa15e7718.js",
    "revision": "8171ecc1bf574e8303234162a401021e"
  },
  {
    "url": "/_nuxt/e1eac5033d51dad1c59e.js",
    "revision": "8ea8d28a37e87fe446148623585d0044"
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
