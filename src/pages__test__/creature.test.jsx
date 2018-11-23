// import renderer from "react-test-renderer"
import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import toJson from "enzyme-to-json"

import mockStoreState from "../testHelpers/mockStoreState"
import Creature from "../pages/creature"

describe("<Creature /> page", ()=>{
  const InvalidReactComponent = () => <Creature router={{query:{hash:"hivn4p0k"}}} />
  const ReactComponent = () => <Creature router={{query:{hash:"hivn3p0k"}}} />
  const mapStateToProps = (state) => ({state})
  const store = createMockStore(mockStoreState)
  const InvalidConnectedComponent = connect(mapStateToProps)(InvalidReactComponent)
  const ConnectedComponent = connect(mapStateToProps)(ReactComponent)

  const CreaturelessComponent = mountWithStore(<InvalidConnectedComponent />, store)
  const ValidComponent = mountWithStore(<ConnectedComponent />, store)

  it("loads", () => {
    expect(typeof InvalidReactComponent).toBe("function")
    expect(typeof ReactComponent).toBe("function")
    expect(typeof CreaturelessComponent).toBe("object")
    expect(typeof ValidComponent).toBe("object")
  })

  it("has heading when no creature is found", () => {
    const text = CreaturelessComponent.find("Typography").text()
    expect(text).toBe("Creature #404, not found")
  })

  it("has a NextJS prop.title of Edit Creature", async () => {
    const props = await Creature.getInitialProps()
    expect(props.title).toBe("Edit Creature")
  })

  it("Snapshots", () => {
    expect(toJson(CreaturelessComponent)).toMatchSnapshot()
    expect(toJson(ValidComponent)).toMatchSnapshot()
  })
})