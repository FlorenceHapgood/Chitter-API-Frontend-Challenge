const postElement = document.getElementById('posts');

var request = new XMLHttpRequest();

request.open('GET', 'https://chitter-backend-api.herokuapp.com/peeps', true);


request.onload = function() {
  var dataArray = JSON.parse(this.responseText);

   dataArray.map( hash => {
     const peep = document.createElement('div');
     peep.innerHTML = hash.body
     document.body.appendChild(peep);
   })
}
request.send()
