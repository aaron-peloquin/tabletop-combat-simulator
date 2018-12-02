import localStorageLoad from "./localStorageLoad"

describe("[helper] localStorageLoad()", ()=>{
  it("can load", () => {
    let result
    let data = {test:true}
    localStorage.setItem("ttcs-testLoad",JSON.stringify(data), true)

    result = localStorageLoad("testLoad")
    localStorage.removeItem("ttcs-testLoad")
    expect(result).toEqual(data)

    localStorage.removeItem("ttcs-testLoad")
  })
})
