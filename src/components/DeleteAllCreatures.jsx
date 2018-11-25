import { connect } from "react-redux"
import {Button} from "@material-ui/core"

import CreatureDeleteAll from "./../store/action/CreatureDeleteAll"

const DeleteAllCreatures = (props) => {
  const { dispatch, ActionDeleteAll } = props
  return <Button data-id="delete-all" onClick={()=>{
    ActionDeleteAll(dispatch,"delete all")
  }} variant="contained" color="secondary">Delete All Creatures</Button>
}

DeleteAllCreatures.getInitialProps = async () => {
  return { ActionDeleteAll: CreatureDeleteAll }
}

export default connect()(DeleteAllCreatures)