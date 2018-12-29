import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../store/store"

import DeleteAllCreatures from "../components/DeleteAllCreatures"

describe("<DeleteAllCreatures />", ()=>{
  const renderShallowUntilComponent = createShallow({"untilSelector": "DeleteAllCreatures"})
  let store; let props; let DeleteAllCreaturesComponent
  beforeEach(()=>{
    store = initializeStore({})
    store.dispatch = jest.fn(store.dispatch)
    DeleteAllCreaturesComponent = renderShallowUntilComponent(<Provider store={store}><DeleteAllCreatures {...props} /></Provider>)
  })

  it("calls dispatch on click", () => {
    DeleteAllCreaturesComponent.simulate("click")
    expect(store.dispatch).toBeCalledTimes(1)
  })

  it("snapshots", () => {
    const Tree = toJson(DeleteAllCreaturesComponent)
    expect(Tree).toMatchSnapshot()
  })
})
