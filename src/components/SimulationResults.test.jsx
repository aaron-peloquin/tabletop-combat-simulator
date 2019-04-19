import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import SimulationResults from "./SimulationResults"

describe("<SimulationResults />", () => {
  const renderShallowUntilComponent = createShallow({"untilSelector": "SimulationResults"})
  let store; let SimulationResultsComponent

  beforeEach(() => {
    store = initializeStore({})

    SimulationResultsComponent = renderShallowUntilComponent(<Provider store={store}>
      <SimulationResults
        classes={{
          CreatureHealth: {color: "blue"},
          CreatureName: {color: "orange"},
        }}
        Survivors={[
          {Name: "Beth", Health: 25},
          {Name: "Jerry", Health: 50},
          {Name: "Frank", Health: 75},
        ]}
      />
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
