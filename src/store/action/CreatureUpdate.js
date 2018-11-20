import actionTypes from "../actionTypes"

/**
 * Disapatches an action to make a new creature
 * @param {func} dispatch the redux dispatcher action
 * @param {obj} payload of the creature's new data. Note: payload.hash is required, since that is used to lookup the creature to edit
 */
const CreatureUpdate = (dispatch, payload) => {
  if(typeof payload.hash === "string" && payload.hash.length>0) {
    const data = {
      type: actionTypes.CreatureUpdate,
      payload
    }
    return dispatch(data)
  }
}

export default CreatureUpdate
