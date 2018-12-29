import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import CreaturesList from "./CreaturesList"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreaturesList />", ()=>{
  const renderShallowUntilComponent = createShallow({"untilSelector": "CreaturesList"})
  let store; let state; let Component
  beforeEach(async ()=>{
    store = initializeStore(mockStoreState)
    Component = renderShallowUntilComponent(<Provider store={store}><CreaturesList /></Provider>)
  })

  it("loads", () => {
    expect(typeof Component).toBe("object")
  })

  it("has a mui table", ()=>{
    expect(Component.find("WithStyles(Table)").length).toBe(1)
    expect(Component.find("WithStyles(TableHead)").length).toBe(1)
    expect(Component.find("WithStyles(TableBody)").length).toBe(1)
  })

  it("has a row for each creature", () => {
    state = store.getState()
    expect(state.creatures.length).toBe(Component.find("Connect(CreaturesTableRow)").length)
  })

  it("shows message when empty", () => {
    store = initializeStore({})
    Component = renderShallowUntilComponent(<Provider store={store}><CreaturesList /></Provider>)
    expect(Component.text()).toBe("No creatures exist yet")
  })

  it("Snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })

  it("Snapshots without any creatures", () => {
    store = initializeStore({})
    Component = renderShallowUntilComponent(<Provider store={store}><CreaturesList /></Provider>)
    expect(toJson(Component)).toMatchSnapshot()
  })
})
