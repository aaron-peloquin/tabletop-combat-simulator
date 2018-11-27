import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import CreatureForm from "./CreatureForm"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreatureForm />", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"CreatureForm"})
  let store, props, Component
  beforeEach(async ()=>{
    store = initializeStore(mockStoreState)
    props = {
      onSubmit: jest.fn(()=>{}),
      router: {push:jest.fn(() => {})},
      creature: mockStoreState.creatures[0]
    }
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureForm {...props} /></Provider>)
  })

  it("loads", async () => {
    expect(typeof Component).toBe("object")
  })

  it("has a <Grid> container", ()=>{
    expect(Component.find("WithStyles(Grid)[container=true]").length).toBeGreaterThanOrEqual(1)
  })

  it("fires submit callback", ()=>{
    Component.simulate("submit", {preventDefault:()=>{}})
    expect(props.onSubmit).toHaveBeenCalledTimes(1)
  })

  it("submit routes to /creatures", () => {
    Component.simulate("submit", {preventDefault:()=>{}})
    expect(props.router.push).toHaveBeenCalledTimes(1)
    expect(props.router.push).toHaveBeenCalledWith("/creatures")
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})