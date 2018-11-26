import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import Creatures from "../pages/creatures"

describe("<Creatures /> page", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"creatures"})
  let Component, store, props
  beforeEach(async ()=>{
    store = initializeStore({})
    props = Creatures.getInitialProps()
    Component = RenderShallowUntilComponent(<Provider store={store}><Creatures {...props} /></Provider>)
  })

  it("Contains required elements", ()=>{
    expect(Component.find("Connect(DeleteAllCreatures)").length).toBe(1)
    expect(Component.find("Connect(CreaturesList)").length).toBe(1)
  })

  it("Snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})