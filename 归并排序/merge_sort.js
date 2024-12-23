/**
 * 归并排序
 * @param {Array} array 
 */
const mergeSort = array => {
  if (array.length <= 1) return array

  const n = array.length
  const mid = Math.floor(n / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)

  return merge(left, right)
}

const merge = (left, right) => {
  let result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j))
}

const testArr = [1, 2, 5, 3, 4, 9, 8, 10, 21, 15]
console.log(mergeSort(testArr))
