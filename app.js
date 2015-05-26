window.addEventListener('DOMContentLoaded', function() {

  if (navigator.serviceWorker && !navigator.serviceWorker.controller) {
    navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then(console.log.bind(console, 'SW registered!'))
    .catch(console.error.bind(console, 'Registration failed!'));
  }
  else {
    console.log('SW already there!');
  }

});
