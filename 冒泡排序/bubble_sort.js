/**
 * 冒泡排序
 * @param {Array} array 
 * @returns 
 */
const bubbleSort = array => {
  if (array.length <= 1) return array

  const n = array.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    // i 表示第 i 次排序
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        swapped = true
      }
    }

    if (!swapped) {
      break
    }
  }

  return array
}

const testArr = [1, 2, 5, 3, 4, 9, 8, 10, 21, 15]
console.log(bubbleSort(testArr))

