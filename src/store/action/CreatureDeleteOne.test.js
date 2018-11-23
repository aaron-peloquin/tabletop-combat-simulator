import CreatureDeleteOne from "./CreatureDeleteOne"
import actionTypes from "../actionTypes"

describe("[reduxAction] CreatureDeleteOne", ()=>{
  const mockFunction = jest.fn((d)=>{return d})
  const mockValidParam = "hd39ej3"
  const expectedReturn = {"type":actionTypes.CreatureDeleteOne, "payload":mockValidParam}
  const actualValidReturn = CreatureDeleteOne(mockFunction, mockValidParam)

  it("calls mockFunction", ()=>{
    expect(mockFunction).toBeCalled
  })

  it("calls mockFunction with correct paramiters", () => {
    expect(mockFunction).toHaveBeenCalledWith(actualValidReturn)
  })

  it("returns correctly", () => {
    expect(expectedReturn).toEqual(actualValidReturn)
  })
})