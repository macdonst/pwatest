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
    "url": "/css/index.css",
    "revision": "e46d9a1c456a9c913ca10f3c16d50000"
  },
  {
    "url": "/index.html",
    "revision": "a039b045fb97f7b2d6b7197127a40a49"
  },
  {
    "url": "/js/index.js",
    "revision": "b144c071205225b243caacc5b550f592"
  },
  {
    "url": "/static/js/app.5adf1d171507b31405d2.js",
    "revision": "07a13ed240d5bfa2e1450346b48aa896"
  },
  {
    "url": "/static/js/manifest.ffb0cef8d7ed3584ee06.js",
    "revision": "5a33d300fd8b7d3a7a2c397ed860824c"
  },
  {
    "url": "/static/js/vendor.482c14416185ffb0ddad.js",
    "revision": "8b8eab7526c26db9e7b483dc88d1981b"
  },
  {
    "url": "/static/sw.js",
    "revision": "9e998f9219629327653043064eec6c4c"
  },
  {
    "url": "/static/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  },
  {
    "url": "/sw.js",
    "revision": "40182a9495b3efbf202981e3b38f829c"
  },
  {
    "url": "/sw2.js",
    "revision": "12f3a8464567fabb539560286669c2b1"
  },
  {
    "url": "/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  },
  {
    "url": "/workbox-sw.prod.v2.0.0.js",
    "revision": "f94666127c0b36081f4c621a25d196ab"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
