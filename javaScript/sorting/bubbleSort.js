let arr = [10,2,3,23,12,43,45,23,4,5,67,34,6,30,20,16]
function bubbleSort(arr) {
    let temp;
    for(let i=0;i<arr.length; i++){
        for (let j = i+1; j < arr.length; j++) {
                if(arr[i]>arr[j]){
                   temp = arr[i]
                   arr[i]=arr[j]
                   arr[j]=temp
                }            
        }
    }
    return arr
}
// bubbleSort(arr)
console.log(bubbleSort(arr));
