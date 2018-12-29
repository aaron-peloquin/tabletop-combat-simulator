import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import SimulateCombat from "../components/SimulateCombat"

describe("<SimulateCombat />", ()=>{
  const renderShallowUntilComponent = createShallow({"untilSelector": "SimulateCombat"})
  let store; let props; let SimulateCombatComponent
  beforeEach(()=>{
    store = initializeStore({})
    store.dispatch = jest.fn(store.dispatch)
    SimulateCombatComponent = renderShallowUntilComponent(<Provider store={store}><SimulateCombat {...props} /></Provider>)
  })

  it("calls dispatch on click", () => {
    SimulateCombatComponent.simulate("click")
    expect(store.dispatch).toBeCalledTimes(1)
  })

  it("snapshots", () => {
    const Tree = toJson(SimulateCombatComponent)
    expect(Tree).toMatchSnapshot()
  })
})
