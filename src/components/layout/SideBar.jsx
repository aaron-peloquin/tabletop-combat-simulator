import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import { Home, Info, ViewList, } from "@material-ui/icons";
import { connect } from "react-redux";
import Link from "next/link";

import ToggleSidebar from "./../../store/action/ToggleSidebar";

/** MUI Styles for <SideBar />, and it's internal <SideBarLink /> */
const styles = {
  drawerContainer: { width: 250, },
  link: { textDecoration: "none", },
};

/**
 * Component for links as list items
 * @param {obj} props
    * @param {str} classes MUI object for CSS
    * @param {str} text The text of this link
    * @param {str} url The href
    * @param {jsx} children Optional icon
    * @return {jsx} <Link /> component to be placed inside of a <ListItem />
 */
const SideBarLink = (props) => {
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

/**
 * Swipable drawer for navigation
 */
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
        <SideBarLink classes={classes} text="Home" url="/"><Home /></SideBarLink>
        <SideBarLink classes={classes} text="About" url="/about"><Info /></SideBarLink>
        <SideBarLink classes={classes} text="Creatures" url="/creatures"><ViewList /></SideBarLink>
        <SideBarLink classes={classes} text="Combat Simulator" url="/combat-simulator"></SideBarLink>
      </List>
    </div>
  </SwipeableDrawer>;
};

/** Map the {redux}.SideBar to the <SideBar /> component */
const mapStateToProps = (state) => {
  return {open:state.sideBar};
};

/** Add MUI styles to this component */
const SideBarWithStyles = withStyles(styles)(SideBar);
/** Connect this component to Redux */
export default connect(mapStateToProps)(SideBarWithStyles);