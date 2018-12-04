import actionTypes from "./../actionTypes"

import teams from "./teams"

describe("[reduxReducer] teams", ()=>{
  let result, state, payload, testData
  beforeEach(()=>{
    result = null
    testData = { team: "a", hash: "h482j3iu", inititive: 21, hp: 40, }
    state = {
      "a": [],
      "b": [],
    }
  })

  it("[TeamAdd] adds new creature with correct data for team a", ()=>{
    payload = {
      type: actionTypes.TeamAdd,
      data: { team: "a", hash: "h482j3iu", inititive: 21, hp: 40, }
    }
    state = teams(state, payload)
    result = state.a[0]
    expect(result.hash).toBe(payload.data.hash)
    expect(result.inititive).toBe(payload.data.inititive)
    expect(result.hp).toBe(payload.data.hp)
  })

  it("[TeamAdd] adds new creature with correct data for team b", ()=>{
    testData.team = "b"
    payload = {
      type: actionTypes.TeamAdd,
      data: testData
    }
    state = teams(state, payload)
    result = state.b[0]
    expect(result.hash).toBe(payload.data.hash)
    expect(result.inititive).toBe(payload.data.inititive)
    expect(result.hp).toBe(payload.data.hp)
  })

  it("[TeamRemove] can remove a creature", ()=>{
    /** Add a record */
    payload = {
      type: actionTypes.TeamAdd,
      data: testData
    }
    state = teams(state, payload)
    expect(state.a.length).toBe(1)

    /** Now delete that new record */
    payload = {
      type: actionTypes.TeamRemove,
      data: { team: "a", arrayKey: 0 }
    }
    state = teams(state, payload)
    expect(state.a.length).toBe(0)
  })
})