
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
    // peep.id=('peepId') //for styling
    // author.id=('authorId')
    document.body.appendChild(peep);
    document.body.appendChild(author)
  })
}

$('#signUpSubmit').click(function(){
  $.ajax({
      url: 'https://chitter-backend-api.herokuapp.com/users',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json',
      data: JSON.stringify( { "user": {"handle": $('#newUsername').val(), "password": $('#newPassword').val() }} ),
      processData: false,
      success: function(){
          $('#message').text('You have successfully signed up')
      },
      error: function(jqXHR) {
        errorMessage(jqXHR)
      }
   });
})

function errorMessage(jqXHR){
  var message = JSON.parse(jqXHR.responseText)
  if (message.handle[0] === "has already been taken") {
    $('#message').text("Handle has already been taken")
  }
}

$('#signInSubmit').click(function(){
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/sessions",
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify({ "session": {"handle": $('#username').val(), "password": $('#password').val() }}),
    processData:false,
    success: function(jqXHR) {
        // console.log(jqXHR)
        // console.log(jqXHR.user_id)
        // console.log(jqXHR.session_key)
      $('#message').text('You are signed in');
      saveSessionInfo(jqXHR)
    },
    error: function() {
      console.log("Error with session signin")
    }
  })
})

function saveSessionInfo(jqXHR){
  console.log(jqXHR)
  session_key = jqXHR.session_key

  user_id = jqXHR.user_id

  console.log('saved')
}

$('#peepSubmit').click(function(){

  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/peeps",
    dataType: 'json',
    type: 'post',
   //  beforeSend : function(req) {
   //     req.setRequestHeader('Authorization', "Basic " + btoa('_2a_10_iwYShni2AMNw378x7GAvVe'));
   // },
   headers: {
       'Authorization': `Bearer ${session_key}`,
   },

    contentType: 'application/json',
    data: JSON.stringify({ "peep": {"user_id": + user_id, "body": $('#newPeep').val() }}),
    processData:false,
    success: function() {
      $('#message').text('Peep successfully posted');
    },
    error: function(jqXHR) {
      console.log(jqXHR)
      console.log("Error with posting")
    }
  })
})
