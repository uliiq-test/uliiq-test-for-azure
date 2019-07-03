importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09c34d629647e684ed32.js",
    "revision": "70bdc3df52a202877adf9e029de9e446"
  },
  {
    "url": "/_nuxt/24eb3f5ff3d08b9e497d.js",
    "revision": "70c691bc7cabc123c5c8d3ecdf049fb0"
  },
  {
    "url": "/_nuxt/32a6a7221ab1aec3745c.js",
    "revision": "99f55005bd2863d5d53d4d1b3bd82a34"
  },
  {
    "url": "/_nuxt/35531a346c162a45405d.js",
    "revision": "2db8266f10bdec388e929b11c8bfbce8"
  },
  {
    "url": "/_nuxt/3f9cdb87b06665be00c6.js",
    "revision": "c9302377ca8b8fe02e7c07ce6ea6642c"
  },
  {
    "url": "/_nuxt/55514b63d65ecacb50f4.js",
    "revision": "fd8b73a433f10c66a4cb43ca7c27f79c"
  },
  {
    "url": "/_nuxt/5a673bb3997f2555e611.js",
    "revision": "deebfdd7638c25a4655c7ac4690f7c41"
  },
  {
    "url": "/_nuxt/5ba13e87ad236447c534.js",
    "revision": "8020e95b8c9221100c0ee8d33ca31ef5"
  },
  {
    "url": "/_nuxt/73660a54314cb0d3613e.js",
    "revision": "815c8bd4c5d50d54841efdfde723cb15"
  },
  {
    "url": "/_nuxt/7e5a110f2d49f25c0306.js",
    "revision": "4c84eef02f11824e8814459a3a4c278d"
  },
  {
    "url": "/_nuxt/7f44643fed9c80491b14.js",
    "revision": "78cf84d99517a88d4435229e62160d4b"
  },
  {
    "url": "/_nuxt/895d3041abc75b48204e.js",
    "revision": "34f5468f3d0c3c307e1cebd10fe1de28"
  },
  {
    "url": "/_nuxt/8bdfad7f6a7206135535.js",
    "revision": "3ee444133e08ebf07dfd8e1684ec7b78"
  },
  {
    "url": "/_nuxt/960cce9b990c85931210.js",
    "revision": "a80683779d05232daf601d8101e44395"
  },
  {
    "url": "/_nuxt/9d79ca14ed0097ff6a62.js",
    "revision": "1cc7f3035fbe9bf3c5d4a161e9b4dff5"
  },
  {
    "url": "/_nuxt/a36c7d9ed5bcd20f582d.js",
    "revision": "34f55c9f3611819a4280daf962f57dff"
  },
  {
    "url": "/_nuxt/ab1d1f79866c53f5ad2c.js",
    "revision": "e5021473643d8d30af8f71d6726a9f81"
  },
  {
    "url": "/_nuxt/afb4a1d5d02f8cf0c53d.js",
    "revision": "95fac6de678839496a9d478051afe842"
  },
  {
    "url": "/_nuxt/bb3061536b1837bbdcc5.js",
    "revision": "023b221fe35a17345eec2d4d5c82e2c8"
  },
  {
    "url": "/_nuxt/bbb61c191e8abda94b4b.js",
    "revision": "5496208b40f179ec42f6fa9cbb201359"
  },
  {
    "url": "/_nuxt/c3ad8108616491d140b1.js",
    "revision": "42fe51b10042709071aeec346fb17f5c"
  },
  {
    "url": "/_nuxt/c4c003bc7a1d9867b054.js",
    "revision": "c195d53a4205b894485e7ef362ff958e"
  },
  {
    "url": "/_nuxt/d9cb9e8623adaf3e8878.js",
    "revision": "2ffc49b55a703ed14ce12a4d4a68e03b"
  },
  {
    "url": "/_nuxt/dcb795369e6d72c434eb.js",
    "revision": "cb57fc5745920a35e5c7b1599b165e91"
  },
  {
    "url": "/_nuxt/e481c296fee6578596be.js",
    "revision": "bd77f1ddb2f879909551f84891848ccf"
  },
  {
    "url": "/_nuxt/f40fc16b81eb0486e118.js",
    "revision": "8ddb1a9b9b4a1b3ce83d9bdbdb552f63"
  },
  {
    "url": "/_nuxt/fe53cf34655852b98dc1.js",
    "revision": "54fe799863b1267422d06514c3089c1f"
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
