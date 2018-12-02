import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { connect } from "react-redux"

import ToggleSidebar from "./../../store/action/ToggleSidebar"

/**
 * Component for the top of every page, contains a text heading and menu toggle button
 * @param {func} dispatch redux dispatcher
 * @param {func} FuncToggleSidebar is the redux action (dispatcher) for toggling the sidebar open/closed
 */
const HeaderBar = (props) => {
  const { dispatch, FuncToggleSidebar } = props
  return <AppBar>
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={()=>{ return FuncToggleSidebar(dispatch) }} >
        <MenuIcon />
      </IconButton>
      <Typography variant="h4" color="inherit">Tabletop Combat Simulator</Typography>
    </Toolbar>
  </AppBar>
}

HeaderBar.defaultProps = {
  FuncToggleSidebar: ToggleSidebar
}

export const mapStateToProps = (state) => {
  return {open:state.sideBar}
}

export default connect(mapStateToProps)(HeaderBar)