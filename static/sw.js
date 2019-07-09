importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07ff7a64cc468a375245.js",
    "revision": "ee5d9e5f83f5dfb575efd984d1f76dff"
  },
  {
    "url": "/_nuxt/0d13236dadd5f85efc35.js",
    "revision": "4e3fc16c061a6a1743e85e867f0c259c"
  },
  {
    "url": "/_nuxt/0e64c06eedbef09040a3.js",
    "revision": "af02321c88a756a9943a8245c7374eb0"
  },
  {
    "url": "/_nuxt/11918b7839d31188fe4d.js",
    "revision": "45f4ba4c26e2cb4e4b7f7418598424b5"
  },
  {
    "url": "/_nuxt/1475ca835b496f6e7f3b.js",
    "revision": "82470067c0717ee64354334d3258847a"
  },
  {
    "url": "/_nuxt/1ddc04337ac5b4e4d7f8.js",
    "revision": "8caa2a8e2041dca9caea0a78ef25c74d"
  },
  {
    "url": "/_nuxt/267a863d5fb2f940a3ea.js",
    "revision": "8aad4a2d3f97dd673d4d1e901b6c8464"
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
    "url": "/_nuxt/4108d683ac0ddbb96d48.js",
    "revision": "2591ad1de60173fce4c3d00f32ba7d1e"
  },
  {
    "url": "/_nuxt/563dac6f491f6e8f247d.js",
    "revision": "a5c6fd44f7d56af67059269e1d9ec114"
  },
  {
    "url": "/_nuxt/59b238fdca2631fd9782.js",
    "revision": "aa5f70fac45d9702e59edb5b2da179a7"
  },
  {
    "url": "/_nuxt/5bc4d47b65b1f80bd37a.js",
    "revision": "361524c5fdb33943e03ab36c97e3b3c8"
  },
  {
    "url": "/_nuxt/602d10fcadc1e44b50d8.js",
    "revision": "cebe32b23b2daa700957a483ccdbaa82"
  },
  {
    "url": "/_nuxt/6fd1151a723808483172.js",
    "revision": "9a201a9415de6a7387f5a82539b71b26"
  },
  {
    "url": "/_nuxt/7ab6ba358f2c2c26cebf.js",
    "revision": "706d599a68a6ecea567ce2c9f86d6fc7"
  },
  {
    "url": "/_nuxt/82dca1f25f4cc6d5bf46.js",
    "revision": "5209ed93f737f7690ee2592759138e13"
  },
  {
    "url": "/_nuxt/a336ff8e59fb55cfe920.js",
    "revision": "e5ca41e1eb8cc7c149e8d4a6b64c9114"
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
    "url": "/_nuxt/b43307ff77e595b837d1.js",
    "revision": "c8c2a5dfb40fdd4b4a040df22dadf55a"
  },
  {
    "url": "/_nuxt/c6495a2fbe2c772c9ca7.js",
    "revision": "88663bba75422ca6fc28ca7217ccb3e0"
  },
  {
    "url": "/_nuxt/c8c02c20e552aa959a9d.js",
    "revision": "087d2bbd10a322fd94ae977e3c9e3d7f"
  },
  {
    "url": "/_nuxt/cc17725ec154066f46aa.js",
    "revision": "09f2cade0df65e8ad7108cdf827e7379"
  },
  {
    "url": "/_nuxt/e6964658c61cc6719cd5.js",
    "revision": "7c26e9aa5eaab537f001bba64420d513"
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
