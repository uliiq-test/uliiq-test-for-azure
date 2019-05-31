importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0550f498329bf6145abd.js",
    "revision": "dc10548c3ca157a13c5c62b2fc33d067"
  },
  {
    "url": "/_nuxt/1b43f0ad44d9461004df.js",
    "revision": "a29df9ff4f6c7eaf78753c9dfc41478a"
  },
  {
    "url": "/_nuxt/1b8acea2624fbdb1b17d.js",
    "revision": "74a739af1177f04e7e3677647e971978"
  },
  {
    "url": "/_nuxt/1ea6b7a595a7a614a749.js",
    "revision": "a7f19e0eb20fcc7358296bfa4a3e0bfc"
  },
  {
    "url": "/_nuxt/2339934bbdba0d418a6a.js",
    "revision": "bea34c961500dbd2847bb8d87f217a5e"
  },
  {
    "url": "/_nuxt/3d760af9fdf10ff9e869.js",
    "revision": "a03ada2d624230e4c198b968484d2e5e"
  },
  {
    "url": "/_nuxt/4236cc3d935c6c5bc663.js",
    "revision": "713f2db5d609952d5f40294ebd7a9106"
  },
  {
    "url": "/_nuxt/42a5524e8ca70d33c587.js",
    "revision": "38a3dc1a206e4e3798752010658dd8c7"
  },
  {
    "url": "/_nuxt/43142361310c63b11250.js",
    "revision": "0d0a041b1bcaeb33a111c824e71c0bd5"
  },
  {
    "url": "/_nuxt/44d355b64238bc3a8a62.js",
    "revision": "9d9ad7903411541b11faa0de11951d80"
  },
  {
    "url": "/_nuxt/6a26c0810bc7ecbfb903.js",
    "revision": "e6c822d5d84bae5f967ddc47df391ffb"
  },
  {
    "url": "/_nuxt/898222ab8a887f083295.js",
    "revision": "436d62c3fe2f82bd4d3ed97c098c8015"
  },
  {
    "url": "/_nuxt/8d47ab94681a6602c2f3.js",
    "revision": "dfaf327aa41bcffb13aa450c236e5274"
  },
  {
    "url": "/_nuxt/991ab05b32b1eac22d2a.js",
    "revision": "aec8a607fd1f52a43bf72d2fef9891e0"
  },
  {
    "url": "/_nuxt/9db5cb5095079be9bff2.js",
    "revision": "323343b8db1fe73c68abb8aa7281baf6"
  },
  {
    "url": "/_nuxt/a6da1e39965023c21d56.js",
    "revision": "92f1bcdc2adf68dad60f3889a6800d1d"
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
    "url": "/_nuxt/b4feb5036d992dc15713.js",
    "revision": "6330423cad07fffcc8fd81aeb427f6f1"
  },
  {
    "url": "/_nuxt/d5d1a1c88286274ea6c2.js",
    "revision": "68504f505dc154a96572252b39935cc1"
  },
  {
    "url": "/_nuxt/e35843caec1618a89af9.js",
    "revision": "65047d06d1b566dc616bdcbd46f52f2f"
  },
  {
    "url": "/_nuxt/e8fa8fb8d12746d1efc0.js",
    "revision": "7bb4103cd75c0eb7c98889d4d19d0db8"
  },
  {
    "url": "/_nuxt/ef060ea15420db63aafa.js",
    "revision": "6a41a7720667fad4060ed97774319318"
  },
  {
    "url": "/_nuxt/f135a0c47d35a91e9055.js",
    "revision": "43ce440df2804e96bf397661bcc77fd0"
  },
  {
    "url": "/_nuxt/f541ecbbd5c5d091624d.js",
    "revision": "52ff39321712c14a1e7627d5f3d7ad4d"
  },
  {
    "url": "/_nuxt/f76b17b63e3264fa4eb3.js",
    "revision": "4f804f30b4e95923ff4d60cbac56e6fa"
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
