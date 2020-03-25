function binary(arr, num) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let midIndex;

  while (minIndex <= maxIndex) {
    midIndex = Math.floor((maxIndex + minIndex) / 2);
    if (num === arr[midIndex]) {
      return midIndex;
    }
    if (num < arr[minIndex]) {
      maxIndex = minIndex - 1
    }
    if (num > arr[midIndex]) {
      minIndex = minIndex + 1
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5]
const index = binary(arr, 0)
console.log(index)