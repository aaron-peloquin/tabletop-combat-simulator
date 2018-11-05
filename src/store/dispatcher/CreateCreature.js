import actionTypes from "./../actionTypes"
const CreateCreature = (dispatch) => {
  const data = {
    type: actionTypes.CreateCreature,
    payload: {}
  }
  return dispatch(data)
}

export default CreateCreature
