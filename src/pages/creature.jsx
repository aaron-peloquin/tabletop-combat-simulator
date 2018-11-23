import React, { Fragment } from "react"
import {Button} from "@material-ui/core"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Link from "next/link"
import { Typography } from "@material-ui/core"

import lookupCreatureHash from "./../helpers/lookupCreatureHash"
import CreatureFormEdit from "./../components/CreatureFormEdit"

let creature = props => {
  const {creature={}, router, classes} = props
  if(typeof creature.name == "undefined") {
    return <Typography variant="h1">Creature #404, not found</Typography>
  }

  return <Fragment>
    <Typography variant="h3">Editing {creature.name}</Typography>
    <p><Link href="/creatures"><a className={classes.link}><Button variant="contained" color="primary">List of Creatures</Button></a></Link></p>
    <CreatureFormEdit router={router} creature={creature} />
  </Fragment>
}

creature.getInitialProps = async () => {
  let title = "Edit Creature"
  return { title }
}

const mapStateToProps = (state, props) => {
  const {hash=0} = props.router.query
  const id = lookupCreatureHash(hash,state.creatures)
  let creature
  if(id>-1) {
    creature = state.creatures[id]||{}
  }
  
  return {creature}
}

const styles = {
  link: { textDecoration: "none", },
}

/** Add MUI styles to this component */
const creatureWithStyles = withStyles(styles)(creature)

/** Connect component to redux state */
const creatureWithState = connect(mapStateToProps)(creatureWithStyles)
export default creatureWithState