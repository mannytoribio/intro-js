const students = [{
  firstName: 'Alina',
  lastName: 'Maliuk',
  age: 33,
  gender: 'female',
}, {
  firstName: 'Dariel',
  lastName: 'Mera',
  age: 32,
  gender: 'male',
}, {
  firstName:'Diana',
  lastName: 'Tineo',
  age: 32,
  gender: 'female',
}, {
  firstName: 'Sebas',
  lastName: 'Anty',
  age: 21,
  gender: 'Male',
}, {
  firstName: 'Manny',
  lastName: 'Toribio',
  age: 28,
  gender: 'male',
}]

function returnsFullName(person){
  const FullName = `${person.firstName} ${person.lastName}` // template literal is more efficient than concatenating
  console.log(FullName)
}

// 3 parts in the for loop, intitialize, condition, and increment
for(let i = 0; i < students.length; i++){
 // needs if statement
  returnsFullName(students[i])
} 

