import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import toJson from "enzyme-to-json"

import CreatureForm from "../../components/CreatureForm"
import mockStoreState from "../../testHelpers/mockStoreState"

describe("<CreatureForm />", ()=>{
  const logger = (msg) => {console.log("MSG:",msg)}
  const mockChangeCallback = jest.fn(()=>{logger("change")})
  const mockSubmitCallback = jest.fn(() => {logger("submit")})

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
    expect(mockSubmitCallback).toHaveBeenCalledTimes(0)
  })

  it("fires onChange", () =>{
    const nameInput = component.find("TextField[label=\"Name\"]").simulate("change")
    nameInput.value = "Test"
    nameInput.simulate("change")
    // mockChangeCallback()
    expect(mockChangeCallback).toHaveBeenCalledTimes(2)
  })

  // it("fires submit callback", ()=>{
  //   component.simulate("submit")
  //   expect(spySubmit.calledOnce).toBe(true)
  // })

  it("snapshots", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})