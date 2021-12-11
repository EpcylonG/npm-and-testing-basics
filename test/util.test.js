const util = require("../src/util");

// Util tests

test("creates an array of 6 elements lol", () => {
  expect(util.createArray(6).length).toBe(6);
});

test("moves a string to camel case", () => {
  var arrayColors = ["red", "blue", "green"];
  for(let color of arrayColors){
    expect(util.toCamelCase(color)).toBe(color);
  }
});

test("gets the index of a given value", () => {
  var string = "User name";
  expect(util.getIndexOf(string, 0)).toBe(string.indexOf(0));
});
