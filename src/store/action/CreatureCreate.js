import actionTypes from "../actionTypes"

/**
 * Disapatches an action to make a new creature
 * @param {func} dispatch the redux dispatcher action
 * @param {obj} payload of creature's starting data
 */
const CreatureCreate = (dispatch, payload) => {
  const data = {
    type: actionTypes.CreatureCreate,
    payload
  }
  return dispatch(data)
}

export default CreatureCreate
