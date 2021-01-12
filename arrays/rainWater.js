const nums = [0,1,0,2,1,0,3,1,0,1,2]


const maxRain = (nums) => {
    max = 0
    for(i=0; i< nums.length; i++) {
        maxR = 0 
        maxL = 0 
        for(j=i+1; j < nums.length; j++ ) {
            maxR = maxR < nums[j] ?  nums[j] : maxR 
        }
        for(j=i-1; j >=0 ; j--) {
            maxL = maxL < nums[j] ? nums[j] : maxL
        }
        min = Math.min(maxR, maxL) - nums[i] 
        max = max + (min >=0? min : 0)
        console.log(max)
    }
    return max
}

maxRain(nums) //?
