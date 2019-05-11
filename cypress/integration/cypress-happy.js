
describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('http://localhost:3000')
    cy.fillForm()
    cy.fillForm({team: 'b'})


    // expect(expectation).to.equal(true)
    // // Take a snapshot for visual diffing
    // // cy.percySnapshot()

    //
  })
})
