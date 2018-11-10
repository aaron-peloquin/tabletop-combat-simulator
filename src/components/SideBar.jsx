import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";
import {
  Home,
  Info,
  ViewList,
} from "@material-ui/icons";
import Link from "next/link";
import { connect } from "react-redux";

import ToggleSidebar from "./../store/dispatcher/ToggleSidebar";

const NavigationLink = (props) => {
  const {dispatch, text, url, children} = props;
  return <ListItem>
    <Link href={url}>
      <a onClick={()=>{ return ToggleSidebar(dispatch); }}>
        {children?<ListItemIcon>{children}</ListItemIcon>:""}
        <ListItemText primary={text} />
      </a>
    </Link>
  </ListItem>;
};

const SideBar = (props) => {
  const { dispatch, open } = props;
  return <Drawer open={open} anchor="left" onClose={()=>{ return ToggleSidebar(dispatch); }}>
    <List>
      <NavigationLink dispatch={dispatch} text="Home" url="/"><Home /></NavigationLink>
      <NavigationLink dispatch={dispatch} text="About" url="/about"><Info /></NavigationLink>
      <NavigationLink dispatch={dispatch} text="Creatures" url="/creatures"><ViewList /></NavigationLink>
      <NavigationLink dispatch={dispatch} text="Combat Simulator" url="/combat-simulator"></NavigationLink>
    </List>
  </Drawer>;
};

const mapStateToProps = (state) => {
  return {open:state.sideBar};
};

export default connect(mapStateToProps)(SideBar);