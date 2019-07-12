importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00a4640fcbffb6a2f0a5.js",
    "revision": "80e650bc615ef73240f97999670d3d76"
  },
  {
    "url": "/_nuxt/0d9fb9935a440cb1225d.js",
    "revision": "2dbd0042a0dafd70a49354c7e7055fa1"
  },
  {
    "url": "/_nuxt/330211bfa51c84ca07cb.js",
    "revision": "8d4d53d982b73f2c694b3099585ce564"
  },
  {
    "url": "/_nuxt/4880075e493ac915c498.js",
    "revision": "3e223a7efcb84c51ecadd99e7236fccb"
  },
  {
    "url": "/_nuxt/5454d709000b69a1a0b8.js",
    "revision": "34733178eec72cb91ec5afa0cdff2ac4"
  },
  {
    "url": "/_nuxt/6676fc7c40723698f47c.js",
    "revision": "031f85a984b0b46b59b5f1cd8fd3884c"
  },
  {
    "url": "/_nuxt/70245ac9ecbb2acf43f8.js",
    "revision": "0b5e697d7d1d7a232fe7ce5bb3231ed9"
  },
  {
    "url": "/_nuxt/75d215f5d0273e2fd1f1.js",
    "revision": "f18f34173bc4994c7eaca9b31240c776"
  },
  {
    "url": "/_nuxt/777912b4a84a8ed1c846.js",
    "revision": "007a46273f46622613bfadae174486c1"
  },
  {
    "url": "/_nuxt/7932309a3598971b2350.js",
    "revision": "02d82681f077ade94d5f11bc41616c54"
  },
  {
    "url": "/_nuxt/7c4d59761b977a0a6a19.js",
    "revision": "06a2dff61649452c18b0836859d14f81"
  },
  {
    "url": "/_nuxt/8c8c999d0d4ce512f49d.js",
    "revision": "e6b318e58b760821ef77733e4ce44719"
  },
  {
    "url": "/_nuxt/b08931e400e581dd6865.js",
    "revision": "7c9b10a7e08f00b0f3606947afa875cc"
  },
  {
    "url": "/_nuxt/b4aa1979a442c526b586.js",
    "revision": "37ce781c9e0677143f25f12dfd7a837c"
  },
  {
    "url": "/_nuxt/b99b66bf2ceb962d793a.js",
    "revision": "6238f0ebf353fdf4bd4a89d794109af7"
  },
  {
    "url": "/_nuxt/b9ce800aea38bd87acf2.js",
    "revision": "1ea446e661648a58b7f6fb693fe7c741"
  },
  {
    "url": "/_nuxt/c485a0d60d294faafc81.js",
    "revision": "3784649166a077983b2db6b4b19f4c76"
  },
  {
    "url": "/_nuxt/c5a3ac29e9b2a54d0c3f.js",
    "revision": "0a2730b16373bb648a2c61f856f03d43"
  },
  {
    "url": "/_nuxt/c76e5a9be28027a417d0.js",
    "revision": "66f8d275838c6546ba5facf9bb1a2cd7"
  },
  {
    "url": "/_nuxt/d6ca56139d007e7ec73b.js",
    "revision": "7bf07ab8e31180e1b815d32946295293"
  },
  {
    "url": "/_nuxt/db89c48389028989353b.js",
    "revision": "467bf9d8f57e7350da9c807c411ae651"
  },
  {
    "url": "/_nuxt/dc5809626767274dd137.js",
    "revision": "773f7b71c634cf9089510ad5928e04e4"
  },
  {
    "url": "/_nuxt/e8f753b24f49ec4b8cf2.js",
    "revision": "6b0a2ab8b5853141b8eb44f08ad1bc9b"
  },
  {
    "url": "/_nuxt/ec21d1b51addc4a7fb7e.js",
    "revision": "39bb05afa07b7d625944699639cb7358"
  },
  {
    "url": "/_nuxt/ef424c51447b7b7c63cd.js",
    "revision": "2075b733a5fb97adddefa5f9a5fcf762"
  },
  {
    "url": "/_nuxt/f1a7c8b62036cc52619a.js",
    "revision": "012de9065f07a92fa4200d57a76dd836"
  },
  {
    "url": "/_nuxt/fe90431b6b30a63d4d46.js",
    "revision": "b2d27c7c67d8329e16521f2ddb6c8177"
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
