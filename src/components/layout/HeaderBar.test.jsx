import {Provider} from "react-redux"
import {shallow} from "enzyme"
import toJson from "enzyme-to-json"
import {initializeStore} from "../../store/store"

import {HeaderBar, mapStateToProps} from "./HeaderBar"
import mockStoreState from "./../../testHelpers/mockStoreState"

import toggleSidebar from "./../../store/action/ToggleSidebar"
import IconButton from "@material-ui/core/IconButton"

jest.mock("./../../store/action/ToggleSidebar")

describe("<HeaderBar />", ()=>{
  const store = initializeStore(mockStoreState)
  const props = mapStateToProps(store.getState())
  const Component = shallow(<HeaderBar {...props} />)

  it("loads", () => {
    expect(typeof Component).toBe("object")
  })

  it("has an IconButton with prop of aria-label=Menu", () => {
    expect(Component.find(IconButton).length).toBe(1)
  })

  it("has a state of open=false by default", () => {
    expect(store.getState().sideBar).toBe(false)
  })

  it("snapshots", () => {
    expect(toJson(Component)).toMatchSnapshot()
  })
})
