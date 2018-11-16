import {connect} from "react-redux"
import {Button} from "@material-ui/core/"

import CreateCreature from "./../store/action/CreateCreature"

const CreatureFormNew = (props) => {
  const {dispatch} = props
  return <Button variant="contained" color="primary" onClick={()=>{CreateCreature(dispatch)}}>
    New Creature
  </Button>
}

export default connect()(CreatureFormNew)