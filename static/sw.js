importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02065865d66d0e1c27a7.js",
    "revision": "12396a44375b3a85e2daca5c71305e3a"
  },
  {
    "url": "/_nuxt/0933ad3737a2cfdb97c9.js",
    "revision": "2f3098d47f708f6c0d435c71fa1219c0"
  },
  {
    "url": "/_nuxt/0d4734dfcf20e6ad3599.js",
    "revision": "526d78d9ace8f34d79b6de8c49b3855a"
  },
  {
    "url": "/_nuxt/2eec736400a8097bc9c6.js",
    "revision": "7675f8273286cd1092f64cdda50273dc"
  },
  {
    "url": "/_nuxt/2f6e2ee509a5f0eb41ec.js",
    "revision": "d133513eb2c941460031b4d956600753"
  },
  {
    "url": "/_nuxt/3b2be93d5fd5770bac55.js",
    "revision": "7719d616a6516104526a6023a3524669"
  },
  {
    "url": "/_nuxt/3ba31ae2439aef524043.js",
    "revision": "6a862a3abc621ccaba956880cdb3e215"
  },
  {
    "url": "/_nuxt/4154563d78912f52a889.js",
    "revision": "8ac1cb6e9611971e5909a3014f87ea7c"
  },
  {
    "url": "/_nuxt/42be91f55f5616de53e5.js",
    "revision": "9162ba68a2259780f2655e20d40fc3e1"
  },
  {
    "url": "/_nuxt/43807dc52536b53ae8d8.js",
    "revision": "8cc89de65ae0299ba8664e0317626a24"
  },
  {
    "url": "/_nuxt/48b304dd1e4162253092.js",
    "revision": "5a17e44c84f206522c02af2dc6cd3434"
  },
  {
    "url": "/_nuxt/514720c9aa07c1019306.js",
    "revision": "5dd991ef3f6594945633e6f0de8e2d8d"
  },
  {
    "url": "/_nuxt/5373a1c0595641a9eadf.js",
    "revision": "a08f8713c179ce1da10890e8b0df978c"
  },
  {
    "url": "/_nuxt/5c32ddf6e11950c634b0.js",
    "revision": "0c6b84587f7b97b1f91c99196eb4151d"
  },
  {
    "url": "/_nuxt/728d24ccbfa42bb1f934.js",
    "revision": "367a5b00038f79adee43c8b1f6082138"
  },
  {
    "url": "/_nuxt/73d0d7dee63c00e66c0d.js",
    "revision": "82b43abb431944e9939d6a64a84936e0"
  },
  {
    "url": "/_nuxt/828b1abff7e965c525c5.js",
    "revision": "0c959e55c9761d5509e67b6f3736a549"
  },
  {
    "url": "/_nuxt/94fd91b3a0249effc12c.js",
    "revision": "6873d83e3737665f8d953c6a5520e25e"
  },
  {
    "url": "/_nuxt/a412a993e363acc186f0.js",
    "revision": "50f6974d6d44656ab27edcba1e07d38f"
  },
  {
    "url": "/_nuxt/b210e4aba8e85521054c.js",
    "revision": "ab5dc1327ceb0c828aabc227b865d424"
  },
  {
    "url": "/_nuxt/c1c50dc59a8848507404.js",
    "revision": "e5a2722a7d1ed2b837c9ed0e00bb6973"
  },
  {
    "url": "/_nuxt/c2d148f1426407f6de35.js",
    "revision": "f9744d547177c71a4d327d3400cea43c"
  },
  {
    "url": "/_nuxt/c4d8949de01961611b65.js",
    "revision": "e6308d24503d29a67c840692686a33c0"
  },
  {
    "url": "/_nuxt/d99555c7efcb6d2e2bef.js",
    "revision": "e7039bc523b9e452dd52c2d27380cc1e"
  },
  {
    "url": "/_nuxt/dc8aeffee6e7f1a9e43a.js",
    "revision": "1a1a7724c5c0c715c96280716332b3d0"
  },
  {
    "url": "/_nuxt/dcf9955249cd0531889c.js",
    "revision": "297f8305355516b320606bd67621074b"
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
