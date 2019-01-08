import load from "./../../helpers/localStorageLoad"
import save from "./../../helpers/localStorageSave"

import standardize from "./../../helpers/standardizeCreatureData"
import lookup from "./../../helpers/lookupCreatureHash"

import actionTypes from "./../actionTypes"

const defaultState = []

/**
 * Reducer for the redux key of "creatures".
 * This is the base data for all of creatures that an app visitor may use to build their simulated encounter.
 * This data will automatically save/update to their browser's localStorage
 *  on every update with the key of "{some prefix}-creatures"
 * See: README.md for details on this data structure
 *
 * @param {obj} state the array of creature objects
 * @param {obj} data
 *   @param {str} type a String to identify how we want to update the state
 *   @param {obj} payload the data we use to update the state
 * @return {obj} The new state of creature
 */
const creaturesReducer = (state=defaultState, {type=false, payload={}}) => {
  let saveToStorage = true
  let id

  const creaturesStorage = load("creatures")

  if (creaturesStorage.length>0) {
    state = creaturesStorage
  }

  state = state.slice()

  switch (type) {
  default:
    saveToStorage = false
    break

  /** Payload: "hash" */
  case actionTypes.CopyCreature:
    id = lookup(payload, state)
    if ( id >= 0 ) {
      state = state.slice()
      let newCreature = state.slice(id)

      console.log({id, newCreature})

      /** Set hash to null so standardize will generates a new one */
      newCreature.hash = null
      newCreature = standardize(newCreature, state)

      console.log({id, newCreature})

      state = state.slice()
      state.push(newCreature)
    }
    break
  /** Update a creature based on it's hash, otherwise create that creature. */
  case actionTypes.SaveCreature:
    if (payload) {
      /** Attempt to find an id for this hash. */
      id = lookup(payload.hash, state)
      if ( id >= 0 ) {
        /** Update this creature */
        state[id] = payload
      } else {
        /** Ensure creatures have standardized data */
        payload = standardize(payload, state)

        /** Create a new creature */
        state = state.slice()
        state.push(payload)
      }
    }
    break

    /** Payload: { } */
  case actionTypes.DeleteAllCreatures:
    /** Reset state to default */
    state = state.slice()
    state = defaultState
    break

  /** Payload: hash */
  case actionTypes.DeleteCreature:
    id = lookup(payload, state)
    if (id>=0) {
      state = state.slice()
      state.splice(id, 1)
    }
    break
  }
  /** If we have modified our state, save it */
  if (saveToStorage) {
    save("creatures", state)
  }
  return state
}

export default creaturesReducer
