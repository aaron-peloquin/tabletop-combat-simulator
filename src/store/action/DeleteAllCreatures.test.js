import deleteAllCreatures from './DeleteAllCreatures'

describe('[reduxAction] DeleteAllCreatures', ()=>{
  const mockFunction = jest.fn(()=>{})
  const mockValidPayload = 'delete all'
  const mockInvalidPayload = ['delete none']

  it('mockFunction is not called with invalid payload', ()=>{
    deleteAllCreatures(mockFunction, mockInvalidPayload)
    expect(mockFunction).toBeCalledTimes(0)
  })

  it('mockFunction is called with valid payload', ()=>{
    deleteAllCreatures(mockFunction, mockValidPayload)
    expect(mockFunction).toBeCalledTimes(1)
  })
})
