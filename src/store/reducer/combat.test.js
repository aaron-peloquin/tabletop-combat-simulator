import combat from "./combat"
import actionTypes from "./../actionTypes"
import defaultState from "./../../testHelpers/mockStoreState"

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

  it("[RunSimulation] returns correctly when given blank creatures", () => {
    State = {}
    Result = combat(State, Data)
    expect(Result).toBe(State)
  })

  it("[RunSimulation] returns correctly when given mock creature data", () => {
    State = {}
    Data.payload = defaultState.creatures
    const numCreatures = Data.payload.length
    Result = combat(State, Data)
    expect(Result.AliveTeamCreatures[Result.Victory].length).toBeGreaterThanOrEqual(1)
    expect(Result.FinalRound).toBeGreaterThanOrEqual(1)
    expect(Result.Log.length).toBeGreaterThanOrEqual(numCreatures*2)
    expect(Result.TurnOrder.length).toBe(numCreatures)
  })
})
