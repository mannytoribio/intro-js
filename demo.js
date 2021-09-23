try {
  console.log('hello');
  const t = 'v';
  throw true;
} catch (e) {
  console.log('was an error thrown?');
  console.log(e);
} finally {
  console.log('all done');
}
console.log('we got through it all')

// finally runs whether there is an error or not

function myFirstFunction() {
  console.log('we did it');
}

console.log('fist');
setTimeout(() => {
  console.log('third');
}, 10000); 
// time is in milliseconds can be repsented as seconds * 1000 so 10 * 1000 here

console.log('second');