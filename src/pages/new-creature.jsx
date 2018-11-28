import {Fragment} from "react"
import {Button} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"
import Link from "next/link"

import CreatureFormNew from "../components/CreatureFormNew"

const NewCreature = (props) => {
  const {router, classes} = props
  
  return <Fragment>
    <h1>New Creature</h1>
    <p><Link href="/creatures"><a className={classes.link}><Button variant="contained" color="primary">List of Creatures</Button></a></Link></p>
    <CreatureFormNew router={router} />
  </Fragment>
}

const styles = {
  link: { textDecoration: "none", },
}

NewCreature.getInitialProps = () => {
  const title = "New Creature"
  return { title }
}

/** Add MUI styles to this component */
const newCreatureWithStyles = withStyles(styles)(NewCreature)

export default newCreatureWithStyles