import actionTypes from "./../actionTypes"

import TeamRemove from "./TeamRemove"

describe("[reduxAction] TeamRemove", ()=>{
  let mockDispatch, payload, validParams
  beforeEach(() => {
    mockDispatch = jest.fn(() => {})
    payload = { team: "a", arrayKey: 10 }
  })
  
  it("calls mockDispatch", ()=>{
    expect(mockDispatch).toBeCalled
  })

  it("calls mockDispatch with correct paramiters", () => {
    TeamRemove(mockDispatch, payload)
    validParams = {
      type: actionTypes.TeamRemove,
      data: {
        team: "a",
        arrayKey: 10
      }
    }
    expect(mockDispatch).toHaveBeenCalledWith(validParams)
  })
  
  it("calls mockDispatch with default paramiters", () => {
    payload = {}
    TeamRemove(mockDispatch, payload)
    validParams = {
      type: actionTypes.TeamRemove,
      data: {
        team: "c",
        arrayKey: -1
      }
    }
    expect(mockDispatch).toHaveBeenCalledWith(validParams)
  })
})