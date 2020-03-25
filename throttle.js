function throttle(func, delay) {
  let prev = Date.now();
  return function() {
    const context = this;
    const args = arguments;
    const now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = new Date();
    }
  }
}

function throttleTimer() {
  const timer =  null;
  return function(func, delay) {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args);
        timer = null;
      }, delay)
    }
  }
}