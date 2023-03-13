// function countOccurrences(arr,x)
// {
//     let res = 0;
//     for (let i=0; i<arr.length; i++)
//     {
//         if (x == arr[i])
//             res++;
//     }
//     return res;
// }
// arr=[1, 2, 2, 2, 2, 3, 4, 7 ,8 ,8]
// let x = 2;
// console.log((countOccurrences(arr, x)));

// function countOccurrences(arr, target) {
//     let res = 0;
//     let mid;
//     let end = arr.length - 1;
//     let start = 0;
  
//     while (start <= end) {
//       mid = Math.floor((start + end) / 2);
//       if (target === arr[mid]) {
//         res++;
//         let i = mid - 1;
//         while (i >= 0 && arr[i] === target) {
//           res++;
//           i--;
//         }
//         i = mid + 1;
//         while (i < arr.length && arr[i] === target) {
//           res++;
//           i++;
//         }
//         break;
//       } else if (target < arr[mid]) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
  
//     return res;
//   }
  
//   let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
//   let target = 2;
//   console.log(countOccurrences(arr, target));  