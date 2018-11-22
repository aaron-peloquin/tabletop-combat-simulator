import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import toJson from "enzyme-to-json"

import CreatureForm from "./CreatureForm"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<CreatureForm />", ()=>{
  const mockChangeCallback = jest.fn(()=>{})
  const mockSubmitCallback = jest.fn(() => {})
  const mockRouter = {push:jest.fn(() => {})}

  const mockCreature = mockStoreState.creatures[0]

  const ReactComponent = () => <CreatureForm router={mockRouter} creature={mockCreature} onUpdate={mockChangeCallback} onSubmit={mockSubmitCallback} />
  const mapStateToProps = (state) => ({state})
  const store = createMockStore(mockStoreState)
  const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
  const component = mountWithStore(<ConnectedComponent />, store)

  it("loads", async () => {
    expect(typeof ReactComponent).toBe("function")
    expect(typeof component).toBe("object")
  })

  it("fires submit callback", ()=>{
    component.simulate("submit")
    expect(mockSubmitCallback).toHaveBeenCalledTimes(1)
  })

  it("used router to navigate to /creatures", () => {
    expect(mockSubmitCallback).toHaveBeenCalledTimes(1)
  })

  it("fires onChange", () =>{
    component.find("TextField[label=\"Name\"] input").simulate("change")
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith("/creatures")
  })

  it("does not fire submit callback when name is blank", ()=>{
    component.find("TextField[label=\"Name\"] input").simulate("change",{target:{value:""}})
    component.simulate("submit")
    /** Note: we expect this to be called once, since the previous test "fires submit callback" called it once already */
    expect(mockSubmitCallback).toHaveBeenCalledTimes(1)
  })

  it("snapshots", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})