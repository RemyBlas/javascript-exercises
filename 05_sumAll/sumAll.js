const sumAll = function(...args) {
    const arrangedArray = args.sort();
    const a = arrangedArray[0];
    const b = arrangedArray[1];
    let sum = 0;

    if (typeof a == 'number' && typeof b == 'number') {
        for (let i=a; i<=b; i++) {
            sum += i;
        }
    } else return 'ERROR'
    
    if (sum > 0) {
        return sum
    } else return 'ERROR'
}

// Do not edit below this line
module.exports = sumAll;
