importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05e13b7e5114aee7280f.js",
    "revision": "2b67bb76ed8deae40383263c29b57d24"
  },
  {
    "url": "/_nuxt/0b03805659aca9e49231.js",
    "revision": "87ed5764a9b7d8f200bc15a3498db606"
  },
  {
    "url": "/_nuxt/186455a764b4c39c40b8.js",
    "revision": "c41d6ef3266156ca13136661628cf4de"
  },
  {
    "url": "/_nuxt/23c57a5af4674c325388.js",
    "revision": "3ca1aaa36a9edb5f4bacdacb439b4a01"
  },
  {
    "url": "/_nuxt/36a66edd427a324ba25d.js",
    "revision": "db9e40e498bdee5db2cc7dd231395b6b"
  },
  {
    "url": "/_nuxt/44d355b64238bc3a8a62.js",
    "revision": "9d9ad7903411541b11faa0de11951d80"
  },
  {
    "url": "/_nuxt/4c9a0959e569e68b74ca.js",
    "revision": "8392d14776b70815e46d154ef2ad5c85"
  },
  {
    "url": "/_nuxt/50ef90e013a7ec707191.js",
    "revision": "0062047e462b70941f680f94c2972c26"
  },
  {
    "url": "/_nuxt/562476ca146145ce4485.js",
    "revision": "f9ed916367595059f8e6a214cced99f6"
  },
  {
    "url": "/_nuxt/58f020441fda28f52251.js",
    "revision": "97ab8676633a8c2f28ab89811acc9320"
  },
  {
    "url": "/_nuxt/5cfac07e6a73cdc1121b.js",
    "revision": "23f98b1559ac2451ee6c7c310dd3d9d4"
  },
  {
    "url": "/_nuxt/696041741f40e4c00b17.js",
    "revision": "37f1b552cc115e10652c7b23f0548764"
  },
  {
    "url": "/_nuxt/72d06cb5655beb729925.js",
    "revision": "044d4e1df8f56e918d01a0108d6151fc"
  },
  {
    "url": "/_nuxt/77f134011a4007a28f07.js",
    "revision": "50869ffba8a441d2823ff726bcd885d4"
  },
  {
    "url": "/_nuxt/7fde2e03e0c45643edb6.js",
    "revision": "2ff3d829bc269bbdb1031d3f642b99da"
  },
  {
    "url": "/_nuxt/83c5065bba247a292bbb.js",
    "revision": "1d1233a5ce383547f34bfb8139199431"
  },
  {
    "url": "/_nuxt/84ed9cbe58721cc03b17.js",
    "revision": "80bd8efd92cb9347285c4e029dc4cf03"
  },
  {
    "url": "/_nuxt/90afda83d733531fdd71.js",
    "revision": "cac41ad9a13cd9109a54ef5903cd9f72"
  },
  {
    "url": "/_nuxt/99abebd20ff5a3e0e2f3.js",
    "revision": "2e2117539b872198d48b8b5fa0a75bd4"
  },
  {
    "url": "/_nuxt/bf79b40c6a88a425161f.js",
    "revision": "f9ac136e93dc07fff03f6a6339512ea8"
  },
  {
    "url": "/_nuxt/d1b9ebac5ee075e9e17a.js",
    "revision": "a0512a8af9b5a389fc6865e58ee4e981"
  },
  {
    "url": "/_nuxt/dada2db4e2f8aaa9bd8e.js",
    "revision": "133cc94f680886b02dc721bad8adf9c8"
  },
  {
    "url": "/_nuxt/e7e0093f0ad899d5b301.js",
    "revision": "0b6fd8043f836106ecf82ef19bad3d45"
  },
  {
    "url": "/_nuxt/e8b6732470a15c4a308f.js",
    "revision": "683380cd9ae50dbc50294b25cb56a387"
  },
  {
    "url": "/_nuxt/ed895fae18b476ec30e2.js",
    "revision": "e003c48c17dca15cee64e30360f33784"
  },
  {
    "url": "/_nuxt/f446b3a5d57427f207a4.js",
    "revision": "0c922fdaab1b7e20a5fc356fb738a228"
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
