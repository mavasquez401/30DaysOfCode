'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    var sumArray = []
    for (i = 0; i < arr.length; i++) {

        for (j = 0; j < arr[i].length; j++) {
            var singleSum = 0
            if (arr[i] && arr[i + 1] && arr[i + 2]) {
                if (arr[i][j + 1] != undefined && arr[i][j + 2] != undefined) {
                    sumArray.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
                }
            }
        }
    }
    console.log(Math.max.apply(null, sumArray))
}
