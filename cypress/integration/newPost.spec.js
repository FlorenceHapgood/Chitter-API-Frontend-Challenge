describe ('New Post', function(){
  it ('successfully posts a post', function() {
    cy.server()
    cy.visit('/')
    cy.get('#username').type('fff')
    cy.get('#password').type('mypassword')
    cy.get('#signInSubmit').click()
    cy.contains('You are signed in')

    // cy.route({
    //   method: 'POST',
    //   url: "https://chitter-backend-api.herokuapp.com/sessions",
    //   status: 201,
    //   response: [{
    //     "user_id":774,
    //     "session_key":"_2a_10_O4HuGHycq7gr5yjw_M1rDe"
    //   }],
    // })

  })
})
