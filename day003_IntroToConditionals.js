//Simple function to check if statements are true then run the statement
function main() {
    const N = parseInt(readLine().trim(), 10);
    //checks if number is less than 5 the number is weird
    if (N <= 5) {
        console.log("Weird")
    // checks if number is between 20 and 30 then number is not weird
    } else if (20 <= N <= 30) {
        console.log("Not Weird")
    }
}

// Passes the all tests req on day3
function main2() {
    const N = parseInt(readLine().trim(), 10);
    // Checks if N is odd it would be weird
    if (N % 2 !== 0) {
        console.log("Weird");
    } else {
        // N is even, proceed with further checks
        // if N is between 2 and 5 it is not weird
        if (N >= 2 && N <= 5) {
            console.log("Not Weird");
        // if number is between 6 and 20 it is weird
        } else if (N >= 6 && N <= 20) {
            console.log("Weird");
        // if number is above 20 it is not weird
        } else if (N > 20) {
            console.log("Not Weird");
        }
    }
}

