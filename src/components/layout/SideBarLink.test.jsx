import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"

import SideBarLink from "./SideBarLink"

describe("<SideBarLink />", ()=>{
  const renderShallowUntilComponent = createShallow({"untilSelector": "SideBarLink"})
  let store; let props; let Component
  beforeEach(async ()=>{
    props = {
      text: "hello",
      url: "/world",
    }

    /** Attach spy to store.dispatch */
    Component = renderShallowUntilComponent(<SideBarLink {...props} />)
  })

  it("loads", async () => {
    expect(typeof Component).toBe("object")
  })

  it("renders with correct text", () => {
    expect(Component.find("WithStyles(ListItemText)").prop("primary")).toBe(props.text)
  })

  it("renders with correct url", () => {
    expect(Component.find("Link").prop("href")).toBe(props.url)
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})
