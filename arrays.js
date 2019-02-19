var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  const result = [element, ...array];
  return result;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray (array, element) {

}

function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element);
}
