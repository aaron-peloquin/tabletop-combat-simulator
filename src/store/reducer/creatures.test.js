import actionTypes from './../actionTypes'

import creatures from './creatures'

describe('[reduxReducer] creatures', ()=>{
  let state; let data
  beforeEach(()=>{
    data = {}
    data.type = actionTypes.SaveCreature
    data.payload = {name: 'Hello World'}
    state = creatures(state, data)
    data = {}
  })

  it('[SaveCreature] adds the new creature in as 0', ()=>{
    expect(state[0].name).toBe('Hello World')
  })

  it('[DeleteAllCreatures] deletes all creature data', ()=>{
    expect(state.length).toBe(2)
    data = {type: actionTypes.DeleteAllCreatures}
    state = creatures(state, data)
    expect(state.length).toBe(0)
  })

  it('[DeleteCreature] modifies creature data', ()=>{
    expect(state.length).toBe(1)
    data = {
      type: actionTypes.DeleteCreature,
      payload: state[0].hash,
    }
    state = creatures(state, data)
    expect(state.length).toBe(0)
  })

  it('[SaveCreature] modifies creature data', ()=>{
    data = {
      type: actionTypes.SaveCreature,
      payload: {
        name: 'New Name',
        hash: state[0].hash,
      },
    }
    state = creatures(state, data)
    expect(state[0].name).toBe('New Name')
  })

  it('[CopyCreature] modifies creature data', ()=>{
    data = {
      type: actionTypes.CopyCreature,
      payload: {
        name: 'Copied Name',
        hash: state[0].hash,
      },
    }
    state = creatures(state, data)
    expect(state[state.length-1].name).toBe('Hello World')
  })
})
