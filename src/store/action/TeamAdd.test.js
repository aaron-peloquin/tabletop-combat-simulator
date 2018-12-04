import actionTypes from "./../actionTypes"

import TeamAdd from "./TeamAdd"

describe("[reduxAction] TeamAdd", ()=>{
  let mockDispatch, payload, validParams
  beforeEach(() => {
    mockDispatch = jest.fn(() => {})
    payload = { team: "a", hash: "h123e5" }
    TeamAdd(mockDispatch, payload)
  })
  
  it("calls mockDispatch", ()=>{
    expect(mockDispatch).toBeCalled
  })

  it("calls mockDispatch with correct default paramiters", () => {
    validParams = {
      type: actionTypes.TeamAdd,
      data: {
        hash: payload.hash,
        inititive: 10,
        hp: 15
      }
    }
    expect(mockDispatch).toHaveBeenCalledWith(validParams)
  })
})