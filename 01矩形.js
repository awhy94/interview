var countSquares = function(matrix) {
  if(!matrix || !matrix.length) return 0
  let row = matrix.length
  let col = matrix[0].length
  let m = [...new Array(row+1)].map(()=>Array(col+1).fill(0)) // dp
  let res = 0
  for(let i=0;i<row;i++) {
      for(let j=0;j<col;j++) {
          if(matrix[i][j]) {
              m[i+1][j+1] = Math.min(m[i][j],m[i+1][j],m[i][j+1]) + 1
              res += m[i+1][j+1]
          }
      }
  }
  return res
};
const matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]

const result = countSquares(matrix);
console.log(result)