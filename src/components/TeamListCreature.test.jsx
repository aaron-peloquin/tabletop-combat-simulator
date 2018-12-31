import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import TeamListCreature from "./TeamListCreature"
import mockStoreState from "../testHelpers/mockStoreState"

describe("<TeamListCreature />", () => {
  const renderShallowUntilComponent = createShallow({"untilSelector": "TeamListCreature"})
  let store; let props; let TeamListCreatureComponent

  beforeEach(() => {
    store = initializeStore({})
    props = {
      Creature: mockStoreState.creatures[0],
    }
    TeamListCreatureComponent = renderShallowUntilComponent(<Provider store={store}><TeamListCreature {...props} /></Provider>)
  })

  it("renders", () => {
    expect(typeof TeamListCreatureComponent).toBe("object")
  })

  it("snapshots", () => {
    const Tree = toJson(TeamListCreatureComponent)
    expect(Tree).toMatchSnapshot()
  })
})