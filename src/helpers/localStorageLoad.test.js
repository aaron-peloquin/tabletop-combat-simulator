import localStorageLoad from "./localStorageLoad"

describe("[helper] localStorageLoad()", ()=>{
  let data = {test:true}
  beforeEach(()=>{
    localStorage.setItem("ttcs-testLoad",JSON.stringify(result), true)
  })
  afterEach(()=>{
    localStorage.removeItem("ttcs-testLoad")
  })
  let result
  it("can load", async () => {
    localStorage.setItem("ttcs-testLoad",JSON.stringify(data), true)
    result = localStorageLoad("testLoad")
    localStorage.removeItem("ttcs-testLoad")
    expect(result).toEqual(data)
  })

  it("calls console.warn when failing to access localStorage", () => {
    console.warn = jest.fn(() => {})
    result = localStorageLoad("testLoad", true, null)
    expect(result).not.toEqual(data)
    expect(console.warn).toBeCalledTimes(1) 
  })
})
