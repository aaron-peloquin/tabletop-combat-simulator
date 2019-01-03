import cleanseEquationStr from "./cleanseEquationStr"
import runEquation from "./runEquation"
import rollEquationDice from "./rollEquatonDice"

/**
 * Rolls a dice equation
 * @param {str} Equation the dice equation string
 * @return {obj} The roll result
 */
const Roll = (Equation) => {
  const CleansedEquation = cleanseEquationStr(Equation)
  const RolledEquation = rollEquationDice(CleansedEquation)
  const RanEquation = runEquation(RolledEquation.diceEquation)
  return {
    result: parseInt(RanEquation),
    critHit: RolledEquation.critHit,
    critMiss: RolledEquation.critMiss,
  }
}

export default Roll
