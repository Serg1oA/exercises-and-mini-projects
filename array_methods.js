// Exercises from javascript.info/array-methods
// 1 - Translate border-left-width to borderLeftWidth
    // turn word-like-this into wordLikeThis
function camelize(str) {
    // turn into lowercase
    let lowercaseStr = str.toLowerCase()
    // turn into array
    let strArray = lowercaseStr.split("")
    // uppercase what comes after "-"
    strArray.forEach((char, i) => {
        if (char == "-") {
            strArray[i+1] = strArray[i+1].toUpperCase()
        }
    })
    // remove "-"
    let finalArray = strArray.filter(char => char != "-")
    // join everything into a new string
    let finalStr = finalArray.join("")
    return finalStr
}

// 2 - Filter range
function filterRange(arr, a, b) {
    let finalArray = [] 
    arr.forEach(num => {
        if (num >= a && num <= b) {
            finalArray.push(num)
        }
    })
    return finalArray
}

// 3 - Filter range "in place"
function filterRangeInPlace(arr, a, b) {
    for (i = arr.length-1; i >= 0; i--) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1)
        }
    }
};

// 4 - Sort in decreasing order
function sortDesc(arr) {
    arr.sort((a, b) => b - a)
}

// 5 - Copy and sort array
function copySorted(arr) {
    return arr.slice().sort()
}

// 6 - Create an extendable calculator
// I don't understand this, will come back after studying objects more.
// https://javascript.info/task/calculator-extendable

// 7 - Map to names
let names = users.map(user => user.name)


// 8 - Map to objects
let usersMapped = users.map(user => ({
    fullName: user.name + " " + user.surname,
    id: user.id
}))

// 9 - Sort users by age
function sortByAge(arrOfObj) {
    arrOfObj.sort((a, b) => a.age - b.age)
}


// 10 - Shuffle an array
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5)
}
/* Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}
*/


// 11 - Get average age
function getAverageAge(arrOfObj) {
    let sumOfAges = 0
    for (i = 0; i < arrOfObj.length; i++) {
        sumOfAges = sumOfAges + arrOfObj[i].age
    }
    return sumOfAges / arrOfObj.length
}


// 12 - Filter unique array members
function unique(arr) {
    return [...new Set(arr)]
}


// 13 - Create keyed object from array
function groupById(users) {
    users.reduce((newObj, currValue) => {
        newObj[currValue.id] = currValue
        return newObj
    }, {})
}