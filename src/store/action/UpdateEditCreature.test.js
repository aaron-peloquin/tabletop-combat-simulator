import updateEditCreature from "./UpdateEditCreature"
import actionTypes from "../actionTypes"

describe("[reduxAction] UpdateEditCreature", ()=>{
  const mockFunction = jest.fn((d)=>{
    return d
  })
  const mockValidParam = {key: "test", value: "hello world"}
  const expectedReturn = {"type": actionTypes.UpdateEditCreature, "payload": mockValidParam}
  const actualValidReturn = updateEditCreature(mockFunction, mockValidParam.key, mockValidParam.value)

  it("calls mockFunction", ()=>{
    expect(mockFunction).toBeCalled
  })

  it("calls mockFunction with correct paramiters", () => {
    expect(mockFunction).toHaveBeenCalledWith(actualValidReturn)
  })

  it("cleans hp", () => {
    expect(updateEditCreature(mockFunction, "hp", "4").payload.value).toBe("4")
    expect(updateEditCreature(mockFunction, "hp", "4dm5").payload.value).toBe("45")
    expect(updateEditCreature(mockFunction, "hp", "-4").payload.value).toBe("4")
  })

  it("cleans armor", () => {
    expect(updateEditCreature(mockFunction, "armor", "4").payload.value).toBe("4")
    expect(updateEditCreature(mockFunction, "armor", "4dm5").payload.value).toBe("45")
    expect(updateEditCreature(mockFunction, "armor", "-4").payload.value).toBe("4")
  })

  it("cleans initiative", () => {
    expect(updateEditCreature(mockFunction, "initiative", "4").payload.value).toBe("4")
    expect(updateEditCreature(mockFunction, "initiative", "4dm5").payload.value).toBe("45")
    expect(updateEditCreature(mockFunction, "initiative", "-4").payload.value).toBe("-4")
  })

  it("cleans hitDiceEquation", () => {
    expect(updateEditCreature(mockFunction, "hitDiceEquation", "4").payload.value).toBe("4")
    expect(updateEditCreature(mockFunction, "hitDiceEquation", "4dm5").payload.value).toBe("4d5")
    expect(updateEditCreature(mockFunction, "hitDiceEquation", "-4").payload.value).toBe("-4")
  })

  it("cleans damageDiceEquation", () => {
    expect(updateEditCreature(mockFunction, "damageDiceEquation", "4").payload.value).toBe("4")
    expect(updateEditCreature(mockFunction, "damageDiceEquation", "4dm5").payload.value).toBe("4d5")
    expect(updateEditCreature(mockFunction, "damageDiceEquation", "-4").payload.value).toBe("-4")
  })

  it("returns correctly", () => {
    expect(expectedReturn).toEqual(actualValidReturn)
  })
})
