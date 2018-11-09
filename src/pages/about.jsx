import { Fragment } from "react";
import SideBar from "../components/SideBar";
import HeaderBar from "./../components/HeaderBar";

const about = (props) => {
  return <div id="Test">
    <HeaderBar />
    <SideBar />
    <p>Some about page copy.</p>
  </div>;
};

about.getInitialProps = async () => {
  let title = "About";
  return { title };
};

export default about;