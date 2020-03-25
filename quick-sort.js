function quickSort (arr) {
  　　if (arr.length <= 1) { return arr; }
  　　var baseIndex = Math.floor(arr.length / 2);
  　　var base = arr.splice(baseIndex, 1)[0];
  　　var left = [];
  　　var right = [];
  　　for (var i = 0; i < arr.length; i++){
  　　　　if (arr[i] < base) {
  　　　　　　left.push(arr[i]);
  　　　　} else {
  　　　　　　right.push(arr[i]);
  　　　　}
  　　}
  　　return quickSort(left).concat([base], quickSort(right));
  };

  const arr = quickSort([1,5,8, 7,9,6]);
  console.log(arr)

