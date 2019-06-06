importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00911f1d1ddbb97b9f98.js",
    "revision": "c195d53a4205b894485e7ef362ff958e"
  },
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
    "url": "/_nuxt/2d2bea2ef2503c73bdc8.js",
    "revision": "fb74f7db20d4ab8a435fe28db35cf31c"
  },
  {
    "url": "/_nuxt/37aa651a6402f409162c.js",
    "revision": "52eccc0dda7db6827340dec2f50c19c7"
  },
  {
    "url": "/_nuxt/41628207e8ba6371c47d.js",
    "revision": "ca47692d0e353226c25b8b220bb32533"
  },
  {
    "url": "/_nuxt/5039babf9925fb3add48.js",
    "revision": "bd77f1ddb2f879909551f84891848ccf"
  },
  {
    "url": "/_nuxt/61f5e6ebef8a6597f40b.js",
    "revision": "f34504f8fa24614a2735cf8fbb94b0da"
  },
  {
    "url": "/_nuxt/65e149f8962d0d616f07.js",
    "revision": "c5819efbba36da461334d63844938e9f"
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
    "url": "/_nuxt/9135309bce0eaae6736b.js",
    "revision": "fc650b43deb6e98f09ae564d6f2c3957"
  },
  {
    "url": "/_nuxt/92d594fd6cb405cd44e4.js",
    "revision": "dbc03f46ececa904073cf35e99143a06"
  },
  {
    "url": "/_nuxt/9a49a33fb49aa9cd2681.js",
    "revision": "53aacf871fbb6d1936fd0cabd5b92ac7"
  },
  {
    "url": "/_nuxt/a1faef74426f85b67351.js",
    "revision": "e2adaf33768b47c9c829d683e2428b4b"
  },
  {
    "url": "/_nuxt/ae7c3e047e9fdf8dd474.js",
    "revision": "7d8f845d67829f74ea18f31aa3a59ce3"
  },
  {
    "url": "/_nuxt/afb89ee0ebd225fed8c1.js",
    "revision": "eb892378ce8c69b1032c88b80a6aa091"
  },
  {
    "url": "/_nuxt/b25bfabe4179b95385ee.js",
    "revision": "a6b6146f56505dec6d634f809e103430"
  },
  {
    "url": "/_nuxt/b4de0d42a82df4b5af52.js",
    "revision": "8a186f5b3a0a6c16f3ab9f2172c4c079"
  },
  {
    "url": "/_nuxt/bb3061536b1837bbdcc5.js",
    "revision": "023b221fe35a17345eec2d4d5c82e2c8"
  },
  {
    "url": "/_nuxt/bba8341b8b4a5c18e9f2.js",
    "revision": "cc37d137e63cf2723312dadeb6db2ba9"
  },
  {
    "url": "/_nuxt/c3d6459a48fa1344708b.js",
    "revision": "739ea8b2817e6870c92214fab96d6d7c"
  },
  {
    "url": "/_nuxt/c6f9baf7fa03c81f070e.js",
    "revision": "326a930d2488ac2a44cd3b52e56f1996"
  },
  {
    "url": "/_nuxt/e4f561a8f06e9dc4cc40.js",
    "revision": "73fa9262d5be5ec2119e7db4ec713d63"
  },
  {
    "url": "/_nuxt/fd4e89587e1cf11a17b6.js",
    "revision": "333351823b4cdff9364bc73c4e147b70"
  },
  {
    "url": "/_nuxt/fe64bc442e874f317cb5.js",
    "revision": "cca4b45488f66d6f7fa0423955b59c7f"
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
