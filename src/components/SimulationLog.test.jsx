import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import SimulationLog from "./SimulationLog"

describe("<SimulationLog />", () => {
  const renderShallowUntilComponent = createShallow({"untilSelector": "SimulationLog"})
  let store; let props; let SimulationLogComponent

  beforeEach(() => {
    store = initializeStore({})

    SimulationLogComponent = renderShallowUntilComponent(<Provider store={store}>
      <SimulationLog />
    </Provider>)
  })

  it("renders", () => {
    expect(typeof SimulationLogComponent).toBe("object")
  })

  it("snapshots", () => {
    const Tree = toJson(SimulationLogComponent)
    expect(Tree).toMatchSnapshot()
  })
})
