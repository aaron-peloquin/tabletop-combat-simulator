import lookupCreatureHash from './lookupCreatureHash'

const mockState = [
  {hash: 'abc1d'},
  {hash: 'de2fg'},
  {hash: 'ef8gh'},
  {hash: 'nk34j'},
]
const validFakeHash = 'ef8gh'
const invalidFakeHash = 'hijk1m'

describe('lookupCreatureHash()', ()=>{
  const validResult = lookupCreatureHash(validFakeHash, mockState)
  const invalidResult = lookupCreatureHash(invalidFakeHash, mockState)

  it('returns a number', ()=>{
    expect(typeof validResult).toBe('number')
    expect(typeof invalidResult).toBe('number')
  })

  it('returns correct results', () => {
    expect(validResult).toBe(2)
    expect(invalidResult).toBe(-1)
  })
})

