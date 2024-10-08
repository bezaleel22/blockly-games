// inside sw.js file

const version = 1;
const cacheName = `blockly-v${version}`;

const cacheAssets = [
  "/",
  "/en/index.html",
  "/favicon.png",
  "/icon/ms-icon-310x310.png",
  "/icon/ms-icon-70x70.png",
  "/icon/android-icon-72x72.png",
  "/icon/apple-icon-76x76.png",
  "/icon/apple-icon.png",
  "/icon/browserconfig.xml",
  "/icon/android-icon-144x144.png",
  "/android-icon-144x144.png",
  "/icon/android-icon-36x36.png",
  "/icon/apple-icon-60x60.png",
  "/icon/apple-icon-72x72.png",
  "/icon/apple-icon-144x144.png",
  "/icon/apple-icon-180x180.png",
  "/icon/favicon.ico",
  "/icon/favicon-96x96.png",
  "/icon/favicon-16x16.png",
  "/icon/android-icon-192x192.png",
  "/icon/apple-icon-precomposed.png",
  "/icon/favicon-32x32.png",
  "/icon/ms-icon-144x144.png",
  "/icon/apple-icon-120x120.png",
  "/icon/android-icon-96x96.png",
  "/icon/apple-icon-57x57.png",
  "/icon/manifest.json",
  "/icon/apple-icon-114x114.png",
  "/icon/apple-icon-152x152.png",
  "/icon/ms-icon-150x150.png",
  "/icon/android-icon-48x48.png",
  "/en/index.html?lang=en",
  "/en/maze.html?lang=en",
  "/en/third-party/JS-Interpreter/compressed.js",
  "/en/third-party/soundfonts/trumpet/C4.mp3",
  "/en/third-party/soundfonts/trumpet/G4.mp3",
  "/en/third-party/soundfonts/trumpet/E4.mp3",
  "/en/third-party/soundfonts/trumpet/F4.mp3",
  "/en/third-party/soundfonts/trumpet/A3.mp3",
  "/en/third-party/soundfonts/trumpet/B3.mp3",
  "/en/third-party/soundfonts/trumpet/D3.mp3",
  "/en/third-party/soundfonts/trumpet/A4.mp3",
  "/en/third-party/soundfonts/trumpet/E3.mp3",
  "/en/third-party/soundfonts/trumpet/D4.mp3",
  "/en/third-party/soundfonts/trumpet/G3.mp3",
  "/en/third-party/soundfonts/trumpet/F3.mp3",
  "/en/third-party/soundfonts/trumpet/B4.mp3",
  "/en/third-party/soundfonts/trumpet/C3.mp3",
  "/en/third-party/soundfonts/drum/C4.mp3",
  "/en/third-party/soundfonts/drum/G4.mp3",
  "/en/third-party/soundfonts/drum/E4.mp3",
  "/en/third-party/soundfonts/drum/F4.mp3",
  "/en/third-party/soundfonts/drum/A3.mp3",
  "/en/third-party/soundfonts/drum/B3.mp3",
  "/en/third-party/soundfonts/drum/D3.mp3",
  "/en/third-party/soundfonts/drum/A4.mp3",
  "/en/third-party/soundfonts/drum/E3.mp3",
  "/en/third-party/soundfonts/drum/D4.mp3",
  "/en/third-party/soundfonts/drum/G3.mp3",
  "/en/third-party/soundfonts/drum/F3.mp3",
  "/en/third-party/soundfonts/drum/B4.mp3",
  "/en/third-party/soundfonts/drum/C3.mp3",
  "/en/third-party/soundfonts/violin/C4.mp3",
  "/en/third-party/soundfonts/violin/G4.mp3",
  "/en/third-party/soundfonts/violin/E4.mp3",
  "/en/third-party/soundfonts/violin/F4.mp3",
  "/en/third-party/soundfonts/violin/A3.mp3",
  "/en/third-party/soundfonts/violin/B3.mp3",
  "/en/third-party/soundfonts/violin/D3.mp3",
  "/en/third-party/soundfonts/violin/A4.mp3",
  "/en/third-party/soundfonts/violin/E3.mp3",
  "/en/third-party/soundfonts/violin/D4.mp3",
  "/en/third-party/soundfonts/violin/G3.mp3",
  "/en/third-party/soundfonts/violin/F3.mp3",
  "/en/third-party/soundfonts/violin/B4.mp3",
  "/en/third-party/soundfonts/violin/C3.mp3",
  "/en/third-party/soundfonts/choir/C4.mp3",
  "/en/third-party/soundfonts/choir/G4.mp3",
  "/en/third-party/soundfonts/choir/E4.mp3",
  "/en/third-party/soundfonts/choir/F4.mp3",
  "/en/third-party/soundfonts/choir/A3.mp3",
  "/en/third-party/soundfonts/choir/B3.mp3",
  "/en/third-party/soundfonts/choir/D3.mp3",
  "/en/third-party/soundfonts/choir/A4.mp3",
  "/en/third-party/soundfonts/choir/E3.mp3",
  "/en/third-party/soundfonts/choir/D4.mp3",
  "/en/third-party/soundfonts/choir/G3.mp3",
  "/en/third-party/soundfonts/choir/F3.mp3",
  "/en/third-party/soundfonts/choir/B4.mp3",
  "/en/third-party/soundfonts/choir/C3.mp3",
  "/en/third-party/soundfonts/flute/C4.mp3",
  "/en/third-party/soundfonts/flute/G4.mp3",
  "/en/third-party/soundfonts/flute/E4.mp3",
  "/en/third-party/soundfonts/flute/F4.mp3",
  "/en/third-party/soundfonts/flute/A3.mp3",
  "/en/third-party/soundfonts/flute/B3.mp3",
  "/en/third-party/soundfonts/flute/D3.mp3",
  "/en/third-party/soundfonts/flute/A4.mp3",
  "/en/third-party/soundfonts/flute/E3.mp3",
  "/en/third-party/soundfonts/flute/D4.mp3",
  "/en/third-party/soundfonts/flute/G3.mp3",
  "/en/third-party/soundfonts/flute/F3.mp3",
  "/en/third-party/soundfonts/flute/B4.mp3",
  "/en/third-party/soundfonts/flute/C3.mp3",
  "/en/third-party/soundfonts/piano/C4.mp3",
  "/en/third-party/soundfonts/piano/G4.mp3",
  "/en/third-party/soundfonts/piano/E4.mp3",
  "/en/third-party/soundfonts/piano/F4.mp3",
  "/en/third-party/soundfonts/piano/A3.mp3",
  "/en/third-party/soundfonts/piano/B3.mp3",
  "/en/third-party/soundfonts/piano/D3.mp3",
  "/en/third-party/soundfonts/piano/A4.mp3",
  "/en/third-party/soundfonts/piano/E3.mp3",
  "/en/third-party/soundfonts/piano/D4.mp3",
  "/en/third-party/soundfonts/piano/G3.mp3",
  "/en/third-party/soundfonts/piano/F3.mp3",
  "/en/third-party/soundfonts/piano/B4.mp3",
  "/en/third-party/soundfonts/piano/C3.mp3",
  "/en/third-party/soundfonts/guitar/C4.mp3",
  "/en/third-party/soundfonts/guitar/G4.mp3",
  "/en/third-party/soundfonts/guitar/E4.mp3",
  "/en/third-party/soundfonts/guitar/F4.mp3",
  "/en/third-party/soundfonts/guitar/A3.mp3",
  "/en/third-party/soundfonts/guitar/B3.mp3",
  "/en/third-party/soundfonts/guitar/D3.mp3",
  "/en/third-party/soundfonts/guitar/A4.mp3",
  "/en/third-party/soundfonts/guitar/E3.mp3",
  "/en/third-party/soundfonts/guitar/D4.mp3",
  "/en/third-party/soundfonts/guitar/G3.mp3",
  "/en/third-party/soundfonts/guitar/F3.mp3",
  "/en/third-party/soundfonts/guitar/B4.mp3",
  "/en/third-party/soundfonts/guitar/C3.mp3",
  "/en/third-party/soundfonts/banjo/C4.mp3",
  "/en/third-party/soundfonts/banjo/G4.mp3",
  "/en/third-party/soundfonts/banjo/E4.mp3",
  "/en/third-party/soundfonts/banjo/F4.mp3",
  "/en/third-party/soundfonts/banjo/A3.mp3",
  "/en/third-party/soundfonts/banjo/B3.mp3",
  "/en/third-party/soundfonts/banjo/D3.mp3",
  "/en/third-party/soundfonts/banjo/A4.mp3",
  "/en/third-party/soundfonts/banjo/E3.mp3",
  "/en/third-party/soundfonts/banjo/D4.mp3",
  "/en/third-party/soundfonts/banjo/G3.mp3",
  "/en/third-party/soundfonts/banjo/F3.mp3",
  "/en/third-party/soundfonts/banjo/B4.mp3",
  "/en/third-party/soundfonts/banjo/C3.mp3",
  "/en/third-party/blockly/media/handopen.cur",
  "/en/third-party/blockly/media/1x1.gif",
  "/en/third-party/blockly/media/quote1.png",
  "/en/third-party/blockly/media/handclosed.cur",
  "/en/third-party/blockly/media/quote0.png",
  "/en/third-party/blockly/media/delete.ogg",
  "/en/third-party/blockly/media/delete.wav",
  "/en/third-party/blockly/media/click.ogg",
  "/en/third-party/blockly/media/disconnect.wav",
  "/en/third-party/blockly/media/click.mp3",
  "/en/third-party/blockly/media/click.wav",
  "/en/third-party/blockly/media/delete.mp3",
  "/en/third-party/blockly/media/handdelete.cur",
  "/en/third-party/blockly/media/sprites.png",
  "/en/third-party/blockly/media/disconnect.mp3",
  "/en/third-party/blockly/media/disconnect.ogg",
  "/en/third-party/SoundJS/soundjs.min.js",
  "/en/third-party/ace/ace.js",
  "/en/third-party/ace/mode-javascript.js",
  "/en/third-party/ace/theme-chrome.js",
  "/en/third-party/ace/worker-javascript.js",
  "/en/bird.html?lang=en",
  "/en/movie/win.mp3",
  "/en/movie/icons.png",
  "/en/movie/youtube-bg.png",
  "/en/movie/style.css",
  "/en/movie/generated/en/compressed.js",
  "/en/movie/win.ogg",
  "/en/puzzle/win.mp3",
  "/en/puzzle/cat.jpg",
  "/en/puzzle/duck.jpg",
  "/en/puzzle/snail.jpg",
  "/en/puzzle/bee.jpg",
  "/en/puzzle/style.css",
  "/en/puzzle/generated/en/compressed.js",
  "/en/puzzle/win.ogg",
  "/en/pond-duck.html?lang=en",
  "/en/puzzle.html?lang=en",
  "/en/favicon.ico",
  "/en/about.html?lang=en",
  "/en/turtle.html?lang=en",
  "/en/maze/fail_astro.ogg",
  "/en/maze/tiles_panda.png",
  "/en/maze/bg_astro.jpg",
  "/en/maze/win.mp3",
  "/en/maze/fail_panda.mp3",
  "/en/maze/panda.png",
  "/en/maze/fail_astro.mp3",
  "/en/maze/help_stack.png",
  "/en/maze/astro.png",
  "/en/maze/help_run.png",
  "/en/maze/bg_panda.jpg",
  "/en/maze/tiles_astro.png",
  "/en/maze/pegman.png",
  "/en/maze/icons.png",
  "/en/maze/fail_panda.ogg",
  "/en/maze/marker.png",
  "/en/maze/style.css",
  "/en/maze/fail_pegman.ogg",
  "/en/maze/tiles_pegman.png",
  "/en/maze/help_down.png",
  "/en/maze/help_up.png",
  "/en/maze/fail_pegman.mp3",
  "/en/maze/generated/en/compressed.js",
  "/en/maze/win.ogg",
  "/en/music.html?lang=en",
  "/en/bird/worm.mp3",
  "/en/bird/nest.png",
  "/en/bird/quack.mp3",
  "/en/bird/quack.ogg",
  "/en/bird/worm.png",
  "/en/bird/whack.mp3",
  "/en/bird/birds-120.png",
  "/en/bird/icons.png",
  "/en/bird/help_mutator.png",
  "/en/bird/style.css",
  "/en/bird/help_heading.png",
  "/en/bird/whack.ogg",
  "/en/bird/help_up.png",
  "/en/bird/generated/en/compressed.js",
  "/en/bird/worm.ogg",
  "/en/turtle/win.mp3",
  "/en/turtle/icons.png",
  "/en/turtle/square.gif",
  "/en/turtle/style.css",
  "/en/turtle/help_left.png",
  "/en/turtle/generated/en/compressed.js",
  "/en/turtle/win.ogg",
  "/en/pond/boom.mp3",
  "/en/pond/splash.ogg",
  "/en/pond/splash.mp3",
  "/en/pond/whack.mp3",
  "/en/pond/tutor/style.css",
  "/en/pond/tutor/generated/en/compressed.js",
  "/en/pond/icons.png",
  "/en/pond/crobots.txt",
  "/en/pond/boom.ogg",
  "/en/pond/docs/map.png",
  "/en/pond/docs/zippy-plus.png",
  "/en/pond/docs/compass.png",
  "/en/pond/docs/zippy-minus.png",
  "/en/pond/docs/style.css",
  "/en/pond/docs/generated/en/compressed.js",
  "/en/pond/style.css",
  "/en/pond/docs.html?lang=en",
  "/en/pond/whack.ogg",
  "/en/pond/duck/style.css",
  "/en/pond/duck/generated/en/compressed.js",
  "/en/pond/sprites.png",
  "/en/music/rest0.125.png",
  "/en/music/rest1.png",
  "/en/music/rest0.03125.png",
  "/en/music/rest0.25.png",
  "/en/music/note1.png",
  "/en/music/note0.5.png",
  "/en/music/note0.0625.png",
  "/en/music/notes.png",
  "/en/music/note0.125.png",
  "/en/music/icons.png",
  "/en/music/stave.png",
  "/en/music/black1x1.gif",
  "/en/music/rest0.0625.png",
  "/en/music/rest0.5.png",
  "/en/music/style.css",
  "/en/music/note0.03125.png",
  "/en/music/play.png",
  "/en/music/note0.25.png",
  "/en/music/generated/en/compressed.js",
  "/en/movie.html?lang=en",
  "/en/index/title-beta.png",
  "/en/index/maze.png",
  "/en/index/puzzle.png",
  "/en/index/pond-tutor.png",
  "/en/index/bird.png",
  "/en/index/movie.png",
  "/en/index/turtle.png",
  "/en/index/pond-duck.png",
  "/en/index/style.css",
  "/en/index/music.png",
  "/en/index/generated/en/compressed.js",
  "/en/pond-tutor.html?lang=en",
  "/en/common/help.png",
  "/en/common/1x1.gif",
  "/en/common/prettify.js",
  "/en/common/common.css",
  "/en/common/loading.gif",
  "/en/common/back.js",
  "/en/common/prettify.css",
  "/en/common/boot.js",
];

