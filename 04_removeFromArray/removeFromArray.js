const removeFromArray = function(array = [], ...args) {
    const items = Array.from(args)

    for (let i=0; i<items.length; i++) {
        if (array.includes(items[i])) {
            let x = array.indexOf(items[i])
            array.splice(x,1)
        }
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
