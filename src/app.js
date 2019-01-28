
var request = new XMLHttpRequest();

request.open('GET', 'https://chitter-backend-api.herokuapp.com/peeps', true);
request.send()

request.onload = function() {
   var dataArray = JSON.parse(this.responseText);
   console.log(dataArray)
   dataArray.forEach( hash => {
    const peep = document.createElement('p');
    const author = document.createElement('p');
    peep.innerHTML = hash.body
    author.innerHTML = "-posted by " + hash.user.handle
    document.body.appendChild(peep);
    document.body.appendChild(author)
  })
}

$('#submit').click(function(){
  $('#testingSubmit').text('Submit Clicked')
})
