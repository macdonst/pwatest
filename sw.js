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
    "revision": "5a9a2a068d0708e57568dd98d7d051c8"
  },
  {
    "url": "/pwatest/js/index.js",
    "revision": "b144c071205225b243caacc5b550f592"
  },
  {
    "url": "/pwatest/static/js/app.0e4c5fe8bf5965cc246b.js",
    "revision": "a03987e0c72e68011e9124c73c5c1a8d"
  },
  {
    "url": "/pwatest/static/js/manifest.832915600580cbc7801a.js",
    "revision": "7af64934ecdc0e16a8117cfa1baee0c0"
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
    "revision": "471433cd0d075928e40f897d49e12c47"
  },
  {
    "url": "/pwatest/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
