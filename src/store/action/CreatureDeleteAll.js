import actionTypes from "../actionTypes"

/**
 * WARNING: Deletes all creature data
 * @param {func} dispatch the redux dispatcher action
 * @param {str} confirm (safety) must be set to "delete all", or this will not run
 */
const CreatureDeleteAll = (dispatch, confirm) => {
  if(confirm==="delete all") {
    const data = {
      type: actionTypes.CreatureDeleteAll,
      payload: {}
    }
    return dispatch(data)
  }
}

export default CreatureDeleteAll
