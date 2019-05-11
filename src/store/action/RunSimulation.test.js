import runSimulation from './RunSimulation'
import mockStoreState from './../../testHelpers/mockStoreState'

describe('[reduxAction] RunSimulation', ()=>{
  const mockFunction = jest.fn(()=>{})
  const mockValidPayload = mockStoreState

  it('mockFunction is called with valid payload', ()=>{
    runSimulation(mockFunction, mockValidPayload)
    expect(mockFunction).toBeCalledTimes(1)
  })
})
