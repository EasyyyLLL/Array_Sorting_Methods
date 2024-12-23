/**
 * 插入排序
 * @param {Array} array 
 */
const insertSort = array => {
  if (array.length <= 1) return array

  for (let i = 1; i < array.length; i++) {
    const current = array[i]  // 要插入的元素
    let j = i - 1

    while (j >= 0 && array[j] > current) {
      // 右侧是已经排序好的数列（从小到大）
      array[j + 1] = array[j]  // 让所有比 current 大的元素都往后挪一位
      j--
    }

    array[j + 1] = current
  }

  return array
}

const testArr = [1, 2, 5, 3, 4, 9, 8, 10, 21, 15]
console.log(insertSort(testArr))

