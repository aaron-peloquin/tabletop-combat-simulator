import DeleteAllCreatures from "./DeleteAllCreatures"

describe("[reduxAction] DeleteAllCreatures", ()=>{
  const mockFunction = jest.fn(()=>{})
  const mockValidPayload = "delete all"
  const mockInvalidPayload = ["delete none"]

  it("mockFunction is not called with invalid payload", ()=>{
    DeleteAllCreatures(mockFunction, mockInvalidPayload)
    expect(mockFunction).toBeCalledTimes(0)
  })

  it("mockFunction is called with valid payload", ()=>{
    DeleteAllCreatures(mockFunction, mockValidPayload)
    expect(mockFunction).toBeCalledTimes(1)
  })
})