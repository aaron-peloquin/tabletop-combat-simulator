import { Provider } from "react-redux"
import { createShallow } from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import { initializeStore } from "../store/store"

import DeleteAllCreatures from "../components/DeleteAllCreatures"


describe("<DeleteAllCreatures />", ()=>{
  const RenderShallowUntilComponent = createShallow({"untilSelector":"DeleteAllCreatures"})
  let store, props, DeleteAllCreaturesComponent
  beforeEach(async ()=>{
    store = initializeStore({})
    store.dispatch = jest.fn(store.dispatch)
    props = await DeleteAllCreatures.getInitialProps()
    props.ActionDeleteAll = jest.fn(props.ActionDeleteAll)
    DeleteAllCreaturesComponent = RenderShallowUntilComponent(<Provider store={store}><DeleteAllCreatures {...props} /></Provider>)
  })

  it("calls dispatch on click", () => {
    DeleteAllCreaturesComponent.simulate("click")
    expect(props.ActionDeleteAll).toBeCalledTimes(1)
    expect(store.dispatch).toBeCalledTimes(1)
  })

  it("snapshots", () => {
    const Tree = toJson(DeleteAllCreaturesComponent)
    expect(Tree).toMatchSnapshot()
  })
})