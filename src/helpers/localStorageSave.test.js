import localStorageSave from "./localStorageSave"
import localStorageLoad from "./localStorageLoad"

test("localStorageSave() works", ()=>{
  localStorageSave("testSave",{test:true})
  const test = localStorageLoad("testSave")
  localStorage.removeItem("ttcs-testSave")
  expect(test).toEqual({test:true})
})