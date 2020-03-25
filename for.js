var arr = new Array(1000);
arr[0] = 1;
arr[99] = 3;
arr[undefined] = undefined;
arr[999] = 5;

console.log(arr.length) // 1000

// forEach
var count = 0;
arr.forEach(function(value, index) {
    count++;
    console.log(typeof index);
    console.log(index, value);
});
console.log('count', count);

// for 循环
// for (var i = 0, l = arr.length; i < l; i++) {
//     console.log('arr[%s]', i, arr[i]);
// }
// console.log('i :' , i);

// for - in 循环
// var count = 0;
// for(var j in arr){
//     count ++ ;
//     if(arr.hasOwnProperty(j)){
//         console.log('arr[%s]', j, arr[j]);
//     }
// }
// console.log('count : ', count);

async function a() {
  return 1
}
console.log(a())