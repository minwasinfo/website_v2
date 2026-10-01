/*
 * Retires the service worker left behind by the previous www.minwas.com site.
 * Browsers that visited the old site re-check /sw.js on their next visit; this
 * version takes over, deletes the old caches and unregisters itself, so the
 * new site is always loaded straight from the network. Safe to delete once
 * old visitors have cycled through (a few months).
 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));
    await self.registration.unregister();
  })());
});
