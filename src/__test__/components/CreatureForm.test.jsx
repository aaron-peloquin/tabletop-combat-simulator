import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import toJson from "enzyme-to-json"
import sinon from "sinon"

import CreatureForm from "../../components/CreatureForm"
import mockStoreState from "../../testHelpers/mockStoreState"

describe("<CreatureForm />", ()=>{
  const logger = (msg) => {console.log("MSG:",msg)}
  const mockChangeCallback = () => {logger("change")}
  const mockSubmitCallback = () => {logger("submit")}
  const spyChange = sinon.spy(mockChangeCallback)
  const spySubmit = sinon.spy(mockSubmitCallback)

  const ReactComponent = () => <CreatureForm onUpdate={mockChangeCallback} onSubmit={mockSubmitCallback} />
  const mapStateToProps = (state) => ({state})
  const store = createMockStore(mockStoreState)
  const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
  const component = mountWithStore(<ConnectedComponent />, store)

  it("loads", async () => {
    expect(typeof ReactComponent).toBe("function")
    expect(typeof component).toBe("object")
  })

  it("does not fire submit callback when name is blank", ()=>{
    component.simulate("submit")
    expect(spySubmit.called).toBe(false)
  })

  it("fires onChange", () =>{
    const nameInput = component.find("TextField[label=\"Name\"] input")
    nameInput.value = "Test"
    nameInput.simulate("change")
    expect(spyChange.called).toBe(true)
  })

  // it("fires submit callback", ()=>{
  //   component.simulate("submit")
  //   expect(spySubmit.calledOnce).toBe(true)
  // })

  it("snapshots", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})