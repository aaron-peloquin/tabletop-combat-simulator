import React, { Fragment } from "react"
import { connect } from "react-redux"

import lookupCreatureHash from "./../helpers/lookupCreatureHash"

let creature = props => {
  const { id, char } = props

  return <Fragment>
    <h1>Creature: {id}</h1>
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