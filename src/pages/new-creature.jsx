import {Fragment} from "react"
import {Button} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"
import Link from "next/link"

import CreatureFormNew from "../components/CreatureFormNew"

const newCreature = (props) => {
  const {router, classes} = props
  
  return <Fragment>
    <h1>New Creature</h1>
    <p><Link href="/creatures"><a className={classes.link}><Button variant="contained">List of Creatures</Button></a></Link></p>
    <CreatureFormNew router={router} />
  </Fragment>
}

const styles = {
  link: { textDecoration: "none", },
}

/** Add MUI styles to this component */
const newCreatureWithStyles = withStyles(styles)(newCreature)

export default newCreatureWithStyles