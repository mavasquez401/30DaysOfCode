"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let inputLines = [];
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine() {
  return inputLines[currentLine++];
}

// Main function to execute the logic
function main() {
  const S = readLine(); // Read the input string

  try {
    // Attempt to convert the string S to an integer
    if (isNaN(Number(S))) {
      throw new Error("Bad String");
    }
    // If conversion is successful, print the number
    console.log(Number(S));
  } catch (e) {
    // If an error occurs (either thrown explicitly or other), print "Bad String"
    console.log("Bad String");
  }
}
