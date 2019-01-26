//const postElement = document.getElementById('posts');

 fetch('https://chitter-backend-api.herokuapp.com/peeps')
  .then(function(response) { //I think the argument is automatically passed with then to the function. We could call response something else it would work.
     return response.json()
     .then(function(response){
      var dataArray = response
      console.log(dataArray)
      dataArray.forEach( hash => {
        const peep = document.createElement('p');
        const author = document.createElement('p');
        peep.innerHTML = hash.body
        author.innerHTML = "- posted by" + hash.user.handle
        document.body.appendChild(peep);
        document.body.appendChild(author);
      })
    })
  });



  //
  // setTimeout(function() {
  //   console.log(response);
  // }, 400)



//
// request.onload = function() {
//   var dataArray = JSON.parse(this.responseText);
//
//   dataArray.forEach( hash => {
//     const peep = document.createElement('p');
//     const author = document.createElement('p');
//     peep.innerHTML = hash.body
//     author.innerHTML = "- posted by" + hash.user.handle
//     document.body.appendChild(peep);
//     document.body.appendChild(author);
//   })
//  }
