importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/027b90a51a075860e0dc.js",
    "revision": "a7e481e0485caa5b32c7a959ff38f1dd"
  },
  {
    "url": "/_nuxt/0719f2871abc3ef122ac.js",
    "revision": "4da9346367f20c5fe2174369b44a7d04"
  },
  {
    "url": "/_nuxt/12b78772a29ba3ef97d0.js",
    "revision": "eb1c34e186c941d4c8b06fecb49efa36"
  },
  {
    "url": "/_nuxt/15baf9f7e07e8578d1f8.js",
    "revision": "b46a744fc10b65ec6ce9eab7a832d81b"
  },
  {
    "url": "/_nuxt/21afd500afc726036f52.js",
    "revision": "2f4816a60ad52263bc2aa30fac531113"
  },
  {
    "url": "/_nuxt/243c414b7a6990597e52.js",
    "revision": "ec5a49eb1311a9822a45812eeb279453"
  },
  {
    "url": "/_nuxt/382ec906bb6d5e15677f.js",
    "revision": "e7cfc9584a6add56c521ccfd9220dd11"
  },
  {
    "url": "/_nuxt/3b02625afecd313b468b.js",
    "revision": "38d63168db0a7f880d22e42d8bb8d2e3"
  },
  {
    "url": "/_nuxt/3c58d69734c7cd3c2ced.js",
    "revision": "0c089197c30fe08b013e349fe19a7bd4"
  },
  {
    "url": "/_nuxt/477d08eecedc3be1b715.js",
    "revision": "8612ba29b2c95859f1afda0a9da85f1d"
  },
  {
    "url": "/_nuxt/5f5298cd90bc9c48e948.js",
    "revision": "60ecaf3f2a98d83aec0756e2b50b090c"
  },
  {
    "url": "/_nuxt/67dae87192671403896f.js",
    "revision": "6f1017d8c54e3f1992fd3015f500d6a0"
  },
  {
    "url": "/_nuxt/6f8e6f5e59f1f193d231.js",
    "revision": "53c2e7e89e3410699f83091a2769969e"
  },
  {
    "url": "/_nuxt/7c2d7bbf8ea01f7645db.js",
    "revision": "617052da47c2148c8f4473d0cd69eb49"
  },
  {
    "url": "/_nuxt/7ef64f08e6629a6f4f2c.js",
    "revision": "168cfdfb182a214dc83b4dfbee59b170"
  },
  {
    "url": "/_nuxt/8d5227900575387dc5fa.js",
    "revision": "ef724adf2ef03008940209bfcdb85665"
  },
  {
    "url": "/_nuxt/9284f649fbee4c6e7e5d.js",
    "revision": "d9903b27ece90e62d40b88ec2e22fb54"
  },
  {
    "url": "/_nuxt/c5e36a58c456407c5e89.js",
    "revision": "aa9509626fb232dcb2e04414eabf4d95"
  },
  {
    "url": "/_nuxt/cdeeab05637f2c15ff23.js",
    "revision": "3183b5696eee3dcdfbbf80e9d70a1916"
  },
  {
    "url": "/_nuxt/d29e7e49f55b0fb6c204.js",
    "revision": "5ff9bc68b3f2faf3ffd0215a1b5ce114"
  },
  {
    "url": "/_nuxt/e02554098c0de633828f.js",
    "revision": "6286893a733b5603b15c60c76276234f"
  },
  {
    "url": "/_nuxt/e4a5e7efcd86f36ef6c6.js",
    "revision": "0e23cae2dea619717c6ace16fb85dfba"
  },
  {
    "url": "/_nuxt/e5d28f8f6f3e824c46d8.js",
    "revision": "aa8259d5175c0e9eebab1ff71545bebe"
  },
  {
    "url": "/_nuxt/e69be3ca92b2e9de249e.js",
    "revision": "45b6bf52911febcd77d7db755f64e058"
  },
  {
    "url": "/_nuxt/e8a3b18a4d9b31414c46.js",
    "revision": "c9afa25b033712e126b19917c660cc1c"
  },
  {
    "url": "/_nuxt/ecca14f5fdd04d896847.js",
    "revision": "57406f22cd76139dc14054411d908fc7"
  },
  {
    "url": "/_nuxt/fea24a83457b95f49427.js",
    "revision": "3ba8a4a93fb7c85b8bd3eda38f8663da"
  }
], {
  "cacheId": "WishHub",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
