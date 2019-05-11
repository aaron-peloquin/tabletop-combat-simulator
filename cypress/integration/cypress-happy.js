
describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('http://localhost:3000')
    cy.fillForm()
    cy.fillForm({team: 'b'})


    cy.get('[data-cy="SimulationResults"]').should('not.exist')
    cy.get('[data-cy="SimulateCombat"]').click()
    cy.get('[data-cy="SimulationResults"]').should('exist')

    // Take a snapshot for visual diffing
    // cy.percySnapshot()

    //
  })
})
