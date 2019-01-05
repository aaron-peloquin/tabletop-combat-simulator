import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import SimulationResults from "./SimulationResults"

describe("<SimulationResults />", () => {
  const renderShallowUntilComponent = createShallow({"untilSelector": "SimulationResults"})
  let store; let props; let SimulationResultsComponent

  beforeEach(() => {
    store = initializeStore({})

    SimulationResultsComponent = renderShallowUntilComponent(<Provider store={store}>
      <SimulationResults />
    </Provider>)
  })

  it("renders", () => {
    expect(typeof SimulationResultsComponent).toBe("object")
  })

  it("snapshots", () => {
    const Tree = toJson(SimulationResultsComponent)
    expect(Tree).toMatchSnapshot()
  })
})
