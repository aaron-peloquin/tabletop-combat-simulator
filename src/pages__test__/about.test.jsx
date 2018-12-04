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
