function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys.forEach(key => {
    defineReactive(data, key, data[key])
  });
}
function defineReactive(obj, key, value) {
  const dep = new Dep()
  observe(value) // 递归监听
  Object.defineProperty(obj, key, {
    set: function(newVal) {
      if (value === newVal) {
        return
      }
      dep.notify()
    },
    get: function() {
      Dep.target && dep.addWatcher(Dep.target)
      return value
    }
  })
}
function Dep() {
  this.subs = [] // 承载所有的监听者
}
Dep.prototype.addWatcher = function(watcher) {
  this.subs.push(watcher)
}
Dep.prototype.notify = function() {
  this.subs.forEach(watcher => {
    watcher.update()
  })
}

function Watcher(exp, vm, callback) {
  this.exp = exp
  this.vm = vm
  this.callback = callback
  Dep.target = this
  this.get()
  Dep.target = null
  this.callback(this.value)
}
Watcher.prototype.get = function() {
  this.value = this.vm.$data[this.exp]
}
Watcher.prototype.update = function() {
  this.get()
  this.callback(this.value) // 更新视图
}

function Compile() {

}