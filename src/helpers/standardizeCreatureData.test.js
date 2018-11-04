import standardizeCreatureData from "./standardizeCreatureData"

test("standardizeCreatureData() returns an object with specific keys", () => {
  const result = standardizeCreatureData({},[])

  expect(typeof result).toBe("object")

  expect(Object.keys(result)).toEqual([
    "name","hash","description",
    "defaultInitiative","armor","hp",
    "hitDiceEquation","damageDiceEquation"
  ])
})