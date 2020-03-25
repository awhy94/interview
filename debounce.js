function debounce(func, wait, immediate) {
  var timeout;
  var result;
  return function() {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const immediateInvoke = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
        result = func.apply(context, args);
      }, await)
      if (immediateInvoke) result = func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        result = func.apply(context, args);
      }, wait);
    }

    return result;
  }
}

const obj = {
  ajax: function(p1, p2) {
    console.log(p1, p2, this);
  }
}
// const ajax = function(p1, p2) {
//   console.log(p1, p2, this);
// }

const debounced = debounce(obj.ajax, 1000)

setInterval(() => {
  debounced.call(obj, 111, 222)
}, 1000)