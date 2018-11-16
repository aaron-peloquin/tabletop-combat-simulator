import {Fragment} from "react"
import CreatureFormNew from "../components/CreatureFormNew"
import CreaturesList from "./../components/CreaturesList"

const creatures = () => {
  return <Fragment>
    <CreatureFormNew />
    <CreaturesList />
  </Fragment>
}

creatures.getInitialProps = async () => {
  let title = "Creatures Database"
  return { title }
}

export default creatures
