import standardizeCreatureData from "./standardizeCreatureData"

const mockState = [{"name":"some mock data","hash":"fakeHash"}]

describe("standardizeCreatureData()", ()=>{
  let result
  it("returns an object with correct keys", () => {
    result = standardizeCreatureData({}, mockState)
    expect(typeof result).toBe("object")
    expect(Object.keys(result)).toEqual([
      "name","cr","hash","description",
      "defaultInitiative","armor","hp",
      "hitDiceEquation","damageDiceEquation"
    ])
  })
  
  it("returns valid defaults for important keys", () => {
    result = standardizeCreatureData({}, mockState)
    expect(typeof result).toBe("object")
    expect(typeof result.name).toBe("string")
    expect(result.name.length).toBeGreaterThan(0)
    expect(result.hash.length).toBe(8)
    expect(result.defaultInitiative).toBe(10)
    expect(result.armor).toBe(10)
    expect(result.hp).toBe(15)
  })

  it("refuses to generate a new hash when not given a state", () => {
    console.warn = jest.fn(()=>{})
    result = standardizeCreatureData()
    expect(result.hash).toBe(null)
    expect(console.warn).toBeCalled
  })
})
