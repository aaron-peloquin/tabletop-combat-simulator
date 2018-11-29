/**
 * Save an object to localStorage as a JSON string
 * @param {str} key The unique key you want to over/write to localStorage (prefixed with "ttcs-")
 * @param {obj} state The object you want to save to this key
 * @param {bool} showWarning Defaulted to if window is undefined, enables console.warn when true if we cannot save 
 */
const hasWindow = (typeof window !== "undefined")
const localStorageSave = (key, obj, showWarning = hasWindow) => {
  try{
    const saveObj = JSON.stringify(obj)
    localStorage.setItem(`ttcs-${key}`, saveObj)
  }
  catch(e){
    if(showWarning) {
      console.warn("[localStorageSave] not accessible to save")
    }
  }
}

export default localStorageSave