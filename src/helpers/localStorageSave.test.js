import localStorageSave from "./localStorageSave"

test("localStorageSave() saves", ()=>{
  localStorageSave("testSave",{test:true})
  const test = localStorage.getItem("ttcs-testSave")
  localStorage.removeItem("ttcs-testSave")
  expect(JSON.parse(test)).toEqual({test:true})
})