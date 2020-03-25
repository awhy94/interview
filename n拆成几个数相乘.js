const numArr = [];
let temp = '';
function calc(n) {
  if (n <= 0) {
    return
  }
  if(n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    if (n !== 1) {
      numArr.push(n);
    }
    console.log(numArr)
    return;
  }
  if (n % 2 === 0) {
    pushArray(n, 2)
    calc(temp);
    return
  }
  if (n % 3 === 0) {
    pushArray(n, 3)
    calc(temp);
    return
  }
  if (n % 5 === 0) {
    pushArray(n, 5)
    calc(temp);
    return
  }
  if (n % 7 === 0) {
    pushArray(n, 7)
    calc(temp);
    return
  }
}

function pushArray(n, val) {
  temp = n / val;
  numArr.push(val);
}

calc(36)