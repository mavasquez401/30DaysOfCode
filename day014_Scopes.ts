'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    class Difference {
        private __elements: number[];
        public maximumDifference: number;

        constructor(elements: number[]) {
            this.__elements = elements;
            this.maximumDifference = 0;
        }

        computeDifference(): void {
            let minElement = Math.min(...this.__elements);
            let maxElement = Math.max(...this.__elements);
            this.maximumDifference = Math.abs(maxElement - minElement);
        }
    }

    // Read the number of elements
    const n = parseInt(readLine().trim(), 10);
    
    // Read the elements
    const elements = readLine().split(' ').map(Number);
    
    // Create an instance of Difference with the elements array
    const difference = new Difference(elements);
    
    // Compute the difference
    difference.computeDifference();
    
    // Print the maximum difference
    console.log(difference.maximumDifference);
}