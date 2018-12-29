import actionTypes from "../actionTypes"

/**
 * Disapatches an action to set the creature we will edit
 * @param {func} dispatch the redux dispatcher action
 * @param {obj} payload of the creature's data
 * @return {void}
 */
const SetEditCreature = (dispatch, payload) => {
  const data = {
    type: actionTypes.SetEditCreature,
    payload,
  }

  dispatch(data)
}

export default SetEditCreature
