/**
 * Load and parse a JSON string from localStorage
 * @param {str} key The key you want to load from
 * localStorage (prefixed with "ttcs-")
 * @returns {obj} the parsed object from lcoalStorage
 * @param {bool} showWarning Defaulted to if window is undefined, enables console.warn when true if we cannot save 
 */
const hasWindow = (typeof window !== "undefined")
let localStore
try {
  localStore = localStorage
}
catch(e){
  localStore = null
}
const localStorageLoad = (key, showWarning=hasWindow, storage=localStore) => {
  let returnData = {}
  try {
    const localData = storage.getItem("ttcs-"+key)
    if(localData) {
      const localDataJSON = JSON.parse(localData)
      if(localDataJSON) {
        returnData = localDataJSON
      }
    }
  }
  catch(e) {
    if(showWarning) {
      console.warn("[localStorageLoad] not accessible to load")
    }
  }
  return returnData
}

export default localStorageLoad