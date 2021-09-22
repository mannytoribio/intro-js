// LIFO is the default behavior of an array (stack)
// Think of panackes, last off the griddle is first on the top

let stack = [] // no pancakes yet 

function cookPancakes(){
  for(let p = 0; p < 16; p++) {
    stack.push('pancake' + p)
  }
}

function servePancake(num) {
  for(let i = 0; i < num; i++) {
  console.log(stack.pop())
  }
}

cookPancakes()

const kids = [
  { name: 'Benji', age: 2, pancakes: 2,},
  { name: 'Noah', age: 17, pancakes: 5,},
  { name: 'David', age: 6, pancakes: 2,},
  { name: 'Daniel', age: 2, pancakes: 4,},
]

for(let kid of kids){
  console.log(kid.name + ' gets ')
  servePancake(kid.pancakes)
}
