const guessNumber = function(n) {
    let l = 1;
    // let n
    // let r = n;
    let pick = Math.floor((n+l)/2);
    let g = guess(pick);
    while(l <= n) {
        if(g > 0) {
            l = pick+1;
            pick = Math.floor((n+l)/2);
            // g = guess(pick);
            console.log(g);
        }
        else if(g < 0) {
            n = pick-1;
            pick = Math.floor((n+l)/2);
            // g = guess(pick);
            console.log(g);
        }
        else {
            return pick;
        }
    }
};
// let n
console.log(guessNumber(12));