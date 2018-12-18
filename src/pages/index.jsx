import React from "react"
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import CreatureForm from "./../components/CreatureForm"
import CreatureCreateUpdate from "./../store/action/CreatureCreateUpdate"

const Index = (props) => {
  return <Grid container spacing={24}>
    <Grid item xs={12}>
      <CreatureForm />
    </Grid>
    <Grid item xs={12} container spacing={24}>
      <Grid item sm={6}>Team A</Grid>
      <Grid item sm={6}>Team B</Grid>
    </Grid>
    <Grid item xs={12} container spacing={24}>
      <Grid item sm={6}>Simulation Results</Grid>
      <Grid item sm={6}>Simulation Log</Grid>
    </Grid>
  </Grid>
}

Index.defaultProps = {
}

Index.getInitialProps = () => {
  const title = "Tabletop Combat Simulator"
  return { title }
}

export default Index