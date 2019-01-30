import runEquation from "./runEquation"

describe("runEquation()", ()=>{
  let result
  let equation

  it("evaluates equations", () => {
    equation = "1+5"
    result = runEquation(equation)
    expect(result).toBe(6)

    equation = "20*15"
    result = runEquation(equation)
    expect(result).toBe(300)
  })

  it("fails on invalid equations", () => {
    console.warn = jest.fn()
    equation = "1f5"
    expect(console.warn).toBeCalledTimes(0)
    result = runEquation(equation)
    expect(console.warn).toBeCalledTimes(1)
  })

})
