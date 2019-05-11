Cypress.Commands.add('fillForm', ({
  creatureName = 'Creature Name',
  hp = 50,
  armor = 12,
  initiative = 3,
  hitDiceEquation = '1d20 + 2',
  damageDiceEquation = '2d6 + 4',
}) => {
  cy.get('[dataKey="name"]').type(creatureName)
  cy.get('[dataKey="hp"]').type(hp)
  cy.get('[dataKey="armor"]').type(armor)
  cy.get('[dataKey="initiative"]').type(initiative)
  cy.get('[dataKey="hitDiceEquation"]').type(hitDiceEquation)
  cy.get('[dataKey="damageDiceEquation"]').type(damageDiceEquation)
  cy.get('Button[data-cy="submitForm"]').click()
})
