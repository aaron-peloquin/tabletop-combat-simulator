import lookupCharacterHash from './lookupCharacterHash'

const mockState = [
  {hash:"abcd"},
  {hash:"defg"},
  {hash:"efgh"}
]
const fakeHash = "efgh"

test('lookupCharacterHash() returns a number', () => {
  const result = lookupCharacterHash(fakeHash, mockState)
  expect(typeof result).toBe("number")
})

test('lookupCharacterHash() finds a match', () => {
  const result = lookupCharacterHash(fakeHash, mockState)
  expect(result).toBe(2)
})
