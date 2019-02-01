
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
  $.ajax({
      url: 'https://chitter-backend-api.herokuapp.com/users',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json',
      data: JSON.stringify( { "user": {"handle": $('#username').val(), "password": $('#password').val() }} ),
      processData: false,
      success: function(){
          $('#signupMessage').text('You have successfully signed up')
      },
      error: function(jqXHR) {
        errorMessage(jqXHR)
      }
   });
})

function errorMessage(jqXHR){
  var message = JSON.parse(jqXHR.responseText)
  if (message.handle[0] === "has already been taken") {
    $('#signupMessage').text("Handle has already been taken")
  }
}
