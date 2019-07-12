importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01b9817c917737e43c4b.js",
    "revision": "52111d526fa0b591cdb2574ccbc6b7ee"
  },
  {
    "url": "/_nuxt/021239a62cf13db5e60f.js",
    "revision": "b54b68c3ea0a4e7dd4186bad96272f40"
  },
  {
    "url": "/_nuxt/19b11e7f5a7d0d8d5aca.js",
    "revision": "f4b3134029c6205c6474a6547c98a2df"
  },
  {
    "url": "/_nuxt/2c7ecc85a48e1edce88f.js",
    "revision": "89552477b313423d5427b6e15c89d869"
  },
  {
    "url": "/_nuxt/3a0f5aea21a6d09ebf1f.js",
    "revision": "6e41728e2f7dc0c06f86c1805978ea5c"
  },
  {
    "url": "/_nuxt/48fa0e6953f221853ba8.js",
    "revision": "5e5142da28c072efbae6daf4c0a8ca87"
  },
  {
    "url": "/_nuxt/4c5cba640f84b0b62dfb.js",
    "revision": "8881e2696b0d172a560112cb6c050dc4"
  },
  {
    "url": "/_nuxt/5842fcb8ee2332d6ec90.js",
    "revision": "33131779abb26484449bb709b725fec3"
  },
  {
    "url": "/_nuxt/6033bf344c365258dbbe.js",
    "revision": "1c10a1f51e2674789269d35de5498963"
  },
  {
    "url": "/_nuxt/6525a651715d5362b597.js",
    "revision": "ffc95314a92fbd18b740f48d79ba7d71"
  },
  {
    "url": "/_nuxt/69b70705e64336abd0dc.js",
    "revision": "748daeccac811b42ba0dffd66cd916e9"
  },
  {
    "url": "/_nuxt/7555026da2e4d2cb77c2.js",
    "revision": "03dc01de491121829737109068e58b8b"
  },
  {
    "url": "/_nuxt/76b99bcd60b05424c011.js",
    "revision": "7197b422f614811ffa08be86cfa7ac95"
  },
  {
    "url": "/_nuxt/7f77326f7f3973553d8d.js",
    "revision": "ca1896b4a581d1be597eff2842612862"
  },
  {
    "url": "/_nuxt/8b526fdc105062548ddd.js",
    "revision": "fa0cd2d00cdb965bc75893b3bcccc9bf"
  },
  {
    "url": "/_nuxt/a121f8b42ff5b07e0f20.js",
    "revision": "a1f0abab4f3465c51fd98f770ad16e0f"
  },
  {
    "url": "/_nuxt/a188f9846a16c339bc56.js",
    "revision": "dc567db493b03bb9976b6a65bf1e5f54"
  },
  {
    "url": "/_nuxt/a35089ee81d99779b6ad.js",
    "revision": "85da05cb133e03dc70ef2dfd4a5b9f56"
  },
  {
    "url": "/_nuxt/b956f158cfe3c53f5a01.js",
    "revision": "8e7bd28b8e9900f8aa9430849b46c2d3"
  },
  {
    "url": "/_nuxt/c0bdf5da2e552849d96d.js",
    "revision": "fef8ebfa3bafe12ecbaf945bdc4e0083"
  },
  {
    "url": "/_nuxt/c95fcd73cf0c6bea1f74.js",
    "revision": "287dcf0c0e670492980e5960bfaa3e3c"
  },
  {
    "url": "/_nuxt/db89c48389028989353b.js",
    "revision": "467bf9d8f57e7350da9c807c411ae651"
  },
  {
    "url": "/_nuxt/e6943d1508097c34492d.js",
    "revision": "26b738070bdb4b805d3b00dcaf611998"
  },
  {
    "url": "/_nuxt/ec21d1b51addc4a7fb7e.js",
    "revision": "39bb05afa07b7d625944699639cb7358"
  },
  {
    "url": "/_nuxt/f2450a3ac2a95bf8e9e6.js",
    "revision": "74ce6fcd44258ca6ad6eda1a438790e6"
  },
  {
    "url": "/_nuxt/f2a490c36a499aa75c3f.js",
    "revision": "6914cfba30499b9d8c98410fbf9dbdc2"
  },
  {
    "url": "/_nuxt/ffb865114120a9670684.js",
    "revision": "a5edb825c9b8a53eb7d37e61aeef4034"
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
