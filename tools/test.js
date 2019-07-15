let numA = "";
numA += "10 \n" + "1 2 3 4 5 6 7 8 9 10";

const newNum = numA.split('\n')[1].split(' ').map(Number)
newNum

newNum.sort((a, b) => {
    return b - a
})

max = newNum[0]
max
second = 0
newNum.forEach(
    (n) => {
        if (n < max && n > second) {
            second = n
            console.log(second)
        }
    }
)

const input = [
    [ 
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 0, 2, 4, 4, 0 ],
[ 0, 0, 0, 2, 0, 0 ],
[ 0, 0, 1, 2, 4, 0 ] 
]
]

// for (let y=0; y <= 3; ++y ){
//     for(let x=0; x<=3; x++){
//         let sum = input[y][x] + input[y][x+1] + input[y][x+2]
//     }
// }

function hourGlass(arr) {
    // we could set this to 3 given the problems constraings, but this allows changes
    maxX = 3; // + (arr[0].length % 3)
    maxY = 3; // + (arr.length % 3)
    total = -Infinity;  // has to be -64, but
   
    // begin at y == 0
    for (let y = 0; y <= maxY; y++) {
        for (let x = 0; x <= maxX; x++) {
            // sum the top of hourglass
            let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
            
            // get the middle of hourglass
            sum += arr[y+1][x+1];
            
            // sum the bottom of hourglass
            sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
            
            // don't store result to keep space complexity down
            if (total < sum)
                 total = sum;
        }
    }
    
    return total;
}

console.log(hourGlass(input))