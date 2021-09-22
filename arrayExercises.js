/* function findFruitIndex(arr, item){
  let indexOfFruit = arr.indexOf(item)
  return indexOfFruit
}
 */// indexOf is one method


let array = ['mango', 'dorian', 'loquat', 'jackfruit', 'spanish lime', 'watermelon', 'cotton candy grape', 123]
const fruit = 'dorian'

// console.log( "the index of", fruit, "is", findFruitIndex(array, fruit))
// used item here as a placeholder variable to represent fruit or anything else that may be passed through

function indexOfFruit(array, item){    
  let returnsIndexOfFruit = -1
  
  for (let i = 0; i < array.length; i++) {

    if(array[i] === item){
      returnsIndexOfFruit = i
    }
  }
  return returnsIndexOfFruit
}

console.log( "the index of", fruit, "is", indexOfFruit(array, fruit))

console.log(array.pop())

console.log(array.unshift('kiwi'))
console.log(array)
console.log(array.splice(3,1))