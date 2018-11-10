import {
  SwipeableDrawer,
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
import { withStyles } from "@material-ui/core/styles";

import ToggleSidebar from "./../../store/dispatcher/ToggleSidebar";

const styles = {
  fullWidth: {
    width: 250,
  },
};
const NavigationLink = (props) => {
  const {text, url, children} = props;
  return <ListItem button>
    <Link href={url}>
      <a>
        {children?<ListItemIcon>{children}</ListItemIcon>:""}
        <ListItemText primary={text} />
      </a>
    </Link>
  </ListItem>;
};

const SideBar = (props) => {
  const { dispatch, open, classes } = props;
  return <SwipeableDrawer onOpen={()=>{ToggleSidebar(dispatch);}} open={open} anchor="left" onClose={()=>{ToggleSidebar(dispatch);}}>
    <div
      className={classes.fullWidth}
      role="button"
      onClick={()=>{ToggleSidebar(dispatch);}}
      onKeyDown={()=>{ToggleSidebar(dispatch);}}
    >
      <List>
        <NavigationLink dispatch={dispatch} text="Home" url="/"><Home /></NavigationLink>
        <NavigationLink dispatch={dispatch} text="About" url="/about"><Info /></NavigationLink>
        <NavigationLink dispatch={dispatch} text="Creatures" url="/creatures"><ViewList /></NavigationLink>
        <NavigationLink dispatch={dispatch} text="Combat Simulator" url="/combat-simulator"></NavigationLink>
      </List>
    </div>
  </SwipeableDrawer>;
};

const mapStateToProps = (state) => {
  return {open:state.sideBar};
};

const SideBarWithStyles = withStyles(styles)(SideBar);
export default connect(mapStateToProps)(SideBarWithStyles);