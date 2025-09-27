// Grace's Catering - Service Worker
const CACHE_NAME = 'graces-catering-v2024';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/css/styles.css',
  '/assets/js/app.js',
  '/assets/images/hero1.jpg',
  '/assets/images/hero2.jpg',
  '/assets/images/hero3.jpg',
  '/assets/images/gallery1.jpg',
  '/assets/images/gallery2.jpg',
  '/assets/images/gallery3.jpg',
  '/assets/images/gallery4.jpg',
  '/assets/images/gallery5.jpg',
  '/assets/images/gallery6.jpg',
  '/icon-192.png',
  '/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap'
];

// Install Event - Cache resources
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('❌ Service Worker: Error caching files:', error);
      })
  );
});

// Fetch Event - Serve cached content
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          console.log('📱 Service Worker: Serving from cache:', event.request.url);
          return response;
        }
        
        console.log('🌐 Service Worker: Fetching from network:', event.request.url);
        return fetch(event.request)
          .then((response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response as it can only be consumed once
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      }
    )
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🔄 Service Worker: Activate event');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background Sync (for future use)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    console.log('🔄 Service Worker: Background sync for contact form');
    // Handle background sync for contact forms
  }
});

// Push Notification (for future use)
self.addEventListener('push', (event) => {
  console.log('🔔 Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New notification from Grace\'s Catering',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore', 
        title: 'View Details',
        icon: '/icon-192.png'
      },
      {
        action: 'close', 
        title: 'Close',
        icon: '/icon-192.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Grace\'s Catering', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('🔔 Service Worker: Notification click received');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

console.log('✅ Grace\'s Catering Service Worker loaded successfully!');