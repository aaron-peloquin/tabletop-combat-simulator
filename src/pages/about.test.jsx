// import renderer from "react-test-renderer";
import { connect } from "react-redux";
import { mountWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import mockStoreState from "./../testHelpers/mockStoreState";
import toJson from "enzyme-to-json";

import About from "./about";

describe("<About />", ()=>{
  it("loads", async () => {
    const ReactComponent = () => <About />;
    expect(typeof ReactComponent).toBe("function");
  });

  it("has a NextJS prop.title of About", async () => {
    const props = await About.getInitialProps();
    expect(props.title).toBe("About");
  });

  it("Snapshots", () => {
    const ReactComponent = () => <About />;
    const mapStateToProps = (state) => ({state});
    const store = createMockStore(mockStoreState);
    const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
    const component = mountWithStore(<ConnectedComponent />, store);
    expect(toJson(component)).toMatchSnapshot();
  });
});