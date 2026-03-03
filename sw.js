const CACHE_NAME = 'research-v2';
const ASSETS = [
  './',
  './index.html',
  './research_doc.pdf', 
  './manifest.json'
];

// Install: Cache all files for offline use
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Fetch: Serve from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});