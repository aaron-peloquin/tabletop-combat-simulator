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

const SideBar = (props) => {
  const { dispatch, open } = props
  return <Drawer open={open} anchor="left" onOpen={()=>{ return ToggleSidebar(dispatch); }} onClose={()=>{ return ToggleSidebar(dispatch); }}>
    <Link href="/about" onClick={()=>{ return ToggleSidebar(dispatch); }}><a>About</a></Link>
  </Drawer>;
}

const mapStateToProps = (state) => {
  console.log("ALERT",state);
  return {open:state.sideBar};
}

export default connect(mapStateToProps)(SideBar);