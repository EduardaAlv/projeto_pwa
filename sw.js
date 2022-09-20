self.addEventListener('install', function(event){
    console.log('SW: instalado!', event);
    caches.open('pwa-v1').then( function(cache){
        cache.addAll([
            '/',
            '/index.html'
        ]);
    });

    caches.has('pwa-v1').then( function(res) {
        if(res)
            console.log('cache existe');
        else
            console.log('cache não existe');
    });
});

self.addEventListener('activate', function(event){
    console.log('SW: ativado!', event);
});

self.addEventListener('fetch', function(e) {
    if(e.request.url.endsWith('/estilos.css') ){
    console.log('SW: carregando', e.request.url);
    e.respondWith(fetch ('/estilos/estilos2.css'));
    };
});