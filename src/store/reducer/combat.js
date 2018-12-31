import actionTypes from "./../actionTypes"

/**
 * @param {obj} state The current state of `combat`
 * @param {obj} data
 *  @param {str} type The redux action type
 *  @param {obj} payload The data used to update the stae, based upon the type
 * @return the new state
 */

const combatReducer = (state=defaultState, {type=false, payload={}}) => {
  switch (type) {
  case actionTypes.RunSimulation:
    /**
     * 1) Parse and set all creatures (all payload) into state
     *    A) Fill `state.AliveTeamCreatures` with creature hashes `{a: [hash, hash], b: [hash]}`
     *    B) Roll Inititive and fill `state.TurnOrder` like `[hash, hash, hash]`
     *    C) Fill `state.CreatureStatus` `{hash:Data}`
     * 2) Run a while loop for combat rounds (end when 1 team is fully knocked out, or 100 rounds)
     *    A) Loop through `state.TurnOrder`
     *    B) rolling attacks against random creatures found in the oposite team of `state.AliveTeamCreatures`
     *    C) if it hits their armor, roll and deal damage
     *    D) if this damage reduces them to 0 or lower, remove the enemy from `state.AliveTeamCreatures`
     *    E) insert a row into `state.Log`, describing what happened
     */
    break
  }
  return state
}

export default combatReducer
