Array.prototype.mySort = function () {
  const array = this;
  // console.log(array)
  return sortUtil(array)
}

function sortUtil (array) {
  if (array.length <= 1) { return array; }
  const midIndex = Math.floor(array.length/ 2);
  const mid = array.splice(midIndex, 1)[0];
  const left = [];
  const right = [];
  for(let i = 0; i < array.length; i++) {
      if (array[i] > mid) {
          right.push(array[i])
      } else {
          left.push(array[i])
      }
  }
  return sortUtil(left).concat([mid], sortUtil(right));
}

// [1,3,4].mySort()
// console.log([1,3,4])
console.log([1,5,4].mySort())

// const arr = sortUtil([1,5,8, 7,9,6]);
// console.log(arr)
