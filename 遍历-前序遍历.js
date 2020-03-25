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

function preOrder(node) {
  if (node) {
    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
  }
}

preOrder(tree)