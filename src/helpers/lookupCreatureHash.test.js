import lookupCreatureHash from './lookupCreatureHash'

const mockState = [
  {hash:"abc1d"},
  {hash:"de2fg"},
  {hash:"ef8gh"}
  {hash:"nk34j"}
]
const fakeHash = "ef8gh"

test('lookupCreatureHash() returns a number', () => {
  const result = lookupCharacterHash(fakeHash, mockState)
  expect(typeof result).toBe("number")
})

test('lookupCreatureHash() finds a match', () => {
  const result = lookupCharacterHash(fakeHash, mockState)
  expect(result).toBe(2)
})
