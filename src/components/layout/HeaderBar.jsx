import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";

import ToggleSidebar from "./../../store/dispatcher/ToggleSidebar";

const HeaderBar = (props) => {
  const {dispatch} = props;
  return <AppBar>
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={()=>{ return ToggleSidebar(dispatch); }} >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">Tabletop Combat Simulator</Typography>
    </Toolbar>
  </AppBar>;
};

const mapStateToProps = (state) => {
  return {open:state.sideBar};
};

export default connect(mapStateToProps)(HeaderBar);