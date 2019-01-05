import deleteCreature from "./DeleteCreature"
import actionTypes from "../actionTypes"

describe("[reduxAction] DeleteCreature", ()=>{
  const mockFunction = jest.fn((d)=>{
    return d
  })
  const mockValidParam = "hd39ej3"
  const expectedReturn = {"type": actionTypes.DeleteCreature, "payload": mockValidParam}
  const actualValidReturn = deleteCreature(mockFunction, mockValidParam)

  it("calls mockFunction", ()=>{
    expect(mockFunction).toBeCalled
  })

  it("calls mockFunction with correct paramiters", () => {
    expect(mockFunction).toHaveBeenCalledWith(expectedReturn)
  })
})
