/**
 * 快速排序（就地版）
 * @param {Array} array 
 * @param {Number} left 
 * @param {Number} right 
 * @returns 
 */
const quickSortInplace = (array, left, right) => {
  if (array.length <= 1) return array
  let pivotIndex

  if (left < right) {
    const pivot = array[right]
    
    let i = left - 1

    for (let j = left; j < right; j++) {
      if (array[j] < pivot) {
        // 将比基准元素pivot小的往左移
        i++
        [array[i], array[j]] = [array[j], array[i]]
      }
    }

    // 将基准元素pivot放在一堆比它小的元素之后
    [array[i + 1], array[right]] = [array[right], array[i + 1]]
    pivotIndex = i + 1
    
    quickSortInplace(array, left, pivotIndex - 1)
    quickSortInplace(array, pivotIndex + 1, right)
  }

  return array
}

const testArr = [1, 2, 5, 3, 4, 9, 8, 10, 21, 15]
console.log(quickSortInplace(testArr, 0, testArr.length - 1))


