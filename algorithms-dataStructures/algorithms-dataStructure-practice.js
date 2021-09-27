// dataArray = [435, 3452, 3423, 234, 23523, 314]

// function firstElementFinder(arr) {
//   console.log(arr[0])
// }

// firstElementFinder(dataArray)

// function lastElementFinder(arr) {
//   let lastElement = arr[arr.length - 1]
//   console.log(lastElement)
// }

// lastElementFinder(dataArray)

// function ElementFinder(arr) {
//   let anyElement = arr[i]
//   console.log(anyElement)
// }

// lastElementFinder(dataArray[0])

//multidimensional array
multidimensionalArray = [
  [1, 2],
  [3, 4],
  [5, 6],
]

function firstSubElementFinder(arr) {
  console.log(arr[0][0])
}

firstSubElementFinder(multidimensionalArray)

function lastSubElementFinder(arr) {
  let lastRow = arr[arr.length - 1]
  let lastValue = lastRow[lastRow.length - 1]
  console.log(lastValue)
}

lastSubElementFinder(multidimensionalArray)
