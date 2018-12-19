import actionTypes from "../actionTypes"

/**
 * Disapatches an action to delete a creature
 * @param {func} dispatch the redux dispatcher action
 * @param {obj} hash of the creature you want to delete
 */
const DeleteCreature = (dispatch, hash) => {
  const data = {
    type: actionTypes.CreatureDeleteOne,
    payload:hash
  }
  return dispatch(data)
}

export default DeleteCreature
