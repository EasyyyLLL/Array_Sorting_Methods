
const heapSort = array => {
  if (array.length <= 1) return array

  const n = array.length

  // 初始构建最大堆
  for (let i = Math.floor(n / 2) - 1; i>= 0; i--) {
    buildMaxHeap(array, n, i)
  }

  // 交换堆顶元素和末尾元素，并对剩下元素重新进行堆调整
  for (let i = n - 1; i > 0; i--) {
    // 交换
    [array[i], array[0]] = [array[0], array[i]]

    // 重新进行堆调整
    buildMaxHeap(array, i, 0)
  }

  return array
  
}

const buildMaxHeap = (array, n, i) => {
  let leatest = i
  const left = 2 * i + 1
  const right = 2 * i + 2

  if (left < n && array[leatest] < array[left]) {
    leatest = left
  }

  if (right < n && array[leatest] < array[right]) {
    leatest = right
  }

  if (leatest !== i) {
    // 说明发生了交换
    [array[i], array[leatest]] = [array[leatest], array[i]]
    buildMaxHeap(array, n, leatest)
  }
}

const testArr = [1, 2, 5, 3, 4, 9, 8, 10, 21, 15]
console.log(heapSort(testArr))
