// Exercises from https://eloquentjavascript.net/04_data.html#h-TcUD2vzyMe

// 1 - The sum of a range
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
function rangeToArr(a, b) {
    let arr = []
    if (a > b) {
        for (let i=b; i<=a; i++) {
            arr.push(i)
        }
    } else if (b > a) {
        for (let i=a; i<=b; i++) {
            arr.push(i)
        }
    } else {
        arr.push(a)
    }
    return arr
}
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
function sumArr(arr) {
    let sum = 0
    for (let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// 2 - REVERSING AN ARRAY
// take an array and produce a new array that has the same elements in the inverse order
function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length-1; i>=0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
// reverseArrayInPlace should do what the reverse method does: modify the array given as its argument by reversing its elements
function reverseArrayInPlace(arr) {
    arr.sort((a, b) => arr.indexOf(b) - arr.indexOf(a))
}

// 3 - A LIST
// I don't understand this, giving up for now

// 4 - DEEP COMPARISON
//Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
function deepEqual(objA, objB) {
    if (typeof objA === "object" && objA !== null && typeof objB === "object" && objB !== null) {
        
        let keysA = Object.keys(objA);
        let keysB = Object.keys(objB);
        
        if (keysA.length !== keysB.length) return false;
        
        for (let key of keysA) {
            if (!objB.hasOwnProperty(key) || !deepEqual(objA[key], objB[key])) {
                return false;
            }
        }
        return true;
    } else {
        return objA === objB;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true