/**
 * Run an equation string
 * @param {str} equation An already parsed equation string, containing no #d#
 * @param {str} rawEquation The original equation, containing #d#. Only used to log in gtag()
 * @return {num} The equation's result
 */
const runEquation = (equation, rawEquation) => {
  let returnEquation
  try {
    const equationResult = Math.round(eval(equation))
    if (isNaN(equationResult)) {
      throw new Error("Invalid equation (NaN)")
    }
    returnEquation = equationResult.toLocaleString()
  } catch (e) {
    console.warn(`Invalid Dice String Equation: ${equation}`)
    returnEquation = 0
  }
  return returnEquation
}

export default runEquation
