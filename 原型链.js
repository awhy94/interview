function A() {};
function B() {};

A.prototype = {
  fun: function() {}
}
var a = new A();
console.log(a.constructor === A) // false
console.log(A.prototype.constructor === A) //false
console.log(a instanceof A) // true

console.log(a.hasOwnProperty('constructor')) // false

console.log('-----')

A.prototype = new B();
const b = new B();
console.log(b.constructor === A) // false
console.log(B.prototype.constructor === A) // false
console.log(b.constructor.prototype.constructor === A) // false
console.log(b.hasOwnProperty('constructor')) // false
console.log(b instanceof A) // false
console.log(b instanceof B) // true