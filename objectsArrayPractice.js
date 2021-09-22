let student = {firstName: 'Manny', 
lastName: 'Toribio', 
city: 'Sunrise',
family: {
  brother: 'Jeremiah', 
  mother:'Ynes', 
  father: 'Manuel', 
  bae:'Jaya',
  pets: ['🐶', '🐈‍⬛', '🐘'] // ctrl + cmd + spacebar for emojis
},
education: {
  university: 'FSU',
  bootcamp: 'Boca Code',
}
}

// console.log('First name:',student.firstName)
// console.log('Full name:', student.firstName + ' ' + student.lastName)
// console.log('My people:', student.family)
// console.log('My dog:', student.family.pets[0])
console.log(student.education.bootcamp.toLocaleUpperCase())

