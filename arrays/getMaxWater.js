"use strict"
/*
Given n non-negative integers a1, a2, ..., an , 
where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 
*/

// working solution
const heights = [2,3,4,5,18,17,6] 

const getMaxWater = function (heights) {
  // init values to track
  let p1=0, p2= heights.length -1, maxArea = 0
  // while the start pointer is less then the end pointer
  while(p1 < p2) {
     // get  the min hight between two pointers
     const height = Math.min(heights[p1], heights[p2]); 
     // get the distance between between two pointers using the index
     const width = p2 - p1
     // cal the area with h * w
     const area = height * width
     // if area is larger then current area update maxArea
     maxArea = Math.max(maxArea, area)
     // ++ or -- index based on less height
     if(heights[p1] <= heights[p2]) {
       p1++;
     } else {
       p2--
     }
  }
  return maxArea
}
console.log(
  getMaxWater(heights)
)
