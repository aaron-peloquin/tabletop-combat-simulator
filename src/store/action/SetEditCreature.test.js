import setEditCreature from "./SetEditCreature"
import actionTypes from "../actionTypes"

describe("[reduxAction] SetEditCreature", ()=>{
  const mockFunction = jest.fn((d)=>{
    return d
  })
  const mockValidParam = {"name": "Goplin", "hash": "h328dj8"}
  const expectedReturn = {"type": actionTypes.SetEditCreature, "payload": mockValidParam}
  const actualValidReturn = setEditCreature(mockFunction, mockValidParam)

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
