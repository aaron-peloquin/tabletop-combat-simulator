import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import Creature, { mapStateToProps } from "../pages/Creature"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<Creature /> Page", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"Creature"})
  let store, state, props, Component

  beforeEach(()=>{
    store = initializeStore(mockStoreState)
    state = store.getState()
    props = {
      router: {query:{hash:"h3dxf5wl"}},
    }
    props = Object.assign(mapStateToProps(state, props), props)
    props = Object.assign(Creature.getInitialProps(props), props)
  })

  it("loads", ()=>{
    Component = RenderShallowUntilComponent(<Provider store={store}><Creature {...props} /></Provider>)
    expect(typeof Component).toBe("object")
  })

  it("has the expected page title", () => {
    Component = RenderShallowUntilComponent(<Provider store={store}><Creature {...props} /></Provider>)
    expect(props.title).toBe("Edit Creature")
  })

  it("has a link back to the creatures page", () => {
    Component = RenderShallowUntilComponent(<Provider store={store}><Creature {...props} /></Provider>)
    expect(Component.find("Link[href=\"/creatures\"] a").length).toBeGreaterThanOrEqual(1)

    /** Test without creature data, too */
    props.router.query.hash = "foo"
    Component = RenderShallowUntilComponent(<Provider store={store}><Creature {...props} /></Provider>)
    expect(Component.find("Link[href=\"/creatures\"] a").length).toBeGreaterThanOrEqual(1)
  })

  it("Snapshots", () => {
    Component = RenderShallowUntilComponent(<Provider store={store}><Creature {...props} /></Provider>)
    expect(toJson(Component)).toMatchSnapshot()
  })

  it("Snapshots an empty creature page", () => {
    props.router.query.hash = "foo"
    Component = RenderShallowUntilComponent(<Provider store={store}><Creature {...props} /></Provider>)
    expect(toJson(Component)).toMatchSnapshot()
  })
})