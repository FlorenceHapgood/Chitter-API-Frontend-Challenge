describe ('Homepage', function() {
  it ('Has a greeting', function() {
    cy.visit('/');
    cy.contains('Chitter Challenge');
  })
});
