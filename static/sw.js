importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04f35b0eb0a0e9a2e69b.js",
    "revision": "49c0d4a3287622c55f1ed045c411a80d"
  },
  {
    "url": "/_nuxt/0c3a8ed0083b105a277f.js",
    "revision": "9d1e7eb470ae5887525cd2b61571214d"
  },
  {
    "url": "/_nuxt/23808985afde9ecee7e9.js",
    "revision": "b108e5788ce74fafc832aae43d40b0f8"
  },
  {
    "url": "/_nuxt/269c1d4e4caf62f99ab0.js",
    "revision": "7617ac9acdbbe2c58e0262acaee7be38"
  },
  {
    "url": "/_nuxt/26f8a0faaadbcb6b4a26.js",
    "revision": "798199d5d3305368026ad8a3049f78d7"
  },
  {
    "url": "/_nuxt/2b3fa43d010b11712e7d.js",
    "revision": "e7544a9ae01fc09a77fbab64d4b4aca1"
  },
  {
    "url": "/_nuxt/2bbd477ba07f3f7aca09.js",
    "revision": "9c4b3ab8e31563282968d04cced2b047"
  },
  {
    "url": "/_nuxt/31ed470185ae9a00b4b1.js",
    "revision": "5221b64082f338660d4114765ee4476c"
  },
  {
    "url": "/_nuxt/44b71b46b4ff3adcab14.js",
    "revision": "dcb6fd0c32bac7768e7d062ef4205396"
  },
  {
    "url": "/_nuxt/49fffa62462953d51c45.js",
    "revision": "c81846d59547bd7990aaefd702fb04d2"
  },
  {
    "url": "/_nuxt/4e5faecb3f318eef5859.js",
    "revision": "dbc8e9c63ccbf97a0b4bec391fc03657"
  },
  {
    "url": "/_nuxt/51ccc55d0276725d1787.js",
    "revision": "1f7e944394b99b186fa8f19d975347c9"
  },
  {
    "url": "/_nuxt/5b7a1cffad182ebf2494.js",
    "revision": "3303e2c5966474562b1c337597753880"
  },
  {
    "url": "/_nuxt/6b4be4c14e61d61605bf.js",
    "revision": "eacefb2ff3286302fed7b66832f31d0d"
  },
  {
    "url": "/_nuxt/7cc6b4bcdbd41f65d5fe.js",
    "revision": "746906ab62c2d3136709aa6e8dae2c3b"
  },
  {
    "url": "/_nuxt/837a4927886148c36a02.js",
    "revision": "e3dc543217281f25ee22bf00a610a865"
  },
  {
    "url": "/_nuxt/8b01e5ace3e36e0d1500.js",
    "revision": "5f7f03700e58b72fbb056f0d76fa2ffc"
  },
  {
    "url": "/_nuxt/912d9ea445006a7b453c.js",
    "revision": "2e0f3090e870a2184d59b6ba2a31518c"
  },
  {
    "url": "/_nuxt/a5958f684304cc7504ed.js",
    "revision": "929e03e3df8f20a334db7a4dd2f2b8cf"
  },
  {
    "url": "/_nuxt/ade1b28b56a91e6721fd.js",
    "revision": "213412d1d52c84e92555dd22080992bf"
  },
  {
    "url": "/_nuxt/ca1d2ba5d20183518070.js",
    "revision": "e95c58bd8d659a54bafda775a5046a08"
  },
  {
    "url": "/_nuxt/d32f2b6cce95b33df021.js",
    "revision": "209e1b2c4ea69182e11c09b1cb537b6a"
  },
  {
    "url": "/_nuxt/db5bf9ae67cb4939b6b3.js",
    "revision": "1f30fea052fd56169f74c69d66145381"
  },
  {
    "url": "/_nuxt/e90b9bf7cb029a5d6160.js",
    "revision": "b6682e9a82174d9768405a6132417a6c"
  },
  {
    "url": "/_nuxt/f172526fc7713dd5b46c.js",
    "revision": "a2a312e72a8ebd072930e2383df6f169"
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
