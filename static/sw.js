importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a91c1951a5905274d22.js",
    "revision": "7f2411e932ace1fc754c2f7e39d25800"
  },
  {
    "url": "/_nuxt/124966a74a071e3a7fd1.js",
    "revision": "132de3a8e625e57cce47c9a315056a2c"
  },
  {
    "url": "/_nuxt/128d5bb376b8f4e72d99.js",
    "revision": "d796a47d22a487748dfe676090d0fe5e"
  },
  {
    "url": "/_nuxt/148d588afa27d48f26a1.js",
    "revision": "d0b68f59dc269b73ae9f11cd39186710"
  },
  {
    "url": "/_nuxt/15019f8040a2e2c8016c.js",
    "revision": "06cfe3fb2b1e648e133d41a63a1a4e9b"
  },
  {
    "url": "/_nuxt/1820b4fd48db50caab52.js",
    "revision": "d3466d7fc447c4679219d91e90110744"
  },
  {
    "url": "/_nuxt/368b04dc003a1babfaeb.js",
    "revision": "b8d23e6b4d79093d3971add441b4a8df"
  },
  {
    "url": "/_nuxt/371d79a2f3c1bf4046e8.js",
    "revision": "d3bc3e241ed997e9953f8b46c800fe2f"
  },
  {
    "url": "/_nuxt/48dbe0754dd162a90c6a.js",
    "revision": "5bc969819b408d987f056b072c4d0ad8"
  },
  {
    "url": "/_nuxt/4b7c92f4f88a40032ffa.js",
    "revision": "afc180b4bd051c98691ccc20fa67a402"
  },
  {
    "url": "/_nuxt/55f08aecaa9a1b3dccf4.js",
    "revision": "ac9453bac5570eb6e18a988bc0b7eed1"
  },
  {
    "url": "/_nuxt/5b1141026d0fa122f310.js",
    "revision": "d14e2712c0aa37c61483c18c219275fa"
  },
  {
    "url": "/_nuxt/6aa3f1ecec8271b21118.js",
    "revision": "7d279b3de9ab6662375f6083a27454e3"
  },
  {
    "url": "/_nuxt/6cfab5c89752287dd0ec.js",
    "revision": "55f548340ec02b54c570bca3f9ad0588"
  },
  {
    "url": "/_nuxt/75c4aa5ab592181c31e3.js",
    "revision": "57f51408c7cf0bb8a63628d338c654ca"
  },
  {
    "url": "/_nuxt/81e6d3f659581715fdaa.js",
    "revision": "cce09d7df18d09b51e7c8a4c69fd3b9f"
  },
  {
    "url": "/_nuxt/8848a52c92c57c523138.js",
    "revision": "8539dd6cf59c69d57acbe393ac7297b2"
  },
  {
    "url": "/_nuxt/91acbd5044aa9b7a95b3.js",
    "revision": "3b159d16b664d70ab1a8a28b6b27812f"
  },
  {
    "url": "/_nuxt/af9c12c0d570132ac8f6.js",
    "revision": "30de93fd065d4f39f48a10722b597162"
  },
  {
    "url": "/_nuxt/b4a8cadbb337355be25f.js",
    "revision": "b3494c7e3d620c763d0ab18d72cc8018"
  },
  {
    "url": "/_nuxt/bfe6995f4db117d8a1dd.js",
    "revision": "1f25b78e5544d0104faa580ceb114e26"
  },
  {
    "url": "/_nuxt/c042359768c0ba201786.js",
    "revision": "9dc3ca3a6a63e45c1a941d48c6de4f2b"
  },
  {
    "url": "/_nuxt/ccb4d9245165f6a72157.js",
    "revision": "5a32ba97b704b626378738c775b924a8"
  },
  {
    "url": "/_nuxt/d5fdd0761d9fb7bbcbef.js",
    "revision": "f0b589b29050cec2f52b3638e40e5dbd"
  },
  {
    "url": "/_nuxt/ea7479c2bc5f3199be81.js",
    "revision": "19b1d9540d78d4b4fefa9cc3a86f5b92"
  },
  {
    "url": "/_nuxt/efc5570044cf4352a2c3.js",
    "revision": "495bda4189a95166e13586c09ccf071f"
  },
  {
    "url": "/_nuxt/fbd4f922aec6fb713e77.js",
    "revision": "14af3871d9c7af9ebcdf3a102ea23f68"
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
