Function.prototype.myCall = function (context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }

  // eval 可以执行传入的字符串，args 会自动调用 toString() 方法
  var result = eval('context.fn(' + args +')');

  delete context.fn
  return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log('bar', this.value, name, age);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.myCall(obj, 'wa', 20);

// console.log(bar.call2(obj, 'kevin', 18));