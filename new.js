function create(Con, ...args) {

	// 创建一个空对象

	const obj = {}

	// 等同于 Object.setPrototypeOf(obj, Con.prototype)，建立 obj 和 构造函数的原型链关联，让实例拥有构造函数原型上的属性

	obj.__proto__ = Con.prototype

	// 执行构造函数，使 this 指向新对象

	const result = Con.call(obj, args)

	// 如果构造函数返回值的类型为对象则返回构造函数返回值，否则返回新创建的对象

	return result instanceof Object ? result : obj

}