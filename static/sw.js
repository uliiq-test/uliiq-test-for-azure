importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09caaabfe81d1f14c9e7.js",
    "revision": "379c1b768be42b06a768df9bae7b4a62"
  },
  {
    "url": "/_nuxt/10484d2dc576c91c6f26.js",
    "revision": "fc2f753588413e94b5327c422d142c4a"
  },
  {
    "url": "/_nuxt/3d6aa1a1a0d2fcc94216.js",
    "revision": "135597801e7009d0469d0ec21eb039e1"
  },
  {
    "url": "/_nuxt/4c62dba808e978fd95fe.js",
    "revision": "25c93dada100f86023fe6c64b7558daa"
  },
  {
    "url": "/_nuxt/543468ab3f81678aa92b.js",
    "revision": "49402fd8f05015a7a7c052941b8a4626"
  },
  {
    "url": "/_nuxt/5c7c31367de7b1241c76.js",
    "revision": "4786672cf643ef95568e507d753f01e6"
  },
  {
    "url": "/_nuxt/6bdbc1d13290b2794720.js",
    "revision": "594d3669ed6640c518f6a5c0899636c5"
  },
  {
    "url": "/_nuxt/6ec66a49f3f9e75e6a6e.js",
    "revision": "e2effcd80e0dcc58fcb3665b69222774"
  },
  {
    "url": "/_nuxt/724ed6612499deecde4a.js",
    "revision": "b3d04f215f90210c29346c5bf64aa108"
  },
  {
    "url": "/_nuxt/733d7bb354e51fad5c52.js",
    "revision": "335eeaf5aca5f5919972243a662eb6b2"
  },
  {
    "url": "/_nuxt/7994c8fd627e867c2879.js",
    "revision": "49539ae387ab814c2393bc695aa86ba4"
  },
  {
    "url": "/_nuxt/7a86eaf62921b97a133d.js",
    "revision": "abe2e0a60ec1d821e3827d01f71f6a79"
  },
  {
    "url": "/_nuxt/83b295c83835e3edd7ea.js",
    "revision": "68ecf9803e3a6bd0c044c597f18b9ca9"
  },
  {
    "url": "/_nuxt/8ca095b29d79c9c7f2d2.js",
    "revision": "16ee5983efc72e8aaeeceb3ad36adef8"
  },
  {
    "url": "/_nuxt/93f8c22cf4001c5bc68b.js",
    "revision": "3258b8426bc50449b0cf6fd13f0684aa"
  },
  {
    "url": "/_nuxt/a763a5d17201a261faf6.js",
    "revision": "8f0aff45ed8e1773390dada2991d74d0"
  },
  {
    "url": "/_nuxt/b417adb48fe5d2037e47.js",
    "revision": "1c753ab718c21e866ecb129edfb55a62"
  },
  {
    "url": "/_nuxt/c9143c499f08dd744145.js",
    "revision": "73abb641c7e97cd8f64516dd09b79500"
  },
  {
    "url": "/_nuxt/c99f57e45d063c68e37b.js",
    "revision": "950efc1f521ae85e2f6228d05a89feea"
  },
  {
    "url": "/_nuxt/cb8b7f3a922476af2484.js",
    "revision": "38e0f6ad8e8330b3e14d7012c55e6dd4"
  },
  {
    "url": "/_nuxt/e9064c0fc520fa5bfcec.js",
    "revision": "b3ba63c1f7fffb515e59aee84fdf18f6"
  },
  {
    "url": "/_nuxt/e91c0a109edc7d77ef69.js",
    "revision": "88b98ff6259277a8758dc586911ae00d"
  },
  {
    "url": "/_nuxt/ee7aee6dede20fb5c5c3.js",
    "revision": "0650c2d98254b66a1a0a18adb3031dde"
  },
  {
    "url": "/_nuxt/f78edda5a872590fe985.js",
    "revision": "b9515d17057db9966de16a2ba4382953"
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
