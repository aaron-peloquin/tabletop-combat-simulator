import 'seedrandom'

/**
 * Roll a single die string, and return the result
 * @param {str} dieString a short die string (eg. #d#)
 * @return {obj} {}.`critHit` & {}.`critMiss` booleans. {}.`diceEquation` string
 */
const rollDie = (dieString) => {
  let rollResult = 0
  let critHit = false
  let critMiss = false

  /** Get the number of dice and number of sides */
  const diceNumSides = dieString.split('d')
  if (diceNumSides.length!=2) {
    /** invalid dice string (eg. 1d4 and 20d100), return the original dieString, removing any non-digits */
    rollResult = dieString.replace(/\D/g, '')
  } else {
    let diceNum = parseInt(diceNumSides[0])
    let diceSides = parseInt(diceNumSides[1])

    /** Don't allow a user to roll more than 999 dice in one set */
    if (diceNum > 999) {
      diceNum = 999
    }

    /** Don't allow a user to roll a die with more than 999 sides */
    if (diceSides > 999) {
      diceSides = 999
    }

    for (let i=0; i < diceNum; i++) {
      Math.seedrandom()
      const roll = (Math.random() * diceSides | 0) + 1
      if (roll === diceSides) {
        critHit = true
      } else if (roll === 1) {
        critMiss = true
      }
      rollResult += roll
    }
  }
  return {
    critMiss,
    critHit,
    rollResult: parseInt(rollResult),
  }
}

export default rollDie
