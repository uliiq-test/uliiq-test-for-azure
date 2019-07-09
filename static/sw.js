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
    "url": "/_nuxt/1f15de3b621e41f6fcbe.js",
    "revision": "1885af9dc5ed372b9d27928215784833"
  },
  {
    "url": "/_nuxt/278e048c7aea41815254.js",
    "revision": "557e2c9647cc7f223dff37a8e17a6aa5"
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
    "url": "/_nuxt/40c9bd327aa3d9c3123d.js",
    "revision": "1a61a88c04aa2609b389c6c62bcd574e"
  },
  {
    "url": "/_nuxt/524a4079d569dac20ae5.js",
    "revision": "7e2ec1f5b9975245e1c1ba71fa4b6cfb"
  },
  {
    "url": "/_nuxt/563dac6f491f6e8f247d.js",
    "revision": "a5c6fd44f7d56af67059269e1d9ec114"
  },
  {
    "url": "/_nuxt/5af3fc12aa0d4dca166d.js",
    "revision": "72e9b15276490048a9fe36a6fe454a37"
  },
  {
    "url": "/_nuxt/674279154673c462d9c4.js",
    "revision": "eb85cb72ffb21dedf180fbbed3dda37c"
  },
  {
    "url": "/_nuxt/6fd1151a723808483172.js",
    "revision": "9a201a9415de6a7387f5a82539b71b26"
  },
  {
    "url": "/_nuxt/82dca1f25f4cc6d5bf46.js",
    "revision": "5209ed93f737f7690ee2592759138e13"
  },
  {
    "url": "/_nuxt/aa2f5f651c11600f48b2.js",
    "revision": "1dbcede48abdfdedb59fd3b5af101da1"
  },
  {
    "url": "/_nuxt/aaf38b64ff063d2cd563.js",
    "revision": "f29a6eaf1aa2fc6af273f9c85fb56f4b"
  },
  {
    "url": "/_nuxt/b100a4908de82dc9d8b4.js",
    "revision": "44de775d142bf54053dc4ec8b3a9c6e6"
  },
  {
    "url": "/_nuxt/b43307ff77e595b837d1.js",
    "revision": "c8c2a5dfb40fdd4b4a040df22dadf55a"
  },
  {
    "url": "/_nuxt/bf620f2c26119e662dbd.js",
    "revision": "217c23b45c9ef35ee3e70801b227b2e9"
  },
  {
    "url": "/_nuxt/c0de82e6f49c2d3db949.js",
    "revision": "c2099cf74d08361e47d2ddecb0f9f962"
  },
  {
    "url": "/_nuxt/c8f367d876196b6c8585.js",
    "revision": "5292765e847161a1e2d0b5f157d94c7c"
  },
  {
    "url": "/_nuxt/cc17725ec154066f46aa.js",
    "revision": "09f2cade0df65e8ad7108cdf827e7379"
  },
  {
    "url": "/_nuxt/cfe8604c9528b9934a08.js",
    "revision": "9dc162cd4029c314e84a1ab4644f7b7c"
  },
  {
    "url": "/_nuxt/d300e87f056e6d8d9e35.js",
    "revision": "1bf00f8163d7b36a792b787ace969057"
  },
  {
    "url": "/_nuxt/e89a9e138aaf6d394121.js",
    "revision": "77e51c53f65c335acdb77a4ea06bdddf"
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
