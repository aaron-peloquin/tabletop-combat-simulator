/**
   * Strips out everything that is not a digit, opporators, or the letter D or d, then update to be lowercase.
 * @param {str} diceEquation a dice equation string
 * @return {str} the cleansed dice equation string
 */
const cleanseEquationStr = (diceEquation) => {
  return diceEquation.replace(/([^\d|d|\+|\-|\*|\/|\(|\)])/gi, '').toLowerCase()
}

export default cleanseEquationStr
