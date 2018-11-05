import actionTypes from "./../actionTypes"
const addCharacter = (dispatch) => {
  const data = {
    type: actionTypes.CreateCreature,
    payload: {}
  }
  return dispatch(data)
}

export default addCharacter
