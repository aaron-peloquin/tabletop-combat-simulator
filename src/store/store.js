import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"

/** Reducers */
import creatures from "./reducer/creatures"
import sideBar from "./reducer/sideBar"

/** Reducers */
const reducers = combineReducers({
  creatures,
  sideBar,
})

/** initialize store */
export function initializeStore (initialState = initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
