// import renderer from "react-test-renderer";
import { connect } from "react-redux";
import { shallowWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import mockStoreState from "./../testHelpers/mockStoreState";
import toJson from "enzyme-to-json";

import About from "./about";

describe("<About />", ()=>{
  it("has a title of About", async () => {
    const props = await About.getInitialProps();
    expect(props.title).toBe("About");
  });

  it("Snapshots", () => {
    const ReactComponent = () => (<About />);
    const mapStateToProps = (state) => ({state});
    const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
    const aboutPage = shallowWithStore(<ConnectedComponent />, createMockStore(mockStoreState));
    const tree = aboutPage.dive();
    expect(toJson(tree)).toMatchSnapshot();
  });
});