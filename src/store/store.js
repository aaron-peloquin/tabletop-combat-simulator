import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"

/** Reducers */
import creatures from "./reducer/creatures"
import sideBar from "./reducer/sideBar"
import editing from "./reducer/editing"

/** Reducers */
const reducers = combineReducers({
  creatures,
  editing,
  sideBar,
})

/** initialize store */
export function initializeStore (initialState = initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
