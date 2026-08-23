// Service Worker for Anurag Dashore Portfolio PWA
const CACHE_NAME = 'ANURAG_DASHORE_PORTFOLIO';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Network first — always fetch fresh content from GitHub Pages
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
