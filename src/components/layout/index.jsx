import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";

const Layout = ({children="No page content was passed"}) => (
  <div>
    <HeaderBar />
    <SideBar />
    {children}
  </div>
);

export default Layout;