import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import toJson from "enzyme-to-json"

import ListCreatures from "../../components/ListCreatures"
import mockStoreState from "../../testHelpers/mockStoreState"

describe("<ListCreatures />", () => {
  const ReactComponent = () => <ListCreatures />
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

  it("Snapshots", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})