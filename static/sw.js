importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09c34d629647e684ed32.js",
    "revision": "70bdc3df52a202877adf9e029de9e446"
  },
  {
    "url": "/_nuxt/0f479223b96b3a786013.js",
    "revision": "4749a098939b37fe208484b27a198d9e"
  },
  {
    "url": "/_nuxt/1a21e495e0a1b9183b7a.js",
    "revision": "0cd8ca0eeaa791542df555f559496ce9"
  },
  {
    "url": "/_nuxt/423dd82abb6490ae6b80.js",
    "revision": "c195d53a4205b894485e7ef362ff958e"
  },
  {
    "url": "/_nuxt/5039babf9925fb3add48.js",
    "revision": "bd77f1ddb2f879909551f84891848ccf"
  },
  {
    "url": "/_nuxt/54a9bada52f05ddd9091.js",
    "revision": "739ea8b2817e6870c92214fab96d6d7c"
  },
  {
    "url": "/_nuxt/68ee7065ecffaf2f2b58.js",
    "revision": "d7ddc0388a8e349655806bb92429b0d2"
  },
  {
    "url": "/_nuxt/73660a54314cb0d3613e.js",
    "revision": "815c8bd4c5d50d54841efdfde723cb15"
  },
  {
    "url": "/_nuxt/77e8ff9f6691c0fc17ed.js",
    "revision": "53aacf871fbb6d1936fd0cabd5b92ac7"
  },
  {
    "url": "/_nuxt/7e74a91c21229cb17f2c.js",
    "revision": "eb892378ce8c69b1032c88b80a6aa091"
  },
  {
    "url": "/_nuxt/8893238b1efac332307b.js",
    "revision": "a6b6146f56505dec6d634f809e103430"
  },
  {
    "url": "/_nuxt/9135309bce0eaae6736b.js",
    "revision": "fc650b43deb6e98f09ae564d6f2c3957"
  },
  {
    "url": "/_nuxt/949ad844626d27e73a53.js",
    "revision": "15c62504efa1f207d8e0a1c3e3b8af26"
  },
  {
    "url": "/_nuxt/9aaab0765e96fbb00485.js",
    "revision": "8500bc3000f098acf4870ac9adcb2bb2"
  },
  {
    "url": "/_nuxt/a609791527bc3c12c826.js",
    "revision": "dbc03f46ececa904073cf35e99143a06"
  },
  {
    "url": "/_nuxt/b4c2a5d1728a191e8700.js",
    "revision": "c5819efbba36da461334d63844938e9f"
  },
  {
    "url": "/_nuxt/b72d99fdc2fca074c56b.js",
    "revision": "cc37d137e63cf2723312dadeb6db2ba9"
  },
  {
    "url": "/_nuxt/bb3061536b1837bbdcc5.js",
    "revision": "023b221fe35a17345eec2d4d5c82e2c8"
  },
  {
    "url": "/_nuxt/c0c6fb4e56803ab2c8fa.js",
    "revision": "90e3e67ea2e067c6a34d00622f53e2ca"
  },
  {
    "url": "/_nuxt/d1defa0f6edc11ab4be8.js",
    "revision": "ca47692d0e353226c25b8b220bb32533"
  },
  {
    "url": "/_nuxt/d2f090611e69ffe84f81.js",
    "revision": "fb74f7db20d4ab8a435fe28db35cf31c"
  },
  {
    "url": "/_nuxt/e4f561a8f06e9dc4cc40.js",
    "revision": "73fa9262d5be5ec2119e7db4ec713d63"
  },
  {
    "url": "/_nuxt/ebbf23ed28674357fd1f.js",
    "revision": "326a930d2488ac2a44cd3b52e56f1996"
  },
  {
    "url": "/_nuxt/f2aa88654978f52aece1.js",
    "revision": "52eccc0dda7db6827340dec2f50c19c7"
  },
  {
    "url": "/_nuxt/fd4e89587e1cf11a17b6.js",
    "revision": "333351823b4cdff9364bc73c4e147b70"
  },
  {
    "url": "/_nuxt/fe64bc442e874f317cb5.js",
    "revision": "cca4b45488f66d6f7fa0423955b59c7f"
  },
  {
    "url": "/_nuxt/ff472d70845b0bc46240.js",
    "revision": "8a186f5b3a0a6c16f3ab9f2172c4c079"
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
