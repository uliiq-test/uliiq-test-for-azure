importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11f1bf8cfe4faeeff9fd.js",
    "revision": "2b5c088570d01775c7b45bd9cc151ee4"
  },
  {
    "url": "/_nuxt/1706f53cb51adeb8498d.js",
    "revision": "85fc73470f8d5727346decbd819ad6d3"
  },
  {
    "url": "/_nuxt/1824159f69e524749f6b.js",
    "revision": "ed1cc176f20350a5c07cf117d12544a2"
  },
  {
    "url": "/_nuxt/1e09bed3a52b306a42a4.js",
    "revision": "1c187fae23c01fbbfd0d572c42dd0c06"
  },
  {
    "url": "/_nuxt/314dcb50905b06b6cb4f.js",
    "revision": "4b89c6d2184eee4623c172f99ce45ca4"
  },
  {
    "url": "/_nuxt/42942975bb613b165d66.js",
    "revision": "4fa996e537a9d753ce73ae73182dc1a8"
  },
  {
    "url": "/_nuxt/430e20ab6c286d7b5f33.js",
    "revision": "783a7efa1e21e3cbea36236fde4be2d6"
  },
  {
    "url": "/_nuxt/75206ad3bead4cc1fb01.js",
    "revision": "b6a51270fd9d999750fe55578012b783"
  },
  {
    "url": "/_nuxt/7e88aa2e3f7385545f7f.js",
    "revision": "bccfe8d3e6e6cf225fd6b55240ee50ba"
  },
  {
    "url": "/_nuxt/8493ddad379829effb4c.js",
    "revision": "19e597ff45dcafcef9f25502b3c20802"
  },
  {
    "url": "/_nuxt/86d4fda26ce671f7d631.js",
    "revision": "1e0bd9ac574e15760493a451145b34d9"
  },
  {
    "url": "/_nuxt/884f9bdc08d907c4e271.js",
    "revision": "2f3d7c68219fbb9a8e13e437fccee208"
  },
  {
    "url": "/_nuxt/8fd1365f1a08448bfd15.js",
    "revision": "c3e4b8ecad9fffdfb6372b7a85f1f46c"
  },
  {
    "url": "/_nuxt/9044598c948c995a5a20.js",
    "revision": "b3eb29841323de1cbbedd7f87bacdbb0"
  },
  {
    "url": "/_nuxt/96f78e7588305a5260b5.js",
    "revision": "b9165fe129df995e3e1b23d5953fb8b1"
  },
  {
    "url": "/_nuxt/a7b7b83a2dd29d52977a.js",
    "revision": "38bac14f4a1f2222dbb0783985457c5a"
  },
  {
    "url": "/_nuxt/b198b758046d4ddfeebd.js",
    "revision": "e710bede81e7df78ed7eb704412ed821"
  },
  {
    "url": "/_nuxt/c4baf45b5a0bbdf6177f.js",
    "revision": "579cae3137c0985b9da251891d0b401b"
  },
  {
    "url": "/_nuxt/c68cc2cddba143e9a00a.js",
    "revision": "c8108629789187b70ef51d52158565e1"
  },
  {
    "url": "/_nuxt/d3e5b55889eba394c02c.js",
    "revision": "92fe68d96b722db8353aed7d512395d2"
  },
  {
    "url": "/_nuxt/d4dda51d45ad2399bb3c.js",
    "revision": "fcd5c88bae192af7d4b7cfd32c846140"
  },
  {
    "url": "/_nuxt/d53bb5152f492700388d.js",
    "revision": "9d2acb7b64a569760bae3787decb368e"
  },
  {
    "url": "/_nuxt/e47add57fa8a55f6d871.js",
    "revision": "69ab8fe957cb9925b2abfd4f2c53af6a"
  },
  {
    "url": "/_nuxt/e6701ca3db84d6ad2ccc.js",
    "revision": "baf500158b1a5d2fcc5f5eb80d21e83d"
  },
  {
    "url": "/_nuxt/e767b9ea8b2dc96d8f3d.js",
    "revision": "eb19403905527341443b46a53f275e5f"
  },
  {
    "url": "/_nuxt/ea2fbf48f4d073bcd5ee.js",
    "revision": "b319f6047e046b8bf68d9db953071844"
  },
  {
    "url": "/_nuxt/f6b74d99fbff27e465ab.js",
    "revision": "5fb677064e4cae73c7db26624b5b1e1c"
  },
  {
    "url": "/_nuxt/fbf21778a61cff1c1afc.js",
    "revision": "272dc010efb913d445f9099c22fc8b7f"
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
