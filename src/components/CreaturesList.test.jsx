import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import toJson from "enzyme-to-json"

import CreaturesList from "./CreaturesList"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreaturesList />", () => {
  const ReactComponent = () => <CreaturesList />
  const mapStateToProps = (state) => ({state})
  const store = createMockStore(mockStoreState)
  const EmptyStore = createMockStore({})
  const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
  const componentWithStore = mountWithStore(<ConnectedComponent />, store)
  const EmptyComponentWithStore = mountWithStore(<ConnectedComponent />, EmptyStore)

  it("loads", async () => {
    expect(typeof ReactComponent).toBe("function")
    expect(typeof componentWithStore).toBe("object")
  })

  it("Contains a table", () => {
    expect(componentWithStore.find("CreaturesTable").length).toBeGreaterThanOrEqual(1)
  })

  it("Contains a message about seeing no creatures", () => {
    const NoCreaturesMsg = EmptyComponentWithStore.find("[data-class=\"no-creatures\"]")
    expect(NoCreaturesMsg.length).toBe(1)
  })

  it("Snapshots with no creatures", ()=> {
    expect(toJson(EmptyComponentWithStore)).toMatchSnapshot()
  })


  it("Snapshots", () => {
    expect(toJson(componentWithStore)).toMatchSnapshot()
  })
})