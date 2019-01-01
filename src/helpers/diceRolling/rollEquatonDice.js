import rollDie from "./rollDie"
/**
 * Find all sets of #d# in an equation string and roll those dice
 * @param {str} diceEquation the raw diceEquation (eg. 2d6+5+3d4)
 * @return {str} The rolled equation
 */
const rollEquationDice = (diceEquation) => {
  diceEquation = diceEquation.replace(/(\d+d+?\d+)/gi, (dieString) => {
    return rollDie(dieString)
  })
  return diceEquation
}

export default rollEquationDice
