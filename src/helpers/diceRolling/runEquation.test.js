import runEquation from "./runEquation"

describe("runEquation()", ()=>{
  let result

  it("evaluates equations", () => {
    result = runEquation("1+5")
    expect(result).toBe(6)

    result = runEquation("20*15")
    expect(result).toBe(300)
  })

  it("fails on invalid equations", () => {
    console.warn = jest.fn()
    expect(console.warn).toBeCalledTimes(0)

    result = runEquation("1f5")
    expect(console.warn).toBeCalledTimes(1)

    result = runEquation("1d5/0")
    expect(console.warn).toBeCalledTimes(2)
  })
})
