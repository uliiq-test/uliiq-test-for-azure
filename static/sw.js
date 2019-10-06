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
    "url": "/_nuxt/1b4cb7acc81520a88bc0.js",
    "revision": "82b43abb431944e9939d6a64a84936e0"
  },
  {
    "url": "/_nuxt/2221d55fd186942d1faf.js",
    "revision": "16c46e3e20ca54d8c4f635b828906879"
  },
  {
    "url": "/_nuxt/25d6aebd1014a64df911.js",
    "revision": "6873d83e3737665f8d953c6a5520e25e"
  },
  {
    "url": "/_nuxt/2e6d94278bd2b7794b6a.js",
    "revision": "7719d616a6516104526a6023a3524669"
  },
  {
    "url": "/_nuxt/3863950252b839ed64ba.js",
    "revision": "8ffdbfbf32f8edc2575efa88bd5ee1ee"
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
    "url": "/_nuxt/48b304dd1e4162253092.js",
    "revision": "5a17e44c84f206522c02af2dc6cd3434"
  },
  {
    "url": "/_nuxt/514720c9aa07c1019306.js",
    "revision": "5dd991ef3f6594945633e6f0de8e2d8d"
  },
  {
    "url": "/_nuxt/5c32ddf6e11950c634b0.js",
    "revision": "0c6b84587f7b97b1f91c99196eb4151d"
  },
  {
    "url": "/_nuxt/68cb12d5bcb4087192e3.js",
    "revision": "e5a2722a7d1ed2b837c9ed0e00bb6973"
  },
  {
    "url": "/_nuxt/6e7b039dabdcb143837b.js",
    "revision": "3ddb1caff6869979eb4d01b62d64ffde"
  },
  {
    "url": "/_nuxt/828b1abff7e965c525c5.js",
    "revision": "0c959e55c9761d5509e67b6f3736a549"
  },
  {
    "url": "/_nuxt/93808bd06f5b9f55c33c.js",
    "revision": "c4477120539f99747832197f1c6826f7"
  },
  {
    "url": "/_nuxt/a412a993e363acc186f0.js",
    "revision": "50f6974d6d44656ab27edcba1e07d38f"
  },
  {
    "url": "/_nuxt/b1582eebcab8a03337e1.js",
    "revision": "8cc89de65ae0299ba8664e0317626a24"
  },
  {
    "url": "/_nuxt/b3444c4b68465bf3072a.js",
    "revision": "ab5dc1327ceb0c828aabc227b865d424"
  },
  {
    "url": "/_nuxt/beea501165506f44a0ea.js",
    "revision": "1a1a7724c5c0c715c96280716332b3d0"
  },
  {
    "url": "/_nuxt/c2d148f1426407f6de35.js",
    "revision": "f9744d547177c71a4d327d3400cea43c"
  },
  {
    "url": "/_nuxt/d8e813fa61222b1f18ff.js",
    "revision": "367a5b00038f79adee43c8b1f6082138"
  },
  {
    "url": "/_nuxt/d99555c7efcb6d2e2bef.js",
    "revision": "e7039bc523b9e452dd52c2d27380cc1e"
  },
  {
    "url": "/_nuxt/dcf9955249cd0531889c.js",
    "revision": "297f8305355516b320606bd67621074b"
  },
  {
    "url": "/_nuxt/e1e1d5ad3e79c7589142.js",
    "revision": "e6308d24503d29a67c840692686a33c0"
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
