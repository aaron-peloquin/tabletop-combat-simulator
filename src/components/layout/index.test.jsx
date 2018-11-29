// import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"

import Layout from "./index"

describe("<Layout />", async ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"Layout"})
  let props, Component
  beforeEach(async ()=>{
    Component = await RenderShallowUntilComponent(<Layout {...props} />)
  })

  it("loads", () => {
    expect(typeof Component).toBe("object")
  })

  it("has a <HeaderBar />, <SideBar /> and <main />", () => {
    expect(Component.find("Connect(HeaderBar)").length).toBe(1)
    expect(Component.find("Connect(WithStyles(SideBar))").length).toBe(1)
    expect(Component.find("main").length).toBe(1)
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})