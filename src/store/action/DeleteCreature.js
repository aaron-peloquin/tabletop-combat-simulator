import actionTypes from "../actionTypes"

/**
 * Disapatches an action to delete a creature
 * @param {func} dispatch the redux dispatcher action
 * @param {obj} hash of the creature you want to delete
 * @return {void}
 */
const DeleteCreature = (dispatch, hash) => {
  const data = {
    type: actionTypes.DeleteCreature,
    payload:hash
  }
  dispatch(data)
}

export default DeleteCreature
