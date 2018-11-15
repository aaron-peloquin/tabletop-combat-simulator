import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import toJson from "enzyme-to-json"
import sinon from "sinon"

import NewCreature from "./NewCreature"
import CreateCreature from "./../store/action/CreateCreature"
import mockStoreState from "./../testHelpers/mockStoreState"

describe("<New Creature />", ()=>{
  const ReactComponent = () => <NewCreature />
  const mapStateToProps = (state) => ({state})
  const store = createMockStore(mockStoreState)
  const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
  const component = mountWithStore(<ConnectedComponent />, store)

  it("loads", async () => {
    expect(typeof ReactComponent).toBe("function")
    expect(typeof component).toBe("object")
  })

  // it("calls a CreateCreature", ()=>{
  //   var spy = sinon.spy(CreateCreature)
  //   const button = component.find("Button")
  //   expect(button.length).toBe(1)
  //   button.simulate("click")
  //   expect(spy.calledOnce).toBe(true)
  // })

  it("Snapshots", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})