import actionTypes from "./../actionTypes"

const defaultState = false

/**
 * Reducer for the key of sideBar.
 * This is a boolean that decides if the navigation sidebar is open
 */
const sideBarReducer = (state=defaultState, { type=false }) => {
  switch (type) {
  case actionTypes.ToggleSidebar:
    state = !state
    break
  }
  return state
}

export default sideBarReducer