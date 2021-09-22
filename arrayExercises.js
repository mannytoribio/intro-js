function findFruitIndex(arr, item){
  let indexOfFruit = arr.indexOf(item)
  return indexOfFruit
}
// indexOf is one method


let array = ['mango', 'dorian', 'loquat', 'jackfruit', 'spanish lime', 'water melon', 'cotton candy grape', 123]
const fruit = 'dorian'

console.log( "the index of", fruit, "is", findFruitIndex(array, fruit))

for (let i = 0; i < array.length; i++) {
  returnsIndexOfFruit(array[i])
}