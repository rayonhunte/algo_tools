const nums = [3,2,4]
const target = 6

const twoSum = (nums, target) => {
    const obj = {}
    const points = []
    nums.forEach((e, i) => {
        if(e < target) {
            obj[target - nums[i]] = i
        } 
    });
    for (j in nums) {
        if (nums[j] in obj) {
            points.push(j)
        }
    }
    return points
}

twoSum(nums, target) //?