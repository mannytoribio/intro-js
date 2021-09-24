// a lot of this code is bad to show scoping

let globalVar = 'global variable' // available everywhere because it is outside of any blocks

function badFunction() {
  console.log('I am bad...')
  console.log(globalVar)
  globalVar = 'Oops, I broke it'
  console.log(globalVar)
  const functionVar = 'function variable'
  console.log(functionVar)
}

console.log(globalVar)

badFunction()
console.log(globalVar)

// the globalVar inside the function was modified globalVar moving forward outside the block
// { variable } returns variable as an object with " variable name: 'variable' 