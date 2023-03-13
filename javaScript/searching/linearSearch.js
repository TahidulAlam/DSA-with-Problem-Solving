let arr = [12,23,34,25,49,37,47]
const target =47

function linearsearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=== target) {
            return `${target} found at index ${i}`
        }
    }
    return `Not found`
}
console.log(linearsearch(arr, target));