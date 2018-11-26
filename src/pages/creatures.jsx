import { Fragment } from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import { Button, Grid, Typography } from "@material-ui/core"

import Link from "next/link"

import CreaturesList from "./../components/CreaturesList"
import DeleteAllCreatures from "./../components/DeleteAllCreatures"

const creatures = (props) => {
  const { classes } = props

  return <Fragment>
    <Typography variant="h3">All Creatures</Typography>
    <Grid container justify="center">
      <Grid item xs={6}>
        <Link href="/new-creature"><a className={classes.link}><Button variant="contained" color="primary">New Creature</Button></a></Link>
      </Grid>
      <Grid item xs={6}>
        <DeleteAllCreatures />
      </Grid>
    </Grid>
    <CreaturesList />
  </Fragment>
}

creatures.getInitialProps = async () => {
  let title = "All Creatures"
  return { title }
}

const styles = {
  link: { textDecoration: "none", },
}

/** Add MUI styles to this component */
const creaturesWithStyles = withStyles(styles)(creatures)

export default connect()(creaturesWithStyles)