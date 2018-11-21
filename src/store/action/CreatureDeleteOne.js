import actionTypes from "../actionTypes"

/**
 * Disapatches an action to make a new creature
 * @param {func} dispatch the redux dispatcher action
 * @param {obj} hash of the creature you want to delete
 */
const CreatureDeleteOne = (dispatch, hash) => {
  const data = {
    type: actionTypes.CreatureDeleteOne,
    payload:hash
  }
  return dispatch(data)
}

export default CreatureDeleteOne
