importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00e8d8ad1ee8eb23f568.js",
    "revision": "a5902132ee021467966536b1920351b2"
  },
  {
    "url": "/_nuxt/12f8566ad71ac7ad9d05.js",
    "revision": "b01968e34a83f718f3500c4ba255b46a"
  },
  {
    "url": "/_nuxt/26654168aadadca9c6fa.js",
    "revision": "2c72efd3c4c4bcc2ef31413a18bac969"
  },
  {
    "url": "/_nuxt/3b64af3ff98c2be92a8a.js",
    "revision": "ff61ff097de6263b3e046a0e60a8c733"
  },
  {
    "url": "/_nuxt/3f752b1bce626158178b.js",
    "revision": "e8ea2f90e605f0687b897f0ef1408f25"
  },
  {
    "url": "/_nuxt/45de21977dc2aa4399e8.js",
    "revision": "6b7d60afcb6aee52f31af322f9b328f4"
  },
  {
    "url": "/_nuxt/47904ce31fe5af945f28.js",
    "revision": "b48d91deeec1ae415de9779144e2a89a"
  },
  {
    "url": "/_nuxt/4ca7f5d121ef6c5e677a.js",
    "revision": "b33fec8f701a183cf4e32d3e43e4e549"
  },
  {
    "url": "/_nuxt/4d0d3b70ebfe228f0a92.js",
    "revision": "b89ee310d9b7ccdd010c1a6feda431ce"
  },
  {
    "url": "/_nuxt/577f1f3e75ef064cabab.js",
    "revision": "5618e6ecc711546c8befca2d170f8a97"
  },
  {
    "url": "/_nuxt/59382c020700f7a4c13e.js",
    "revision": "561849a8673ec856ab29eb98599832b4"
  },
  {
    "url": "/_nuxt/5b1141026d0fa122f310.js",
    "revision": "d14e2712c0aa37c61483c18c219275fa"
  },
  {
    "url": "/_nuxt/5c91d6801ec3eef8558b.js",
    "revision": "3f3278355910dd7edffdf31c926c1a86"
  },
  {
    "url": "/_nuxt/62d7181fa3ab21e3a58d.js",
    "revision": "65f7a357e90afad6bd0bfc36f894fa82"
  },
  {
    "url": "/_nuxt/69ca71c80950304cf35e.js",
    "revision": "144b85d9b4f37d187d6e9b387724e4ee"
  },
  {
    "url": "/_nuxt/846ca6422581ae424add.js",
    "revision": "ba5381477d35e81525a71f0532a11e81"
  },
  {
    "url": "/_nuxt/9326cdfdad657e8a3493.js",
    "revision": "2f677ec679b647c67d143970118c9ce5"
  },
  {
    "url": "/_nuxt/961fb89e8ec642f3e562.js",
    "revision": "b60507cb3cea3d41eb0a1cfcdf05c4d2"
  },
  {
    "url": "/_nuxt/9727461a5dcf047f222c.js",
    "revision": "bbe08a1a84c75f9c1167655ac1e3ab69"
  },
  {
    "url": "/_nuxt/9b08c3533346cb470908.js",
    "revision": "23ea1f3727b6d06f45661429746968f4"
  },
  {
    "url": "/_nuxt/a9edbe99242083b77b91.js",
    "revision": "b6999335ca1827f8096f75b03939589b"
  },
  {
    "url": "/_nuxt/aac09ad97a4fb0ec05dc.js",
    "revision": "70cc8a498eaf3f87e2926d6bb97b36a9"
  },
  {
    "url": "/_nuxt/cfd8ef4ad68b4458398d.js",
    "revision": "10a6cb6707afc0984b31b644fac492f1"
  },
  {
    "url": "/_nuxt/d28a3b796b8152843d13.js",
    "revision": "df4543290c95970c157fd706e5b91547"
  },
  {
    "url": "/_nuxt/dc6cf6d5e1dfdf3f6d80.js",
    "revision": "b47687aacb98909c095924eeb5ae0650"
  },
  {
    "url": "/_nuxt/e1e5cdf04d443c07075a.js",
    "revision": "41ccb699a078b92fa594cb78951631af"
  },
  {
    "url": "/_nuxt/e5ece27ed230d5e93168.js",
    "revision": "3144223a754e20777bafb64888d6fee8"
  },
  {
    "url": "/_nuxt/eb6b7b75acd0592a8bc6.js",
    "revision": "b12b1e3e5ee3defd21cfb0a093b6e0fb"
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
