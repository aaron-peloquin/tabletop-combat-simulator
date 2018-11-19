import {Fragment} from "react"
import CreatureFormNew from "../components/CreatureFormNew"
import CreaturesList from "./../components/CreaturesList"
import { connect } from "react-redux"
import { Button } from "@material-ui/core"

import CreatureDeleteAll from "./../store/action/CreatureDeleteAll"

const creatures = (props) => {
  const {dispatch} = props
  return <Fragment>
    <CreatureFormNew />
    <Button onClick={()=>{CreatureDeleteAll(dispatch,"delete all")}} color="secondary">DELETE ALL</Button>
    <CreaturesList />
  </Fragment>
}

creatures.getInitialProps = async () => {
  let title = "Creatures Database"
  return { title }
}

export default connect()(creatures)