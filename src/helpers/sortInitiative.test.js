import sortInitiative from "./sortInitiative"

const mockState = [
  ["a", 5, 4],
  ["b", 5, 5],
  ["c", 4, 6],
  ["d", 6, 5],
]

describe("sortInitiative()", ()=>{
  let result
  beforeEach(() => {
    result = sortInitiative(mockState)
    expect(typeof result).toBe("object")
  })

  it("sorts correctly based on key 1, then key 2 as the tie-breaker", () => {
    expect(result[0][0]).toBe("d")
    expect(result[1][0]).toBe("b")
    expect(result[2][0]).toBe("a")
    expect(result[3][0]).toBe("c")
  })
})
