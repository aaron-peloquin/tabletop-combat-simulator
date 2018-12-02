import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"

import SideBarLink from "./SideBarLink"

describe("<SideBarLink />", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"SideBarLink"})
  let store, props, Component
  beforeEach(async ()=>{
    props = {
      text: "hello",
      url: "/world",
    }

    /** Attach spy to store.dispatch */
    Component = RenderShallowUntilComponent(<Provider store={store}><SideBarLink {...props} /></Provider>)
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