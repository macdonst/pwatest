importScripts('workbox-sw.prod.v2.0.0.js');

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
    "revision": "9712cda63171e988da3763967ee77dc5"
  },
  {
    "url": "/pwatest/js/index.js",
    "revision": "b144c071205225b243caacc5b550f592"
  },
  {
    "url": "/pwatest/static/js/app.8eb574b1eddf08e17459.js",
    "revision": "c2cc10846649d9fb9cf1955cd714715f"
  },
  {
    "url": "/pwatest/static/js/manifest.43a623dcad11e8732823.js",
    "revision": "4557c52e01ff5777428213ad05a896c5"
  },
  {
    "url": "/pwatest/static/js/vendor.e6e92bc5030d29f8438a.js",
    "revision": "b9b695b4f0b7226e5efa089862f600eb"
  },
  {
    "url": "/pwatest/sw.js",
    "revision": "b33c3ef30b17105c901e2ea141aa987d"
  },
  {
    "url": "/pwatest/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
