import rollEquationDice from "./rollEquationDice"

describe("rollEquationDice()", ()=>{
  let result
  let equation

  it("returns rolled equations", () => {
    equation = "1d1+5"
    result = rollEquationDice(equation)
    expect(result.diceEquation).toBe("1+5")
    expect(result.critHit).toBe(true)
    expect(result.critMiss).toBe(false)

    equation = "20d1*15d1"
    result = rollEquationDice(equation)
    expect(result.diceEquation).toBe("20*15")
    expect(result.critHit).toBe(true)
    expect(result.critMiss).toBe(false)
  })
})
