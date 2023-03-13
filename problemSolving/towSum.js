//towSum
var nums = [2,7,11,15]
var target= 9
var result=0
var towSum = function (nums, target) {
 for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums[i]; j++) {
        if (nums[i]+nums[j]===target) {
        result++
        }
    }
 }   
//  return result
}
console.log(towSum());