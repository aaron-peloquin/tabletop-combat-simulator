import roll from "./index"

describe("roll() - index.js", ()=>{
  let result
  let equation
  beforeEach(() => {
    equation = "999d20+999d20+999d20"
    result = roll(equation)
  })

  it("rolls somewhat near average", () => {
    result = result.result / 2997
    expect(result).toBeGreaterThan(8)
    expect(result).toBeLessThan(12)
  })

  it("has a crit hits and misses", () => {
    expect(result.critHit).toBe(true)
    expect(result.critMiss).toBe(true)
  })
})
