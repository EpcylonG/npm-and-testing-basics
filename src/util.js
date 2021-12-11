const lodash = require("lodash");

function createArray(arraySize) {
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

function toCamelCase(string) {
  return lodash.camelCase(string);
}

function getIndexOf(array, value) {
  return lodash.indexOf(array, value);
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
