
describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('http://localhost:3000')

    // Take a snapshot for visual diffing
    // cy.percySnapshot()
  })

  it('Adds a creature to team A', () => {
    cy.fillForm({team: 'a'})
    cy.get('[data-team="a"] [data-cy="TeamListCreature"]').should('have.length', 1)
  })

  it('Adds a creature to team B', () => {
    cy.fillForm({team: 'b'})
    cy.get('[data-team="b"] [data-cy="TeamListCreature"]').should('have.length', 1)
  })

  xit('Percy Snapshots with 2 creatures', () => {
    cy.percySnapshot()
  })

  it('Simulates Combat and displays result', () => {
    cy.get('[data-cy="SimulationResults"]').should('not.exist')
    cy.get('[data-cy="SimulateCombat"]').click()
    cy.get('[data-cy="SimulationResults"]').should('exist')
  })
})
