import cleanseEquationStr from "./cleanseEquationStr"
import runEquation from "./runEquation"
import rollEquationDice from "./rollEquatonDice"

const Roll = (Equation) => {
  const CleansedEquation = cleanseEquationStr(Equation)
  const RolledEquation = rollEquationDice(CleansedEquation)
  const RanEquation = runEquation(RolledEquation)
  return RanEquation
}

export default Roll
