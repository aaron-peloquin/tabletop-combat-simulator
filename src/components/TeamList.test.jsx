import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import TeamList from "./TeamList"

jest.mock('./TeamListCreature')

describe("<TeamList />", () => {
  const renderShallowUntilComponent = createShallow({"untilSelector": "TeamList"})
  let store; let props; let TeamListComponent

  beforeEach(() => {
    store = initializeStore({})
    props = {
      Team: "a",
      Creatures: [
        { name: "foo" }
      ],
    }
    TeamListComponent = renderShallowUntilComponent(<Provider store={store}><TeamList {...props} /></Provider>)
  })

  it("renders", () => {
    expect(typeof TeamListComponent).toBe("object")
  })

  it("snapshots", () => {
    const Tree = toJson(TeamListComponent)
    expect(Tree).toMatchSnapshot()
  })
})
