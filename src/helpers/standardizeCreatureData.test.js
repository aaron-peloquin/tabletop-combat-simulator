import standardizeCreatureData from "./standardizeCreatureData"

const mockState = [{"name":"some mock data","hash":"fakeHash"}]

describe("standardizeCreatureData()", ()=>{
  let result
  beforeEach(() => {
    result = standardizeCreatureData({}, mockState)
    expect(typeof result).toBe("object")
  })
  it("returns an object with correct keys", () => {
    expect(Object.keys(result)).toEqual([
      "name","team","cr","hash","description",
      "defaultInitiative","armor","hp",
      "hitDiceEquation","damageDiceEquation"
    ])
  })
  
  it("returns valid defaults for important keys", () => {
    expect(typeof result.name).toBe("string")
    expect(result.hash.length).toBe(8)
    expect(result.initiative).toBe(0)
    expect(result.armor).toBe(0)
    expect(result.hp).toBe(0)
  })

  it("refuses to generate a new hash when not given a state", () => {
    console.warn = jest.fn(()=>{})
    result = standardizeCreatureData()
    expect(result.hash).toBe(null)
    expect(console.warn).toBeCalled
  })
})
