import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"

import About from "../pages/about"

describe("<Creature /> Page", ()=>{
  const RenderShallowUntilComponent = createShallow()
  let props, Component

  beforeEach( async ()=>{
    props = await About.getInitialProps()
    Component = RenderShallowUntilComponent(<About {...props} />)
  })

  it("loads", ()=>{
    expect(typeof Component).toBe("object")
  })

  it("has the expected page title", () => {
    expect(props.title).toBe("About")
  })

  it("Snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})

// import { connect } from "react-redux"
// import { shallowWithStore } from "enzyme-redux"
// import { createMockStore } from "redux-test-utils"
// import mockStoreState from "../testHelpers/mockStoreState"
// import toJson from "enzyme-to-json"

// import About from "../pages/about"

// describe("<About />", ()=>{
//   const ReactComponent = () => <About />
//   const mapStateToProps = (state) => ({state})
//   const store = createMockStore(mockStoreState)
//   const ConnectedComponent = connect(mapStateToProps)(ReactComponent)
//   const component = shallowWithStore(<ConnectedComponent />, store)

//   it("loads", async () => {
//     expect(typeof component).toBe("object")
//   })

//   it("has a NextJS prop.title of About", async () => {
//     const props = await About.getInitialProps()
//     expect(props.title).toBe("About")
//   })

//   it("Snapshots", () => {
//     expect(toJson(component)).toMatchSnapshot()
//   })
// })