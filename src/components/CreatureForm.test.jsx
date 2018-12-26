import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import CreatureForm from "./CreatureForm"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreatureForm />", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"CreatureForm"})
  let store, props, Component
  beforeEach(()=>{
    store = initializeStore(mockStoreState)
    props = {
      onSubmit: jest.fn(()=>{}),
      onChange: jest.fn(()=>{}),
      router: { push: jest.fn(() => {}) },
      EditingCreature: mockStoreState.creatures[0],
    }
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureForm {...props} /></Provider>)
  })

  it("loads", () => {
    expect(typeof Component).toBe("object")
  })

  it("has a <Grid> container", ()=>{
    expect(Component.find("WithStyles(Grid)[container=true]").length).toBeGreaterThanOrEqual(1)
  })

  it("fires submit callback with primary button", ()=>{
    Component.find("WithStyles(Button)[color=\"primary\"]").simulate("click", { preventDefault:()=>{} })
    expect(props.onSubmit).toHaveBeenCalledTimes(1)
  })

  it("fires submit callback with secondary button", ()=>{
    Component.find("WithStyles(Button)[color=\"secondary\"]").simulate("click", { preventDefault:()=>{} })
    expect(props.onSubmit).toHaveBeenCalledTimes(1)
  })

  it("fires change callback", ()=>{
    Component.find("Connect(WithStyles(CreatureFormGridField))[dataKey=\"name\"]").simulate("change")
    expect(props.onChange).toHaveBeenCalledTimes(1)
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})