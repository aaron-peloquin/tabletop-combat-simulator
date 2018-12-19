import actionTypes from "./../actionTypes"

const UpdateEditCreature = (dispatch, key, value) => {
  const data = {
    type: actionTypes.UpdateEditCreature,
    payload: {key, value},
  }
  return dispatch(data)
}

export default UpdateEditCreature
