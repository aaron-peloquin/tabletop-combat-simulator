import actionTypes from "./../actionTypes"

const defaultState = ""

/**
 * Reducer to track which creature is currently being edited in the form, using that creature's hash property.
 * @param {str} state 
 * @param {obj} data
 *   @param {str} type a string to identify how we want to update the state
 *   @param {str} payload the data we use to update the state
 * @returns {obj} The new state
 */
const editingHashReducer = (state=defaultState, { type=false, payload="" }) => {
  state = state.slice()
  switch (type) {
  case actionTypes.EditingHashUpdate:
    if(typeof payload === "string") {
      state = payload
    }
    break
  }
  return state
}

export default editingHashReducer