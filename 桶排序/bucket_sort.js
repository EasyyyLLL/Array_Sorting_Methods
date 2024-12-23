/**
 * 桶排序
 * @param {Array} array 
 * @param {Number} bucketSize 
 * @returns 
 */
const bucketSort = (array, bucketSize = 5) => {
  if (array.length <= 1) return array

  const max = Math.max(...array)
  const min = Math.min(...array)

  // 根据桶大小决定桶数量
  const bucketCount = Math.floor((max - min) / bucketSize) + 1
  
  const buckets = Array.from({ length: bucketCount }, () => [])

  // 分桶
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - min) / bucketSize)   
    buckets[bucketIndex].push(array[i])
  }

  const result = []

  for (let bucket of buckets) {
    // 每个桶内部排序
    bucket.sort((a, b) => a - b)
    // 合并桶
    result.push(...bucket)
  }

  return result
}

const testArr = [1, 2, 5, 3, 4, 9, 8, 10, 21, 15]
console.log(bucketSort(testArr))
