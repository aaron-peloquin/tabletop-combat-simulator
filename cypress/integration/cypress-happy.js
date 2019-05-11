
describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('http://localhost:3000')
    cy.get('input').first().type('Test Creature').next().type(50)


    // expect(expectation).to.equal(true)
    // // Take a snapshot for visual diffing
    // // cy.percySnapshot()

    //
  })
})
