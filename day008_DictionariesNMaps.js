function processData(input) {
    //Enter your code here
    const lines = input.split('\n')
    const n = parseInt(lines[0].trim(), 10)
    
    const phoneBook = new Map()
    
    for (i = 1; i <= n.length; i++) {
        const [name, phoneNumber] = lines[i].trim().split(' ')
        phoneBook.set(name, phoneNumber)
    }
    for (let i = n + 1; i < lines.length; i++) {
        
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
