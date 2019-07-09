importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d13236dadd5f85efc35.js",
    "revision": "4e3fc16c061a6a1743e85e867f0c259c"
  },
  {
    "url": "/_nuxt/0e64c06eedbef09040a3.js",
    "revision": "af02321c88a756a9943a8245c7374eb0"
  },
  {
    "url": "/_nuxt/12364331b0e52b9e81ed.js",
    "revision": "4a575f8c976b24ee723e888ba401697a"
  },
  {
    "url": "/_nuxt/1ae0986c3ddd9e70adde.js",
    "revision": "8892d9537fd9ab99dbe356f856fa3678"
  },
  {
    "url": "/_nuxt/2f44f66a2ef612ba9442.js",
    "revision": "25a62defda844e9a0ebc05224cc7d58e"
  },
  {
    "url": "/_nuxt/363914db80eed6ffef73.js",
    "revision": "6edead3dbfba2b9386a228e4de13db6a"
  },
  {
    "url": "/_nuxt/3ca78bc899dffa10fc07.js",
    "revision": "0a450c54e02b5e4c0f5a078f760d9979"
  },
  {
    "url": "/_nuxt/3cf19d46e645bdbd8c57.js",
    "revision": "85e025f8a6c9e7e1dcc649657215ebc8"
  },
  {
    "url": "/_nuxt/46f18f657ab429ae7cd2.js",
    "revision": "217c23b45c9ef35ee3e70801b227b2e9"
  },
  {
    "url": "/_nuxt/48288f219a26c33c4e2b.js",
    "revision": "72e9b15276490048a9fe36a6fe454a37"
  },
  {
    "url": "/_nuxt/563dac6f491f6e8f247d.js",
    "revision": "a5c6fd44f7d56af67059269e1d9ec114"
  },
  {
    "url": "/_nuxt/6fd1151a723808483172.js",
    "revision": "9a201a9415de6a7387f5a82539b71b26"
  },
  {
    "url": "/_nuxt/7172c8977a0afb72a287.js",
    "revision": "c2099cf74d08361e47d2ddecb0f9f962"
  },
  {
    "url": "/_nuxt/81963a2b9a61fbd7a01f.js",
    "revision": "1885af9dc5ed372b9d27928215784833"
  },
  {
    "url": "/_nuxt/82dca1f25f4cc6d5bf46.js",
    "revision": "5209ed93f737f7690ee2592759138e13"
  },
  {
    "url": "/_nuxt/91b7cca38d3ba956b9ff.js",
    "revision": "44de775d142bf54053dc4ec8b3a9c6e6"
  },
  {
    "url": "/_nuxt/aa2f5f651c11600f48b2.js",
    "revision": "1dbcede48abdfdedb59fd3b5af101da1"
  },
  {
    "url": "/_nuxt/ad5ce7bc56a4c8e0bae0.js",
    "revision": "77e51c53f65c335acdb77a4ea06bdddf"
  },
  {
    "url": "/_nuxt/b43307ff77e595b837d1.js",
    "revision": "c8c2a5dfb40fdd4b4a040df22dadf55a"
  },
  {
    "url": "/_nuxt/bbf0fbabe595ec7ee17e.js",
    "revision": "09f2cade0df65e8ad7108cdf827e7379"
  },
  {
    "url": "/_nuxt/c8f367d876196b6c8585.js",
    "revision": "5292765e847161a1e2d0b5f157d94c7c"
  },
  {
    "url": "/_nuxt/cabe433f739d1801445e.js",
    "revision": "7e2ec1f5b9975245e1c1ba71fa4b6cfb"
  },
  {
    "url": "/_nuxt/cfe8604c9528b9934a08.js",
    "revision": "9dc162cd4029c314e84a1ab4644f7b7c"
  },
  {
    "url": "/_nuxt/d6b37b9d4b47d12b3fa1.js",
    "revision": "eb85cb72ffb21dedf180fbbed3dda37c"
  },
  {
    "url": "/_nuxt/e1cf51ba02de86c54330.js",
    "revision": "f29a6eaf1aa2fc6af273f9c85fb56f4b"
  },
  {
    "url": "/_nuxt/f2a490c36a499aa75c3f.js",
    "revision": "6914cfba30499b9d8c98410fbf9dbdc2"
  },
  {
    "url": "/_nuxt/f6a219c39866f4ba33ce.js",
    "revision": "b0388f3469462e34d4a559257103ed1f"
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
