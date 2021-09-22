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
  firstName:'Khrysrofer',
  lastName: 'Gil',
  age: 30,
  gender: 'male',
}, {
  firstName: 'Gabby',
  lastName: 'Taylor',
  age: 22,
  gender: 'female',
}]

function returnsFullName(person){
  const FullName = `${person.firstName} ${person.lastName}` // template literal is more efficient than concatenating
  console.log(FullName)
}

// 3 parts in the for loop, intitialize, condition, and increment
for(let i = 0; i < students.length; i++){
  returnsFullName(students[i])
} 

