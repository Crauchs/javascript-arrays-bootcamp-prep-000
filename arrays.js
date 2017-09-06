var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(array, element) {array.unshift(element); {return}}
function destructivelyRemoveElementFromBeginningOfArray(array) {return array.shift()}
function destructivelyAddElementToEndOfArray(array, element) {return array.push(element)}
function destructivelyRemoveElementFromEndOfArray(array) {array.pop();}
function addElementToBeginningOfArray(array, element) {return [element, ...array]}
function addElementToEndOfArray(array, element) {return [...array, element]}
function removeElementFromBeginningOfArray(array) {return array.slice(1)}
function removeElementFromEndOfArray(array) {return array.slice(0, array.length-1)}
function accessElementInArray(array, index) {return array[index]}
