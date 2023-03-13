function binarySearch(letters, target) {
    let mid;
    let end = letters.length - 1;
    let start = 0;
    let res = letters[0];
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        console.log(letters[mid]);
        console.log(mid);
        if (letters[mid] === target) {
            start = mid + 1;
            console.log(letters[start]);
            console.log(start);
        }else if (letters[mid] < target) {
            start = mid + 1;
            console.log(letters[start]);
            console.log(start);
        }else if (letters[mid] > target) {
            res = letters[mid];
            end = mid - 1;
            console.log(letters[end]);
            console.log(end);
            console.log(res);
        }
    }
    return res;
}
// let letters = ["a", "c", "d", "e"];
let letters = [4,8,10,12,16,18,20];
// let target = "d";
let target= 16
console.log(binarySearch(letters, target));
