const students = [
  "John",
  "Alina",
  "Juan",
  "Dariel",
  "Manny",
  "Amir",
  "Sebas",
  { instructors: ["Todd", "Vitoria", "Daniel", "Jonathan", "Darie", "Zach"] },
  { hours: 400 },
]

// console.log(students) this is thre OG array. The things below do not affect the above.
// shift + opt + f to make code format pretty
// students = 'none', this would overwrite if we used "let", error if we use "const"

students.push("Diana") // pushing is ok, since it is modifying the array
students.push("Angie") // adds to the end
students.unshift("Khrystofer") // adds to the beginning
students.shift() // removes the first name

const amount = students.length

console.log(amount)

function whatever() {
  if (students.length < 10) {
    console.log("not enough items")
  } else {
    console.log("just enough items")
  }
}

// the above can use <=, >=, etc

whatever() // this is how we call a function

function addToArray(newStudent){
  students.push(newStudent)
  console.log(students)
}

addToArray('Emily')

//home work spread append Diana, Angie, and Emily to after Sebas
