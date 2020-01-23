arr = [1,2,3,4,5]
turns = 4;

for(i=0; i<turns; i++){
    num = arr.shift() /*?*/
    arr.push(num)
}
arr

arr2 = [3,7,2,9,4]
total = 15;
sum = 0;
count = 0;
arr2.sort((a,b)=>{return a-b})
arr2
for(let i=0; i<arr2.length; i++) {
    if(arr2[i] > total) {
        break
    }
    else {
        if (sum > total) {
            break
        } else {
            sum = arr2[i]/*?*/ + sum
            if (sum > total) {break}
            count += 1;
            sum
        }
    }

}

count


// swap function
swap = (arr, index1 , index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}