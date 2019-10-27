importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/032c35e685946c1a9d5a.js",
    "revision": "6d2f49489016fe8968f15db472ad35d5"
  },
  {
    "url": "/_nuxt/0536c59a0855448ff813.js",
    "revision": "c321901abf963a3d259584e34b8609db"
  },
  {
    "url": "/_nuxt/0601aa07f5bffc99b263.js",
    "revision": "40b1f21521a1d3a7ef7d9c3ed929379c"
  },
  {
    "url": "/_nuxt/0b93a16894c6bf81a3a8.js",
    "revision": "de71e48eda9e491ccb3d3905d1bec9a8"
  },
  {
    "url": "/_nuxt/0c342c1d3501f21df1b5.js",
    "revision": "4c7e221c2920b220657f2013e2e90488"
  },
  {
    "url": "/_nuxt/10fe3ce297bfc1e9523c.js",
    "revision": "255aba804b4606dfa08fd11067f72393"
  },
  {
    "url": "/_nuxt/12b78772a29ba3ef97d0.js",
    "revision": "eb1c34e186c941d4c8b06fecb49efa36"
  },
  {
    "url": "/_nuxt/1633f05575b272152241.js",
    "revision": "2c6fc277e43d24e3182b3f316abbfbc2"
  },
  {
    "url": "/_nuxt/3c58d69734c7cd3c2ced.js",
    "revision": "0c089197c30fe08b013e349fe19a7bd4"
  },
  {
    "url": "/_nuxt/41f89af3efaed1f26ba8.js",
    "revision": "e64c06385a199ea76b8c6422d4c05e21"
  },
  {
    "url": "/_nuxt/5461330334151ba80c08.js",
    "revision": "abdf371081ccb664690ece323f460486"
  },
  {
    "url": "/_nuxt/56468c982b4373a6c8d3.js",
    "revision": "cdd1133e0e376d5805f59a2af3b9b6a1"
  },
  {
    "url": "/_nuxt/65377dad4a64e57a36af.js",
    "revision": "994d4a4298d1e9d1d74f800a7b7edebf"
  },
  {
    "url": "/_nuxt/65663c0a49f23792e930.js",
    "revision": "23739e1a0d8b2e721937ed9c549a8e47"
  },
  {
    "url": "/_nuxt/6f9f85b407baa9886a09.js",
    "revision": "a7fe4bffe9c5a09ad9a7ee6df809ae00"
  },
  {
    "url": "/_nuxt/afa3c652672241d5669f.js",
    "revision": "bf6e29476f57bc499627a58f6ee45ee0"
  },
  {
    "url": "/_nuxt/bf5c7f65e33b6b531eb8.js",
    "revision": "59ecd910fe13cd5d7e19ce3843d5150c"
  },
  {
    "url": "/_nuxt/c450a829f1747d131efe.js",
    "revision": "846698a325ee32daa5f69eb80b017361"
  },
  {
    "url": "/_nuxt/cb4de3f3e2082c166881.js",
    "revision": "e782cbb3191639386ab18293e7c92ee4"
  },
  {
    "url": "/_nuxt/dcb7299f5001c2e7df11.js",
    "revision": "67e231aa6c7746061eeba0062bc14e05"
  },
  {
    "url": "/_nuxt/deeb2db4f21bd373b825.js",
    "revision": "15270658d355a9e636ae513892cba254"
  },
  {
    "url": "/_nuxt/e02554098c0de633828f.js",
    "revision": "6286893a733b5603b15c60c76276234f"
  },
  {
    "url": "/_nuxt/e50f28fe6cd1ef22d464.js",
    "revision": "e6d20925d69f8c4d0a9da66c82d77121"
  },
  {
    "url": "/_nuxt/e607a32d1e129ac2af5e.js",
    "revision": "928868d1737b5db826a85ba7c2d5470e"
  },
  {
    "url": "/_nuxt/ea13b458861144c552e5.js",
    "revision": "83c69f922d2495bbcb697dbb0a629172"
  },
  {
    "url": "/_nuxt/ea45f2f900545785bbcc.js",
    "revision": "dc0b6b2e7262136acd37cde33ccb5d1a"
  },
  {
    "url": "/_nuxt/fcbf44d1b5695cfd9446.js",
    "revision": "cd67bd504c7dbdcc04ad261a6372eb74"
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
