import load from "./../../helpers/localStorageLoad"
import save from "./../../helpers/localStorageSave"

import standardize from "./../../helpers/standardizeCreatureData"
import lookup from "./../../helpers/lookupCreatureHash"

import actionTypes from "./../actionTypes"

const defaultState = []

/**
 * Reducer for the redux key of "creatures".
 * This is the base data for all of creatures that an app visitor may use to build their simulated encounter.
 * This data will automatically save/update to their browser's localStorage on every update with the key of "{some prefix}-creatures"
 * See: README.md for details on this data structure
 *
 * @param {obj} state the array of creature objects
 * @param {str} type a String to identify how we want to update the state
 * @param {obj} payload the data we use to update the state
 * @returns {obj} The new state of creature
 */
const creaturesReducer = (state=defaultState, { type=false, payload={} }) => {
  let saveToStorage = true
  let id
  const creaturesStorage = load("creatures")
  if(creaturesStorage.length>0) {
    state = creaturesStorage
  }
  
  state = state.slice()

  switch (type) {
  default:
    saveToStorage = false
    break

  /** Payload: {some-creature-data} */
  case actionTypes.CreatureCreate:
    if(payload) {
      /** Ensure creatures have standardized data */
      payload = standardize(payload, state)
      /** If this creature has any data, add them into the state */
      state.push(payload)
    }
    break

  /** Payload: {} */
  case actionTypes.CreatureDeleteAll:
    /** !Revisit & finish later */
    state = defaultState
    break

  /** Payload: {hash,newCreatureData} */
  case actionTypes.CreatureUpdate:
    id = lookup(payload.hash,state)
    if(id>=0) {
      state[id] = payload
    }
    break

  /** Payload: {hash} */
  case actionTypes.CreatureDeleteOne:
    /** !Revisit & finish later */
    id = lookup(payload.hash,state)
    console.log("found id", id)
    break
  }

  /** If we have modified our state, save it */
  if(saveToStorage) {
    save("creatures", state)
  }
  return state
}

export default creaturesReducer