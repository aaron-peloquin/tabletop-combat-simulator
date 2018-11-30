import actionTypes from "./../actionTypes"

import creatures from "./creatures"

describe("[reduxReducer] creatures", ()=>{
  let state, data
  beforeEach(()=>{
    data = {}
    data.type = actionTypes.CreatureCreate
    data.payload = { name: "Hello World" }
    state = creatures(state, data)
    data = {}
  })

  it("[CreatureCreate] adds the new creature in as 0", ()=>{
    expect(state[0].name).toBe("Hello World")
  })

  it("[CreatureDeleteAll] deletes all creature data", ()=>{
    expect(state.length).toBe(2)
    data = { type: actionTypes.CreatureDeleteAll }
    state = creatures(state, data)
    expect(state.length).toBe(0)
  })

  it("[CreatureDeleteOne] modifies creature data", ()=>{
    expect(state.length).toBe(1)
    data = {
      type: actionTypes.CreatureDeleteOne,
      payload: state[0].hash
    }
    state = creatures(state, data)
    expect(state.length).toBe(0)
  })

  it("[CreatureUpdate] modifies creature data", ()=>{
    data = {
      type: actionTypes.CreatureUpdate,
      payload: {
        name: "New Name",
        hash: state[0].hash
      }
    }
    state = creatures(state, data)
    expect(state[0].name).toBe("New Name")
  })
})