import UpdateEditCreature from "./UpdateEditCreature"
import actionTypes from "../actionTypes"

describe("[reduxAction] UpdateEditCreature", ()=>{
  const mockFunction = jest.fn((d)=>{return d})
  const mockValidParam = {"key":"test", "value":"hello world"}
  const expectedReturn = {"type":actionTypes.UpdateEditCreature, "payload":mockValidParam}
  const actualValidReturn = UpdateEditCreature(mockFunction, mockValidParam)

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
