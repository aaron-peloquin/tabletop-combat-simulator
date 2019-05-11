import actionTypes from '../actionTypes'

/**
 * Disapatches an action to run a combat simulation
 * @param {func} dispatch the redux dispatcher action
 * @param {obj} payload should be all creatures on all teams
 * @return {void}
 */
const RunSimulation = (dispatch, payload) => {
  const data = {
    type: actionTypes.RunSimulation,
    payload,
  }
  dispatch(data)
}

export default RunSimulation
