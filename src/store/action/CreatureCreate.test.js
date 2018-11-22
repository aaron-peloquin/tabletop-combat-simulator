import CreatureCreate from "./CreatureCreate"

describe("[reduxAction] CreatureCreate", ()=>{
  const mockResult = 25
  const mockFunction = jest.fn(()=>mockResult)
  const mockPayload = {something: true}
  const mockReturned = CreatureCreate(mockFunction, mockPayload)

  it("called mockFunction", ()=>{
    expect(mockFunction).toBeCalledTimes(1)
  })

  it("returned mockFunction's result", ()=>{
    expect(mockReturned).toBe(mockResult)
  })
})