// import {Provider} from "react-redux"
// import {createShallow} from "@material-ui/core/test-utils"
// import toJson from "enzyme-to-json"
// import {initializeStore} from "../store/store"
// import {connect} from "react-redux"
import {shallow} from "enzyme"
import TestRenderer from "react-test-renderer"

import {TeamListCreature} from "./TeamListCreature"
// import mockStoreState from "../testHelpers/mockStoreState"

describe("<TeamListCreature />", () => {
  let wrapper
  beforeEach(() => {
    wrapper = TestRenderer.create(TeamListCreature)
  })

  it("snapshots", () => {
    expect(JSON.stringify(wrapper)).toMatchSnapshot()
  })
})

// describe("<TeamListCreature />", () => {
//   const renderShallowUntilComponent = createShallow({"untilSelector": "TeamListCreature"})
//   let TeamListCreatureComponent; let props

//   beforeEach(() => {
//     const store = initializeStore({})
//     props = {
//       Creature: mockStoreState.creatures[0],
//       funcCopyCreature: jest.fn(()=>{
//         console.log("HELLO WORLDZ")
//       }),
//     }
//     TeamListCreatureComponent = renderShallowUntilComponent(
//       <Provider store={store}>
//         <TeamListCreature {...props} />
//       </Provider>
//     )
//   })

//   it("renders", () => {
//     expect(typeof TeamListCreatureComponent).toBe("object")
//   })

//   it("calls copy function", () => {
//     TeamListCreatureComponent = connect(()=>{})(<StyledComponent {...props} />)
//     const editButton = TeamListCreatureComponent.find("[data-testid='editButton']")
//     expect(editButton.length).toBe(1)
//     editButton.simulate("click")
//     expect(props.funcCopyCreature).toHaveBeenCalledTimes(555)
//   })

//   it("snapshots", () => {
//     const Tree = toJson(TeamListCreatureComponent)
//     expect(Tree).toMatchSnapshot()
//   })
// })
