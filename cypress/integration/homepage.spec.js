describe ('fakeapi', function() {
  it('stubs the api', function() {

    cy.server()
    cy.route({
      method: 'GET',
      url: "https://chitter-backend-api.herokuapp.com/peeps",
      status: 200,
      response: [{
        body: "Fake Post"}],
    })

    cy.visit('http://localhost:8080/')
    cy.contains('Fake Post')

 })
})
