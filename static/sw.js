importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05e13b7e5114aee7280f.js",
    "revision": "2b67bb76ed8deae40383263c29b57d24"
  },
  {
    "url": "/_nuxt/15aeaaf383b8b9c76c9d.js",
    "revision": "14cc63ab027a5b1f421e7c2326e9c62d"
  },
  {
    "url": "/_nuxt/26d359907533f4f328a7.js",
    "revision": "d43f42c4a044e1f00a1a8c6f2d4b1b04"
  },
  {
    "url": "/_nuxt/2a85e178bd035b953fcb.js",
    "revision": "a3887d6d62f7ccad350803f293166e97"
  },
  {
    "url": "/_nuxt/373ec0f106705ec93b92.js",
    "revision": "4d04380a51ee06701e89d01e67baf902"
  },
  {
    "url": "/_nuxt/3d1112a433dc39062bfb.js",
    "revision": "ac095606d4507d93d286e280a29bf5e1"
  },
  {
    "url": "/_nuxt/48a7ceb6859fbbf48b52.js",
    "revision": "858044b2e5e698fb63400944b6394b88"
  },
  {
    "url": "/_nuxt/516b36af09104a534212.js",
    "revision": "f7c46a401a496ffc2c92d2b78f9befc0"
  },
  {
    "url": "/_nuxt/54afe46da184ce8ffe28.js",
    "revision": "369b9b5ab83aa2046fbe244defd992c1"
  },
  {
    "url": "/_nuxt/553fb49d90c9b8965dd5.js",
    "revision": "023a656b83ae0213dd97b84912a73bdc"
  },
  {
    "url": "/_nuxt/5cfac07e6a73cdc1121b.js",
    "revision": "23f98b1559ac2451ee6c7c310dd3d9d4"
  },
  {
    "url": "/_nuxt/6c5dd0d642e3a89c20ee.js",
    "revision": "c67419b5f9f154afe63d7ab97c7e1e6c"
  },
  {
    "url": "/_nuxt/7570c73d5cc0d1ae565f.js",
    "revision": "02377cc31b7ca71dc6d82ec3587bbc39"
  },
  {
    "url": "/_nuxt/76bd0239666f098e20bc.js",
    "revision": "1fdab294797db610547328304381bf59"
  },
  {
    "url": "/_nuxt/790e1ca10f2b48c7d36c.js",
    "revision": "2a465d90100da48a49c4816696a1face"
  },
  {
    "url": "/_nuxt/86afdabb00c7f5c0f134.js",
    "revision": "93d4f723c1cf04b602187229ddea1db0"
  },
  {
    "url": "/_nuxt/9af836bcef045cd25904.js",
    "revision": "5f13797cdf00b483ea70eb14a613be23"
  },
  {
    "url": "/_nuxt/a1dbc755ecdb9733b4ac.js",
    "revision": "6eab29e92a8c980a5a31aa946afcd609"
  },
  {
    "url": "/_nuxt/b1fd57c63c7de36c7f9c.js",
    "revision": "aecd88b8ae8e1aecc56d570433f31e99"
  },
  {
    "url": "/_nuxt/b21a804d58d88d263376.js",
    "revision": "caaa788f701757972001532246770146"
  },
  {
    "url": "/_nuxt/b38fa7c6091878561108.js",
    "revision": "36a17528d9facdf984ee17b09be32e56"
  },
  {
    "url": "/_nuxt/be198307168b663dbe80.js",
    "revision": "1dc70fc28186c7be080eed263d1c7962"
  },
  {
    "url": "/_nuxt/c90ec44c9ebc0beeeea7.js",
    "revision": "e2edff95cb6c011fc47891b791a6731a"
  },
  {
    "url": "/_nuxt/ca148784b060423e42e1.js",
    "revision": "43fcc18dcd52d18b7ac50df1ec6dc9eb"
  },
  {
    "url": "/_nuxt/d10e40a9fc08e4000ce2.js",
    "revision": "2d5180f536f920d5c1bd692310c4041d"
  },
  {
    "url": "/_nuxt/ece8a185c62f43ea8a0e.js",
    "revision": "9d9ad7903411541b11faa0de11951d80"
  },
  {
    "url": "/_nuxt/f58e6e2b004dbd44ec8a.js",
    "revision": "63751d3a9ee6d88ce07b3faebb3242bb"
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
