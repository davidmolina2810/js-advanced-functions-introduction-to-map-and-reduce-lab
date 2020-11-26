const mapToNegativize = (arr) => {
  let negArr = []
  arr.forEach(el => {
    let x = el * -1
    negArr.push(x)
  })
  return negArr
}

const mapToNoChange = (arr) => {
  let newArr = []
  arr.forEach(el => {
    newArr.push(el)
  })
  return newArr
}

const mapToDouble = (arr) => {
  let doubled = []
  arr.forEach(el => {
    let x = el * 2
    doubled.push(x)
  })
  return doubled
}

const mapToSquare = (arr) => {
  let squared = []
  arr.forEach(el => {
    let x = el ** 2
    squared.push(x)
  })
  return squared
}

const reduceToTotal = (arr, start=0) => {
  let total = start
  arr.forEach(el => {
    total += el
  })
  return total
}

const reduceToAllTrue = (arr) => {
  let count = 0 
  arr.forEach(el => {
    if (!!el === true) {
      count += 1
    }
  })
  if (count === arr.length) {
    return true
  }
  return false
}

const reduceToAnyTrue = (arr) => {
  let bool = false
  arr.forEach(el => {
    if (!!el === true) {
      bool = true
    }
  })
  return bool
}