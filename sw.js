importScripts('workbox-sw.prod.v1.0.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/pwatest/css/index.css",
    "revision": "e46d9a1c456a9c913ca10f3c16d50000"
  },
  {
    "url": "/pwatest/index.html",
    "revision": "14de139fd943cf04c7d15917f2c8568a"
  },
  {
    "url": "/pwatest/js/index.js",
    "revision": "b144c071205225b243caacc5b550f592"
  },
  {
    "url": "/pwatest/static/js/app.f85802db0d92fa62e00c.js",
    "revision": "d4cd8f540efb667a11909dc8c3385689"
  },
  {
    "url": "/pwatest/static/js/manifest.dd9d54cc83e1f5bdac0f.js",
    "revision": "8146ae203d4739cddec54d98ab03f20b"
  },
  {
    "url": "/pwatest/static/js/vendor.482c14416185ffb0ddad.js",
    "revision": "8b8eab7526c26db9e7b483dc88d1981b"
  },
  {
    "url": "/pwatest/static/sw.js",
    "revision": "e9a53bbb3db1c2956bc5c0a16f819858"
  },
  {
    "url": "/pwatest/static/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  },
  {
    "url": "/pwatest/sw.js",
    "revision": "cb837d103b331c97338da2ecb14420ed"
  },
  {
    "url": "/pwatest/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
