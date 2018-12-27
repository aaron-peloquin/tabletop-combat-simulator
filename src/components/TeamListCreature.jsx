import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core/"
// import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"

import SetEditCreature from "./../store/action/SetEditCreature"
import DeleteCreature from "./../store/action/DeleteCreature"

const TeamListCreature = (props) => {
  const {
    /** Actions */
    FuncSetEditCreature,
    FuncDeleteCreature,

    /** Attributes */
    Creature,
  } = props
  return <Card>
    <CardContent>
      <Typography variant="body2">{Creature.name}</Typography>
    </CardContent>
    <CardActions>
      <Button onClick={() => { FuncSetEditCreature(Creature) }}>Edit</Button>
      <Button onClick={() => { FuncDeleteCreature(Creature.hash) }}>Delete</Button>
    </CardActions>
  </Card>
}

const MapStateToProps = () => {
  return {}
}

const MapActionsToProps = (dispatch) => {
  console.log("dispatch", typeof dispatch)
  return {
    FuncSetEditCreature: (Creature) => {
      console.log("SetEditCreature", typeof dispatch)
      SetEditCreature(dispatch, Creature)
    },
    FuncDeleteCreature: (Hash) => {
      DeleteCreature(dispatch, Hash)
    },
  } 
}

export default connect(MapStateToProps, MapActionsToProps)(TeamListCreature)
