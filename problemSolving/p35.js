function binarySearch(arr,target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    mid = Math.floor((start + end) / 2);
    while (start < end) {  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid;
      }
      mid = Math.floor((start + end) / 2);
    }
    if(arr[mid]<target){
        return mid+1
    }
    return mid
}
let arr=[1,3,5,7]
let target=7
console.log(binarySearch(arr,target) );