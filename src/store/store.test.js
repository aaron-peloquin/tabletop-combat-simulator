import { initializeStore } from "./store"

describe("store", () => {
  let store, state
  beforeEach(()=>{
    store = initializeStore()
    state = store.getState()
  })

  it("works", () => {
    expect(typeof store).toBe("object")
  })

  it("has creatures", () => {
    expect(typeof state.creatures).toBe("object")
  })

  it("has sideBar", () => {
    expect(typeof state.sideBar).toBe("boolean")
  })
})