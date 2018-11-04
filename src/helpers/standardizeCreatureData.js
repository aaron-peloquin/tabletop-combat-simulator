import generateHash from "./generateHash"
import lookupCreatureHash from "./lookupCreatureHash"

/**
 * Standardizes creature data with defaults.
 * May also generate a unique hash, too.
 * @param {obj} creatureData may contain one or more keys for a creature
 * @param {arr} state (optional) the redux state for creatures. If we are
 *  passed this and you are not given a creatureData.hash, generate a new hash.
 * @returns {obj} of the standardized creature data
 */
const standardizeCreatureData = (creatureData={}, state=null) => {
  const {
    name = "Unnamed Creature",
    hash=null,
    description="",
    defaultInitiative=10,
    armor=10,
    hp=15,
    hitDiceEquation='1d20+2',
    damageDiceEquation='1d6+3'
  } = creatureData

  /** If we were not given a hash, and we were given a state, generate a unique hash */
  if(hash===null) {
    if(state!==null) {
      let hash = generateHash()
      while(lookupCreatureHash(hash, state)>=0){
        hash = generateHash()
      }
    }
    else {
      console.warn("[helper] standardizeCreatureData: This creature does not has a hash")
    }
}

  return {
    name, hash, description,
    defaultInitiative, armor, hp,
    hitDiceEquation, damageDiceEquation
  }
}

export default standardizeCreatureData