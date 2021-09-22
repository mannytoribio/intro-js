// index is the default file

function findMaxNumber (arr) {
  let biggestNum = arr[0] // set initially to first num of array
  for (let num of arr) { // loop through each number of array
    if (num > biggestNum) {
      biggestNum = num
    }
  }
  console.log(biggestNum) // the console log should be outside the loop, but inside the function
}

findMaxNumber([1,2,3,6,35,234,64,435,23,64532,21,4324,2316,2341,4546])

const ages = [37, 48, 30, 22, 17, 25, 19, 24, 21, 20, 27, 32, 33, 45]

findMaxNumber(ages)

function findMaxNum (arr) {
  let biggestNum = arr[0]
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] > biggestNum) {
      biggestNum = arr[i]
    }
  }
  console.log(biggestNum) //opt up or down arrow moves the whole line up or down 
  // console.log(biggestNum) //opt + shift + up or down arrow copies line up or down
}

findMaxNum(ages)