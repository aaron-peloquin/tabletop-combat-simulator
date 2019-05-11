import localStorageSave from './localStorageSave'

describe('localStorageSave()', ()=>{
  const data = {test: true}
  let test

  afterEach(() => {
    localStorage.removeItem('ttcs-testSave')
  })

  it('can save', ()=>{
    localStorageSave('testSave', data, true)
    test = localStorage.getItem('ttcs-testSave')
    expect(JSON.parse(test)).toEqual(data)
  })
})
