import {Provider} from "react-redux"
import {createShallow} from "@material-ui/core/test-utils"
import toJson from "enzyme-to-json"
import {initializeStore} from "../../store/store"

import HeaderBar, {mapStateToProps} from "./HeaderBar"
import mockStoreState from "./../../testHelpers/mockStoreState"

import toggleSidebar from "./../../store/action/ToggleSidebar"
import IconButton from "@material-ui/core/IconButton"

jest.mock("./../../store/action/ToggleSidebar")

describe("<HeaderBar />", ()=>{
  const renderShallowUntilComponent = createShallow({"untilSelector": "HeaderBar"})
  const store = initializeStore(mockStoreState)
  const props = mapStateToProps(store.getState())
  const Component = renderShallowUntilComponent(<Provider store={store}><HeaderBar {...props} /></Provider>)

  it("loads", () => {
    expect(typeof Component).toBe("object")
  })

  it("has an IconButton with prop of aria-label=Menu", () => {
    expect(Component.find(IconButton).length).toBe(1)
  })

  it("has a state of open=false by default", () => {
    expect(store.getState().sideBar).toBe(false)
  })

  it("calls toggleSidebar", () => {
    Component.find(IconButton).simulate("click")
    expect(toggleSidebar).toBeCalledTimes(1)
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})
