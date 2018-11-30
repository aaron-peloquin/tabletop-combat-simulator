import localStorageSave from "./localStorageSave"

describe("localStorageSave()", ()=>{
  let data = {test:true}
  let test

  afterEach(() => {
    localStorage.removeItem("ttcs-testSave")
  })

  it("can save", ()=>{
    localStorageSave("testSave", data, true)
    test = localStorage.getItem("ttcs-testSave")
    expect(JSON.parse(test)).toEqual(data)  
  })

  it("calls console.warn when failing to access localStorage", ()=>{
    console.warn = jest.fn(() => {})
    localStorageSave("testSave", data, true, null)
    test = localStorage.getItem("ttcs-testSave")
    expect(JSON.parse(test)).not.toEqual(data)
    expect(console.warn).toBeCalledTimes(1)
  })
})
