import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import toJson from "enzyme-to-json"

import CreatureFormNew from "./CreatureFormNew"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreatureFormNew />", ()=>{
  const ReactComponent = () => <CreatureFormNew />
  const mapStateToProps = (state) => ({state})
  const store = createMockStore(mockStoreState)
  const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
  const component = mountWithStore(<ConnectedComponent />, store)

  it("loads", async () => {
    expect(typeof ReactComponent).toBe("function")
    expect(typeof component).toBe("object")
  })

  it("Snapshots", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})