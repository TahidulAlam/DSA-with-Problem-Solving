// function target(nums, target) {
//   nums.sort((a, b) => a - b);
//   const ans = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       ans.push(i);
//     }
//   }
//   return ans;
// }

// let nums = [1,2,5,2,3];
// let targetValue = 2;
// console.log(target(nums, targetValue));
function targetIndices(nums, target) {
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      x++;
    } else if (nums[i] === target) {
      y++;
    }
  }
  const result = [];
  for (let i = x; i < x + y; i++) {
    result.push(i);
  }
  return result;
}
// let nums=[1,2,5,3,2]
// let target = 2;
// console.log(targetIndices(nums, target));

// var guessNumber = function(n) {
//   let num =[1,2,3,4,5,6,7,8,9,10]
//   for(let i=0;i<x.length;i++){
//       if(num[i]===pick){
//           return pick
//       }
//   }
// };