import localStorageSave from "./localStorageSave"
import localStorageLoad from "./localStorageLoad"

test("localStorageLoad() works", ()=>{
  localStorageSave("testLoad",{test:true})
  const test = localStorageLoad("testLoad")
  localStorage.removeItem("ttcs-testLoad")
  expect(test).toEqual({test:true})
})