const postElement = document.getElementById('posts');

var request = new XMLHttpRequest();

request.open('GET', 'https://chitter-backend-api.herokuapp.com/peeps', true);

request.send()

 request.onload = function() {
   }
