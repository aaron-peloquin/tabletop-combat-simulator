import actionTypes from './../actionTypes'

const ToggleSidebar = (dispatch) => {
  const data = {
    type: actionTypes.ToggleSidebar,
  }
  return dispatch(data)
}

export default ToggleSidebar
