Cypress.Commands.add('fillForm', ({
  creatureName = 'Creature Name',
  hp = 50,
  armor = 12,
  initiative = 3,
  hitDiceEquation = '1d20 + 2',
  damageDiceEquation = '2d6 + 4',
  team = 'a',
} = {}) => {
  cy.get('[data-cy="name"]').type(creatureName)
  cy.get('[data-cy="hp"]').type(hp)
  cy.get('[data-cy="armor"]').type(armor)
  cy.get('[data-cy="initiative"]').type(initiative)
  cy.get('[data-cy="hitDiceEquation"]').type(hitDiceEquation)
  cy.get('[data-cy="damageDiceEquation"]').type(damageDiceEquation)
  cy.get(`Button[data-cy="${team}TeamSubmit"]`).click()
})
