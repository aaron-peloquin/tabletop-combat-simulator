// import renderer from "react-test-renderer"
import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import mockStoreState from "../../testHelpers/mockStoreState"
import toJson from "enzyme-to-json"

import Creatures from "../../pages/creatures"

describe("<Creatures /> page", ()=>{
  const ReactComponent = () => <Creatures />
  const mapStateToProps = (state) => ({state})
  const store = createMockStore(mockStoreState)
  const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
  const component = mountWithStore(<ConnectedComponent />, store)

  it("loads", async () => {
    expect(typeof ReactComponent).toBe("function")
    expect(typeof component).toBe("object")
  })

  it("Contains required elements", ()=>{
    expect(component.find("CreatureFormNew").length).toBe(1)
    expect(component.find("CreaturesList").length).toBe(1)
  })

  it("Snapshots", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})