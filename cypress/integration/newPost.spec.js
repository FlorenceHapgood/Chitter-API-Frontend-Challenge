describe ('New Post', function(){
  it ('successfully posts a new peep', function() {
    cy.server()
    cy.visit('/')
    cy.get('#username').type('fff')
    cy.get('#password').type('mypassword')
    cy.get('#signInSubmit').click()
    cy.contains('You are signed in')

    cy.server()
    cy.route({
      method: 'POST',
      url: "https://chitter-backend-api.herokuapp.com/peeps",
      status: 201,
      response: [],
    })

    cy.get('#newPeep').type('Spike is better than Angel')
    cy.get('#peepSubmit').click()
    cy.contains('Peep successfully posted')
  })
})
