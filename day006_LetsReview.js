function processData(input) {
    //Enter your code here

    // Split the input into lines
    let inputs = input.split('\n'); 

    // First line for number of test cases
    let T = parseInt(inputs[0]);

    // Loops through the index of T for what the input case is
    for (let i = 1; i <= T; i++) {
        let s = inputs[i]; // S 
        let evenIndex = ""; // string place holder asked for
        let oddIndex = ""; // string place holder asked for

        // nested loop for check and replace characters into correcct index
        for (let j = 0; j < s.length; j++) {
            if (j % 2 === 0) { // Check if index j is even
                evenIndex += s[j];
            } else { // Otherwise, it's odd
                oddIndex += s[j];
            }
        }
        // Test if output is correct
        console.log(evenIndex + " " + oddIndex);
    }
} 
// Code below was created by HackerRank
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
