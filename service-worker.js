const CACHE_NAME = "my-game-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/data.win",
  "/scripts.js",
  "/html5game.js",
  "/options.json",
  "/spritesheet.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
