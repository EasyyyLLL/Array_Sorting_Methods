/**
 * 快速排序
 * @param {Array} array 
 */
const quickSort = array => {
  if (array.length <= 1) return []

  const n = array.length
  const pivotIndex = Math.floor(n / 2)
  const pivot = array[pivotIndex]

  const left = []
  const right = []

  for (let i = 0; i < n; i++) {
    if (i === pivotIndex) continue
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

const testArr = [1, 2, 5, 3, 4, 9, 8, 10, 21, 15]
console.log(quickSort(testArr))



