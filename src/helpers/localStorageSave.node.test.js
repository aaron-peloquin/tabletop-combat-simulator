/**
 * @jest-environment node
 * Note: Switching to node mode for SSR testing, see: https://jestjs.io/docs/en/configuration.html#testenvironment-string
 */

import localStorageSave from './localStorageSave'

describe('(node) [helper] localStorageSave()', ()=>{
  it('calls console.warn when failing to access localStorage', () => {
    console.warn = jest.fn(() => {})
    localStorageSave('testLoad', {some: 'data'}, true)
    expect(console.warn).toBeCalledTimes(1)
  })
})
