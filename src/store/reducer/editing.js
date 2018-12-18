import actionTypes from "./../actionTypes"

const defaultState = {}

/**
 * Reducer for the redux key of "editing".
 * This is the creature data currently loaded into our form for a visitor to edit
 * See: README.md for details on this data structure
 *
 * @param {obj} state the array of creature objects
 * @param {obj} data
 *   @param {str} type a String to identify how we want to update the state
 *   @param {obj} payload the data we use to update the state
 * @returns {obj} The new state of creature
 */
const editingReducer = (state=defaultState, { type=false, payload={} }) => {

  switch (type) {
  default:
    /** do nothing */
    break

  /** Payload: { starting creature data } */
  case actionTypes.SaveCreature:
    /** Clear the state */
    state = Object.assign({}, state)
    state = defaultState
    break

  case actionTypes.SetEditCreature:
    /** Set a new creature into the state */
    state = Object.assign({}, state)
    state = payload
    break
  }
  return state
}

export default editingReducer