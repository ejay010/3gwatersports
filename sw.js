importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1bc1b398b66a444c8f8f.js",
    "revision": "2454e1428ec9933bd1685ab631548790"
  },
  {
    "url": "/_nuxt/43c843dd285cb30856ca.js",
    "revision": "e8b5e9ec2561139f6c8073d8e90ed045"
  },
  {
    "url": "/_nuxt/58d90397fe32990f14c2.js",
    "revision": "7253eb66a2e958ca8d3908a4ed32af27"
  },
  {
    "url": "/_nuxt/6a4339c1203a3e786674.js",
    "revision": "e9c99ab3b489adc67b2f753e73405b40"
  },
  {
    "url": "/_nuxt/b32d3fd8089f2158451e.js",
    "revision": "8bfbfddbebf4954c2fca5d6e8f1a0f05"
  }
], {
  "cacheId": "3gwebsite",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
