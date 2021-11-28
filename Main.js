

const utilsMatrix = require('./Util.js');

let m1 = [
    [2,3,4,2],
    [5,6,7,2],
    [8,9,10,2],
    [2,2,2,2],
]

let m2 = [
    [2,5,8,4],
    [3,6,9,8],
    [4,7,10,7],
    [2,2,2,2],
]

console.log(utilsMatrix.sumofMatrices(m1,m2));
console.log(utilsMatrix.sumOfEachRow(m1,m2));
console.log(utilsMatrix.MultiplyMatrices(m1,m2));