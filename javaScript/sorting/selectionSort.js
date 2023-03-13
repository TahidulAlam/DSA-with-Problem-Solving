let array = [10,2,3,23,12,43,45,23,4,5,67,34,6,30,20,16]

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        let minIndex=i;
        for (let j = i; j < array.length; j++) {
            if(array[j]<array[minIndex]){
            minIndex=j;
            }
        }
        let temp =array[i];
        array[i]=array[minIndex];
        array[minIndex]=temp;
    }
    return array
}

// selectionSort(array)
console.log( selectionSort(array));