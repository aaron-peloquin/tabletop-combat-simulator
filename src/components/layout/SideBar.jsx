import { SwipeableDrawer, List } from "@material-ui/core/"
import { withStyles } from "@material-ui/core/styles"
import { Home, Info, ViewList, } from "@material-ui/icons"
import { connect } from "react-redux"

import ToggleSidebar from "./../../store/action/ToggleSidebar"
import SideBarLink from "./SideBarLink"

/**
 * Swipable drawer for navigation
 * @param {func} dispatch redux dispatcher
 * @param {obj} classes is the wrapping MUI styles for all pages
 * @param {bool} open the Redux state of the sideBar
 * @param {func} FuncToggleSidebar is the redux action (dispatcher) for toggling the sideBar open/closed
 */
const SideBar = (props) => {
  const { dispatch, classes, open, FuncToggleSidebar } = props
  return <SwipeableDrawer onOpen={()=>{FuncToggleSidebar(dispatch)}} open={open} anchor="left" onClose={()=>{FuncToggleSidebar(dispatch)}}>
    <div
      className={classes.drawerContainer}
      role="button"
      onClick={()=>{FuncToggleSidebar(dispatch)}}
      onKeyDown={()=>{FuncToggleSidebar(dispatch)}}
    >
      <List>
        <SideBarLink text="Home" url="/"><Home /></SideBarLink>
        <SideBarLink text="About" url="/about"><Info /></SideBarLink>
        <SideBarLink text="Creatures" url="/creatures"><ViewList /></SideBarLink>
        <SideBarLink text="Combat Simulator" url="/combat-simulator"></SideBarLink>
      </List>
    </div>
  </SwipeableDrawer>
}

SideBar.defaultProps = {
  FuncToggleSidebar: ToggleSidebar
}

/** Map the {redux}.SideBar to the <SideBar /> component */
export const mapStateToProps = (state) => {
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