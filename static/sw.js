importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/134a7bcc741a621c17f4.js",
    "revision": "506403edef8bfbe1c7d0fe6d54928a69"
  },
  {
    "url": "/_nuxt/1ea6b7a595a7a614a749.js",
    "revision": "a7f19e0eb20fcc7358296bfa4a3e0bfc"
  },
  {
    "url": "/_nuxt/2c0702e67238cc29e416.js",
    "revision": "e428d5dcbfe905bbc49238c6afd23d40"
  },
  {
    "url": "/_nuxt/323249bfec12ff6be469.js",
    "revision": "8eaee94578eecf09a30161d576da832d"
  },
  {
    "url": "/_nuxt/33728480d3965d4f970a.js",
    "revision": "ab8000232363e3d9ebd6dbc04a498628"
  },
  {
    "url": "/_nuxt/33dd0544ca17244a943a.js",
    "revision": "7c35208486559da79347bb018e11ecc9"
  },
  {
    "url": "/_nuxt/44d545d28218c13db3c2.js",
    "revision": "0486050857204a0d5f156ac35a3b5ec8"
  },
  {
    "url": "/_nuxt/4ac127ad5891ce6bc0c7.js",
    "revision": "4072bb4c8bf39e37839d94a18303ea93"
  },
  {
    "url": "/_nuxt/56164889b11a974812b5.js",
    "revision": "de63c590b2b2f35dc76c08b7927fbee7"
  },
  {
    "url": "/_nuxt/6943b310ba649546a550.js",
    "revision": "99d7aaae51447b6040e212d3af8ed9bc"
  },
  {
    "url": "/_nuxt/6b08f76aa7a49e5cef86.js",
    "revision": "65558a2231d4180006e4dbee8fca7364"
  },
  {
    "url": "/_nuxt/7c3a98f2072dc31e513e.js",
    "revision": "f9edc65d45f736196992c687d0177561"
  },
  {
    "url": "/_nuxt/84bfea53e856da7dd5fc.js",
    "revision": "a8fe9da4530fe9608090fb1bb3ebc085"
  },
  {
    "url": "/_nuxt/8d4b4544abfd5f39dce4.js",
    "revision": "bb9430141af53a02e027a0a9f9edbc57"
  },
  {
    "url": "/_nuxt/8f5a2b6cf63db5dac029.js",
    "revision": "934bd7351ce7f75c087b3b0bd7a1e42e"
  },
  {
    "url": "/_nuxt/9906f160c174c52ff3a2.js",
    "revision": "832a1133f4f97e309720266d7a0df3b0"
  },
  {
    "url": "/_nuxt/a8160d653cebd8d83c56.js",
    "revision": "6f157e1b22a40b18d62226c288652c0e"
  },
  {
    "url": "/_nuxt/b8c477f4ed7323834bac.js",
    "revision": "c1ecb2ac1c76d9bb02895b0510f781e8"
  },
  {
    "url": "/_nuxt/c1105134f5f6f5126132.js",
    "revision": "ab477bb418a518766b71bc9847641dd9"
  },
  {
    "url": "/_nuxt/ce7e8e83ae6b96030909.js",
    "revision": "0fdc80ab8e0bf8692db385342bef8922"
  },
  {
    "url": "/_nuxt/e3795546c8b1870b3bf2.js",
    "revision": "a78d0ec855d3fedbe8dc04eb83ba0633"
  },
  {
    "url": "/_nuxt/ef10656e2d5594fe67fa.js",
    "revision": "81f00e2019ef8c698faef758d55f0fdc"
  },
  {
    "url": "/_nuxt/fcffb877f3aed5a5b86f.js",
    "revision": "2e04d5471fb5e99f34cf18be1a3c1063"
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
