import {connect} from "react-redux"
import {Button} from "@material-ui/core/"

import CreateCreature from "./../store/dispatcher/CreateCreature"

const makeNewCreature = (dispatch) => {
  CreateCreature(dispatch)
  
};

const NewCreature = (props) => {
  const {dispatch} = props
  return <Button variant="contained" color="primary" onClick={()=>{makeNewCreature(dispatch)}}>
    New Creature
  </Button>
};

export default connect()(NewCreature)