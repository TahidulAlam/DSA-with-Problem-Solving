function missingNumber(nums) {
    let sum1 =0;
    for (let i = 0; i <= nums.length; i++) {
        sum1=sum1+i;
    }
    console.log(sum1);
    
    let sum2 =0;
    for (let i = 0; i < nums.length; i++) {
        sum2=sum2+nums[i];
    }
    console.log(sum2);
    return sum1-sum2
}
console.log(missingNumber([1,3,4,5,0]));