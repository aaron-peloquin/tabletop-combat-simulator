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
  drawerContainer: {
    width: 250,
  },
  link: {
    textDecoration: "none",
  },
};
const NavigationLink = (props) => {
  const {text, url, children, classes} = props;
  return <Link href={url}>
    <a className={classes.link}>
      <ListItem button>
        {children?<ListItemIcon>{children}</ListItemIcon>:""}
        <ListItemText primary={text} />
      </ListItem>
    </a>
  </Link>;
};

const SideBar = (props) => {
  const { dispatch, open, classes } = props;
  return <SwipeableDrawer onOpen={()=>{ToggleSidebar(dispatch);}} open={open} anchor="left" onClose={()=>{ToggleSidebar(dispatch);}}>
    <div
      className={classes.drawerContainer}
      role="button"
      onClick={()=>{ToggleSidebar(dispatch);}}
      onKeyDown={()=>{ToggleSidebar(dispatch);}}
    >
      <List>
        <NavigationLink classes={classes} text="Home" url="/"><Home /></NavigationLink>
        <NavigationLink classes={classes} text="About" url="/about"><Info /></NavigationLink>
        <NavigationLink classes={classes} text="Creatures" url="/creatures"><ViewList /></NavigationLink>
        <NavigationLink classes={classes} text="Combat Simulator" url="/combat-simulator"></NavigationLink>
      </List>
    </div>
  </SwipeableDrawer>;
};

const mapStateToProps = (state) => {
  return {open:state.sideBar};
};

const SideBarWithStyles = withStyles(styles)(SideBar);
export default connect(mapStateToProps)(SideBarWithStyles);