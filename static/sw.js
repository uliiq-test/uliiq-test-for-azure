importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/025cb07f064a6a233e6a.js",
    "revision": "1a539b1818cd292cc2c19b4c742b1a1a"
  },
  {
    "url": "/_nuxt/09c34d629647e684ed32.js",
    "revision": "70bdc3df52a202877adf9e029de9e446"
  },
  {
    "url": "/_nuxt/1cd26d66d43a603662c5.js",
    "revision": "a80683779d05232daf601d8101e44395"
  },
  {
    "url": "/_nuxt/1f83b8c9729b0c3cf216.js",
    "revision": "28542211bc97edf6be6c1a1f6d558163"
  },
  {
    "url": "/_nuxt/34e2b21846e8263aa9df.js",
    "revision": "78cf84d99517a88d4435229e62160d4b"
  },
  {
    "url": "/_nuxt/378f6e85b6616da17540.js",
    "revision": "28127b7d13fed29bfa72453177fc348e"
  },
  {
    "url": "/_nuxt/38e815fd2a5f96423584.js",
    "revision": "980248ba4fb5a7800e760f56e881ac22"
  },
  {
    "url": "/_nuxt/54073b6c3042b2f856f7.js",
    "revision": "deebfdd7638c25a4655c7ac4690f7c41"
  },
  {
    "url": "/_nuxt/5468c0ac92bee77d219d.js",
    "revision": "c9302377ca8b8fe02e7c07ce6ea6642c"
  },
  {
    "url": "/_nuxt/590acb10ea11e86e5030.js",
    "revision": "50a7a190fc245202f478315d4658be9e"
  },
  {
    "url": "/_nuxt/73660a54314cb0d3613e.js",
    "revision": "815c8bd4c5d50d54841efdfde723cb15"
  },
  {
    "url": "/_nuxt/777a7225d95961aebf4d.js",
    "revision": "60f4505ff85812373d3eb956cb61c928"
  },
  {
    "url": "/_nuxt/78657cc6820390045172.js",
    "revision": "2670bbb5fe0d7aecbeeaf2d834c5e2fd"
  },
  {
    "url": "/_nuxt/7be7d285ba9cd468e30c.js",
    "revision": "cb57fc5745920a35e5c7b1599b165e91"
  },
  {
    "url": "/_nuxt/810313b48e62a83162fe.js",
    "revision": "8eaa76d0c0c36d082f90ce1d339a3f0e"
  },
  {
    "url": "/_nuxt/a36c7d9ed5bcd20f582d.js",
    "revision": "34f55c9f3611819a4280daf962f57dff"
  },
  {
    "url": "/_nuxt/a88481e3904e912d881b.js",
    "revision": "2ffc49b55a703ed14ce12a4d4a68e03b"
  },
  {
    "url": "/_nuxt/abe93e76474b28a6d7cc.js",
    "revision": "bd77f1ddb2f879909551f84891848ccf"
  },
  {
    "url": "/_nuxt/bb3061536b1837bbdcc5.js",
    "revision": "023b221fe35a17345eec2d4d5c82e2c8"
  },
  {
    "url": "/_nuxt/be5176c7324b76ee054b.js",
    "revision": "3ee444133e08ebf07dfd8e1684ec7b78"
  },
  {
    "url": "/_nuxt/c61b538bf78419303e0c.js",
    "revision": "de0586be439a38aee1850d44be39d4af"
  },
  {
    "url": "/_nuxt/c7e78bfd5e0b53191eb2.js",
    "revision": "95fac6de678839496a9d478051afe842"
  },
  {
    "url": "/_nuxt/d6042348eb23bbda4fc7.js",
    "revision": "99f55005bd2863d5d53d4d1b3bd82a34"
  },
  {
    "url": "/_nuxt/e17f4486733e0583dbab.js",
    "revision": "54fe799863b1267422d06514c3089c1f"
  },
  {
    "url": "/_nuxt/f104981510909969d043.js",
    "revision": "488d49efae3cfd42315ca95c4853a726"
  },
  {
    "url": "/_nuxt/f967306a635c0b34f40d.js",
    "revision": "c195d53a4205b894485e7ef362ff958e"
  },
  {
    "url": "/_nuxt/fd9384f1a095231ade91.js",
    "revision": "747456daaede1be761ac6494034f45a9"
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
