import rollDie from "./rollDie"
/**
 * Find all sets of #d# in an equation string and roll those dice
 * @param {str} diceEquation the raw diceEquation (eg. 2d6+5+3d4)
 * @return {obj} {}.`critHit` & {}.`critMiss` booleans for all . {}.`diceEquation` string
 */
const rollEquationDice = (diceEquation) => {
  let critHit = false
  let critMiss = false
  diceEquation = diceEquation.replace(/(\d+d+?\d+)/gi, (dieString) => {
    const roll = rollDie(dieString)
    if (roll.critHit) {
      critHit = true
    }
    if (roll.critMiss) {
      critMiss = true
    }
    return roll.rollResult
  })
  return {
    critHit,
    critMiss,
    diceEquation,
  }
}

export default rollEquationDice
