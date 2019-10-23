importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/26f0a6cf12a46e85b22d.js",
    "revision": "90eece545526dd75634ed0d76f0523a3"
  },
  {
    "url": "/_nuxt/3c58d69734c7cd3c2ced.js",
    "revision": "0c089197c30fe08b013e349fe19a7bd4"
  },
  {
    "url": "/_nuxt/4048910b4a201adae3ab.js",
    "revision": "f286c4778e856b69c041af5267f8efd0"
  },
  {
    "url": "/_nuxt/480294efc7a4616171a8.js",
    "revision": "014c7378e49a3aaa65523c2fcf8a9a87"
  },
  {
    "url": "/_nuxt/4bfe77b64992a1f66824.js",
    "revision": "76900ae4e90c99cdd03678b789843fb1"
  },
  {
    "url": "/_nuxt/504a0daeb4373b7c27e8.js",
    "revision": "743124fb72523f0c209a27cce2acf5d4"
  },
  {
    "url": "/_nuxt/6c1bca8ed42b909707cf.js",
    "revision": "0a68941f9c1ba791549c897560a00105"
  },
  {
    "url": "/_nuxt/72beb3a54924be26a000.js",
    "revision": "d2a52940603c814b114514bbe73efd3e"
  },
  {
    "url": "/_nuxt/72e1cc7e948f5b01752d.js",
    "revision": "e09a87f8fdff60c360f969a34d09769a"
  },
  {
    "url": "/_nuxt/81a3960928a1a2db447f.js",
    "revision": "fc1eb6fff6af7e0db293a4eade4428ee"
  },
  {
    "url": "/_nuxt/88b6c878691df65ffa7e.js",
    "revision": "fa693f2b048c02890bbf4b3f9155e9b7"
  },
  {
    "url": "/_nuxt/8e3884d1dd017ac36860.js",
    "revision": "7b8764346d2aca984680f43754138239"
  },
  {
    "url": "/_nuxt/ab857bc8225fb0309879.js",
    "revision": "74835524a875b2d637e15a8948f49df1"
  },
  {
    "url": "/_nuxt/b190d1a9228a1691e59c.js",
    "revision": "80c088232647cf5923fd2423e3a0298f"
  },
  {
    "url": "/_nuxt/ba6f79382d64d0573608.js",
    "revision": "5161a1b24b37466d801832598ea5ceeb"
  },
  {
    "url": "/_nuxt/c5b356f2cc328b593436.js",
    "revision": "7b79c9086a54ea5a09d4573094c784b2"
  },
  {
    "url": "/_nuxt/c779976348d1caed2ec5.js",
    "revision": "22886ca45037d39719b05693715228c0"
  },
  {
    "url": "/_nuxt/c8933590fa3886afcc2c.js",
    "revision": "2229f9dec9a39f953d1a940c552d9e7f"
  },
  {
    "url": "/_nuxt/c8a97e3f15a52c24cbc1.js",
    "revision": "38a30b58382daa77065ef781b08ff510"
  },
  {
    "url": "/_nuxt/d01085ebc50f138fc12b.js",
    "revision": "52957e979eee79484e1a7bfea2f61020"
  },
  {
    "url": "/_nuxt/ded933192659325e643b.js",
    "revision": "141b24008203543a418f76cb00adad81"
  },
  {
    "url": "/_nuxt/df16f66059a2c5c53f08.js",
    "revision": "e8c156f57cf6559c703b541f5d19a068"
  },
  {
    "url": "/_nuxt/e0072883ce25e919e241.js",
    "revision": "a720dfdc58cdb3bede2bd47ae18ae7db"
  },
  {
    "url": "/_nuxt/e02554098c0de633828f.js",
    "revision": "6286893a733b5603b15c60c76276234f"
  },
  {
    "url": "/_nuxt/eff41f837a36947d3b9c.js",
    "revision": "0cfb617d01d16fc3e63ee76ca5dd4e26"
  },
  {
    "url": "/_nuxt/f339f83a51e2c2fbd886.js",
    "revision": "18d7fa4326cca9e8943fa395905ae9aa"
  },
  {
    "url": "/_nuxt/f9c35875ad5329278160.js",
    "revision": "a163883f2f7266d38fb42f4a44ee935f"
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
