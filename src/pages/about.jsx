import SideBar from "../components/SideBar";
import HeaderBar from "./../components/HeaderBar";

const about = () => {
  return <div>
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