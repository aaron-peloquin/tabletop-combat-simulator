import actionTypes from "../actionTypes"

/**
 * Disapatches an action to make a new creature
 * @param {func} dispatch the redux dispatcher action
 * @param {obj} hash of the creature you want to delete
 */
const TeamRemove = (dispatch, payload) => {
  const { team="c", arrayKey=-1 } = payload
  const data = {
    type: actionTypes.TeamRemove,
    data: {
      team: team,
      arrayKey: arrayKey
    }
  }
  return dispatch(data)
}

export default TeamRemove
