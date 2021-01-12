function reverse(arrayOfChars) {

    // Reverse the input array of characters in place
    if (arrayOfChars.length<= 0) {
        return arrayOfChars
    }
   let end = arrayOfChars.length-1
   let start = 0
   while (end >= start) {
        temp1 = arrayOfChars[start]
        temp2 = arrayOfChars[end]
        arrayOfChars[end] = temp1
        arrayOfChars[start] = temp2
        start++
        end--
   }
  return  arrayOfChars

}

const input = 'ABCDE'.split('')
input


reverse(input).join('') //?

