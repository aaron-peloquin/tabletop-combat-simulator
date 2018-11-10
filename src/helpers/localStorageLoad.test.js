import localStorageLoad from "./localStorageLoad";

describe("[helper] localStorageLoad()", ()=>{
  it("can load", async () => {
    localStorage.setItem("ttcs-testLoad",JSON.stringify({test:true}));
    const test = localStorageLoad("testLoad");
    localStorage.removeItem("ttcs-testLoad");
    expect(test).toEqual({test:true});
  });
});
