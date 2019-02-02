describe ('Real app', function() {

  it('Has an error message if the user name is taken', function(){
    cy.visit('http://localhost:8080/')
    cy.get('#newUsername').type('qqq')
    cy.get('#signUpSubmit').click()
    cy.contains('Handle has already been taken')
  })
  
});
