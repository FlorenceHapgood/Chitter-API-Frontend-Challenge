describe ('fakeapi', function() {
  it('stubs the api', function() {
    cy.server()
    cy.visit('http://localhost:8080/')
    cy.get('#username').type('fakeUsername')
    cy.get('#password').type('fakePassword')
    cy.get('#submit').click()
    cy.contains('Submit Clicked')
 })
})
