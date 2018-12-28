import {
  Button,
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core/"
import { withStyles } from "@material-ui/core/styles"
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
      <Typography variant="body1"><strong>{Creature.name}</strong></Typography>
      <Table padding="dense">
        <TableBody>
          <TableRow>
            <TableCell>HP</TableCell>
            <TableCell>{Creature.hp}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Armor</TableCell>
            <TableCell>{Creature.armor}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Init.</TableCell>
            <TableCell>{Creature.initiative}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hit</TableCell>
            <TableCell>{Creature.hitDiceEquation}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Damage</TableCell>
            <TableCell>{Creature.damageDiceEquation}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
  return {
    FuncSetEditCreature: (Creature) => {
      SetEditCreature(dispatch, Creature)
    },
    FuncDeleteCreature: (Hash) => {
      DeleteCreature(dispatch, Hash)
    },
  } 
}

export default connect(MapStateToProps, MapActionsToProps)(TeamListCreature)
