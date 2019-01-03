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

  it("returns plain numbers", () => {
    equation = "15g4"
    result = rollDie(equation).rollResult
    expect(result).toBe(154)
  })
})
