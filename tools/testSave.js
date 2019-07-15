function processData(myArray) {
    myArray.sort(
        (a,b) => b-a
    )
    let max = myArray[0]
    let second = 0
    myArray.forEach(
        (n) => {
            // console.log(n)
            if (n < max && n > second) {
                second = n
                // console.log(n)
            }
        }
        
    )
    console.log(second)
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += "5 \n"+"2 3 6 6 5";
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});