self.addEventListener("install", (event) => {
  // console.log("Service worker is installed");

  /* caching all the assets during install event, this is also known as precaching */

  /* caches.open(cacheName) - this will create a new entry in the cache storage with the given cache name */

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Caching assets");
        cache.addAll(cacheAssets);
        console.log(`Cached ${cacheAssets.length} assets`);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate the Serivce Worker
self.addEventListener("activate", (e) => {
  console.info("Service Worker: Activated");

  // Clearing old cache
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cache) => {
          cache !== cacheName && caches.delete(cache);
        })
      );
    })
  );
});

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches
//       .open(cacheName)
//       .then((cache) => cache.match(event.request))
//       .catch(() => fetch(event.request))
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     fetch(event.request).catch(() =>
//       caches.open(cacheName).then((cache) => cache.match(event.request))
//     )
//   );
// });

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        var fetchPromise = fetch(event.request).then(function (
          networkResponse
        ) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });

        // response contains cached data, if available
        return response || fetchPromise;
      });
    })
  );
});


// Call Fetch event
// self.addEventListener("fetch", (e) => {
//   console.info("Service Worker: Fetching");
//   // Checking the respond from the server
//   e.respondWith(
//     fetch(e.request)
//       .then((response) => {
//         // Make clone of the response
//         const responseClone = response.clone();
//         caches.open(cacheName).then((cache) => {
//           // Add the clone to the cache
//           cache.put(e.request, responseClone);
//         });
//         return response;
//       })
//       .catch((error) => {
//         // serving the cached clone
//         caches.match(e.request).then((response) => response);
//       })
//   );
// });