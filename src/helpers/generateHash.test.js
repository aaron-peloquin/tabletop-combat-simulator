import generateHash from './generateHash'

describe('generateHash()', () => {
  const hash = generateHash()

  it('is a string', () => {
    expect(typeof hash).toBe('string')
  })

  it('length of 8', () => {
    expect(hash.length).toBe(8)
  })

  it('starts with an h', () => {
    expect(hash[0]).toBe('h')
  })
})
