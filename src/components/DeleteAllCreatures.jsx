import { connect } from "react-redux"
import {Button} from "@material-ui/core"

import DeleteAll from "./../store/action/DeleteAllCreatures"

const DeleteAllCreatures = (props) => {
  const { ActionDeleteAll } = props
  return <Button data-id="delete-all" onClick={ActionDeleteAll} variant="contained" color="secondary">Delete All Creatures</Button>
}

const MapActionsToProps = (dispatch) => {
  ActionDeleteAll = () => { DeleteAll(dispatch,"delete all") },
}

export default connect({}, MapActionsToProps)(DeleteAllCreatures)
