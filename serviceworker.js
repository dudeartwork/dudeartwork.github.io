importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('dudeartwork').then(function(cache) {
     return cache.addAll([
       '/',
       ]);
   })
 );
});