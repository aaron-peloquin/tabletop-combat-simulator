/**
 * Generates a random hash that is 8 characters long and always starts with 'h'
 * @param {int} length the length of the hash you want to generate
 * @returns {string} of the generated hash
 */
const generateHash = () => {
  return 'h'+Math.random().toString(36).substr(3, 7);
}

export default generateHash