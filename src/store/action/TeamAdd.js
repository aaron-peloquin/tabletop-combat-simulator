import actionTypes from "./../actionTypes"

const TeamAdd = (dispatch, AddData) => {
  if(typeof AddData.hash === "string") {
    const { defaultInititive = 10, hp = 15 } = AddData
    const payload = {
      type: actionTypes.TeamAdd,
      data: {
        hash: AddData.hash,
        inititive: defaultInititive,
        hp
      }
    }
    return dispatch(payload)
  }
}

export default TeamAdd
