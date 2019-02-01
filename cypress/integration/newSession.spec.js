describe ('New Session', function(){
  it ('successfully creates a new session for the user', function() {
    cy.server()

    cy.route({
      method: 'POST',
      url: "https://chitter-backend-api.herokuapp.com/sessions",
      status: 201,
      response: [{
        "user_id":774,
        "session_key":"_2a_10_O4HuGHycq7gr5yjw_M1rDe"
      }],
    })

    cy.visit('http://localhost:8080/')
    cy.get('#username_1').type('fakeUsername')
    cy.get('#password_1').type('fakePassword')
    cy.get('#submit_1').click()
    cy.contains('You are signed in')

  })
})

//"user_id":774,
//"session_key":"_2a_10_O4HuGHycq7gr5yjw_M1rDe"
