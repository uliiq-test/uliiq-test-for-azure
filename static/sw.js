importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1a8773dec65e83cdda46.js",
    "revision": "da2f664b19e059d72b939aa24ad18bd2"
  },
  {
    "url": "/_nuxt/1ea6b7a595a7a614a749.js",
    "revision": "a7f19e0eb20fcc7358296bfa4a3e0bfc"
  },
  {
    "url": "/_nuxt/267f309ec4fe0d0919d9.js",
    "revision": "30889af23f3f3fd26c25645ad64d2da6"
  },
  {
    "url": "/_nuxt/2b48c61abe7f943a85cd.js",
    "revision": "5a1d3180f82a4153a1c3d3da36dd72ad"
  },
  {
    "url": "/_nuxt/2fbb354ebfd1e77eb17d.js",
    "revision": "7a21c7f3782b7a51b947d35d91d4d383"
  },
  {
    "url": "/_nuxt/40f070d8a950de4bf91b.js",
    "revision": "8a017901763c6e29442f472271b7e4ce"
  },
  {
    "url": "/_nuxt/44d355b64238bc3a8a62.js",
    "revision": "9d9ad7903411541b11faa0de11951d80"
  },
  {
    "url": "/_nuxt/5749d6a76f5ca5208786.js",
    "revision": "4cfb92fb78d692fb9fe67368dc865a06"
  },
  {
    "url": "/_nuxt/5bd949c413630652b0a4.js",
    "revision": "f8597ce1b4488e8a765485ad4e56e716"
  },
  {
    "url": "/_nuxt/5ed6e0a11c968607f8f6.js",
    "revision": "965e72218255f6188ce6a9819d3dcc40"
  },
  {
    "url": "/_nuxt/5f65658da95b75f21cc7.js",
    "revision": "4d18a1d407947f2954cf14de5c55cf5d"
  },
  {
    "url": "/_nuxt/76d03b78305a137c5c82.js",
    "revision": "eab03e6c1b6e96489751564de1ef3ba9"
  },
  {
    "url": "/_nuxt/8054a14ecc1e438ab0f4.js",
    "revision": "0c9c9260424247f9d1b0807fa70d1cd8"
  },
  {
    "url": "/_nuxt/8363e2c754291e6b307f.js",
    "revision": "606ff00e1ce41625ad370dfea7be4d6a"
  },
  {
    "url": "/_nuxt/8c72c46008de9fa1927b.js",
    "revision": "ad5d76c2902305d04a64067a58d7b3b5"
  },
  {
    "url": "/_nuxt/9623fd1a2b5712ffc141.js",
    "revision": "105303377701f358ba865a1d99f617c9"
  },
  {
    "url": "/_nuxt/9e72c9119394aff8ae0a.js",
    "revision": "05af79e3c50e5380dd608fadc94b746c"
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
    "url": "/_nuxt/c2f0aef27b4498d6aee3.js",
    "revision": "1235b9e368904b1b076c09d8f8e9db4d"
  },
  {
    "url": "/_nuxt/d5bbeefecbd4aaf939c6.js",
    "revision": "aa711df7cd9687c84e12974cc5698f4b"
  },
  {
    "url": "/_nuxt/e3322b6c2b8d9255419e.js",
    "revision": "a0f614a82e09b9910ab012755230c71f"
  },
  {
    "url": "/_nuxt/e5866b377730631416db.js",
    "revision": "9c7c370f3592c3505492f76fbcdd7182"
  },
  {
    "url": "/_nuxt/e94ba2450503ea7d525d.js",
    "revision": "e00ad0e0ace5ef85e21d68ab517595b5"
  },
  {
    "url": "/_nuxt/ed5d3771863665f292fd.js",
    "revision": "0bf1cd90a98650e30934236637841f75"
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
