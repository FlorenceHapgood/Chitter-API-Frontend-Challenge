describe ('Successful Sign up', function() {
  it('Successfully signs up the user', function() {
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
    cy.get('#newUsername').type('fakeUsername')
    cy.get('#newPassword').type('fakePassword')
    cy.get('#signUpSubmit').click()
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
     cy.get('#newUsername').type('jiolkjd')
     cy.get('#signUpSubmit').click()
     cy.contains('Handle has already been taken')
   })
})
