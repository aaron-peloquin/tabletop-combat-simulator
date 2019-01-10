import React, {Fragment} from "react"
import {connect} from "react-redux"
import {
  Table,
  TableHead, TableBody,
  TableRow, TableCell,
  Typography,
} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

const Styles = () => {
  return {
    LogItems: {
      textAlign: "left",
    },
  }
}

const SimulationLog = (props) => {
  const {classes, Log} = props
  return (Log.length > 0?<Fragment>
    <Typography variant="h4">Combat Log</Typography>
    <Table className={classes.LogItems}>
      <TableHead>
        <TableRow>
          <TableCell>Round: Creature</TableCell>
          <TableCell>Message</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Log.map((Item, k) => {
          return <TableRow key={k}>
            <TableCell>{Item.Round}: {Item.Creature} ({Item.Team.toUpperCase()})</TableCell>
            <TableCell>{Item.Message}</TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </Fragment>:<Fragment />)
}

const MapStateToProps = (state) => {
  let Log = []
  if (state.combat.Victory.length > 0) {
    Log = state.combat.Log
  }

  return {
    Log,
  }
}

const ConnectedComponent = connect(MapStateToProps)(SimulationLog)
const StyledComponent = withStyles(Styles)(ConnectedComponent)

export default StyledComponent
