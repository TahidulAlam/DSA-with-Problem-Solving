let arr = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
// let arr = [912, 813, 714, 615, 516, 417, 318, 219, 120];
// const target = 912;
const target = 13;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid ;
  let  isAsce=true;
  while (start<=end){
    mid = Math.floor((start + end) / 2);
    console.log(mid);
    if(target===mid){
      return `${target} found at index ${mid}`;
    }
    else if(arr[mid]<target){
    if(isAsce){
      start=mid+1
      // console.log(start)
    }else{
      end=mid-1
      console.log(end);
    }
    }
    else{
    if(isAsce){
      end=mid-1
      console.log(end);
    }else{
      start=mid+1
      // console.log(start);
    }
    }
  return 'Not Found';
  }
}
console.log(binarySearch(arr, target));

  // while (start <= end) {
  //   mid = Math.floor((start + end) / 2);

  //   if (arr[mid] === target) {
  //     return `${target} found at index ${mid}`;
  //   } else if (arr[mid] < target) {
  //     start = mid + 1;
  //   } else {
  //     end = mid - 1;
  //   }
  // }