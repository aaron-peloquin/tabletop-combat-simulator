import actionTypes from '../actionTypes'

/**
 * WARNING: Deletes all creature data
 * @param {func} dispatch the redux dispatcher action
 * @param {str} confirm (safety) must be set to "delete all", or this will not run
 * @return {void}
 */
const DeleteAllCreatures = (dispatch, confirm) => {
  if (confirm==='delete all') {
    const data = {
      type: actionTypes.DeleteAllCreatures,
      payload: {},
    }
    dispatch(data)
  }
}

export default DeleteAllCreatures
