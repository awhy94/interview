function myInstanceof(L, R) {
  let RO = R.prototype;
  L = L.__proto__;
  console.log(L, RO)
  while(true) {
    console.log('while')
    if (L === null) {
      return false;
    }
    if (L === RO) {
      return true
    }
    L = L.__proto__;
  }
}
let person = function(){
}
let no = new person()

// var a = []
// var b = {}

// function Foo(){}
// var c = new Foo()

function child(){}
function father(){}
child.prototype = new father()
var d = new child()

myInstanceof(d, Object)
// console.log(myInstanceof(d, Object)) // true
// console.log(myInstanceof(d, child)) // false 这里就是无法用于判断继承的
