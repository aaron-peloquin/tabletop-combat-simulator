import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../../store/store"

import HeaderBar, { mapStateToProps } from "./HeaderBar"
import mockStoreState from "./../../testHelpers/mockStoreState"

describe("<HeaderBar />", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"HeaderBar"})
  let store, props, Component
  beforeEach(async ()=>{
    store = initializeStore(mockStoreState)
    props = mapStateToProps(store.getState())
    /** Attach spy to store.dispatch */
    store.dispatch = jest.fn(store.dispatch)
    Component = RenderShallowUntilComponent(<Provider store={store}><HeaderBar {...props} /></Provider>)
  })

  it("loads", async () => {
    expect(typeof Component).toBe("object")
  })

  it("has an IconButton with prop of aria-label=Menu", () => {
    expect(Component.find("WithStyles(IconButton)[aria-label=\"Menu\"]").length).toBe(1)
  })
  it("has a state of open=false by default", () => {
    expect(store.getState().sideBar).toBe(false)
  })

  it("calls function, dispatch, and updates state on click of menu", () => {
    Component.find("WithStyles(IconButton)[aria-label=\"Menu\"]").simulate("click")
    expect(store.dispatch).toBeCalledTimes(1)
    expect(store.getState().sideBar).toBe(true)
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})