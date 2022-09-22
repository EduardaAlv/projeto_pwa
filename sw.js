self.addEventListener('install', function(event){
    console.log('SW: instalado!', event);
    caches.open('pwa-v1').then( function(cache){
        cache.addAll([
            '/',
            '/tela-principal.html',
            '/cadastro.html',
            '/listagem.html',
            '/manifest.webmanifest',
            '/scripts.js',
            '/style.css',
            '/icones/android/android-launchericon-48-48.png',
            '/icones/android/android-launchericon-72-72.png',
            '/icones/android/android-launchericon-96-96.png',
            '/icones/android/android-launchericon-144-144.png',
            '/icones/android/android-launchericon-192-192.png',
            '/icones/android/android-launchericon-512-512.png',
            '/icones/ios/16.png',
            '/icones/ios/20.png',
            '/icones/ios/29.png',
            '/icones/ios/32.png',
            '/icones/ios/40.png',
            '/icones/ios/50.png',
            '/icones/ios/57.png',
            '/icones/ios/58.png',
            '/icones/ios/60.png',
            '/icones/ios/64.png',
            '/icones/ios/72.png',
            '/icones/ios/76.png',
            '/icones/ios/80.png',
            '/icones/ios/87.png',
            '/icones/ios/100.png',
            '/icones/ios/114.png',
            '/icones/ios/120.png',
            '/icones/ios/128.png',
            '/icones/ios/144.png',
            '/icones/ios/152.png',
            '/icones/ios/167.png',
            '/icones/ios/180.png',
            '/icones/ios/192.png',
            '/icones/ios/256.png',
            '/icones/ios/512.png',
            '/icones/ios/1024.png'
        ]);
    });
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key !== cacheName) {
              return caches.delete(key);
            }
          })
        );
      })
    );
  });
  
  self.addEventListener('fetch', function (event) {
    let resposta = caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((recurso) => {
        if (recurso) return recurso;
        return fetch(event.request).then((recurso) => {
          cache.put(event.request, recurso.clone());
          return recurso;
        });
      });
    });
    event.respondWith(resposta);
  });

self.addEventListener('activate', function(event){
    console.log('SW: ativado!', event);
});
