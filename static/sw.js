importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07c17df815e66d7c14c9.js",
    "revision": "c9c399b989a037739e9feb59f2b3cbce"
  },
  {
    "url": "/_nuxt/0d59eba34c6aa0fe44be.js",
    "revision": "95eb2b7dda7753d477854df1409cc8f3"
  },
  {
    "url": "/_nuxt/113e079f86eabd33814e.js",
    "revision": "3b2aa331d4c038db68d78df9ff399f02"
  },
  {
    "url": "/_nuxt/30b2b81aef43a566da61.js",
    "revision": "e1814ff8964f1dc3f87ee03c9fd016eb"
  },
  {
    "url": "/_nuxt/3922fb8961beced546d7.js",
    "revision": "6ec96eaa9b08ff54dca57e38a5524c1a"
  },
  {
    "url": "/_nuxt/4e96b0790b1232801749.js",
    "revision": "556721b4f5e124e5a55d9d84feec146e"
  },
  {
    "url": "/_nuxt/50ef287a6fe5a8595853.js",
    "revision": "b08924be6facc0a67684dad4baf4a1a8"
  },
  {
    "url": "/_nuxt/51d589c736d50ae25710.js",
    "revision": "6d6f50b60141a8798a31534ceb0d1cb9"
  },
  {
    "url": "/_nuxt/5b4b874a4c26ea02a7f3.js",
    "revision": "7a106f238a17ed151d757ef8845aa532"
  },
  {
    "url": "/_nuxt/63b63bba34579be23103.js",
    "revision": "d10508e1d37381d46c9886186ad1d498"
  },
  {
    "url": "/_nuxt/6f29a6e12102d3d34b48.js",
    "revision": "b5f9f1b5289405eb8949ff02eebe4368"
  },
  {
    "url": "/_nuxt/723137ad5ffaf581a4f9.js",
    "revision": "ee9139b2355a35ff88de84402a48b445"
  },
  {
    "url": "/_nuxt/7c70951f4317ce8317b6.js",
    "revision": "8336e222febffcab7074d1ea7d5a8683"
  },
  {
    "url": "/_nuxt/7f57bffb5cc5579c412d.js",
    "revision": "5910025839b1df12650d82378c5ba4e9"
  },
  {
    "url": "/_nuxt/81278ff953fee3cf7a70.js",
    "revision": "2eff8c3ea4c8aefda441e7ac47622b55"
  },
  {
    "url": "/_nuxt/838bdd9e3c4646182f67.js",
    "revision": "ccd08ae74504128ecae0ee275794e9ac"
  },
  {
    "url": "/_nuxt/8cf512b0eb1d9bdcc435.js",
    "revision": "96a93514bae32c891db11ff5a8995f6f"
  },
  {
    "url": "/_nuxt/920dfedb46ea8db07b49.js",
    "revision": "2da59fb213f1ab132961a7f4cfa6d9b6"
  },
  {
    "url": "/_nuxt/93106db7fd514c0c0cee.js",
    "revision": "2c759e0d3e55977c4a4636ca8924fc1b"
  },
  {
    "url": "/_nuxt/bedf1e9ed8a8dd15e461.js",
    "revision": "f7b3a7312d1826986f47bb33329c0cde"
  },
  {
    "url": "/_nuxt/cc03612f1c2a9992c6e7.js",
    "revision": "18ff32f6fdaaf00dcbe7ea04755efdec"
  },
  {
    "url": "/_nuxt/d57d4cf9db94228e3bf9.js",
    "revision": "e1e39c5f153c7fb48c187cc89db35e0a"
  },
  {
    "url": "/_nuxt/dd15d72e9818ec00a186.js",
    "revision": "c986526648c270550597de8b5a762585"
  },
  {
    "url": "/_nuxt/e7c8ffac94d86d54ba6f.js",
    "revision": "f42344556713ed27aab9ce878225e484"
  },
  {
    "url": "/_nuxt/ee4ddd95b4609b3e31ed.js",
    "revision": "bef864cdc5902f35cfbc2b86252ad45a"
  },
  {
    "url": "/_nuxt/f6e643c4af8252a385da.js",
    "revision": "9aa2d1e54dbbbf411ae6125a67f267a3"
  },
  {
    "url": "/_nuxt/ffc4c137b5b4e47fb5e5.js",
    "revision": "de8983ef844b7b22f6e0366cffcc1cec"
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
