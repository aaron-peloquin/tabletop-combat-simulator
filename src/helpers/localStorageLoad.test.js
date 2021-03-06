import localStorageLoad from './localStorageLoad'

describe('[helper] localStorageLoad()', ()=>{
  it('can load', () => {
    const data = {test: true}
    localStorage.setItem('ttcs-testLoad', JSON.stringify(data), true)

    const result = localStorageLoad('testLoad')
    localStorage.removeItem('ttcs-testLoad')
    expect(result).toEqual(data)

    localStorage.removeItem('ttcs-testLoad')
  })
})
