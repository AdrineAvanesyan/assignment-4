

function multiplyMatrices(m1, m2) {
    let result = [];
    for (let i = 0; i < m1.length; i++) {
        result[i] = [];
        for (let j = 0; j < m2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function SumofArray(m1) {
    let result = 0;
    for (let i=0; i < m1.lenght; i++){
        result += m1[i];
    }
    return result;
}


function sumOfEachRow(m1) {
    let result = [];
    for (let i=0; i< m1.lenght; i++) {
        result.push(sumofArray(m1[i]));
    }
    return result;
}
