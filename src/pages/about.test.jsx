import React from "react";
import { connect } from "react-redux";
import { mountWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import renderer from "react-test-renderer";

import About from "./about";
import expectedState from "./../testHelpers/mockStoreState";

describe("<About />", ()=>{
  const ReactComponent = () => (<About />);
  it("has a .title is `About`", () => {
    const mapStateToProps = (state) => ({
      state,
    });
    const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
    const component = mountWithStore(<ConnectedComponent />, createMockStore(expectedState));
    expect(component.props()).toBe(expectedState);
})

  // it("Snapshots", () => {
  //   const aboutPage = renderer.create(<About store={mockStore} />);
  //   const tree = aboutPage.toJSON();
  //   expect(tree).toMatchSnapshot();
  // })
})