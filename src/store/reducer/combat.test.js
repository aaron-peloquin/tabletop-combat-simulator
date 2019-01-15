import combat from "./combat"
import actionTypes from "./../actionTypes"
// import defaultState from "./../../testHelpers/mockStoreState"

describe("[reduxReducer] Combat", () => {
  let Result
  let State
  let Data
  beforeEach(() => {
    Result = null
    State = null
    Data = {
      type: actionTypes.RunSimulation,
      payload: {},
    }
  })

  it("[RunSimulation] returns correctly with blank creatures", () => {
    State = {}
    Result = combat(State, Data)
    expect(Result).toBe(State)
  })
})
