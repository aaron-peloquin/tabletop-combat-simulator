// import renderer from "react-test-renderer";
import { connect } from "react-redux";
import { mountWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import mockStoreState from "./../testHelpers/mockStoreState";

import About from "./about";

describe("<About />", ()=>{
  it("has a title of About", async () => {
    const props = await About.getInitialProps();
    expect(props.title).toBe("About");
  });

  // it("Snapshots", () => {
  //   const ReactComponent = () => (<About />);
  //   const mapStateToProps = (state) => ({state});
  //   const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
  //   const aboutPage = mountWithStore(ConnectedComponent, createMockStore(mockStoreState));
  //   const tree = aboutPage.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});