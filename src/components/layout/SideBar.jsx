import { SwipeableDrawer, List } from "@material-ui/core/"
import { withStyles } from "@material-ui/core/styles"
import { Home, Info, ViewList, } from "@material-ui/icons"
import { connect } from "react-redux"

import ToggleSidebar from "./../../store/action/ToggleSidebar"
import SideBarLink from "./SideBarLink"

/**
 * Swipable drawer for navigation
 */
const SideBar = (props) => {
  const { dispatch, open, classes } = props
  return <SwipeableDrawer onOpen={()=>{ToggleSidebar(dispatch)}} open={open} anchor="left" onClose={()=>{ToggleSidebar(dispatch)}}>
    <div
      className={classes.drawerContainer}
      role="button"
      onClick={()=>{ToggleSidebar(dispatch)}}
      onKeyDown={()=>{ToggleSidebar(dispatch)}}
    >
      <List>
        <SideBarLink classes={classes} text="Home" url="/"><Home /></SideBarLink>
        <SideBarLink classes={classes} text="About" url="/about"><Info /></SideBarLink>
        <SideBarLink classes={classes} text="Creatures" url="/creatures"><ViewList /></SideBarLink>
        <SideBarLink classes={classes} text="Combat Simulator" url="/combat-simulator"></SideBarLink>
      </List>
    </div>
  </SwipeableDrawer>
}

/** Map the {redux}.SideBar to the <SideBar /> component */
const mapStateToProps = (state) => {
  return {open:state.sideBar}
}

/** MUI Styles for <SideBar /> */
const styles = {
  drawerContainer: { width: 250, },
}

/** Add MUI styles to this component */
const SideBarWithStyles = withStyles(styles)(SideBar)
/** Connect this component to Redux */
export default connect(mapStateToProps)(SideBarWithStyles)