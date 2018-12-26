import generateHash from "./generateHash"
import lookupCreatureHash from "./lookupCreatureHash"

/**
 * Standardizes creature data with defaults.
 * May also generate a unique hash, too.
 * @param {obj} creatureData may contain one or more keys for a creature
 * @param {arr} state (optional) the redux state for creatures. If we are
 *  passed this and you are not given a creatureData.hash, generate a new hash.
 * @returns {obj} standardized creature data
 */
const standardizeCreatureData = (creatureData={}, state=null) => {
  let {
    name = "",
    team = "",
    hash = null,
    initiative = 0,
    armor = 0,
    hp = 0,
    hitDiceEquation = "1d20+2",
    damageDiceEquation = "1d6+3",
  } = creatureData

  /** If we were not given a hash, and we were given a state, generate a unique hash */
  if(hash===null) {
    if(state!==null) {
      while(hash===null || lookupCreatureHash(hash, state)>=0){
        hash = generateHash()
      }
    }
    else {
      console.warn("[standardizeCreatureData] creature does not have a hash")
    }
  }

  return {
    name, team, hash, initiative, armor, hp,
    hitDiceEquation, damageDiceEquation
  }
}

export default standardizeCreatureData