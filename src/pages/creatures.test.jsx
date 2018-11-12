// import renderer from "react-test-renderer"
import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import mockStoreState from "./../testHelpers/mockStoreState"
import toJson from "enzyme-to-json"

import Creatures from "./creatures"

describe("<Creatures /> page", ()=>{
  it("loads", async () => {
    const ReactComponent = () => <Creatures />
    expect(typeof ReactComponent).toBe("function")
  })

  it("Snapshots", () => {
    const ReactComponent = () => <Creatures />
    const mapStateToProps = (state) => ({state})
    const store = createMockStore(mockStoreState)
    const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
    const component = mountWithStore(<ConnectedComponent />, store)
    expect(toJson(component)).toMatchSnapshot()
  })
})