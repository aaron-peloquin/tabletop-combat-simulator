import CreatureDeleteAll from "../../../store/action/CreatureDeleteAll"

describe("[reduxAction] CreatureDeleteAll", ()=>{
  const mockFunction = jest.fn(()=>{})
  const mockValidPayload = "delete all"
  const mockInvalidPayload = ["delete none"]

  it("mockFunction is not called with invalid payload", ()=>{
    CreatureDeleteAll(mockFunction, mockInvalidPayload)
    expect(mockFunction).toBeCalledTimes(0)
  })

  it("mockFunction is called with valid payload", ()=>{
    CreatureDeleteAll(mockFunction, mockValidPayload)
    expect(mockFunction).toBeCalledTimes(1)
  })
})