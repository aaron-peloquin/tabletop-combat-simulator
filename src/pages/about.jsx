import { Fragment } from "react";
import SideBar from "../components/SideBar";
import HeaderBar from "./../components/HeaderBar";

const about = () => {
  return <Fragment>
    <HeaderBar />
    <SideBar />
    <p>Some about page copy.</p>
  </Fragment>;
};

about.getInitialProps = async () => {
  let title = "About";
  return { title };
};

export default about;