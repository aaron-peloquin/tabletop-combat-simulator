import {Fragment} from "react"
import {connect} from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import {Button, Grid} from "@material-ui/core"
import Link from "next/link"

import CreatureDeleteAll from "./../store/action/CreatureDeleteAll"
import CreaturesList from "./../components/CreaturesList"

const creatures = (props) => {
  const {dispatch, classes} = props

  return <Fragment>
    <Grid container justify="center">
      <Grid item xs={6}>
        <Link href="/new-creature"><a className={classes.link}><Button variant="contained" color="primary">New Creature</Button></a></Link>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={()=>{CreatureDeleteAll(dispatch,"delete all")}} variant="contained" color="secondary">Delete All Creatures</Button>
      </Grid>
    </Grid>
    
    <CreaturesList />
  </Fragment>
}

creatures.getInitialProps = async () => {
  let title = "Creatures Database"
  return { title }
}

const styles = {
  link: { textDecoration: "none", },
}

/** Add MUI styles to this component */
const creaturesWithStyles = withStyles(styles)(creatures)

export default connect()(creaturesWithStyles)