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
    "revision": "4e928c559a3f84605c4c8052de8c1b49"
  },
  {
    "url": "/js/index.js",
    "revision": "b144c071205225b243caacc5b550f592"
  },
  {
    "url": "/static/js/app.b9724de07fbd3e7e845b.js",
    "revision": "bf398f0bfbe3502fb28f2559cbe85c78"
  },
  {
    "url": "/static/js/manifest.36dcf09bf7e2f55ebd8a.js",
    "revision": "a7ea42aab575b15d3b4786e513b8d055"
  },
  {
    "url": "/static/js/vendor.482c14416185ffb0ddad.js",
    "revision": "8b8eab7526c26db9e7b483dc88d1981b"
  },
  {
    "url": "/static/sw.js",
    "revision": "e9a53bbb3db1c2956bc5c0a16f819858"
  },
  {
    "url": "/static/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  },
  {
    "url": "/sw.js",
    "revision": "77d85d15e55b4899aa9338987f369e6d"
  },
  {
    "url": "/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
