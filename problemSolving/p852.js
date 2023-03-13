var peakIndexInMountainArray = function(arr) {
let mid
start= 0
for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
           let res =0
            if (arr[i]>arr[j]) {
                // return i
                // console.log(i);
                arr[i]=res
            }
            return res++
        }
}
};
let arr = [0,1,0,2,3]
console.log(peakIndexInMountainArray(arr));