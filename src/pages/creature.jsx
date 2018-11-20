import React, { Fragment } from "react"
import { connect } from "react-redux"

import lookupCreatureHash from "./../helpers/lookupCreatureHash"
import CreatureFormEdit from "./../components/CreatureFormEdit"

let creature = props => {
  const {creature={}} = props
  if(typeof creature.name == "undefined") {
    return <h1>Unknown Creature</h1>
  }

  return <Fragment>
    <h1>{creature.name}</h1>
    <ul>
      <li><strong>Armor</strong> {creature.armor}</li>
      <li><strong>Default Initiative</strong> {creature.defaultInitiative}</li>
      <li><strong>HP</strong> {creature.hp}</li>
    </ul>
    <CreatureFormEdit creature={creature} />
  </Fragment>
}

creature.getInitialProps = async () => {
  let title = "Creature"
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

const creatureWithState = connect(mapStateToProps)(creature)
export default creatureWithState