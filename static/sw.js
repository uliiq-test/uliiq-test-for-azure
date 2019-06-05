importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0491d646af217215bdcc.js",
    "revision": "2789cff74a8bb12670bba87155ef5e47"
  },
  {
    "url": "/_nuxt/1652eaa810d97b9ace85.js",
    "revision": "0e14fd4a2a7be072dd2e7434581a8939"
  },
  {
    "url": "/_nuxt/1ea6b7a595a7a614a749.js",
    "revision": "a7f19e0eb20fcc7358296bfa4a3e0bfc"
  },
  {
    "url": "/_nuxt/26d359907533f4f328a7.js",
    "revision": "d43f42c4a044e1f00a1a8c6f2d4b1b04"
  },
  {
    "url": "/_nuxt/2758a6b73470e1c6e670.js",
    "revision": "f734c4164abcfd6f34ea01ccbe3c5124"
  },
  {
    "url": "/_nuxt/2e012e90ea824410c70f.js",
    "revision": "dac6f2a501318ca7ff848e8d5adecbf8"
  },
  {
    "url": "/_nuxt/313eda11361edebd8b52.js",
    "revision": "cdba25284f496a6b59738c6d1e0c0658"
  },
  {
    "url": "/_nuxt/32e2acbd4718083aad80.js",
    "revision": "07ed72f1e0c02208ddc539228f1dec5c"
  },
  {
    "url": "/_nuxt/38d14ca6dcf65ad9459e.js",
    "revision": "4bd27401305fc9d36cea9d54a505c0b3"
  },
  {
    "url": "/_nuxt/3f6375d5a4009cd71ed4.js",
    "revision": "6bb43f22a5bbf43352cd82d061e885b0"
  },
  {
    "url": "/_nuxt/424d3eddce7405e29fdb.js",
    "revision": "2823e0a36e40e162ea224e8d019d96b5"
  },
  {
    "url": "/_nuxt/43ec5c97be1480fa61c3.js",
    "revision": "1c0d498e0e7c100d7e3db938672ed7d6"
  },
  {
    "url": "/_nuxt/48d7c545e4fe6385fca4.js",
    "revision": "34188422f3e7206fedc92726bad2f5fd"
  },
  {
    "url": "/_nuxt/54080bb4ba8558f468fd.js",
    "revision": "e9cec5e902d2f11ce9fa81d34d44456b"
  },
  {
    "url": "/_nuxt/58de23d021997007117a.js",
    "revision": "20244b2fe140ccd2a5a2e248380ed036"
  },
  {
    "url": "/_nuxt/5ed7c76dbcd9f098dead.js",
    "revision": "70c9bd2372690974f811c72228e50830"
  },
  {
    "url": "/_nuxt/6d4e1525823a9533bd2a.js",
    "revision": "61e853f3dffad9d5ff0abd4d91ba83a7"
  },
  {
    "url": "/_nuxt/97d148cea1ad7daa88c1.js",
    "revision": "80ea8ea4c46bcd51b35e907a5bfb7a25"
  },
  {
    "url": "/_nuxt/9c4df765f8c23b25bcb1.js",
    "revision": "fe400e208b889ea50983c8f6017889c6"
  },
  {
    "url": "/_nuxt/ab8cb550f1c9b536bb52.js",
    "revision": "52d9fcda7501d8dd04438a31defd2d88"
  },
  {
    "url": "/_nuxt/ae0f3871cbdfe1c8e3b6.js",
    "revision": "17e9c19cabafd08104e7a5fcd1f3654d"
  },
  {
    "url": "/_nuxt/c112f4b023bb372d8379.js",
    "revision": "98858cd288d121c38983c48e2eff268b"
  },
  {
    "url": "/_nuxt/d87d2c9ca0ec22e6fea2.js",
    "revision": "4771d181bbe303574c2ae6a67cf0beea"
  },
  {
    "url": "/_nuxt/df5975d789bc16bf2ec9.js",
    "revision": "1aa0c71e190f7660974f3a57eefb72dd"
  },
  {
    "url": "/_nuxt/e6fd14e66aff430db9ed.js",
    "revision": "6077508b97039a4a64e8f5b78b72e8b8"
  },
  {
    "url": "/_nuxt/ece8a185c62f43ea8a0e.js",
    "revision": "9d9ad7903411541b11faa0de11951d80"
  },
  {
    "url": "/_nuxt/f8408e5ecfa0379c7efe.js",
    "revision": "30c3ee0969d90ccd117f30545655f324"
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
