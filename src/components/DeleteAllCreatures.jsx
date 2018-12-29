import {connect} from "react-redux"
import {Button} from "@material-ui/core"

import deleteAll from "./../store/action/DeleteAllCreatures"

const DeleteAllCreatures = (props) => {
  const {ActionDeleteAll} = props
  return <Button data-id="delete-all" onClick={ActionDeleteAll} variant="contained" color="secondary">
    Delete All Creatures
  </Button>
}

const MapStateToProps = () => {
  return { }
}

const MapActionsToProps = (dispatch) => {
  return {
    ActionDeleteAll: () => {
      deleteAll(dispatch, "delete all")
    },
  }
}

export default connect(MapStateToProps, MapActionsToProps)(DeleteAllCreatures)
