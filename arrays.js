var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  const result = [element, ...array];
  return result;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray (array, element) {
  const result = [...array, element];
  return result;
}

function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element);
}
