import actionTypes from "../actionTypes"

/**
 * Disapatches an action to make a new creature
 * @param {func} dispatch the redux dispatcher action
 * @param {obj} payload of the creature's data
 */
const CreatureCreateUpdate = (dispatch, payload) => {
  const data = {
    type: actionTypes.CreatureCreateUpdate,
    payload
  }
  return dispatch(data)
}

export default CreatureCreateUpdate
