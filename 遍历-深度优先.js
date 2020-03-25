function deepTraversal(node,nodeList) {
  if(!node) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(node)
  while(stack.length) {
    node = stack.pop();
    console.log(node.value)
    if(node.right) stack.push(node.right)
    if(node.left) stack.push(node.left)
  }
}

var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

deepTraversal(tree)