import { connect } from "react-redux"
import { mountWithStore } from "enzyme-redux"
import { createMockStore } from "redux-test-utils"
import mockStoreState from "../testHelpers/mockStoreState"
import toJson from "enzyme-to-json"

import About from "../pages/about"

describe("<About />", ()=>{
  const ReactComponent = () => <About />
  const mapStateToProps = (state) => ({state})
  const store = createMockStore(mockStoreState)
  const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
  const component = mountWithStore(<ConnectedComponent />, store)

  it("loads", async () => {
    expect(typeof component).toBe("object")
  })

  it("has a NextJS prop.title of About", async () => {
    const props = await About.getInitialProps()
    expect(props.title).toBe("About")
  })

  it("Snapshots", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})