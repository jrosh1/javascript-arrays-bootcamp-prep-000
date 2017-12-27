var chocolateBars = ['snickers' , 'hundred grand' , 'kitkat' , 'skittles']

function addElementToBeginningOfArray(array, element){
  nray = array.unshift(element)
  return nray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array[0] = element
  return array
}

function addElementToEndOfArray(array, element){
  newlist = array.push(element)
  return newlist
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