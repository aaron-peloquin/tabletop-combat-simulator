import actionTypes from './../actionTypes'

import sideBar from './sideBar'

describe('[reduxReducer] sideBar', ()=>{
  let result; let state; let payload
  beforeEach(()=>{
    payload = {type: actionTypes.ToggleSidebar}
    result = null
    state = null
  })

  it('[ToggleSidebar] toggles state true when given false', ()=>{
    state = false
    result = sideBar(state, payload)
    expect(result).toBe(true)
  })

  it('[ToggleSidebar] toggles state false when given true', ()=>{
    state = true
    result = sideBar(state, payload)
    expect(result).toBe(false)
  })
})
