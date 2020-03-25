id = 3;
function foo2() {

	return () => {
    console.log('id1', this.id)
		return function() {
			console.log('id', this.id)
		}
	}
}

const f2 = foo2.call({id: 1})
const result2 = f2.call({id: 2})()