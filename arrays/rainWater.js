const nums = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

const maxRain = (nums) => {
    max = 0
    for (i = 0; i < nums.length; i++) {
        maxR = 0
        maxL = 0
        for (j = i + 1; j < nums.length; j++) {
            maxR = maxR < nums[j] ? nums[j] : maxR
        }
        for (j = i - 1; j >= 0; j--) {
            maxL = maxL < nums[j] ? nums[j] : maxL
        }
        min = Math.min(maxR, maxL) - nums[i]
        max = max + (min >= 0 ? min : 0)
        console.log(max)
    }
    return max
}

const maxRainTwo = (nums) => {
    // init the max rain
    max = 0
    // init left and right max
    maxR = 0
    maxL = 0
    // init pointers
    p1 = 0
    p2 = nums.length - 1
    while (p1 < p2) {
        if(nums[p1] >= maxL) {
            maxL = nums[p1]
        } else {
            max = max + (maxL - nums[p1])
        }
        if(nums[p2] >= maxR) {
            maxR = nums[p2]
        } else {
            max = max + (maxR - nums[p2])
        }
        if(maxL < maxR) {
            p1++
        } else {
            p2--
        }
    }
    return max
}

maxRain(nums)//?
maxRainTwo(nums)//?