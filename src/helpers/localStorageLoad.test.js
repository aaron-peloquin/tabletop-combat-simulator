import localStorageLoad from "./localStorageLoad"

test("localStorageLoad() works", ()=>{
  localStorage.setItem("ttcs-testLoad",JSON.stringify({test:true}))
  const test = localStorageLoad("testLoad")
  localStorage.removeItem("ttcs-testLoad")
  expect(test).toEqual({test:true})
})