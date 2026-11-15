// Bump VERSION whenever you change any file, so phones pick up the update.
const VERSION="stillpoint-v2";
const FILES=["./","index.html","BOOKS/index.json","manifest.webmanifest","vendor/jspdf.umd.min.js","icons/icon-192.png","icons/icon-512.png",
"fonts/literata-latin-wght-normal.woff2","fonts/literata-latin-wght-italic.woff2","fonts/newsreader-latin-wght-normal.woff2","fonts/newsreader-latin-wght-italic.woff2","fonts/hanken-grotesk-latin-wght-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});
