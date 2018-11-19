import actionTypes from "../actionTypes"

const CreatureCreate = (dispatch, payload) => {
  const data = {
    type: actionTypes.CreatureCreate,
    payload
  }
  return dispatch(data)
}

export default CreatureCreate
