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
    "revision": "568b60192edcf5cf4a4c207431f1f9a3"
  },
  {
    "url": "/js/index.js",
    "revision": "b144c071205225b243caacc5b550f592"
  },
  {
    "url": "/static/js/app.08de98538f61f8348226.js",
    "revision": "3b076fe9b50ab8786a64fbb9970a7be2"
  },
  {
    "url": "/static/js/manifest.3b6013129e812f8202d1.js",
    "revision": "c71086057748bdd7dcd3872e3984ed71"
  },
  {
    "url": "/static/js/vendor.e6e92bc5030d29f8438a.js",
    "revision": "b9b695b4f0b7226e5efa089862f600eb"
  },
  {
    "url": "/static/sw.js",
    "revision": "3a2218980a8629bf2e9d2baa70c69d44"
  },
  {
    "url": "/static/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  },
  {
    "url": "/sw.js",
    "revision": "88f0b7952abdb0b4990af1db968f36d8"
  },
  {
    "url": "/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
