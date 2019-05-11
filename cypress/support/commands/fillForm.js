Cypress.Commands.add('fillForm', ({
  creatureName = 'Creature Name',
  hp = 50,
  armor = 12,
  initiative = 3,
  hitDiceEquation = '1d20 + 2',
  damageDiceEquation = '2d6 + 4',
  team = 'a',
} = {}) => {
  cy.get('[data-cy="name"]').clear().type(creatureName)
  cy.get('[data-cy="hp"]').clear().type(hp)
  cy.get('[data-cy="armor"]').clear().type(armor)
  cy.get('[data-cy="initiative"]').clear().type(initiative)
  cy.get('[data-cy="hitDiceEquation"]').clear().type(hitDiceEquation)
  cy.get('[data-cy="damageDiceEquation"]').clear().type(damageDiceEquation)
  cy.get(`Button[data-cy="${team}TeamSubmit"]`).click()
})
