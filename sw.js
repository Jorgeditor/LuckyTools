const CACHE_NAME = 'luckytools-cache-v2';
const urlsToCache = [
    './',
    './index.html',
    './about.html',
    './contact.html',
    './licenses.html',
    './style.css',
    './logo-demo.png',
    './premiere.png',
    './windows.png',
    './luckysearch.mp4',
    './luckycommands.mp4',
    './luckyorganize.mp4',
    './luckyzoom.mp4',
    './luckycut.mp4',
    './luckypod.mp4',
    './luckynotes.mp4',
    './luckycurves.mp4',
    './luckyanchor.mp4',
    './dylan.jpg',
    './busco.jpg',
    './oury.jpg',
    './blackbull.jpg',
    './ermac.jpg'
];

self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache opened');
                // Use try/catch for addAll, or map individually to avoid single failure crashing cache
                return Promise.allSettled(
                    urlsToCache.map(url => {
                        return cache.add(url).catch(err => console.log('Failed to cache:', url, err));
                    })
                );
            })
    );
});

self.addEventListener('fetch', event => {
    // Only cache GET requests
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone request since it's a stream that can only be consumed once
                let fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    response => {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone response since it's a stream that can only be consumed once
                        let responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                ).catch(err => {
                    // Ignore network fetch errors 
                });
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
