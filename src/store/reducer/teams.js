import actionTypes from "./../actionTypes"

const defaultState = { a: [], b: [] }

/**
 * Reducer for the key of sideBar.
 * This is a boolean that decides if the navigation sidebar is open
 */
const teamsReducer = (state=defaultState, { type=false, data }) => {
  const { team = "c" } = data
  /** We must work with existing teams in the state */
  if(typeof state[team] === "object") {
    let id
    switch (type) {
    /** { team, hash, inititive, hp,  } */
    case actionTypes.TeamAdd:
      state[team].push({
        hash: data.hash,
        inititive: data.inititive,
        hp: data.hp,
        timesHit: 0
      })
      break

    /** { team, arrayKey } */
    case actionTypes.TeamRemove:
      id = data.arrayKey
      if(id>=0) {
        if(typeof state[team][id] === "object") {
          state[team].splice(id, 1)
        }
      }
      break

    /** { team, arrayKey, newData } */
    case actionTypes.TeamCreatureUpdate:
      /** Add later once needed */
      break
    }
  }

  return state
}

export default teamsReducer
