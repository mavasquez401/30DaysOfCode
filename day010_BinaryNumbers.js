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
    const n = parseInt(readLine().trim(), 10);
    maxConsecutiveOnes(n);
}


function maxConsecutiveOnes(n) {
    let binaryRep = n.toString(2)
    
    let sequence = binaryRep.split('0')
    
    let maxConsecutiveOnes = sequence.reduce((max, sequence) => {
        return Math.max(max, sequence.length)
    }, 0)
    
console.log(maxConsecutiveOnes)
}