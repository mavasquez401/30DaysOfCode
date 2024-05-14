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

// Code above was created by HackerRank
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


function main() {
    const n = parseInt(readLine().trim(), 10);
    // goes through entire array, num needs to be 11 to get to 10 elements as needed
    for (let i = 1; i < 11; i++) {
        // Multiplies index by n which is the input
        let finalNumber = n * i
        // Displays the math done to get the finalNumber
        console.log(`${n} x ${i} = ${finalNumber}`)
    }
}
