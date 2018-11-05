import standardizeCreatureData from "./standardizeCreatureData"

const mockState = [{"name":"some mock data","hash":"fakeHash"}]

test("standardizeCreatureData() returns an object with specific keys", () => {
  const result = standardizeCreatureData({}, mockState)
  expect(typeof result).toBe("object")
  expect(Object.keys(result)).toEqual([
    "name","hash","description",
    "defaultInitiative","armor","hp",
    "hitDiceEquation","damageDiceEquation"
  ])
})

test("standardizeCreatureData() check important default values", () => {
  const result = standardizeCreatureData({}, mockState)
  expect(typeof result).toBe("object")
  expect(typeof result.name).toBe("string")
  expect(result.name.length).toBeGreaterThan(0)
  expect(result.hash.length).toBe(8)
  expect(result.defaultInitiative).toBe(10)
  expect(result.armor).toBe(10)
  expect(result.hp).toBe(15)
})
