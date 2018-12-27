import React from "react"
import { Grid } from "@material-ui/core"

import CreatureForm from "./../components/CreatureForm"
import TeamList from "./../components/TeamList"
import DeleteAllCreatures from "./../components/DeleteAllCreatures"

const Index = () => {
  return <Grid container spacing={24}>
    <Grid item xs={12}>
      <CreatureForm />
    </Grid>
    <Grid item xs={12} container spacing={24}>
      <Grid item sm={6}><TeamList Team="a" /></Grid>
      <Grid item sm={6}><TeamList Team="b" /></Grid>
    </Grid>
    <Grid item xs={12} container spacing={24}>
      <Grid item sm={6}>Simulation Results</Grid>
      <Grid item sm={6}>Simulation Log</Grid>
    </Grid>
    <Grid item xs={12} container spacing={24} justify="center">
      <Grid item sm={6}><DeleteAllCreatures /></Grid>
      <Grid item sm={6}><DeleteAllCreatures /></Grid>
    </Grid>
  </Grid>
}

Index.getInitialProps = () => {
  const title = "Tabletop Combat Simulator"
  return { title }
}

export default Index