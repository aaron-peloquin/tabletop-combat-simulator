import saveCreature from './SaveCreature'
import actionTypes from '../actionTypes'

describe('[reduxAction] SaveCreature', ()=>{
  const mockFunction = jest.fn((d)=>{
    return d
  })
  const mockValidParam = {'name': 'Goplin', 'hash': 'h328dj8'}
  const expectedReturn = {'type': actionTypes.SaveCreature, 'payload': mockValidParam}
  saveCreature(mockFunction, mockValidParam)

  it('calls mockFunction', ()=>{
    expect(mockFunction).toBeCalled
  })

  it('calls mockFunction with correct paramiters', () => {
    expect(mockFunction).toHaveBeenCalledWith(expectedReturn)
  })

  it('does not call mockFunction with invalid paramiters', () => {
    const invalidParamiters1 = {'hash': 583}
    const invalidParamiters2 = {'hash': ''}
    mockFunction(mockFunction, invalidParamiters1)
    expect(mockFunction).not.toHaveBeenCalledWith(invalidParamiters1)
    mockFunction(mockFunction, invalidParamiters2)
    expect(mockFunction).not.toHaveBeenCalledWith(invalidParamiters2)
  })
})
