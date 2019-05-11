/**
 * Run an equation string
 * @param {str} equation An already parsed equation string, containing no #d#
 * @return {num} The equation's result
 */
const runEquation = (equation) => {
  let returnEquation
  try {
    const equationResult = Math.round(eval(equation))
    if (isNaN(equationResult)) {
      throw new Error('Invalid equation (NaN)')
    }
    returnEquation = equationResult
  } catch (e) {
    console.warn(`Invalid Dice String Equation: ${equation}`)
    returnEquation = 0
  }
  return returnEquation
}

export default runEquation
