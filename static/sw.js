importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/087819dffd49a88cc3d6.js",
    "revision": "c82082cbfd4b896971e255e7e70523f6"
  },
  {
    "url": "/_nuxt/0a91e3f76ddef00d7b97.js",
    "revision": "75d89b498df0a3b0bbe605cc66c5fe17"
  },
  {
    "url": "/_nuxt/0cd9c79870358532605c.js",
    "revision": "b0de9b981ab9dd5b100b78002672162c"
  },
  {
    "url": "/_nuxt/4c0f6fb2766eaa766c77.js",
    "revision": "2f0ece39060c1b2caaf77a4b39f476ea"
  },
  {
    "url": "/_nuxt/51425cdd1b2e874b1308.js",
    "revision": "8962adb196981cda24f609ea1235f9f3"
  },
  {
    "url": "/_nuxt/55e6818d6c2720a05112.js",
    "revision": "7929fd381ec777caaa1c4ada32e89ce5"
  },
  {
    "url": "/_nuxt/630093be38b2d3e8be43.js",
    "revision": "bf8cafd7abf64de204f3534190da5db9"
  },
  {
    "url": "/_nuxt/6b8c5438cc45a2561281.js",
    "revision": "7fd4de7a8568db56045d2acbed33e51e"
  },
  {
    "url": "/_nuxt/755e7a804e645b89c393.js",
    "revision": "ec0cb8df85abced98de77da425af41f1"
  },
  {
    "url": "/_nuxt/76e4cd6200113745fcca.js",
    "revision": "dd6fb7daa479688e534f76936617a098"
  },
  {
    "url": "/_nuxt/8ed8a03c2561d41a6577.js",
    "revision": "6e3d403c78360df5f9f7c32aa8417396"
  },
  {
    "url": "/_nuxt/948ed183b27eea1e782e.js",
    "revision": "3646425ce2e623b6bc53259366259fb4"
  },
  {
    "url": "/_nuxt/9949519f616517bbfd5e.js",
    "revision": "9e3b9a8e89fc14790cb6c8aec0ae92ef"
  },
  {
    "url": "/_nuxt/b04df5aadc9930182a2c.js",
    "revision": "6b517f247654bc055f765d2daa734237"
  },
  {
    "url": "/_nuxt/b8d1bfca9c2c7b0bfd21.js",
    "revision": "9096e3dabc328c3ee15e7d936017ab8b"
  },
  {
    "url": "/_nuxt/ba9678565c9af63c3b26.js",
    "revision": "a29cfdd28dc809644220a13d49ce0a86"
  },
  {
    "url": "/_nuxt/cc03612f1c2a9992c6e7.js",
    "revision": "18ff32f6fdaaf00dcbe7ea04755efdec"
  },
  {
    "url": "/_nuxt/ccd8b1af345d0e060bb8.js",
    "revision": "b339cbe05f83ce9fc912d4247e16cf03"
  },
  {
    "url": "/_nuxt/d0f6b9866405dc8d20bf.js",
    "revision": "5f3d6e3862219cb4fa3092b53085ec35"
  },
  {
    "url": "/_nuxt/dcb1f1814b648a179b23.js",
    "revision": "a962978af70d44b7f0e9d24bc8818637"
  },
  {
    "url": "/_nuxt/dd15d72e9818ec00a186.js",
    "revision": "c986526648c270550597de8b5a762585"
  },
  {
    "url": "/_nuxt/de2c9fca11e1475da36b.js",
    "revision": "0f44c34dbba74d541b7b0f10819f4246"
  },
  {
    "url": "/_nuxt/df167baea1ddf9bf4395.js",
    "revision": "4afdbd9caea4b6825db1c4e88a36626a"
  },
  {
    "url": "/_nuxt/e9be9e770352e8888b25.js",
    "revision": "c74f94d6d6db360aa7c830797f0f6ad9"
  },
  {
    "url": "/_nuxt/f30cc9524936324fc2dd.js",
    "revision": "fa6c431ee3b48acde84a1068548fb74e"
  },
  {
    "url": "/_nuxt/f9b896552de1d0409fc4.js",
    "revision": "bf9f7a5584b332092ce241c36f184a67"
  },
  {
    "url": "/_nuxt/fe9711143968c8d6beb0.js",
    "revision": "7939ecd71b69d0805f212644ec309d58"
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
