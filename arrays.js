var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  const result = [element, ...array];
  return result;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}
