// import renderer from "react-test-renderer"
import { connect } from "react-redux"
import { shallowWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import mockStoreState from "../testHelpers/mockStoreState"
import toJson from "enzyme-to-json"

import Index from "../pages/index"

describe("<Index /> page", ()=>{
  it("loads", async () => {
    const ReactComponent = () => <Index />
    expect(typeof ReactComponent).toBe("function")
  })

  it("Snapshots", () => {
    const ReactComponent = () => <Index />
    const mapStateToProps = (state) => ({state})
    const store = createMockStore(mockStoreState)
    const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
    const component = shallowWithStore(<ConnectedComponent />, store)
    expect(toJson(component)).toMatchSnapshot()
  })
})