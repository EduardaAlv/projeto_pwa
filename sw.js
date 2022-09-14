self.addEventListener('install', function(event){
    console.log('SW: instalado!', event);
})

self.addEventListener('activate', function(event){
    console.log('SW: ativado!', event);
})