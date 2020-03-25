// 1. 返回一个函数
// 2. 可以传入参数
// 3. 返回的函数可作为构造函数使用
// 4. this 指向：作为构造函数，指向该实例；作为普通函数，指向 第一个参数

// 参考文章：https://github.com/mqyqingfeng/Blog/issues/12

Function.prototype.myBind = function (context) {
  const self = this;
  // 获取 bind 的参数
  const args = Array.prototype.slice.call(arguments, 1)
  var fBound = function () {
    // arguments 是返回函数的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    // 作为构造函数，this 指向该实例；作为普通函数，this 指向 第一个参数
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs)); // 实际在这里绑定 this
  }
  console.log(this)
  fBound.prototype = this.prototype;
  return fBound
}




// value = 2
// var foo = {
//   value: 1
// }
// function bar() {
//   return this.value
// }
// var myBindFoo = bar.myBind(foo);
// var bindFoo = bar.bind();

// console.log(myBindFoo())
// console.log(bindFoo())


var foo = {
  value: 1
}

function bar(name, age) {
  this.habit = 'sing'
  console.log(name, age, this.value, this.habit)
}
var myBindFoo = bar.myBind(foo, 'wa');
var bindFoo = bar.bind(foo, 'xkl', 19);

myBindFoo(18);
const obj = new myBindFoo(18.5)

bindFoo();
const obj1 = new bindFoo(20)

