import actionTypes from "./../actionTypes"

import editingHash from "./editingHash"

describe("[reduxReducer] editingHash", ()=>{
  let result, state, data
  beforeEach(()=>{
    data = { type: actionTypes.EditingHashUpdate }
    result = null
    state = "h39jt4ik"
  })

  it("[EditingHashUpdate] does not update state when given a non-string", ()=>{
    data.payload = false
    result = editingHash(state, data)
    expect(result).toBe(state)
  })

  it("[EditingHashUpdate] updates state to a hash", ()=>{
    data.payload = "h345ef3j"
    result = editingHash(state, data)
    expect(result).toBe(data.payload)
  })

  it("[EditingHashUpdate] updates state to a blank", ()=>{
    data.payload = ""
    result = editingHash(state, data)
    expect(result).toBe("")
  })
})