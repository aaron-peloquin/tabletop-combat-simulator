import {Fragment} from "react"
import NewCreature from "../components/NewCreature"
import ListCreatures from "./../components/ListCreatures"

const creatures = () => {
  return <Fragment>
    <NewCreature />
    <ListCreatures />
  </Fragment>
}

creatures.getInitialProps = async () => {
  let title = "Creatures Database"
  return { title }
}

export default creatures
