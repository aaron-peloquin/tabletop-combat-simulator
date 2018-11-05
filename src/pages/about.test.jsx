import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"

import About from "./about"
import mockStore from "./../testHelpers/mockStore"

describe("<About />", ()=>{
  // it(".title is `About`", () => {
  //   const aboutPage = shallow(<About store={mockStore} />)
  //   expect(aboutPage.prop("title")).toEqual("About")
  // })

  it("Snapshots", () => {
    const aboutPage = renderer.create(<About store={mockStore} />)
    const tree = aboutPage.toJSON()
    expect(tree).toMatchSnapshot()
  })
})