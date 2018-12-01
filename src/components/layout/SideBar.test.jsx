import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../../store/store"

import SideBar, { mapStateToProps } from "./SideBar"
import mockStoreState from "./../../testHelpers/mockStoreState"

describe("<SideBar />", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"SideBar"})
  let store, props, Component
  beforeEach(async ()=>{
    store = initializeStore(mockStoreState)
    props = mapStateToProps(store.getState())

    /** Attach spy to store.dispatch */
    store.dispatch = jest.fn(store.dispatch)
    Component = RenderShallowUntilComponent(<Provider store={store}><SideBar {...props} /></Provider>)
  })

  it("loads", async () => {
    expect(typeof Component).toBe("object")
  })

  it("is closed by default", () => {
    expect(props.open).toBe(false)
  })

  /**
   * Simulate clicking the wrapping <div /> twice,
   * should call dispatcher twice and should toggle from false to true,
   * then back to false
   */
  it("is properly toggles", () => {
    const wrappingDiv = Component.find("div")
    wrappingDiv.simulate("click")
    expect(store.dispatch).toBeCalledTimes(1)
    props = mapStateToProps(store.getState())
    expect(props.open).toBe(true)
    wrappingDiv.simulate("click")
    expect(store.dispatch).toBeCalledTimes(2)
    props = mapStateToProps(store.getState())
    expect(props.open).toBe(false)
  })

  it("contains a <List />", () => {
    expect(Component.find("WithStyles(List)").length).toBe(1)
  })

  it("contains at least 3 <SideBarLink />", () => {
    expect(Component.find("WithStyles(SideBarLink)").length).toBeGreaterThanOrEqual(3)
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})