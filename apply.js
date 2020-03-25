Function.prototype.myApply = function (context, arr) {
  var context = context || window;
  context.fn = this;

  var args = [];

  for(var i = 0, len = arr.length; i < len; i++) {
    args.push('arr[' + i + ']');
  }

  // eval 可以执行传入的字符串，args 会自动调用 toString() 方法
  var result = eval('context.fn(' + args +')');

  delete context.fn
  return result;
}