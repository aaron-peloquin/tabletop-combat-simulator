/**
 * @jest-environment node
 * Note: Switching to node mode for SSR testing, see: https://jestjs.io/docs/en/configuration.html#testenvironment-string
 */

import localStorageLoad from "./localStorageLoad"

describe("(node) [helper] localStorageLoad()", ()=>{
  it("calls console.warn when failing to access localStorage", () => {
    console.warn = jest.fn(() => {})
    localStorageLoad("testLoad", true)
    expect(console.warn).toBeCalledTimes(1)
  })
})
