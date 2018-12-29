// import { Provider } from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"

import Layout from "./index"

describe("<Layout />", async ()=>{
  const renderShallowUntilComponent = createShallow({"untilSelector": "Layout"})
  let props; let Component
  beforeEach(async ()=>{
    Component = await renderShallowUntilComponent(<Layout {...props} />)
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
