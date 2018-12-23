import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import TeamList from "./TeamList"

describe("<TeamList />", () => {
  const RenderShallowUntilComponent = createShallow({"untilSelector":"TeamList"})
  let store, props, TeamListComponent

  beforeEach(() => {
    store = initializeStore({})
    TeamListComponent = RenderShallowUntilComponent(<Provider store={store}><TeamList {...props} /></Provider>)

  })

  it("renders", () => {
    expect(typeof TeamListComponent).toBe("object")
  })

  it("snapshots", () => {
    const Tree = toJson(TeamListComponent)
    expect(Tree).toMatchSnapshot()
  })
})
