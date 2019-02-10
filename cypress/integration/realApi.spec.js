describe ('Real app', function() {

// impossible to create real test for creating user name.
  describe('Signup', function() {
    it('Has an error message during sign in if the user name is taken ', function(){
      cy.visit('http://localhost:8080/')
      cy.get('#newUsername').type('qqq')
      cy.get('#signUpSubmit').click()
      cy.contains('Handle has already been taken')
    })
  })

  describe('New session', function() {
    it('Signs in the user for a new session'/
    'if username and password are valid', function(){
      cy.visit('/')
      cy.get('#username').type('fff')
      cy.get('#password').type('mypassword')
      cy.get('#signInSubmit').click()
      cy.contains('You are signed in')
    })
  })
});
