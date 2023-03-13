function binarySearch(letters, target) {
    let mid;
    let end = letters.length - 1;
    let start = 0;
    let res = letters[0];
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (letters[mid] === target) {
            start = mid + 1;
        } else if (letters[mid] < target) {
            start = mid + 1;
        } else if (letters[mid] > target) {
            res = letters[mid];
            end = mid - 1;
        }
    }
    return res;
}
let letters = ["a", "c", "d", "e"];
let target = "c";
console.log(binarySearch(letters, target));
