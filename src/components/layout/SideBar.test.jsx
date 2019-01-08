import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../../store/store"

import SideBar from "./SideBar"
import mockStoreState from "./../../testHelpers/mockStoreState"

describe("<SideBar />", ()=>{
  const renderShallowUntilComponent = createShallow({"untilSelector": "SideBar"})
  let store; let Component
  beforeEach(async ()=>{
    store = initializeStore(mockStoreState)

    /** Attach spy to store.dispatch */
    store.dispatch = jest.fn(store.dispatch)
    Component = renderShallowUntilComponent(<Provider store={store}><SideBar /></Provider>)
  })

  it("loads", async () => {
    expect(typeof Component).toBe("object")
  })

  it("is closed by default", () => {
    expect(Component.props().open).toBe(false)
  })

  /**
   * Simulate clicking the wrapping <div /> twice,
   * should call dispatcher twice and should toggle from false to true,
   * then back to false
   */
  it("properly toggles onClick", () => {
    const wrappingDiv = Component.find("div")
    wrappingDiv.simulate("click")

    expect(store.dispatch).toBeCalledTimes(1)
    expect(store.getState().sideBar).toBe(true)

    wrappingDiv.simulate("click")
    expect(store.dispatch).toBeCalledTimes(2)
    expect(store.getState().sideBar).toBe(false)
  })

  it("properly toggles key press of escape", () => {
    const wrappingDiv = Component.find("div")
    wrappingDiv.simulate("click")

    expect(store.getState().sideBar).toBe(true)
    wrappingDiv.simulate("keyDown", {key: "Escape"})
    expect(store.dispatch).toBeCalledTimes(2)
    expect(store.getState().sideBar).toBe(false)
  })

  it("opens and closes", () => {
    const wrappingDiv = Component.find("div")
    wrappingDiv.simulate("click")
    expect(store.getState().sideBar).toBe(true)

    wrappingDiv.simulate("click")
    expect(store.getState().sideBar).toBe(false)
  })

  it("contains a <List />", () => {
    expect(Component.find("WithStyles(List)").length).toBe(1)
  })

  it("contains at least 3 <SideBarLink />", () => {
    expect(Component.find("WithStyles(SideBarLink)").length).toBeGreaterThanOrEqual(2)
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})
