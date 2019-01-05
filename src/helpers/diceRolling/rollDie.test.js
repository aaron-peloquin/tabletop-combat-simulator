import rollDie from "./rollDie"

describe("rollDie()", ()=>{
  let result
  let equation

  it("properly rolls dice", () => {
    equation = "1d1"
    result = rollDie(equation).rollResult
    expect(result).toBe(1)

    equation = "20d20"
    result = rollDie(equation).rollResult
    expect(result).toBeGreaterThan(20)
  })

  it("does not roll dice with more than 999 sides", () => {
    equation = "1d99999999999999999999999999"
    result = rollDie(equation).rollResult
    expect(result).toBeLessThan(1000)
  })

  it("does not roll more than 999 dice at once", () => {
    equation = "99999999999999999999999999d1"
    result = rollDie(equation).rollResult
    expect(result).toBe(999)
  })

  it("returns plain numbers", () => {
    equation = "15g4"
    result = rollDie(equation).rollResult
    expect(result).toBe(154)
  })
})
