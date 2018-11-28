import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import NewCreature from "../pages/new-creature"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<NewCreature /> Page", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"NewCreature"})
  let store, props, Component

  beforeEach(()=>{
    store = initializeStore(mockStoreState)
    props = NewCreature.getInitialProps(props)
    Component = RenderShallowUntilComponent(<Provider store={store}><NewCreature {...props} /></Provider>)
  })

  it("loads", ()=>{
    expect(typeof Component).toBe("object")
  })

  it("has the expected page title", () => {
    expect(props.title).toBe("New Creature")
  })

  it("has a link back to the creatures page", () => {
    expect(Component.find("Link[href=\"/creatures\"] a").length).toBeGreaterThanOrEqual(1)
  })

  it("Snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})
