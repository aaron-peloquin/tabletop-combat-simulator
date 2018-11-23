import { connect } from "react-redux"
import { mountWithStore, shallowWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import toJson from "enzyme-to-json"

import CreaturesList from "./CreaturesList"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreaturesList />", () => {
  const ReactComponent = () => <CreaturesList />
  const mapStateToProps = (state) => ({state})
  const store = createMockStore(mockStoreState)
  const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
  const component = mountWithStore(<ConnectedComponent />, store)

  it("loads", async () => {
    expect(typeof ReactComponent).toBe("function")
    expect(typeof component).toBe("object")
  })

  it("Contains a table", () => {
    expect(component.find("CreaturesTable").length).toBeGreaterThanOrEqual(1)
  })

  it("Snapshots with no creatures", ()=> {
    const emptyStore = createMockStore({})
    const emptyComponent = shallowWithStore(<ConnectedComponent />, emptyStore)
    expect(toJson(emptyComponent)).toMatchSnapshot()
  })


  it("Snapshots", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})