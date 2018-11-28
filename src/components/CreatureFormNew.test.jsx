import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import CreatureFormNew from "./CreatureFormNew"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreatureForm />", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"CreatureFormNew"})
  let store, props, Component
  beforeEach(async ()=>{
    store = initializeStore(mockStoreState)
    props = {
      creature: mockStoreState.creatures[0]
    }
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormNew {...props} /></Provider>)
  })

  it("loads", async () => {
    expect(typeof Component).toBe("object")
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})