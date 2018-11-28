import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import CreatureFormGridField from "./CreatureFormGridField"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreatureFormGridField />", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"CreatureFormGridField"})
  let store, props, Component
  beforeEach(async ()=>{
    store = initializeStore(mockStoreState)
    props = {
      onChange: jest.fn(()=>{}),
      creature: mockStoreState.creatures[0],
      dataKey: "name",
      label: "Name Field",
      size: "large",
    }
  })

  it("loads", () => {
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormGridField {...props} /></Provider>)
    expect(typeof Component).toBe("object")
  })

  it("contains a <Grid> item", ()=>{
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormGridField {...props} /></Provider>)
    expect(Component.find("WithStyles(Grid)[item=true]").length).toBe(1)
  })

  it("has a grid with xs of 12 (and no other MUI breakpoints) when large", ()=>{
    props.size = "large"
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormGridField {...props} /></Provider>)
    expect(Component.find("WithStyles(Grid)[xs=12]").length).toBe(1)
    expect(Component.find("WithStyles(Grid)[sm]").length).toBe(0)
    expect(Component.find("WithStyles(Grid)[md]").length).toBe(0)
    expect(Component.find("WithStyles(Grid)[lg]").length).toBe(0)
    expect(Component.find("WithStyles(Grid)[xl]").length).toBe(0)
  })

  it("has a grid with any xs, sm, and md when small", ()=>{
    props.size = "small"
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormGridField {...props} /></Provider>)
    expect(Component.find("WithStyles(Grid)[xs][sm][md]").length).toBe(1)
  })

  it("has a grid with any sm when medium", ()=>{
    props.size = "medium"
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormGridField {...props} /></Provider>)
    expect(Component.find("WithStyles(Grid)[sm]").length).toBe(1)
  })

  it("can be a textarea", ()=>{
    props.field = "multiline"
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormGridField {...props} /></Provider>)
    expect(Component.find("TextField[multiline=true]").length).toBe(1)
  })

  it("fires onChange callback", ()=>{
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormGridField {...props} /></Provider>)
    Component.find("TextField").simulate("change", {target:{value:"Some new name"}})
    expect(props.onChange).toHaveBeenCalledTimes(1)
  })

  it("updates props.creature on change", ()=> {
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormGridField {...props} /></Provider>)
    Component.find("TextField").simulate("change", {target:{value:"Some new name"}})
    expect(props.creature.name).toBe("Some new name")
  })

  it("snapshots", () => {
    Component = RenderShallowUntilComponent(<Provider store={store}><CreatureFormGridField {...props} /></Provider>)
    expect(toJson(Component)).toMatchSnapshot()
  })
})