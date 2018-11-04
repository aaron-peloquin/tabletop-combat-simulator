import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

/** Reducers */
import reducer from 'some-reducer-file'

/** Reducers */
const reducers = combineReducers({
  reducerKey: reducer
})

/** initialize store */
export function initializeStore (initialState = initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
