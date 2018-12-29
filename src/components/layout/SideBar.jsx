import {SwipeableDrawer, List} from "@material-ui/core/"
import {withStyles} from "@material-ui/core/styles"
import {Home, Info, ViewList} from "@material-ui/icons"
import {connect} from "react-redux"

import toggleSidebar from "./../../store/action/ToggleSidebar"
import SideBarLink from "./SideBarLink"

/**
 * Swipable drawer for navigation
 * @param {obj} props
 *  @param {func} dispatch redux dispatcher
 *  @param {obj} classes is the wrapping MUI styles for all pages
 *  @param {bool} open the Redux state of the sideBar
 *  @param {func} funcToggleSidebar is the redux action (dispatcher) for toggling the sideBar open/closed
 * @return {jsx} Component
 */
const SideBar = (props) => {
  const {dispatch, classes, open, funcToggleSidebar} = props
  return <SwipeableDrawer onOpen={()=>{
    funcToggleSidebar(dispatch)
  }} open={open} anchor="left" onClose={()=>{
    funcToggleSidebar(dispatch)
  }}>
    <div
      className={classes.drawerContainer}
      role="button"
      onClick={()=>{
        funcToggleSidebar(dispatch)
      }}
      onKeyDown={()=>{
        funcToggleSidebar(dispatch)
      }}
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
  funcToggleSidebar: toggleSidebar,
}

export const mapStateToProps = (state) => {
  return {open: state.sideBar}
}

/** MUI Styles for <SideBar /> */
const styles = {
  drawerContainer: {width: 250},
}

/** Add MUI styles to this component */
const SideBarWithStyles = withStyles(styles)(SideBar)
/** Connect this component to Redux */
export default connect(mapStateToProps)(SideBarWithStyles)
