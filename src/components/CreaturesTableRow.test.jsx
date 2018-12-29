import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import CreaturesTableRow from "./CreaturesTableRow"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreaturesTableRow />", ()=>{
  const renderShallowUntilComponent = createShallow({"untilSelector": "CreaturesTableRow"})
  let store; let props; let Component
  beforeEach(async ()=>{
    store = initializeStore(mockStoreState)
    store.dispatch = jest.fn(store.dispatch)
    props = {creature: mockStoreState.creatures[0]}
    Component = renderShallowUntilComponent(<Provider store={store}><CreaturesTableRow {...props} /></Provider>)
  })

  it("loads", () => {
    expect(typeof Component).toBe("object")
  })

  it("has a link back to the creatures page", () => {
    expect(Component.find(`Link[href="/creature?hash=${props.creature.hash}"] a`).length).toBeGreaterThanOrEqual(1)
  })

  it("has an edit icon inside the link", () => {
    expect(Component.find(`Link[href="/creature?hash=${props.creature.hash}"] a pure(EditIcon)`).length).toBe(1)
  })

  it("has a delete icon and button", () => {
    expect(Component.find("WithStyles(Button) pure(DeleteIcon)").length).toBe(1)
  })

  it("calls dispatch on click of delete", () => {
    Component.find("WithStyles(Button) pure(DeleteIcon)").parent().simulate("click")
    expect(store.dispatch).toBeCalledTimes(1)
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})
