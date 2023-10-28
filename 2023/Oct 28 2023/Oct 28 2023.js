/*ANKI Review: JS Array Methods*/
console.log('ANKI Review: JS Array Methods')
//1.
console.log('.shift()')
console.log('removes elements from the beginning of an array')
let shiftArr = [1, 2, 3];
console.log(shiftArr)
shiftArr.shift()
console.log(shiftArr)
console.log('')

//2.
console.log('.toSorted')
console.log('Used to create a new sorted array from an existing array without altering the original array')
let toSortedArr = [3, 6, 5, 4, 9, 1, 7, 8, 2]
console.log(toSortedArr)
console.log(toSortedArr.toSorted())
console.log(toSortedArr)
console.log('')

//3.
console.log('.splice()')
console.log('used to cut an array and return a portion of an existing array to a new array')
let spliceArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(spliceArr.splice(1, 0, 20))
console.log(spliceArr.splice(1, 2, 2))
console.log(spliceArr.splice(2, 2))
console.log('')

//4.
console.log('.lastIndexOf()')
console.log('returns the index of the last element in the array if it exists  - else, -1 will return')
let lastIndexOfArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lastIndexOfArr.lastIndexOf(7))
console.log('')

//5.
console.log('.findLast()')
console.log('finds the last element in the array that meets the passed condition')
let findLastArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findLastArr.findLast((num) => num % 3 === 0)) //9
console.log('')

//6.
console.log('.entries()')
console.log('when using entries, the values of an array are paired off with their index position, and use the .next() method on each printed array elements value')
let entriesArr = ['a', 'b', 'c'];
let entriesIterator = entriesArr.entries();
console.log(entriesIterator.next().value) //a
console.log(entriesIterator.next().value) //b
console.log(entriesIterator.next().value) //c
console.log(entriesIterator.next().value) //undefined

console.log('')

//7.
console.log('.every()')
console.log('tests elements of an array and returns a boolean of all of the array elements meet the passed condition')
let everyArr = [1, 2, 3, 4, 5];
console.log(everyArr.every(num => num < 10))
console.log(everyArr.every(num => num > 10))
console.log('')

//8.
console.log('.values()')
console.log('Passes an object and returns an array of the objects property values in the same manner as a for ... in loop')
let valuesObj = {
    param1: 'one',
    param2: 2,
    param3: true
};

console.log(Object.values(valuesObj))
console.log('')

//9.
console.log('.unshift')
console.log('adds an element to the start of an array')
let unshiftArr = [1, 2, 3, 4, 5];
unshiftArr.unshift(0)
console.log(unshiftArr)
console.log('')

//10.
console.log('.of()')
console.log('Used in conjunction with Array objects to take any and all passes content is placed in a new array as an element, reguardless of type')
console.log(Array.of('two', 10, true))
console.log('')



/*Codewars Challenge*/
console.log('Codewars Challenge')
//1.
console.log('')
console.log('')
console.log('')

//2.
console.log('')
console.log('')
console.log('')

//3.
console.log('')
console.log('')
console.log('')

//4.
console.log('')
console.log('')
console.log('')

//5.
console.log('')
console.log('')
console.log('')
