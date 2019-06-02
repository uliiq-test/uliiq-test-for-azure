importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0226fb135871b2f7ea42.js",
    "revision": "cf58c30160e7981e4a50b9f1eb11015d"
  },
  {
    "url": "/_nuxt/0989896fa6777c7f032b.js",
    "revision": "3bbe1b5d3e287db5e9804336a7cd4ad4"
  },
  {
    "url": "/_nuxt/0b03805659aca9e49231.js",
    "revision": "87ed5764a9b7d8f200bc15a3498db606"
  },
  {
    "url": "/_nuxt/0fa30f4ba889810c539f.js",
    "revision": "b8a57b16570e59e42cc9fcb74a13f6c6"
  },
  {
    "url": "/_nuxt/1e4a1ae229cfea060a0f.js",
    "revision": "9b421e1e6b5b6352ba9384b4eda9c945"
  },
  {
    "url": "/_nuxt/32fa23cb46dd6189e8f0.js",
    "revision": "9a263c5ae345664be5e73465b0b04e6a"
  },
  {
    "url": "/_nuxt/4f4aef6e446bb250231c.js",
    "revision": "364933af95d9eb732ef257f1b6fb1750"
  },
  {
    "url": "/_nuxt/5cfac07e6a73cdc1121b.js",
    "revision": "23f98b1559ac2451ee6c7c310dd3d9d4"
  },
  {
    "url": "/_nuxt/6a4d9e2515fd3ab43bf3.js",
    "revision": "b290b3a75f17db1001aa49e88576e2bd"
  },
  {
    "url": "/_nuxt/731e38c2c222c56c5cb7.js",
    "revision": "05076503b81e03bd9bb30ddc5fb41d97"
  },
  {
    "url": "/_nuxt/76fb5b4a93b7e7496bcc.js",
    "revision": "ec682e37e536f45159f887e6a0ed16d3"
  },
  {
    "url": "/_nuxt/7fe114fb5652df93a3e6.js",
    "revision": "7d01a7fd0ec177d33f1d9ba4bcd1d2b4"
  },
  {
    "url": "/_nuxt/8916dfceb6f1b22fe01c.js",
    "revision": "f5f444e02e952db287d2cd5e6e149f93"
  },
  {
    "url": "/_nuxt/9dd767c38cf968ab2f7d.js",
    "revision": "368e970841e82787ab125eb149c691b3"
  },
  {
    "url": "/_nuxt/ab02890fcdabc28d6357.js",
    "revision": "09ecd2f65c016020cfc5ff7889d66af9"
  },
  {
    "url": "/_nuxt/b17c6db791d5464ad160.js",
    "revision": "b7b00efa9c82dc66f22968db9ba79b20"
  },
  {
    "url": "/_nuxt/b2f9d68e01647fd8c3f6.js",
    "revision": "a7de3b9a02c666e212dc581e91ade410"
  },
  {
    "url": "/_nuxt/bb62762c5b1a9bb5837c.js",
    "revision": "fe5db03cef61654a1213dabed281ef10"
  },
  {
    "url": "/_nuxt/caa41351e6ab629ccba4.js",
    "revision": "1f78910bc9c256ebfd45dc0d4450e645"
  },
  {
    "url": "/_nuxt/d7165bb7e77d859577be.js",
    "revision": "e72208c8aa3fd54c87d656a0c81d714f"
  },
  {
    "url": "/_nuxt/daf7458b83c48456ba2d.js",
    "revision": "e29b7ec10602a043868479930ba74e49"
  },
  {
    "url": "/_nuxt/dd6187d823615b2b2889.js",
    "revision": "2498a3eb97b05e52074330515b86c883"
  },
  {
    "url": "/_nuxt/e7c9d524580856104a5e.js",
    "revision": "ad9450848151f2f1083e300255bffe18"
  },
  {
    "url": "/_nuxt/eeab7b0da14190276494.js",
    "revision": "a2480ddeaead25fffdc1dab7b49ff3ec"
  },
  {
    "url": "/_nuxt/f9992049a2bcd36c7349.js",
    "revision": "4c271a6b0fb976a5bc806e28f48faf3b"
  },
  {
    "url": "/_nuxt/fc5c10952f4de2599ed4.js",
    "revision": "3e6e3f770f57c209f8e1f15690c6de4b"
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
