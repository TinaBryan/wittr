// Set Serivce Worker to display <html>
// complete and passed
self.addEventListener('fetch', function(event) {
  event.waitUntil(
    // pass in a promise
    // if the promise resolves the browser knows the service worker is complete
    // if the promise rejects the the browser knows the service worker failed
    // and should be discarded
  )
    // TODO: respond to all requests with an html response
    // containing an element with class="a-winner-is-me".
    // Ensure the Content-Type of the response is "text/html"
  console.log(event.request);
  event.respondWith(
      new Response('<strong class="a-winner-is-me">Hello World!</strong>', {
          headers: {'Content-Type': 'text/html'}
      })
      );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response){
      if (response.status === 404) {
        //TODO: instead, respond with the gif at
        // /img/dr-evil.gif
        // using a network requests
        return fetch('/imgs/dr-evil.gif');
      }
      return response;
    }).catch(function() {
      return new Response("Uh oh, that totally failed!");
    })
  );
})
