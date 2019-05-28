importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1c20394e6328d9029943.js",
    "revision": "96114ab18a191bbd389652a11098a4ea"
  },
  {
    "url": "/_nuxt/1ea6b7a595a7a614a749.js",
    "revision": "a7f19e0eb20fcc7358296bfa4a3e0bfc"
  },
  {
    "url": "/_nuxt/38bcacf7b6b6be5c5794.js",
    "revision": "a81605678376fbc46988dfc63809607f"
  },
  {
    "url": "/_nuxt/44d355b64238bc3a8a62.js",
    "revision": "9d9ad7903411541b11faa0de11951d80"
  },
  {
    "url": "/_nuxt/5b6abc712068857ce2de.js",
    "revision": "52b876c563edce02cb36b4170eb34fc1"
  },
  {
    "url": "/_nuxt/5fda01512215c4a0c656.js",
    "revision": "754ed4988908701863ef32d1158aedf5"
  },
  {
    "url": "/_nuxt/633c22c03f64d6f02dcb.js",
    "revision": "a6c38f45bebd90dc2ad5d69d1166dcfe"
  },
  {
    "url": "/_nuxt/64902782fd8005d2d335.js",
    "revision": "5df32e0bcb12fa676ad55c9ae4130a1b"
  },
  {
    "url": "/_nuxt/67953294aea61e743830.js",
    "revision": "eee921b505aee747bb832cd83587772d"
  },
  {
    "url": "/_nuxt/6973affd33d4c502af38.js",
    "revision": "6e23d87cee9d6ac15aa7e270f933ec5d"
  },
  {
    "url": "/_nuxt/77bf3c4552cd319c8e59.js",
    "revision": "bcd51bf374d03e71ba6bb7d3a6cdea9d"
  },
  {
    "url": "/_nuxt/8495ef9b71fc812891df.js",
    "revision": "2077de80aaf91d399a0f94d7c66fcbb5"
  },
  {
    "url": "/_nuxt/a369ae6b3abc858ef69c.js",
    "revision": "fecadb2925aced64a021408b2eeea707"
  },
  {
    "url": "/_nuxt/a5a228b6d82c4eb9ecc9.js",
    "revision": "ed57ea248d2b2809888e8840f81e4fb9"
  },
  {
    "url": "/_nuxt/ac44e329f294b8f0e119.js",
    "revision": "ccce64223dd06737014b8c7774c94519"
  },
  {
    "url": "/_nuxt/ae0f3871cbdfe1c8e3b6.js",
    "revision": "17e9c19cabafd08104e7a5fcd1f3654d"
  },
  {
    "url": "/_nuxt/d182b021c831c0ba5702.js",
    "revision": "6636500929658b7f1e29d0f1080911bc"
  },
  {
    "url": "/_nuxt/d7735b3c118f4188ce29.js",
    "revision": "764f42f5d7980eaf5d6a0fad86a0c57f"
  },
  {
    "url": "/_nuxt/dac2c7d4bc5f6fc32b8b.js",
    "revision": "7b1a0809f50d131fe171b0970f4c7a26"
  },
  {
    "url": "/_nuxt/dada2db4e2f8aaa9bd8e.js",
    "revision": "133cc94f680886b02dc721bad8adf9c8"
  },
  {
    "url": "/_nuxt/dc27b468d70d9544e4e5.js",
    "revision": "4d08c3bb9cc3e2d671c4f8469e2b3b35"
  },
  {
    "url": "/_nuxt/deb8a2f54c3b88b62510.js",
    "revision": "bedc295d2b409955142c054aef2dd1f4"
  },
  {
    "url": "/_nuxt/f2324df780f3c96c077d.js",
    "revision": "d80acf4997a524c98642e8c392184640"
  },
  {
    "url": "/_nuxt/f3068ddd7485b52bb8b4.js",
    "revision": "ecdc6c9403c99ec5a5e89d05196db12a"
  },
  {
    "url": "/_nuxt/f541ecbbd5c5d091624d.js",
    "revision": "52ff39321712c14a1e7627d5f3d7ad4d"
  },
  {
    "url": "/_nuxt/fae73f040977382e5dd4.js",
    "revision": "4f1631e531c3f3af5ad50783b60a84b9"
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
