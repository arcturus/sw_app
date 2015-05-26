self.addEventListener('install', function(evt) {
  console.log('Got the install event');
});

self.addEventListener('fetch', function(evt) {
  console.log('========> Fetching ' + evt.request.url);
  //evt.respondWith(fetch(evt.request));
  evt.respondWith(new Response('<html><body>Hello!</body></html>'), {
    'Content-Type': 'text/plain'
  });
});
