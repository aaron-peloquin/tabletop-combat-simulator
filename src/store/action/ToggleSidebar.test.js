import toggleSidebar from "./ToggleSidebar"
import actionTypes from "../actionTypes"

describe("[reduxAction] ToggleSidebar", ()=>{
  const mockFunction = jest.fn((d)=>{
    return d
  })
  const expectedReturn = {"type": actionTypes.ToggleSidebar}
  const actualValidReturn = toggleSidebar(mockFunction)

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
