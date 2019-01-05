import React from "react"
import {Grid} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

import CreatureForm from "./../components/CreatureForm"
import TeamList from "./../components/TeamList"
import DeleteAllCreatures from "./../components/DeleteAllCreatures"
import SimulateCombat from "./../components/SimulateCombat"
import SimulationResults from "./../components/SimulationResults"

const Index = (Props) => {
  const {classes} = Props
  return <Grid container className={classes.CenterItems} spacing={24} alignItems="stretch" justify="center">
    <Grid item xs={12}>
      <CreatureForm />
    </Grid>
    <Grid item xs={12} container spacing={24}>
      <Grid item sm={6}><TeamList Team="a" /></Grid>
      <Grid item sm={6}><TeamList Team="b" /></Grid>
    </Grid>
    <Grid item xs={12}>
      <SimulateCombat />
    </Grid>
    <Grid item xs={12} container spacing={24}>
      <Grid item sm={6}><SimulationResults /></Grid>
      <Grid item sm={6}>Simulation Log</Grid>
    </Grid>
    <Grid item xs={12}>
      <DeleteAllCreatures />
    </Grid>
  </Grid>
}

Index.getInitialProps = () => {
  const title = "Tabletop Combat Simulator"
  return {title}
}

const Styles = () => {
  return {
    CenterItems: {
      textAlign: "center",
    },
  }
}

export default withStyles(Styles)(Index)
