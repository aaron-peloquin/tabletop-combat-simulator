import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@material-ui/core/";
import Link from "next/link";
import { connect } from "react-redux";

import ToggleSidebar from "./../store/dispatcher/ToggleSidebar";

const NavigationLink = (props) => {
  const {dispatch, url, children} = props;
  return (<Link href={url}>
    <a onClick={()=>{ return ToggleSidebar(dispatch); }}>{children}</a>
  </Link>);
}

const SideBar = (props) => {
  const { dispatch, open } = props;
  return <Drawer open={open} anchor="left" onClose={()=>{ return ToggleSidebar(dispatch); }}>
    <NavigationLink dispatch={dispatch} url="/">Home</NavigationLink>
    <NavigationLink dispatch={dispatch} url="/about">About</NavigationLink>
    <NavigationLink dispatch={dispatch} url="/creatures">Creatures</NavigationLink>
  </Drawer>;
};

const mapStateToProps = (state) => {
  return {open:state.sideBar};
};

export default connect(mapStateToProps)(SideBar);