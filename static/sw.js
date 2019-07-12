importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/002496d9d38997389adf.js",
    "revision": "8d4d53d982b73f2c694b3099585ce564"
  },
  {
    "url": "/_nuxt/09e7c2a764c7f28df4b8.js",
    "revision": "2075b733a5fb97adddefa5f9a5fcf762"
  },
  {
    "url": "/_nuxt/0ce2caf0164fb6edc8a3.js",
    "revision": "1ea446e661648a58b7f6fb693fe7c741"
  },
  {
    "url": "/_nuxt/0daed307b411beb4e7e3.js",
    "revision": "2dbd0042a0dafd70a49354c7e7055fa1"
  },
  {
    "url": "/_nuxt/1fafa291e2d4b6d9ee2f.js",
    "revision": "37ce781c9e0677143f25f12dfd7a837c"
  },
  {
    "url": "/_nuxt/3781dec57dc0eca797e8.js",
    "revision": "007a46273f46622613bfadae174486c1"
  },
  {
    "url": "/_nuxt/3f5f5ab28d3ea50886a5.js",
    "revision": "02d82681f077ade94d5f11bc41616c54"
  },
  {
    "url": "/_nuxt/42818c11ea73c230e76e.js",
    "revision": "a2c07f552a74350bcda88c31e72a3145"
  },
  {
    "url": "/_nuxt/43d98ea2b9bea0939e79.js",
    "revision": "80e650bc615ef73240f97999670d3d76"
  },
  {
    "url": "/_nuxt/55dcd70b13e566020eba.js",
    "revision": "a895d6c9b6c0a344c9d797f7510698d3"
  },
  {
    "url": "/_nuxt/60bafea1675592596cc1.js",
    "revision": "34733178eec72cb91ec5afa0cdff2ac4"
  },
  {
    "url": "/_nuxt/68b5a661a8bc472022dc.js",
    "revision": "773f7b71c634cf9089510ad5928e04e4"
  },
  {
    "url": "/_nuxt/7a62dc271010194e9103.js",
    "revision": "7c9b10a7e08f00b0f3606947afa875cc"
  },
  {
    "url": "/_nuxt/84befd0deb8def37d90c.js",
    "revision": "06a2dff61649452c18b0836859d14f81"
  },
  {
    "url": "/_nuxt/8bd3fb11f2b1ba6e20b1.js",
    "revision": "f18f34173bc4994c7eaca9b31240c776"
  },
  {
    "url": "/_nuxt/9bc697bb905d7b6b1e45.js",
    "revision": "012de9065f07a92fa4200d57a76dd836"
  },
  {
    "url": "/_nuxt/a0269c34f874db9f9f6a.js",
    "revision": "66f8d275838c6546ba5facf9bb1a2cd7"
  },
  {
    "url": "/_nuxt/a5f05fbebf26ca757dec.js",
    "revision": "3e223a7efcb84c51ecadd99e7236fccb"
  },
  {
    "url": "/_nuxt/a8dcfcb8ac2f83297735.js",
    "revision": "7bf07ab8e31180e1b815d32946295293"
  },
  {
    "url": "/_nuxt/b27c2da77803386b3189.js",
    "revision": "031f85a984b0b46b59b5f1cd8fd3884c"
  },
  {
    "url": "/_nuxt/b99b66bf2ceb962d793a.js",
    "revision": "6238f0ebf353fdf4bd4a89d794109af7"
  },
  {
    "url": "/_nuxt/c5a3ac29e9b2a54d0c3f.js",
    "revision": "0a2730b16373bb648a2c61f856f03d43"
  },
  {
    "url": "/_nuxt/db89c48389028989353b.js",
    "revision": "467bf9d8f57e7350da9c807c411ae651"
  },
  {
    "url": "/_nuxt/e0ced80bbb1c54a44571.js",
    "revision": "b2d27c7c67d8329e16521f2ddb6c8177"
  },
  {
    "url": "/_nuxt/e153939dbf7f6c5542ed.js",
    "revision": "3784649166a077983b2db6b4b19f4c76"
  },
  {
    "url": "/_nuxt/e8f753b24f49ec4b8cf2.js",
    "revision": "6b0a2ab8b5853141b8eb44f08ad1bc9b"
  },
  {
    "url": "/_nuxt/ec21d1b51addc4a7fb7e.js",
    "revision": "39bb05afa07b7d625944699639cb7358"
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
