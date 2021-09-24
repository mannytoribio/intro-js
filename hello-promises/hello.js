// half pyramid promise

const halfPyramidSolver = (rowCount, print) => {

  for(let i = 0; i < rowCount; i++)
  {
      let row = '';
      for(let j = 0; j < i+1; j++){
          row += print
      }
      console.log(row)
  }
  return promise
}

const halfPyramidSolver2 = (rowCount, print) => {

  let row = print

  for(let i = 0; i < rowCount; i++)
  {
      console.log(row)
      row += print

  }

  return rowCount
}

const pyramidSolver = (rowCount, print) => {
  return new Promise((resolve, reject) => {
    if (!rowCount || !print) {
      // if (!(rowCount || print))
      reject("Row count and/or print not provided.")
    }
    resolve({ rowCount, print }) // deconstructing here this allows the key: value to be produced for each item
  })
}


// pyramidSolver(10, null)
// without a catch it returns: [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Row count and/or print not provided.".] {
  //  code: 'ERR_UNHANDLED_REJECTION'
// with a catch it returns "Oh no! Row count and/or print not provided.""
pyramidSolver(10, '$')
.then(({ rowCount, print }) => halfPyramidSolver(rowCount, print))
.then( newRowCount => halfPyramidSolver2(newRowCount, '#'))
.catch((error) => {
  console.log("Oh no!", error)
})

// async await; async only works with await

const cleanerPyramidSolver = async (rowCount, print) => {
  try {
      let res = await pyramidSolver(rowCount, print)

      if (!res) {
        console.error('Something went horribly wrong!')
      }
      let newCount = await halfPyramidSolver(res.rowCount, res.print)

      let finalCount = halfPyramidSolver2(newCount, "%")

      console.log(finalCount)
    } catch (error) {
      console.log("Oh no no no no no", error)
  }
}

cleanerPyramidSolver(5, '&')


  // relies on the first function that solves the pyramid

  // min-max problem

  // const minMax = arr => {
  //   if (!arr || arr.length === 0) {   // checks for null and undefined
  //     throw new Error("Invalid array")
  //   }
  //   let min = Math.min(...arr)
  //   let max = Math.max(...arr)
  // }
