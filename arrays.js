var chocolateBars = ['snickers' , 'hundred grand' , 'kitkat' , 'skittles']

function addElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array[array.length-1] = element
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array=array.unshift()
  return array
}

function removeElementFromBeginningOfArray(array){
  newray = array.slice(1)
  return newray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array = array.slice(-1)
  return array
}