/*ANKI Review: JS Array Methods*/
console.log('ANKI Review: JS Array Methods')

//0.
console.log('0. .findLast()')
console.log('Searches through iterable objects and returns the last value that matches the condition')

let arr = [1, 2, 3];
let findLast = arr.findLast((num) => num % 1 === 0)
console.log(findLast)
console.log('')

//1.
console.log('1. .of')
console.log('Creates an array from the passed values.  Used in conjunction with the "Arrray" ojbect')
console.log(Array.of('string', true, 12))
console.log('')

//2.
console.log('2. .every()')
console.log('Accepts a set condition and returns the appropriate boolean response if the array meets the condition or not')
let condition = num => num < 4;
console.log(arr.every(condition))
console.log('')

//3.
console.log('3. .keys()')
console.log('returns the key: value pair of the specified elements of an iterable object')
let key = arr.keys()
for(let keys of key) {
    console.log(keys)
}
console.log('')

//4.
console.log('4. splice()')
console.log('used to add, remove, or replace values in an array')
let spliceArr = [1, 2, 3];
console.log(spliceArr)
spliceArr.splice(3, 0, 4)
console.log(spliceArr)

console.log('')

//5.
console.log('5. .entries()')
console.log('returns the key value pairs of an arrays object')
let entriesArr = arr.entries();
for(let entry of entriesArr) {
    console.log(entry)
}

console.log('')

//6.
console.log('6. lastIndexOf()')
console.log('returns the index position of the past value . Returns -1 if non-existant within the array')
console.log(arr.lastIndexOf(2))
console.log('')

//7.
console.log('7. .findLast()')
console.log('Iterates through an array in reverse order to return the first value that meets the set condition')
let findLastNum = arr.findLast((num) => num % 1 === 0)
console.log(findLastNum)
console.log('')

//8.
console.log('8. isArray')
console.log('Returns a boolean response the evaluated object is or is not an array')
console.log(Array.isArray([1, 2, 3]))
console.log(Array.isArray('[ ]')) // false
console.log('')

//9.
console.log('9. .toSorted()')
console.log('Sorts an array into a new array without modifying the original array')
let unsorted = [5, 7, 4, 8, 9, 2, 3, 0]
console.log(unsorted.toSorted())
console.log(unsorted)

console.log('')

//10.
console.log('10. .toSpliced()')
console.log('Adds, removes, or replaced elements within an array and prints them to a new array without modifying the original')
console.log(unsorted.toSpliced(0, 0, 10))
console.log(unsorted)
console.log('')



/*Codewars Challenges*/
console.log('Codewars Challenges')
//1.
console.log('1. consonant count')
function countConsonants(str) {
    let x = /[bcdfghjklmnpqrstvwxyz]/ig;
    let count = 0;
    let matches = str.match(x)
    if(matches) {
        count = matches.length
    }
    console.log(count)
}
countConsonants('hello')
console.log('')

//2.
console.log('2. write a program that filters a llist opf strings and returns objects that are 4 letters long.  If the object is exactly 4 letters long, push it to a new array called \'true friends\'')
console.log('')

function friendOrFoe(arr) {
    let trueFriends = []
    let friendNames = arr.filter((name) => name.length === 4)
    trueFriends = trueFriends.concat(friendNames)
    console.log(trueFriends)
}
friendOrFoe(['Eric', 'Tammy', 'Marc', "Marcus", 'leanne', 'Adam'])
console.log('')

//3.
console.log('3. vowel count')
function vowelCount(str) {
    let count = 0;
    let vowels = /[aeiou]/ig;
    let matches = str.match(vowels)
    if(matches) {
        count = matches.length
    }
    console.log(count)
}
vowelCount('hello')
console.log('')

//4.
console.log('4. Determine if a number is a squared value')
function square(num) {
    let squareRoot = Math.sqrt(num)

    if(squareRoot % 1 === 0) {
        console.log(squareRoot)
    }
    else {
        console.log('not square')
    }
}
square(100)
square(99)
console.log('')

//5.
console.log('5. trim a string')
function trimString(str) {
    console.log(`"${str.trim()}... "`)
}
trimString('     hello       ')
console.log('')
