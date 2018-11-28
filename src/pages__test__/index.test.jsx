import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import Index from "../pages/index"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<Index /> Page", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"Index"})
  let store, props, Component

  beforeEach(()=>{
    store = initializeStore(mockStoreState)
    props = Index.getInitialProps(props)
    Component = RenderShallowUntilComponent(<Provider store={store}><Index {...props} /></Provider>)
  })

  it("loads", ()=>{
    expect(typeof Component).toBe("object")
  })

  it("has the expected page title", () => {
    expect(props.title).toBe("Tabletop Combat Simulator")
  })


  it("Snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})
