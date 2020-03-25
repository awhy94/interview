Array.prototype.myReduce = function(callback, init) {
  const array = this
  init = init || null
  let prev, startIndex = 0
  if (!init && array.length === 1) {
    return array;
  }
  if (!init && array.length > 1) {
    prev = array[0]
    startIndex = 1
  }
  if (init && array.length > 1) {
    prev = init
  }

  for(let i = startIndex; i< array.length; i++) {
    prev = callback(prev, array[i], i, array)
  }
  return prev
}

const a = [1,4,3].myReduce((pre, cur) => pre + cur);
console.log(a)