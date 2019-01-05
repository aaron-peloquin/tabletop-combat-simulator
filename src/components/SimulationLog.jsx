import React, {Fragment} from "react"
import {connect} from "react-redux"
import {
  Typography,
} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

const Styles = () => {
  return {
    LogItem: {
      textAlign: "left",
    },
  }
}

const SimulationLog = (props) => {
  const {classes, Log} = props
  return <Fragment>
    {(Log.length > 0?<Typography variant="h4">Combat Log</Typography>:"")}
    {(Log.length > 0?Log.map((Items, k) => {
      return <Fragment key={k}>
        <Typography variant="h5">Round #{k}</Typography>
        <ul>{Items.map((Item, k) => {
          return <div key={k} className={classes.LogItem}>{Item}</div>
        })}</ul>
      </Fragment>
    }):"")}
  </Fragment>
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
