import copyCreature from './CopyCreature'

describe('[reduxAction] copyCreature', ()=>{
  const mockFunction = jest.fn(()=>{})
  const mockValidPayload = 'SomeHash'
  const mockInvalidPayload = {clearly: 'not a hash'}

  it('mockFunction is not called with invalid payload', ()=>{
    copyCreature(mockFunction, mockInvalidPayload)
    expect(mockFunction).toBeCalledTimes(0)
  })

  it('mockFunction is called with valid payload', ()=>{
    copyCreature(mockFunction, mockValidPayload)
    expect(mockFunction).toBeCalledTimes(1)
  })
})
