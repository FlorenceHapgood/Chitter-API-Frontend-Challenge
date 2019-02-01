describe ('Successful Sign in', function() {
  it('Successfully signs in the user', function() {
    cy.server()
    cy.route({
      method: 'POST',
      url: "https://chitter-backend-api.herokuapp.com/users",
      status: 200,
      response: [{
        id: 100, handle: "Florence",
      }],
    })

    cy.visit('http://localhost:8080/')
    cy.get('#username').type('fakeUsername')
    cy.get('#password').type('fakePassword')
    cy.get('#submit').click()
    cy.contains('You have successfully signed up')
 })

   it('Has an error message if the user name is taken', function(){
     cy.server()
     cy.route({
       method: 'POST',
       url: "https://chitter-backend-api.herokuapp.com/users",
       status: 422,
       response: {
         handle: ["has already been taken"]
       },
     })

     cy.visit('http://localhost:8080/')
     cy.get('#username').type('jiolkjd')
     cy.get('#submit').click()
     cy.contains('Handle has already been taken')
   })
})
