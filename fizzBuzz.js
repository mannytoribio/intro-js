//print intergers 1 to N but pring "Fizz" if an interger is divisible by 3, "Buzz" if an interger is divisible by 5, and "FizzBUzz" if an interger is divisible by both 3 and 5.

function FizzBuzz(num) {
  for (let n = 1; n < 101; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else if (n % 5 === 0) {
      console.log(n)
    }
  }
}

console.time("fizzbuzz")
FizzBuzz() // the function just needs to be called
console.timeEnd("fizzbuzz")

// FizzBuzz has to be checked for first otherwise numbers divisible by 3 and 5 will produce Fizz Buzz FizzBuzz
// fizzBuzzArray = []; can be added under function to print as an array, just need to console log it ahead of the final curly bracket
// console.time(function) and console.timeEnd(function) reports the processing time of the program
