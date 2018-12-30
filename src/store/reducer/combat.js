// import standardize from "./../../helpers/standardizeCreatureData"
// import lookup from "./../../helpers/lookupCreatureHash"

import actionTypes from "./../actionTypes"

/**
 * @param {obj} state The current state of `combat`
 * @param {obj} data
 *  @param {str} type The redux action type
 *  @param {obj} payload The data used to update the stae, based upon the type
 * @return the new state
 */

const combatReducer = (state=defaultState, {type=false, payload={}}) => {
  return state

  switch (type) {
  case actionTypes.RunSimulation:
    /** Do everything */
    break
  }
}

export default combatReducer
