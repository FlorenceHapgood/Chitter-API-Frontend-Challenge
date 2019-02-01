describe ('Homepage', function() {
  it ('Has a greeting', function() {
    cy.visit('/');
    cy.contains('Chitter Challenge');
  })

  it('Has an error message if the user name is taken', function(){
    cy.visit('http://localhost:8080/')
    cy.get('#username').type('qqq')
    cy.get('#submit').click()
    cy.contains('Handle has already been taken')
  })
});
