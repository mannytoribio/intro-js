function calculateAreaOfPie (diameter) {
  const radius = diameter / 2
  const area = Math.PI * (radius  ** 2)
  return area
}

function pricePerSqIn (area, price) {
  return price / area
}

// 12" costs $18.99
// 16" costs $21.99
const diameter = 16
const cost = 21.99
const area = calculateAreaOfPie(diameter)
const pricePerUnitArea = pricePerSqIn(area, cost)



console.log(`a ${diameter}" pizza costs $${pricePerUnitArea.toFixed(2)} / sq. in.`)



