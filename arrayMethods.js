const fruits = ['kiwi', 'lime', 'apple','banana', 'orange', 'grapes']

// functions should typically only do one thing, but this one will pull the fruit and report how many remain
//first in first out -- que
// last in first out -- stack
function getNextFruit(){ 
  const nextFruit = fruits.shift()
  console.log('You get a ', nextFruit)
  console.log('There are ', fruits.length, 'fruits left')
}

const numLoops = fruits.length // 6
for (let i = 0; i < numLoops; i++){
  getNextFruit()
}

// if we use fruits.length in place of numLoops i increases as fruits.length decreases and they will meet in the middle stopping the loop half way since i is no longer < fruits.length
// making fruits.length a const keeps i < loops