import actionTypes from "./../actionTypes"

import editing from "./editing"

describe("[reduxReducer] editing", ()=>{
  let result, state, data
  beforeEach(()=>{
    state = { name: "Hello World" }
    data = { type: "", payload: state }
    result = null
  })

  it("[SaveCreature] clears creature state", ()=>{
    data.type = actionTypes.SaveCreature
    result = editing(state, data)
    expect(result).toEqual({})
  })

  it("[SetEditCreature] updates state to a hash", ()=>{
    data.type = actionTypes.SetEditCreature
    data.payload = { name: "World, hello" }
    result = editing(state, data)
    expect(result).toEqual(data.payload)
  })
})